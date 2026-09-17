import Link from 'next/link';
import SignOutButton from './SignOutButton';

const navItems = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/seo', label: 'SEO' },
  { href: '/admin/articles', label: 'Insights articles' },
  { href: '/admin/faqs', label: 'FAQs' },
  { href: '/admin/testimonials', label: 'Testimonials' },
  { href: '/admin/leads', label: 'Leads' },
];

export default function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto flex max-w-[1200px]">
        <aside className="sticky top-0 flex h-screen w-56 shrink-0 flex-col border-r border-neutral-800 px-4 py-6">
          <div className="mb-8 px-2">
            <div className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">Mysticz</div>
            <div className="text-sm font-semibold text-neutral-100">Admin</div>
          </div>
          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-2.5 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-neutral-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/" target="_blank" className="rounded px-2.5 py-2 text-sm text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-neutral-300">
            View site ↗
          </Link>
          <SignOutButton />
        </aside>

        <main className="min-w-0 flex-1 px-8 py-8">{children}</main>
      </div>
    </div>
  );
}
