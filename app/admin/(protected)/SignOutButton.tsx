'use client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { logout } from '../actions';

export default function SignOutButton() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        startTransition(async () => {
          await logout();
          router.push('/admin/login');
          router.refresh();
        });
      }}
      className="mt-1 w-full rounded px-2.5 py-2 text-left text-sm text-neutral-500 transition-colors hover:bg-neutral-900 hover:text-neutral-300 disabled:opacity-60"
    >
      {pending ? 'Signing out…' : 'Sign out'}
    </button>
  );
}
