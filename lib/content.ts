export interface Service {
  slug: string;
  num: string;
  tag: string;
  title: string;
  cta: string;
  blurb: string;
  subs: string[];
  image: string;
  imageAlt: string;
  heroHeading: string;
  heroCopy: string;
  overviewHeading: string;
  overview: string[];
  listHeading: string;
  list: { title: string; copy: string }[];
  closing: string;
  closingCta: string;
  bookCta: string;
}

const IMG = '/images/';

export const services: Service[] = [
  {
    slug: 'vastu',
    num: '01',
    tag: 'Balance',
    title: 'Vastu Consultancy',
    cta: 'Explore Vastu',
    blurb:
      'Vastu guidance for the spaces where you live and work — practical, energy-conscious solutions that work within the space you already have.',
    subs: ['Commercial', 'Industrial', 'Office', 'Residential'],
    image: IMG + 'vastu.png',
    imageAlt: 'Sunlit interior with architectural detail',
    heroHeading: 'Vastu for homes, offices and the businesses you run',
    heroCopy:
      'Specialised Vastu consultancy for homes and businesses — with practical, non-demolition solutions wherever possible.',
    overviewHeading: 'What a Vastu consultation covers',
    overview: [
      'A Vastu consultation looks at orientation, entrances, the use of each room, placement of heavy and light elements, light, air and water, and the areas of the plan that are carrying the most strain.',
      'You receive a prioritised set of corrections: what matters most, what can wait, and what is worth doing only if you are already renovating.',
    ],
    listHeading: 'Who it is for',
    list: [
      { title: 'Commercial Vastu', copy: 'Retail outlets, showrooms and customer-facing spaces.' },
      { title: 'Industrial Vastu', copy: 'Workspaces where flow, safety and energy matter as much as output.' },
      { title: 'Office Vastu', copy: 'Workplaces, cabins, seating layouts and meeting rooms.' },
      { title: 'Residential Vastu', copy: 'Homes, apartments and villas — newly moved into or lived in for years.' },
    ],
    closing: 'Ready to look at your premises properly?',
    closingCta: 'Book a Consultation',
    bookCta: 'Book a Commercial Vastu Consultation',
  },
  {
    slug: 'numerology',
    num: '02',
    tag: 'Clarity',
    title: 'Numerology',
    cta: 'Explore Numerology',
    blurb:
      'Understand the patterns represented by your numbers and gain clarity around important personal and professional decisions.',
    subs: ['Name', 'Business', 'Birth Date', 'Partner Compatibility'],
    image: IMG + 'sessions-individual.png',
    imageAlt: 'Handwritten numerology chart',
    heroHeading: 'The patterns your numbers are already describing',
    heroCopy:
      'Understand the patterns represented by your numbers and gain clarity around important personal and professional decisions.',
    overviewHeading: 'What a numerology session covers',
    overview: [
      'Your birth date and your name each carry a set of numbers. Read together, they describe tendencies — how you make decisions, where friction repeats, which periods tend to be productive.',
      'The session turns that into specific guidance: timing, naming, and where to put your attention next.',
    ],
    listHeading: 'Types of reading',
    list: [
      { title: 'Name numerology', copy: 'Assessment of your birth name and current name, and adjustments where useful.' },
      { title: 'Business numerology', copy: 'Business names, launch dates and decisions around expansion or rebranding.' },
      { title: 'Birth date numerology', copy: 'Core reading of your date of birth and the cycles it points to.' },
      { title: 'Partner compatibility', copy: 'A comparative reading of two birth dates and names — where you align, and where a little more understanding helps.' },
    ],
    closing: 'Get your numbers read properly.',
    closingCta: 'Book a Consultation',
    bookCta: 'Book a Numerology Session',
  },
  {
    slug: 'inner-child-healing',
    num: '03',
    tag: 'Healing',
    title: 'Inner Child Healing',
    cta: 'Explore Healing',
    blurb: 'A guided process focused on emotional release, self-understanding and personal growth.',
    subs: ['Emotional Release', 'Trauma Healing', 'Self Growth', 'Chakra Balancing'],
    image: IMG + 'sessions-individual.png',
    imageAlt: 'Quiet room in soft natural light',
    heroHeading: 'Understanding the cycle before trying to break it',
    heroCopy:
      'A guided process focused on emotional release, self-understanding and personal growth. Past experiences shape how you think, feel and respond — this is the work of noticing that, gently.',
    overviewHeading: 'What the session involves',
    overview: [
      'The session is a guided conversation and release process. There is nothing to prepare and nothing to submit in advance — you arrive with an open heart and the rest is taken care of within the session.',
      'It can be emotional. It is also, for most people, a relief.',
    ],
    listHeading: 'What it supports',
    list: [
      { title: 'Emotional release', copy: 'Making space for feeling that has been held for a long time.' },
      { title: 'Trauma healing', copy: 'Working with childhood experiences that still shape present responses.' },
      { title: 'Self growth', copy: 'Moving forward with a clearer sense of your own patterns.' },
      { title: 'Chakra balancing', copy: 'Gently working with the body’s energy centres alongside the emotional process.' },
    ],
    closing: 'Come as you are. Nothing to prepare.',
    closingCta: 'Book a Session',
    bookCta: 'Book a Healing Session',
  },
  {
    slug: 'lama-fera',
    num: '04',
    tag: 'Energy',
    title: 'Lama Fera Energy Healing',
    cta: 'Explore Lama Fera',
    blurb:
      'A holistic energy healing approach designed to support emotional balance, clarity and inner harmony.',
    subs: ['Energy Cleansing', 'Chakra Healing', 'Aura Protection'],
    image: IMG + 'sessions-corporate.png',
    imageAlt: 'Brass vessel with incense',
    heroHeading: 'When you feel drained and cannot name why',
    heroCopy:
      'A holistic energy healing approach designed to support emotional balance, clarity and inner harmony.',
    overviewHeading: 'How the session works',
    overview: [
      'Energy imbalances can leave you feeling emotionally drained and disconnected. Lama Fera works at a frequency level to restore inner harmony, supporting peace, clarity and emotional wellbeing.',
      'No preparation is needed. Sessions can be held in person or remotely.',
    ],
    listHeading: 'What it includes',
    list: [
      { title: 'Energy cleansing', copy: 'Clearing what has accumulated and is no longer serving you.' },
      { title: 'Chakra healing', copy: 'Rebalancing the centres that feel blocked or overactive.' },
      { title: 'Aura protection', copy: 'Practices to help you hold your energy in demanding environments.' },
    ],
    closing: 'Restore balance, in person or remotely.',
    closingCta: 'Book a Session',
    bookCta: 'Book a Healing Session',
  },
];

export const vastuCategories = [
  {
    kicker: 'Most requested',
    title: 'Commercial Vastu',
    copy:
      'For retail outlets, showrooms, offices and customer-facing spaces, with attention to layout, leadership seating and property selection.',
    image: IMG + 'sessions-individual.png',
    imageAlt: 'Commercial interior',
  },
  {
    kicker: 'Industrial',
    title: 'Industrial Vastu',
    copy:
      'For production and industrial spaces — layout, workspace planning and the areas your team moves through daily.',
    image: IMG + 'sessions-corporate.png',
    imageAlt: 'Industrial workspace',
  },
  {
    kicker: 'Homes',
    title: 'Residential & Office Vastu',
    copy:
      'For homes, apartments, villas and workplaces — freshly moved into or lived in for years.',
    image: IMG + 'vastu.png',
    imageAlt: 'Calm residential living room',
  },
];

export const areasOfFocus = [
  {
    kicker: 'Commercial',
    title: 'Offices, retail & showrooms',
    items: ['Office layout', 'Leadership seating', 'New office planning', 'Workspace planning', 'Property selection'],
  },
  {
    kicker: 'Factory / Industrial',
    title: 'Production & industrial sites',
    items: ['Machine layout', 'Staff areas', 'Workspace planning', 'Land area selection'],
  },
  {
    kicker: 'Residential',
    title: 'Homes & apartments',
    items: ['Home assessment', 'Plot evaluation', 'Room placement', 'Renovation guidance', 'New home planning'],
  },
];

export const trust = [
  { num: '01', title: 'Personalised consultations', copy: 'No two people arrive with the same questions.' },
  { num: '02', title: 'Residential & commercial', copy: 'Homes, offices, retail and industrial spaces.' },
  { num: '03', title: 'Online & in person', copy: 'Sessions by video call anywhere in the world.' },
  { num: '04', title: 'Practical solutions', copy: 'Guidance that works with the space you already have.' },
];

export const process = [
  { num: '01', title: 'Share your space', copy: 'Share photographs or details about your space, along with the questions on your mind.' },
  { num: '02', title: 'Understand the energy', copy: 'Bhavika reads the space, the numbers and the situation, and identifies what is working against you.' },
  { num: '03', title: 'Receive personalised guidance', copy: 'A clear set of recommendations, prioritised, with the reasoning explained in plain language.' },
  { num: '04', title: 'Create positive change', copy: 'Put the changes in place at your own pace, with follow-up support when you need it.' },
];

export const whyMysticz = [
  { title: 'Personalised', copy: 'Every consultation is tailored to your unique situation.' },
  { title: 'Practical', copy: 'Solutions designed to work with your existing lifestyle and space.' },
  { title: 'Thoughtful', copy: 'A calm, non-judgmental approach focused on clarity.' },
  { title: 'Holistic', copy: 'Looking beyond a single problem to understand the bigger picture.' },
  { title: 'Confidential', copy: 'Your personal information and everything discussed stays within the session.' },
];

export interface Testimonial { name: string; service: string; quote: string }

/* Verbatim from the existing Mysticz website — do not edit or add to these. */
export const testimonials: Testimonial[] = [
  { name: 'Akshita Gupta', service: 'Numerology', quote: 'I had a numerology session with Bhavika, and her guidance was clear, insightful, and incredibly accurate. Her prediction that I’d eventually choose business over a job turned out to be true, and I’m doing really well. I highly recommend her to anyone looking for genuine and meaningful numerology guidance.' },
  { name: 'Shivangi S.', service: 'Inner Child Healing', quote: 'I had been stuck in the same emotional cycle for years and couldn’t understand why. The inner child healing session helped me connect with parts of myself I had ignored for a long time. It was emotional, but also deeply relieving.' },
  { name: 'Neha K.', service: 'Vastu', quote: 'I have tried Vastu correction from multiple consultants but Bhavika’s guidance was extremely genuine, authentic, and grounded.' },
  { name: 'Priyanka T.', service: 'Numerology', quote: 'I booked a numerology reading expecting general insights. Instead, I received very specific guidance around my work, relationships, and timing. I still refer back to my notes whenever I need direction.' },
  { name: 'Arjun R.', service: 'Office Vastu', quote: 'Got an Office Vastu consultation for my new office in Noida, and the recommendations were practical, realistic, and easy to implement. The workspace already feels more balanced, and things have been turning out well. Highly recommend Bhavika.' },
  { name: 'Riddhi Tulsiyan', service: 'Vastu & Numerology', quote: 'After Bhavika’s Vastu correction guidance, my business has seen positive changes. Even her Numerology consultation was accurate, and she heard with extreme patience.' },
];

export interface Faq { q: string; a: string }

export const faqs: Faq[] = [
  { q: 'Who is Bhavika Gupta?', a: 'Bhavika Gupta is a Vastu consultant for homes and commercial spaces, and a numerologist based in Noida. She works across Delhi NCR and online, with expertise in Astro-Vastu consultancy and numerology.' },
  { q: 'What services does Bhavika offer?', a: 'Vastu consultancy for homes and businesses, numerology consultancy, inner child healing and Lama Fera energy healing. Sessions are available for individuals and for organisations.' },
  { q: 'What kind of Vastu consultations are available?', a: 'Commercial and factory Vastu for retail outlets, offices and industrial spaces; office Vastu for workplaces; and residential Vastu for homes, apartments and villas. Consultations can cover a plan under construction or a space already in use.' },
  { q: 'Do I need to believe in Vastu or numerology?', a: 'You don’t need belief; you need openness. Numerology operates on mathematical principles that predate modern science, and energy healing works at a frequency level that is real regardless of your conscious awareness of it. Bhavika has worked with many skeptics who became her most enthusiastic referrers. Come curious, not committed.' },
  { q: 'What information do I need before a consultation?', a: 'For personal numerology: your full birth name, your current name if different, and your date of birth. For business sessions: the full business name and launch date. For inner child and energy healing: nothing at all — come with an open heart and the rest is taken care of in the session.' },
  { q: 'Does Bhavika work with businesses and commercial spaces?', a: 'Yes. Bhavika offers specialised Vastu and numerology consultations for businesses, offices, retail outlets and commercial spaces, with practical, customised solutions designed to support business growth and workplace harmony.' },
  { q: 'Are online consultations available?', a: 'Yes. Online consultations are available worldwide by video call, so you can receive personalised guidance wherever you are. Offline consultations are available as well.' },
  { q: 'Is my consultation confidential?', a: 'Absolutely. Every session is held in complete confidence. Your story, your patterns and your clearings stay within the session space.' },
];

export interface Article { slug: string; category: string; title: string; excerpt: string; image: string }

export const articles: Article[] = [
  { slug: 'vastu-principles-before-designing-your-home', category: 'Vastu', title: '5 Vastu Principles to Consider Before Designing Your Home', excerpt: 'Five foundational placement principles — from the kitchen to the Brahmasthana — worth knowing before you build or renovate.', image: IMG + 'vastu.png' },
  { slug: 'vastu-shastra-traditional-wisdom-modern-design', category: 'Vastu', title: 'Vastu Shastra: Where Traditional Wisdom Meets Modern Design', excerpt: 'Where an ancient Indian approach to space planning overlaps with what we already know about light, air and clutter.', image: IMG + 'vastu.png' },
  { slug: 'five-minute-abc-healing-practice', category: 'Meditation', title: 'Your 5-Minute ABC Healing Practice', excerpt: 'A short daily practice built around affirmations, breathwork and chanting — using Bhramari pranayama and chakra beej mantras.', image: IMG + 'sessions-individual.png' },
];
