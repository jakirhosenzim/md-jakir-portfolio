"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/mdjakirhosenzim1",
  },
  {
    icon: FaGithub,
    href: "https://github.com/jakirhosnezim",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@mdjakirhosenzim",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("✅ Message Sent Successfully!");

      setForm({
        from_name: "",
        reply_to: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("❌ Failed to Send Message");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="container py-24"
    >

      <div className="mb-14 text-center">

        <h2 className="text-5xl font-black">

          Get In <span className="gradient-text">Touch</span>

        </h2>

        <p className="mt-4 text-gray-400">

          Let's build something amazing together.

        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="glass rounded-[30px] p-8">

          <h3 className="mb-8 text-3xl font-bold">

            Contact Information

          </h3>
                    <div className="space-y-7">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-violet-500/10 p-4">
                <Phone className="text-violet-400" />
              </div>

              <div>
                <p className="text-gray-400">Phone</p>
                <h4 className="text-lg">
                  +8801732537388
                </h4>
              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-violet-500/10 p-4">
                <Mail className="text-violet-400" />
              </div>

              <div>
                <p className="text-gray-400">Email</p>
                <h4 className="text-lg">
                  mdjakirhosenzim@gmail.com
                </h4>
              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-violet-500/10 p-4">
                <MapPin className="text-violet-400" />
              </div>

              <div>
                <p className="text-gray-400">Location</p>
                <h4 className="text-lg">
                  new Jummapara, Rangpur Sadar,Rangpur(5400)
                </h4>
              </div>

            </div>

          </div>

          <div className="mt-10 flex gap-4">

            {socialLinks.map((item, index) => {

              const Icon = item.icon;

              return (

                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-violet-500 hover:bg-violet-600"
                >
                  <Icon size={20} />
                </a>

              );

            })}

          </div>

        </div>

        <form
          onSubmit={sendEmail}
          className="glass rounded-[30px] p-8"
        >

          <div className="grid gap-5">
                        <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-violet-500"
            />

            <input
              type="email"
              name="reply_to"
              value={form.reply_to}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-violet-500"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-violet-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Your Message"
              required
              className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-violet-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-3 rounded-xl bg-violet-600 py-4 text-lg font-semibold transition hover:bg-violet-700 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}

              <Send size={20} />
            </button>

          </div>

        </form>
              </div>
    </section>
  );
}