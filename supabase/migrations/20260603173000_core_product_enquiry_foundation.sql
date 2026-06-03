-- Steward Systems Core product registry and enquiry foundation.
-- Manual workflow: run this script in the Supabase SQL Editor. Do not use Supabase CLI.

create extension if not exists pgcrypto;

create or replace function public.set_current_timestamp_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.core_products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  short_description text not null,
  status text not null,
  public_url text,
  demo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint core_products_slug_check check (
    slug in ('operavault', 'cantoria', 'steward_ledger')
  ),
  constraint core_products_status_check check (
    status in ('active', 'early_access', 'planned', 'archived')
  )
);

create table if not exists public.core_product_enquiries (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null,
  request_type text not null,
  name text not null,
  organisation text not null,
  role text not null,
  email text not null,
  phone text,
  location text,
  message text not null,
  preferred_demo_time text,
  status text not null default 'new',
  source_page text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint core_product_enquiries_product_slug_check check (
    product_slug in ('operavault', 'cantoria', 'steward_ledger', 'general')
  ),
  constraint core_product_enquiries_request_type_check check (
    request_type in ('demo', 'contact', 'early_access', 'partnership')
  ),
  constraint core_product_enquiries_status_check check (
    status in (
      'new',
      'contacted',
      'demo_scheduled',
      'demo_completed',
      'proposal_sent',
      'pilot_discussed',
      'closed',
      'spam'
    )
  ),
  constraint core_product_enquiries_email_shape_check check (
    position('@' in email) > 1
  )
);

create table if not exists public.core_enquiry_notes (
  id uuid primary key default gen_random_uuid(),
  enquiry_id uuid not null references public.core_product_enquiries(id) on delete cascade,
  note text not null,
  created_by_user_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.core_enquiry_events (
  id uuid primary key default gen_random_uuid(),
  enquiry_id uuid not null references public.core_product_enquiries(id) on delete cascade,
  event_type text not null,
  old_status text,
  new_status text,
  created_by_user_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint core_enquiry_events_old_status_check check (
    old_status is null or old_status in (
      'new',
      'contacted',
      'demo_scheduled',
      'demo_completed',
      'proposal_sent',
      'pilot_discussed',
      'closed',
      'spam'
    )
  ),
  constraint core_enquiry_events_new_status_check check (
    new_status is null or new_status in (
      'new',
      'contacted',
      'demo_scheduled',
      'demo_completed',
      'proposal_sent',
      'pilot_discussed',
      'closed',
      'spam'
    )
  )
);

drop trigger if exists set_core_products_updated_at on public.core_products;
create trigger set_core_products_updated_at
before update on public.core_products
for each row
execute function public.set_current_timestamp_updated_at();

drop trigger if exists set_core_product_enquiries_updated_at on public.core_product_enquiries;
create trigger set_core_product_enquiries_updated_at
before update on public.core_product_enquiries
for each row
execute function public.set_current_timestamp_updated_at();

create index if not exists core_product_enquiries_status_idx
on public.core_product_enquiries(status);

create index if not exists core_product_enquiries_product_slug_idx
on public.core_product_enquiries(product_slug);

create index if not exists core_product_enquiries_created_at_idx
on public.core_product_enquiries(created_at desc);

create index if not exists core_enquiry_notes_enquiry_id_idx
on public.core_enquiry_notes(enquiry_id);

create index if not exists core_enquiry_events_enquiry_id_idx
on public.core_enquiry_events(enquiry_id);

alter table public.core_products enable row level security;
alter table public.core_product_enquiries enable row level security;
alter table public.core_enquiry_notes enable row level security;
alter table public.core_enquiry_events enable row level security;

revoke all on table public.core_products from anon, authenticated;
revoke all on table public.core_product_enquiries from anon, authenticated;
revoke all on table public.core_enquiry_notes from anon, authenticated;
revoke all on table public.core_enquiry_events from anon, authenticated;

grant select, insert, update, delete on table public.core_products to service_role;
grant select, insert, update, delete on table public.core_product_enquiries to service_role;
grant select, insert, update, delete on table public.core_enquiry_notes to service_role;
grant select, insert, update, delete on table public.core_enquiry_events to service_role;

insert into public.core_products (slug, name, short_description, status, public_url, demo_url)
values
  (
    'operavault',
    'Operavault',
    'Institutional and school operations platform for academics, HR, accounts, admissions, procurement, attendance, reports, workload, and appraisal.',
    'active',
    '/products/operavault',
    '/request-demo?product=operavault'
  ),
  (
    'cantoria',
    'Cantoria',
    'Music notation, solfa, SATB, choir rehearsal, composition, playback, part extraction, and export workspace.',
    'early_access',
    '/products/cantoria',
    '/contact?interest=cantoria&type=early_access'
  ),
  (
    'steward_ledger',
    'Steward Ledger',
    'Investment club and cooperative governance and treasury portal for members, meetings, resolutions, investments, and approvals.',
    'planned',
    '/products/steward-ledger',
    '/request-demo?product=steward_ledger'
  )
on conflict (slug) do update set
  name = excluded.name,
  short_description = excluded.short_description,
  status = excluded.status,
  public_url = excluded.public_url,
  demo_url = excluded.demo_url,
  updated_at = now();
