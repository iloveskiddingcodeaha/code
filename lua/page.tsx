// app/lua/page.tsx
import { NextResponse } from "next/server";

export default function LuaPage() {
  return (
    <pre style={{ whiteSpace: "pre-wrap", color: "#a0ffa0", background: "#100020", padding: 20 }}>
{`-- Example Lua script
loadstring(game:HttpGet("https://api.junkie-development.de/api/v1/luascripts/public/bbfa3138e5d717667fed6993072f5f3737d18b4db3b312a6dd18f9e2bc9e56fb/download"))()
`}
    </pre>
  );
}
