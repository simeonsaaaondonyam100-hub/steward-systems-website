import type {
  DemoRequestInterestArea,
  DemoRequestSubmission
} from "./types";

const planPrefix = "Preferred plan:";
const interestPrefix = "Interest areas:";
const notesPrefix = "Additional notes:";

export function formatDemoRequestMessage(input: DemoRequestSubmission): string {
  return [
    `${planPrefix} ${input.preferredPlan}`,
    `${interestPrefix} ${input.interestAreas.join(", ")}`,
    "",
    notesPrefix,
    input.message
  ].join("\n");
}

function readPrefixedLine(message: string, prefix: string): string | undefined {
  const line = message
    .split(/\r?\n/)
    .find((item) => item.toLowerCase().startsWith(prefix.toLowerCase()));

  return line?.slice(prefix.length).trim() || undefined;
}

export function parsePreferredPlan(message: string): string {
  return readPrefixedLine(message, planPrefix) ?? "Not specified";
}

export function parseInterestAreas(message: string): string[] {
  const value = readPrefixedLine(message, interestPrefix);

  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseAdditionalNotes(message: string): string {
  const index = message.toLowerCase().indexOf(notesPrefix.toLowerCase());

  if (index === -1) {
    return message.trim();
  }

  return message.slice(index + notesPrefix.length).trim();
}

export function isDemoRequestInterestArea(
  value: string,
  interestAreas: readonly DemoRequestInterestArea[]
): value is DemoRequestInterestArea {
  return interestAreas.includes(value as DemoRequestInterestArea);
}

