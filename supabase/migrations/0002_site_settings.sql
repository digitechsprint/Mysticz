-- Site-wide <head> settings: search console verification, analytics, and
-- any extra meta tags the admin needs to add without a code change.
-- Single-row table (id is always 'default').

create table if not exists site_settings (
  id text primary key default 'default',
  google_site_verification text,
  bing_site_verification text,
  ga4_measurement_id text,
  custom_meta jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);
alter table site_settings enable row level security;

insert into site_settings (id) values ('default')
on conflict (id) do nothing;
