import type { Metadata } from 'next';

export async function generateMetadata({ params }: PageProps<'/users/[id]/edit'>): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Edit user ${id}`,
    description: 'Edit CMS user details',
  };
}

export default async function UserEditPage({ params }: PageProps<'/users/[id]/edit'>) {
  const { id } = await params;

  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Edit user {id}</h1>
    </main>
  );
}
