import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F2E8',
        sand: '#EFE3CC',
        band: '#E4CFA0',
        footer: '#E2CD9B',
        card: '#FFFCF5',
        ink: '#16130F',
        'ink-2': '#2A261F',
        body: '#4A443A',
        muted: '#57503F',
        gold: '#B8862B',
        'gold-text': '#7A5C22',
        'gold-line': '#C09A46',
        'gold-hover': '#8F6718',
        olive: '#3E5C1B',
        line: '#DCCFB6',
        'line-2': '#D5C8AE',
        'line-3': '#C4B698',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { shell: '1400px' },
      transitionTimingFunction: { premium: 'cubic-bezier(.22,.61,.36,1)' },
    },
  },
  plugins: [],
};
export default config;
