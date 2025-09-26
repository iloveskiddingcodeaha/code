"use client";

import { useEffect, useState } from "react";

export default function CallbackPage() {
  const [status, setStatus] = useState("Verifying key...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key") || params.get("code"); // depends on Work.ink param name
    if (!key) {
      setStatus("No key found in URL.");
      return;
    }

    fetch("/api/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, userId: "webuser" }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setStatus("✅ Key validated and stored! Now paste it into the Roblox GUI.");
        } else {
          setStatus(`❌ Error: ${data.error || JSON.stringify(data)}`);
        }
      })
      .catch((err) => setStatus(`❌ Server error: ${err.message}`));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Key Verification</h1>
      <p>{status}</p>
    </div>
  );
}
