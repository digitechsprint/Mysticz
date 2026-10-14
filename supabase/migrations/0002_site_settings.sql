-- Site-wide <head> code: a simple key/value store. The key the app reads
-- is 'mysticz_custom_head_code' — a raw blob of <meta>/<link>/<script> tags
-- pasted from whatever platform asked for them (Search Console, GA4, Meta
-- Pixel, etc.), parsed and injected into every page's <head>.
--
-- Namespaced because this Supabase project is shared with another client
-- site (fovestta.com) using the same site_settings table; an unprefixed
-- 'custom_head_code' key collided between the two sites' saves.

create table if not exists site_settings (
  key text primary key,
  value text,
  updated_at timestamptz not null default now()
);
alter table site_settings enable row level security;

insert into site_settings (key, value) values ('mysticz_custom_head_code', '')
on conflict (key) do nothing;
