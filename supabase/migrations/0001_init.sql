-- Mysticz admin schema: SEO metadata, editable content, and form leads.
-- RLS is enabled with NO policies on every table, so only the service_role
-- key (used exclusively in server-only Next.js code) can read or write.
-- The anon/authenticated roles have zero access.

create table if not exists seo_meta (
  path text primary key,
  title text,
  description text,
  og_image text,
  updated_at timestamptz not null default now()
);
alter table seo_meta enable row level security;

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  category text not null default '',
  title text not null,
  excerpt text not null default '',
  body text not null default '',
  image text not null default '',
  published boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table articles enable row level security;

create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
alter table faqs enable row level security;

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  service text not null default '',
  quote text not null,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
alter table testimonials enable row level security;

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('contact', 'booking')),
  name text not null,
  email text,
  phone text,
  service text,
  message text,
  consultation_type text,
  preferred_date date,
  created_at timestamptz not null default now()
);
alter table leads enable row level security;

-- Seed: existing static content, so the site is unaffected on cutover.

insert into testimonials (name, service, quote, sort_order) values
  ('Akshita Gupta', 'Numerology', 'I had a numerology session with Bhavika, and her guidance was clear, insightful, and incredibly accurate. Her prediction that I''d eventually choose business over a job turned out to be true, and I''m doing really well. I highly recommend her to anyone looking for genuine and meaningful numerology guidance.', 0),
  ('Shivangi S.', 'Inner Child Healing', 'I had been stuck in the same emotional cycle for years and couldn''t understand why. The inner child healing session helped me connect with parts of myself I had ignored for a long time. It was emotional, but also deeply relieving.', 1),
  ('Neha K.', 'Vastu', 'I have tried Vastu correction from multiple consultants but Bhavika''s guidance was extremely genuine, authentic, and grounded.', 2),
  ('Priyanka T.', 'Numerology', 'I booked a numerology reading expecting general insights. Instead, I received very specific guidance around my work, relationships, and timing. I still refer back to my notes whenever I need direction.', 3),
  ('Arjun R.', 'Office Vastu', 'Got an Office Vastu consultation for my new office in Noida, and the recommendations were practical, realistic, and easy to implement. The workspace already feels more balanced, and things have been turning out well. Highly recommend Bhavika.', 4),
  ('Riddhi Tulsiyan', 'Vastu & Numerology', 'After Bhavika''s Vastu correction guidance, my business has seen positive changes. Even her Numerology consultation was accurate, and she heard with extreme patience.', 5)
on conflict do nothing;

insert into faqs (question, answer, sort_order) values
  ('Who is Bhavika Gupta?', 'Bhavika Gupta is a Vastu consultant for homes and commercial spaces, and a numerologist based in Noida. She works across Delhi NCR and online, with expertise in Astro-Vastu consultancy and numerology.', 0),
  ('What services does Bhavika offer?', 'Vastu consultancy for homes and businesses, numerology consultancy, inner child healing and Lama Fera energy healing. Sessions are available for individuals and for organisations.', 1),
  ('What kind of Vastu consultations are available?', 'Commercial and factory Vastu for retail outlets, offices and industrial spaces; office Vastu for workplaces; and residential Vastu for homes, apartments and villas. Consultations can cover a plan under construction or a space already in use.', 2),
  ('Do I need to believe in Vastu or numerology?', 'You don''t need belief; you need openness. Numerology operates on mathematical principles that predate modern science, and energy healing works at a frequency level that is real regardless of your conscious awareness of it. Bhavika has worked with many skeptics who became her most enthusiastic referrers. Come curious, not committed.', 3),
  ('What information do I need before a consultation?', 'For personal numerology: your full birth name, your current name if different, and your date of birth. For business sessions: the full business name and launch date. For inner child and energy healing: nothing at all — come with an open heart and the rest is taken care of in the session.', 4),
  ('Does Bhavika work with businesses and commercial spaces?', 'Yes. Bhavika offers specialised Vastu and numerology consultations for businesses, offices, retail outlets and commercial spaces, with practical, customised solutions designed to support business growth and workplace harmony.', 5),
  ('Are online consultations available?', 'Yes. Online consultations are available worldwide by video call, so you can receive personalised guidance wherever you are. Offline consultations are available as well.', 6),
  ('Is my consultation confidential?', 'Absolutely. Every session is held in complete confidence. Your story, your patterns and your clearings stay within the session space.', 7)
on conflict do nothing;

insert into articles (slug, category, title, excerpt, image, sort_order) values
  ('vastu-principles-before-designing-your-home', 'Vastu', '5 Vastu principles to consider before designing your home', 'The decisions that are simplest to make on paper and hardest to undo once built.', '/images/vastu.png', 0),
  ('home-environment-and-everyday-wellbeing', 'Wellness', 'How your home environment influences everyday wellbeing', 'Light, air, clutter and orientation, and the difference each one makes to how a room feels.', '/images/sessions-individual.png', 1),
  ('role-of-numbers-in-numerology', 'Numerology', 'Understanding the role of numbers in numerology', 'What a birth date and a name actually describe, and what they do not.', '/images/sessions-corporate.png', 2),
  ('vastu-for-modern-workspaces', 'Business', 'Vastu for modern workspaces', 'Applying traditional placement principles inside an open-plan office.', '/images/vastu.png', 3),
  ('small-corrections-that-change-a-room', 'Home', 'Small corrections that change how a room works', 'Non-structural adjustments that are usually the first thing recommended.', '/images/sessions-individual.png', 4),
  ('choosing-a-business-name-with-numerology', 'Numerology', 'Choosing a business name with numerology', 'How a name is assessed before it goes on a signboard.', '/images/sessions-corporate.png', 5)
on conflict (slug) do nothing;
