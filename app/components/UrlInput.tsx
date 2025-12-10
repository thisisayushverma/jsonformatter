"use client";
import { useState } from "react";

interface UrlProps  {
    onsubmit : (url:string) => any
    setInput:React.Dispatch<React.SetStateAction<any>>
}


export default function UrlInput({ onsubmit,setInput }: UrlProps) {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = async () => {
      if (!url.trim()) return;
      console.log(url);
      const value = await onsubmit(url.trim())
    setInput(JSON.stringify(value, null, 2));
  };

  return (
    <div className="w-full space-y-3">
      <label className="text-sm font-medium text-gray-700">
        Enter API URL
      </label>

      <div className="flex items-center gap-2">
        <input
          autoFocus
          type="text"
          placeholder="https://api.example.com/users"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
