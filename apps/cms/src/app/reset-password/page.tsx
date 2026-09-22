import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset password',
  description: 'Set a new password for your NextPress CMS account',
};

export default function ResetPasswordPage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Reset password</h1>
    </main>
  );
}
