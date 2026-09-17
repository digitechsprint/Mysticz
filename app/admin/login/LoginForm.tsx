'use client';
import { useState, useTransition } from 'react';
import { login } from '../actions';

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <form
      action={(formData: FormData) => {
        setError(null);
        startTransition(async () => {
          const result = await login(formData);
          if (result?.error) setError(result.error);
        });
      }}
      className="w-full max-w-sm rounded-lg border border-neutral-800 bg-neutral-900 p-8"
    >
      <div className="mb-1 text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">Mysticz</div>
      <h1 className="m-0 mb-6 text-xl font-semibold text-neutral-100">Admin sign in</h1>

      {error && <p className="mb-4 rounded border border-red-900 bg-red-950 px-3 py-2 text-sm text-red-300">{error}</p>}

      <label className="mb-4 block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-500">Password</span>
        <input
          type="password"
          name="password"
          required
          autoFocus
          className="w-full rounded border border-neutral-700 bg-neutral-950 px-3 py-2.5 text-neutral-100 outline-none focus:border-neutral-400"
        />
      </label>

      <button type="submit" disabled={pending} className="w-full rounded bg-neutral-100 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white disabled:opacity-60">
        {pending ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}
