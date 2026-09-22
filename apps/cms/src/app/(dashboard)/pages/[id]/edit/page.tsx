import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps<'/pages/[id]/edit'>): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Edit page ${id}`,
    description: 'Edit website page content',
  };
}

export default async function PageEditPage({ params }: PageProps<'/pages/[id]/edit'>) {
  const { id } = await params;

  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Edit page {id}</h1>
    </main>
  );
}
