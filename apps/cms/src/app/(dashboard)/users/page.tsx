import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users',
  description: 'Manage CMS users',
};

export default function UserListPage() {
  return (
    <main className="flex grow flex-col items-center justify-center p-5 text-center">
      <h1 className="text-3xl font-bold">Users</h1>
    </main>
  );
}
