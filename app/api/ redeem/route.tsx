"use client";
import { useState } from "react";

export default function RedeemPage() {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");

  const redeemKey = async () => {
    try {
      const res = await fetch("/api/claim/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`Success: ${data.message}`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Redeem Your Key</h1>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter your key"
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={redeemKey}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Redeem
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
