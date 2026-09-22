import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps<'/pages/[id]'>): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Page ${id}`,
    description: 'View website page details',
  };
}

export default async function PagePage({ params }: PageProps<'/pages/[id]'>) {
  const { id } = await params;

  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Page {id}</h1>
    </main>
  );
}
