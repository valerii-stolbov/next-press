import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps<'/users/[id]'>): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `User ${id}`,
    description: 'View CMS user details',
  };
}

export default async function UserPage({ params }: PageProps<'/users/[id]'>) {
  const { id } = await params;

  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">User {id}</h1>
    </main>
  );
}
