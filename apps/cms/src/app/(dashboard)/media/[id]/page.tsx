import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps<'/media/[id]'>): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Media ${id}`,
    description: 'View media file details',
  };
}

export default async function MediaPage({ params }: PageProps<'/media/[id]'>) {
  const { id } = await params;

  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Media {id}</h1>
    </main>
  );
}
