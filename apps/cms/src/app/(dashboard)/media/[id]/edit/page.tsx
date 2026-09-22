import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps<'/media/[id]/edit'>): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Edit media ${id}`,
    description: 'Edit media file details',
  };
}

export default async function MediaEditPage({ params }: PageProps<'/media/[id]/edit'>) {
  const { id } = await params;

  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Edit media {id}</h1>
    </main>
  );
}
