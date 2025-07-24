"use client" // <-- add this at the top ONLY if this file is converted to a client component (not needed now)

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedTitle from "@/components/animated-title" // ✅ You got this part right

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Purpleware - Cracked cheats",
  description: "Use Purpleware to cheat against losers.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#8b5cf6" }],
  },
  manifest: "/site.webmanifest",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://i.ibb.co/ynkzdpwk/favicon-16x16.png" type="image/png" />
      </head>
      <body className={`${inter.className} bg-black min-h-screen antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <AnimatedTitle /> {/* ✅ THIS is what you were missing */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 container mx-auto py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
