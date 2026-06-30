"use client";

import { useEffect, useState } from "react";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/public/services");
      const data = await res.json();

      if (data.success) {
        setServices(data.services);
      }
    }

    load();
  }, []);
    return (
    <section
      id="services"
      className="bg-[#0B1020] py-24 text-white"
    >
      <div className="container mx-auto px-6">

        <div className="mb-14 text-center">

          <span className="text-violet-400">
            MY SERVICES
          </span>

          <h2 className="mt-4 text-5xl font-black">
            What I Do
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (

            <div
              key={service.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-violet-500"
            >

              <div className="mb-6 text-4xl">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-300">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}