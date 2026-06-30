"use client";

import {
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Monitor,
  Camera,
  PenTool,
  Video,
  Code2,
  Network,
  Shield,
  Clapperboard,
} from "lucide-react";
import { GrTroubleshoot } from "react-icons/gr";

const services = [
  { icon: Monitor, title: "IT Support" },
  { icon: Network, title: "Networking" },
  { icon: Camera, title: "CCTV Systems" },
  { icon: Shield, title: "Access Control" },
  { icon: Video, title: "Video Editing" },
  { icon: PenTool, title: "Graphics Design" },
  { icon: Code2, title: "Web Development" },
  { icon: Clapperboard, title: "Motion Graphics" },
  { icon: Phone, title: "Call Center" },
  { icon: Mail, title: "Mail Service" },
  { icon: MapPin, title: "Travel" },
  { icon: Briefcase, title: "Hard Work" },
  { icon: GrTroubleshoot, title: "Troubleshoot Expert" },
];

export default function About() {
  return (
    <section id="about" className="container -mt-12 pb-16">
      <div className="glass rounded-[28px] border border-white/10 p-8 shadow-[0_0_40px_rgba(139,92,246,.12)]">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* ABOUT */}

          <div>
            <div className="mb-6 flex items-center gap-3">
              <User className="text-violet-400" />
              <h2 className="text-xl font-bold uppercase">
                About Me
              </h2>
            </div>

            <p className="leading-8 text-gray-400">
              I am an IT enthusiast and creative professional with
              hands-on experience in IT Support, Networking,
              CCTV Systems, Graphic Design, Video Editing
              and Web Development.
            </p>

            <button className="mt-8 rounded-xl border border-violet-500 px-6 py-3 transition hover:bg-violet-600">
              Read More
            </button>
          </div>

          {/* PERSONAL */}

          <div>
            <h2 className="mb-6 text-xl font-bold uppercase">
              Personal Info
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Name</span>
                <span>MD Jakir Hosen</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Phone</span>
                <span>+8801732537388</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Email</span>
                <span>mdjakirhosenzim@gmail.com</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">Location</span>
                <span>New Jummapara, Rangpur Sadar,Rangpur(5400)</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Freelance</span>
                <span className="text-green-400">
                  Available
                </span>
              </div>

            </div>

          </div>

          {/* WHAT I DO */}

          <div>

            <h2 className="mb-6 text-xl font-bold uppercase">
              What I Do
            </h2>

            <div className="grid grid-cols-2 gap-4">

              {services.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-violet-500 hover:bg-violet-500/10"
                  >

                    <Icon
                      size={22}
                      className="mb-3 text-violet-400"
                    />

                    <p className="text-sm font-medium">
                      {item.title}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}