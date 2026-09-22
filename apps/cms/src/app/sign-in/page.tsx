import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign-in',
  description: 'Sign in to NextPress CMS',
};

export default function SignInPage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Sign-in</h1>
    </main>
  );
}
