"use client"

import Link from "next/link"
import { MessageSquare, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050212] border-t border-purple-900/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Purpleware<span className="text-xs align-top">®</span>
              </span>
            </div>
            <p className="text-purple-300 text-sm">
              Your source for the best gaming enhancements and tools. Join our community and level up your gaming
              experience.
            </p>
          </div>

          {/* Game Cheats */}
          <div className="space-y-4">
            <h3 className="text-purple-200 font-semibold">Game Cheats</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cs2" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                  CS2 Cheats
                </Link>
              </li>
              <li>
                <Link href="/csgo-cheats" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                  CSGO Cheats
                </Link>
              </li>
              <li>
                <Link
                  href="/valorant-cheats"
                  className="text-purple-300 hover:text-purple-200 transition-colors text-sm"
                >
                  Valorant Cheats
                </Link>
              </li>
              <li>
                <Link href="/roblox-cheats" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                  Roblox Cheats
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-purple-200 font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/discord" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                  Discord Server
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-purple-200 font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="/discord"
                className="w-10 h-10 bg-purple-900/30 hover:bg-purple-800/50 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageSquare className="h-5 w-5 text-purple-300" />
              </Link>
              <Link
                href="/contact"
                className="w-10 h-10 bg-purple-900/30 hover:bg-purple-800/50 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5 text-purple-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-900/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-400 text-sm">© {new Date().getFullYear()} Purplware. All rights reserved.</p>
          <p className="text-purple-500 text-xs mt-2 md:mt-0">Made with 💜 for the gaming community</p>
        </div>
      </div>
    </footer>
  )
}
