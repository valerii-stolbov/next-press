import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pages',
  description: 'Manage website pages',
};

export default function PageListPage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Pages</h1>
    </main>
  );
}
