"use client";
import { useState, useEffect } from "react";
import "./login-gate.css"; // Create this stylesheet next

const VALID_INVITE = "kAYUnk32kjhAHJjaA"; // change to your code

export default function LoginGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [invite, setInvite] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("pw-access");
    if (stored === "granted") setUnlocked(true);
  }, []);

  const handleLogin = () => {
    if (invite === VALID_INVITE && username.trim() !== "") {
      sessionStorage.setItem("pw-access", "granted");
      setUnlocked(true);
    } else {
      alert("Invalid invitation or username.");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="login-gate">
      <div className="login-box">
        <h2>You need a invitation..</h2>
        <input
          type="text"
          placeholder="Invitation Code"
          value={invite}
          onChange={(e) => setInvite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Enter</button>
      </div>
    </div>
  );
}
