import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Media',
  description: 'Manage media files',
};

export default function MediaListPage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Media</h1>
    </main>
  );
}
