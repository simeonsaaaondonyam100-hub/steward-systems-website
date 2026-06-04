import "server-only";

import { cookies, headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";

const requiredCapability = "governance.manage_settings";

type GovernanceAccess =
  | {
      ok: true;
      userId: string;
    }
  | {
      ok: false;
      reason: string;
    };

function createSupabaseAuthClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) {
    return null;
  }

  return createClient(supabaseUrl, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

function looksLikeJwt(value: string): boolean {
  return value.split(".").length === 3;
}

function maybeDecodeBase64Json(value: string): unknown {
  const candidate = value.startsWith("base64-")
    ? Buffer.from(value.slice("base64-".length), "base64").toString("utf8")
    : value;

  try {
    return JSON.parse(decodeURIComponent(candidate));
  } catch {
    try {
      return JSON.parse(candidate);
    } catch {
      return null;
    }
  }
}

function readAccessTokenFromCookie(value: string): string | undefined {
  if (looksLikeJwt(value)) {
    return value;
  }

  const parsed = maybeDecodeBase64Json(value);

  if (Array.isArray(parsed) && typeof parsed[0] === "string") {
    return parsed[0];
  }

  if (
    parsed &&
    typeof parsed === "object" &&
    "access_token" in parsed &&
    typeof parsed.access_token === "string"
  ) {
    return parsed.access_token;
  }

  return undefined;
}

async function readAccessToken(): Promise<string | undefined> {
  const requestHeaders = await headers();
  const authorization = requestHeaders.get("authorization");

  if (authorization?.toLowerCase().startsWith("bearer ")) {
    return authorization.slice("bearer ".length).trim();
  }

  const requestCookies = await cookies();

  for (const cookie of requestCookies.getAll()) {
    if (
      cookie.name === "sb-access-token" ||
      cookie.name === "supabase-access-token" ||
      cookie.name.endsWith("-auth-token")
    ) {
      const token = readAccessTokenFromCookie(cookie.value);

      if (token) {
        return token;
      }
    }
  }

  return undefined;
}

function metadataIncludesCapability(metadata: Record<string, unknown>) {
  const permissionCandidates = [
    metadata.permissions,
    metadata.capabilities,
    metadata.claims,
    metadata.role_permissions
  ];

  return permissionCandidates.some((candidate) => {
    if (Array.isArray(candidate)) {
      return candidate.includes(requiredCapability);
    }

    if (typeof candidate === "string") {
      return candidate
        .split(/[,\s]+/)
        .map((item) => item.trim())
        .includes(requiredCapability);
    }

    if (candidate && typeof candidate === "object") {
      return Object.entries(candidate).some(
        ([key, value]) => key === requiredCapability && value === true
      );
    }

    return false;
  });
}

export async function requireGovernanceManageSettings(): Promise<GovernanceAccess> {
  const token = await readAccessToken();

  if (!token) {
    return {
      ok: false,
      reason: `Admin access requires ${requiredCapability}.`
    };
  }

  const client = createSupabaseAuthClient();

  if (!client) {
    return {
      ok: false,
      reason: "Supabase auth is not configured for admin access checks."
    };
  }

  const { data, error } = await client.auth.getUser(token);

  if (error || !data.user) {
    return {
      ok: false,
      reason: "Admin session could not be verified."
    };
  }

  if (!metadataIncludesCapability(data.user.app_metadata)) {
    return {
      ok: false,
      reason: `Admin account is missing ${requiredCapability}.`
    };
  }

  return {
    ok: true,
    userId: data.user.id
  };
}

