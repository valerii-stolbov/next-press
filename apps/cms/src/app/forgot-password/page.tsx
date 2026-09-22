import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot password',
  description: 'Recover access to your NextPress CMS account',
};

export default function ForgotPasswordPage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Forgot password</h1>
    </main>
  );
}
