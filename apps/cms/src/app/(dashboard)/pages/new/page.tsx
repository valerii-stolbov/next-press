import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create new page',
  description: 'Create a new website page',
};

export default function PageCreatePage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Create new page</h1>
    </main>
  );
}
