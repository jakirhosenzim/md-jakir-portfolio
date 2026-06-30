"use client";

import { useRef, useState } from "react";

interface Props {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUpload({
  value,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  async function upload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setLoading(true);

    const form = new FormData();

    form.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      onChange(data.url);
    }
  }

  return (
    <div className="space-y-5">
            <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={upload}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-700"
      >
        {loading ? "Uploading..." : "Upload Image"}
      </button>

      {value && (
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src={value}
            alt="Preview"
            className="h-60 w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}