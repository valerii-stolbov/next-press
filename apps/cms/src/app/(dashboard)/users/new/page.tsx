import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create new user',
  description: 'Create a new CMS user',
};

export default function UserCreatePage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Create new user</h1>
    </main>
  );
}
