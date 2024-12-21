// Sidebar.tsx
import { Link } from "@inertiajs/react";

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-gray-800 p-4 text-white">
      <h2 className="mb-4 text-xl font-bold">Navigation</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/profile" className="hover:text-gray-300">
          Profile
        </Link>
        <Link href="/settings" className="hover:text-gray-300">
          Settings
        </Link>
        <Link href="/announcements" className="hover:text-gray-300">
          Announcements
        </Link>
        {/* Add more links as needed */}
      </nav>
    </aside>
  );
}
