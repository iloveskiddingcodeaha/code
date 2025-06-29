// components/navbar.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, MessageSquare, Globe } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const translations = {
    EN: {
      gameCheats: "Game Cheats",
      cs2Cheats: "CS2",
      csgoeCheats: "CSGO",
      valorantCheats: "Valorant",
      robloxCheats: "Roblox",
      discord: "Discord",
      contact: "Contact",
    },
    RU: {
      gameCheats: "Игровые читы",
      cs2Cheats: "CS2",
      csgoeCheats: "CSGO",
      valorantCheats: "Valorant",
      robloxCheats: "Roblox",
      discord: "Discord",
      contact: "Контакты",
    },
  }

  const t = translations["EN"]; // Default to English since the toggle is removed

  const gameLinks = [
    { href: "/cs2", label: t.cs2Cheats, icon: "CS2" },
    { href: "/csgo-cheats", label: t.csgoeCheats, icon: "GO" },
    { href: "/valorant-cheats", label: t.valorantCheats, icon: "VAL" },
    { href: "/roblox-cheats", label: t.robloxCheats, icon: "RBX" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-900/30 bg-black/80 backdrop-blur-lg supports-[backdrop-filter]:bg-black/80 shadow-lg shadow-purple-900/10 transition-all duration-300 ease-in-out">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Left Side */}
        <Link href="/" className="relative flex items-baseline">
          <span className="text-purple-500 font-bold text-2xl">Purpleware</span> {/* Main "Purpleware" text */}
          {/* Adjusted left position and top position to prevent clipping */}
          <span className="absolute top-[0px] left-[calc(100%+5px)] text-xs text-purple-300 whitespace-nowrap">Beta</span> {/* "Beta" text */}
        </Link>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden lg:flex items-center space-x-6"> {/* Adjusted spacing */}
          <Link
            href="/"
            className={`relative px-3 py-2 rounded-md text-white font-medium text-sm transition-all duration-200 ease-in-out
              hover:text-purple-400 hover:bg-purple-900/20
              ${pathname === "/" ? "bg-purple-900/30 text-purple-400 after:scale-x-100" : "after:scale-x-0"}
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-purple-500 after:transition-transform after:duration-300 after:ease-out
            `}
          >
            Home
          </Link>

          {/* Game Cheats Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`group relative text-white font-medium text-sm transition-all duration-200 ease-in-out h-auto py-2 px-3 rounded-md
                  hover:text-purple-400 hover:bg-purple-900/20
                  ${gameLinks.some(link => pathname.startsWith(link.href)) ? "bg-purple-900/30 text-purple-400 after:scale-x-100" : "after:scale-x-0"}
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-purple-500 after:transition-transform after:duration-300 after:ease-out
                  flex items-center space-x-1
                `}
              >
                <span>{t.gameCheats}</span>
                <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-black border border-purple-800/50 rounded-lg shadow-xl shadow-purple-900/20 text-sm py-1"> {/* Refined dropdown styling */}
              {gameLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={`flex items-center px-4 py-2 text-white transition-colors duration-200 rounded-md
                      hover:bg-purple-900/30 hover:text-purple-300
                      ${pathname === link.href ? "bg-purple-800/50 text-purple-300" : ""}
                      focus:outline-none focus:ring-1 focus:ring-purple-500
                    `}
                  >
                    <div className="w-6 h-6 bg-purple-700/60 rounded flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold text-white"> {/* Adjusted icon styling */}
                      {link.icon}
                    </div>
                    <span>{link.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/discord"
            className={`relative px-3 py-2 rounded-md text-white font-medium text-sm transition-all duration-200 ease-in-out
              hover:text-purple-400 hover:bg-purple-900/20
              ${pathname === "/discord" ? "bg-purple-900/30 text-purple-400 after:scale-x-100" : "after:scale-x-0"}
              after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-purple-500 after:transition-transform after:duration-300 after:ease-out
            `}
          >
            {t.discord}
          </Link>

          {/* REMOVED LANGUAGE TOGGLE BUTTON HERE */}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* REMOVED MOBILE LANGUAGE TOGGLE BUTTON HERE */}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-purple-400 hover:bg-purple-400/20 h-9 px-3"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[10px] bg-black border-l border-purple-900/30"> {/* Added border-l */}
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-baseline space-x-2 mb-6 px-4 relative"> {/* ADDED px-4 here for mobile logo spacing, adjusted to items-baseline and relative */}
                    <span className="text-purple-500 font-bold text-2xl">Purpleware</span> {/* Mobile "Purpleware" text */}
                    {/* Adjusted left position and top position to prevent clipping */}
                    <span className="absolute top-[0px] left-[calc(100%+5px)] text-xs text-purple-300 whitespace-nowrap">Beta</span> {/* Mobile "Beta" text */}
                </div>

                <div className="space-y-1"> {/* Tighter spacing for mobile links */}
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-md text-white transition-colors duration-200 text-base font-medium
                      hover:text-purple-400 hover:bg-purple-900/20
                      ${pathname === "/" ? "bg-purple-900/30 text-purple-400" : ""}
                    `}
                  >
                    Home
                  </Link>
                </div>

                <div className="space-y-1"> {/* Tighter spacing for mobile links */}
                  <h3 className="text-purple-400 font-semibold text-xs uppercase tracking-wide px-4 mt-4 mb-2"> {/* Adjusted heading styling */}
                    {t.gameCheats}
                  </h3>
                  {gameLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-md text-white transition-colors duration-200 text-base font-medium
                        hover:text-purple-400 hover:bg-purple-900/20
                        ${pathname === link.href ? "bg-purple-900/30 text-purple-400" : ""}
                      `}
                    >
                      <div className="w-6 h-6 bg-purple-700/60 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"> {/* Adjusted icon styling */}
                        {link.icon}
                      </div>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>

                <div className="space-y-1 pt-4 border-t border-purple-900/20">
                  <Link
                    href="/discord"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-md text-white transition-colors duration-200 text-base font-medium
                      hover:text-purple-400 hover:bg-purple-900/20
                      ${pathname === "/discord" ? "bg-purple-900/30 text-purple-400" : ""}
                    `}
                  >
                    <MessageSquare className="h-5 w-5 flex-shrink-0" />
                    <span>{t.discord}</span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
