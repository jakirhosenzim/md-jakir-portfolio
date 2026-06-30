"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  Cpu,
  Mail,
  Settings,
  User,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  async function logout() {
    await fetch("/api/logout", {
      method: "POST",
    });

    router.push("/admin");
  }

  return (
    <>

      <div className="flex min-h-screen bg-[#070B16]">

        <aside className="w-72 border-r border-white/10 bg-[#0B1020] p-8">

          <h1 className="mb-12 text-3xl font-black text-white">
            Admin Panel
          </h1>

          <nav className="space-y-3">
                      <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl p-4 text-white transition hover:bg-violet-600"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/dashboard/projects"
            className="flex items-center gap-3 rounded-xl p-4 text-white transition hover:bg-violet-600"
          >
            <FolderKanban size={20} />
            Projects
          </Link>

          <Link
            href="/dashboard/skills"
            className="flex items-center gap-3 rounded-xl p-4 text-white transition hover:bg-violet-600"
          >
            <Cpu size={20} />
            Skills
          </Link>

          <Link
            href="/dashboard/services"
            className="flex items-center gap-3 rounded-xl p-4 text-white transition hover:bg-violet-600"
          >
            <Wrench size={20} />
            Services
          </Link>

          <Link
            href="/dashboard/messages"
            className="flex items-center gap-3 rounded-xl p-4 text-white transition hover:bg-violet-600"
          >
            <Mail size={20} />
            Messages
          </Link>

          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-xl p-4 text-white transition hover:bg-violet-600"
          >
            <Settings size={20} />
            Settings
          </Link>

          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 rounded-xl p-4 text-white transition hover:bg-violet-600"
          >
            <User size={20} />
            Profile
          </Link>
                  </nav>

        <button
          onClick={logout}
          className="mt-12 flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-4 text-white transition hover:bg-red-700"
        >
          <LogOut size={20} />
          Logout
        </button>

      </aside>

      <main className="flex-1 overflow-y-auto p-10">
        {children}
      </main>

      </div>
    </>
  );
}