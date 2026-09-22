import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'NextPress CMS dashboard',
};

export default function DashboardPage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </main>
  );
}
