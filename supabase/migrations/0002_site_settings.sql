-- Site-wide <head> code: a simple key/value store. The key the app reads
-- is 'custom_head_code' — a raw blob of <meta>/<link>/<script> tags pasted
-- from whatever platform asked for them (Search Console, GA4, Meta Pixel,
-- etc.), parsed and injected into every page's <head>.

create table if not exists site_settings (
  key text primary key,
  value text,
  updated_at timestamptz not null default now()
);
alter table site_settings enable row level security;

insert into site_settings (key, value) values ('custom_head_code', '')
on conflict (key) do nothing;
