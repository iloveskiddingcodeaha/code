// Example using App Router convention (requires Next.js 13.4+)
// File location: app/api/loadstring/route.ts

export async function GET() {
    const rawLuaScript = 'loadstring(game:HttpGet("https://github.com/iloveskiddingcodeaha/PurplewareLoader/raw/refs/heads/main/LoaderMain.lua"))()';

    return new Response(rawLuaScript, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
    });
}
