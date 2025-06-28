"use client"

import Link from "next/link"
import { MessageSquare, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-16">
      <div className="container mx-auto py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-lg font-bold text-white">
                Purpleware<span className="text-purple-400 text-xs align-top">®</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Premium gaming tools and enhancements. Join our community and elevate your gaming experience.
            </p>
          </div>

          {/* Game Cheats */}
          <div className="space-y-3">
            <h3 className="text-white font-medium text-sm">Game Cheats</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/cs2" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
                  CS2 Cheats
                </Link>
              </li>
              <li>
                <Link href="/csgo-cheats" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
                  CSGO Cheats
                </Link>
              </li>
              <li>
                <Link href="/valorant-cheats" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
                  Valorant Cheats
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="text-white font-medium text-sm">Support</h3>
            <ul className="space-y-1.5">
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/discord" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
                  Discord Server
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h3 className="text-white font-medium text-sm">Connect</h3>
            <div className="flex space-x-2">
              <Link
                href="/discord"
                className="w-8 h-8 bg-zinc-800 hover:bg-purple-600 rounded-md flex items-center justify-center transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-zinc-300" />
              </Link>
              <Link
                href="/contact"
                className="w-8 h-8 bg-zinc-800 hover:bg-purple-600 rounded-md flex items-center justify-center transition-colors"
              >
                <Mail className="h-4 w-4 text-zinc-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Purpleware. All rights reserved.</p>
          <p className="text-zinc-600 text-xs mt-2 md:mt-0">Built for the gaming community</p>
        </div>
      </div>
    </footer>
  )
}
