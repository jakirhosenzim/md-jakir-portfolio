"use client";

import { useEffect, useState } from "react";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    const res = await fetch("/api/messages");
    const data = await res.json();

    if (data.success) {
      setMessages(data.messages);
    }
  }

  async function deleteMessage(id: number) {
    if (!confirm("Delete this message?")) return;

    await fetch("/api/messages", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadMessages();
  }

  return (
    <main className="min-h-screen">

      <h1 className="mb-10 text-4xl font-black text-white">
        Contact Messages
      </h1>

      <div className="overflow-hidden rounded-3xl border border-white/10">
              <table className="w-full">

          <thead className="bg-white/5">

            <tr>

              <th className="p-5 text-left text-white">Name</th>

              <th className="p-5 text-left text-white">Email</th>

              <th className="p-5 text-left text-white">Subject</th>

              <th className="p-5 text-left text-white">Message</th>

              <th className="p-5 text-left text-white">Action</th>

            </tr>

          </thead>

          <tbody>

            {messages.map((message) => (

              <tr
                key={message.id}
                className="border-t border-white/10"
              >

                <td className="p-5 text-white">
                  {message.name}
                </td>

                <td className="p-5 text-cyan-400">
                  {message.email}
                </td>

                <td className="p-5 text-white">
                  {message.subject}
                </td>

                <td className="max-w-sm p-5 text-gray-300">
                  {message.message}
                </td>

                <td className="p-5">

                  <button
                    onClick={() => deleteMessage(message.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {messages.length === 0 && (

              <tr>

                <td
                  colSpan={5}
                  className="p-10 text-center text-gray-400"
                >
                  No Messages Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </main>
  );
}