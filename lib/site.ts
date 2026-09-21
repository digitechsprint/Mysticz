export const site = {
  name: 'Mysticz',
  founder: 'Bhavika Gupta',
  url: 'https://mysticz.in',
  email: 'mysticz.bhavika@gmail.com',
  phone: '+91-7827884418',
  phoneRaw: '917827884418',
  whatsapp: 'https://wa.me/917827884418',
  hours: '09:00 AM – 08:00 PM',
  address: { street: 'Cleo County, Sector 121', city: 'Noida', country: 'India' },
  social: {
    instagram: 'https://www.instagram.com/healwithbhavika/',
    facebook: 'https://www.facebook.com/profile.php?id=61591909073661',
    linkedin: 'https://linkedin.com/in/bhavikagupta',
  },
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Bhavika' },
  { href: '/services', label: 'Services' },
  { href: '/insights', label: 'Insights' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
] as const;
