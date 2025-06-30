"use client";
import { useState, useEffect } from "react";
import "./login-gate.css";

const VALID_INVITE = "kAYUnk32kjhAHJjaA";

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
        {/* Discord button under Enter */}
        <a
          href="https://discord.gg/c62dDQ8HEF"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-btn"
        >
          Join our Discord
        </a>
      </div>
    </div>
  );
}
