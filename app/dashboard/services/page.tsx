"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    loadServices();
  }, []);

  async function loadServices() {
    const res = await fetch("/api/services");
    const data = await res.json();

    if (data.success) {
      setServices(data.services);
    }
  }

  async function deleteService(id: number) {
    if (!confirm("Delete this service?")) return;

    await fetch("/api/services", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadServices();
  }

  return (
    <main className="min-h-screen">

      <div className="mb-10 flex items-center justify-between">

        <h1 className="text-4xl font-black text-white">
          Services
        </h1>

        <Link
          href="/dashboard/services/new"
          className="rounded-xl bg-violet-600 px-6 py-3 text-white"
        >
          Add Service
        </Link>

      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
              <table className="w-full">

          <thead className="bg-white/5">

            <tr>

              <th className="p-5 text-left text-white">Title</th>

              <th className="p-5 text-left text-white">Description</th>

              <th className="p-5 text-left text-white">Icon</th>

              <th className="p-5 text-left text-white">Action</th>

            </tr>

          </thead>

          <tbody>

            {services.map((service) => (

              <tr
                key={service.id}
                className="border-t border-white/10"
              >

                <td className="p-5 text-white">
                  {service.title}
                </td>

                <td className="p-5 text-gray-300">
                  {service.description}
                </td>

                <td className="p-5 text-cyan-400">
                  {service.icon}
                </td>

                <td className="space-x-3 p-5">

                  <Link
                    href={`/dashboard/services/edit/${service.id}`}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteService(service.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {services.length === 0 && (

              <tr>

                <td
                  colSpan={4}
                  className="p-10 text-center text-gray-400"
                >
                  No Services Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>
          </main>
  );
}