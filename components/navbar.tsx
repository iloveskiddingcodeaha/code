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
  const [language, setLanguage] = useState("EN")
  const pathname = usePathname()

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "EN"
    setLanguage(savedLanguage)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "RU" : "EN"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)

    // Dispatch custom event for language change
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }))
  }

  const translations = {
    EN: {
      gameCheats: "Game Cheats",
      cs2Cheats: "CS2 Cheats",
      csgoeCheats: "CSGO Cheats",
      valorantCheats: "Valorant Cheats",
      robloxCheats: "Roblox Cheats",
      discord: "Discord",
      contact: "Contact",
    },
    RU: {
      gameCheats: "Игровые читы",
      cs2Cheats: "Читы CS2",
      csgoeCheats: "Читы CSGO",
      valorantCheats: "Читы Valorant",
      robloxCheats: "Читы Roblox",
      discord: "Discord",
      contact: "Контакты",
    },
  }

  const t = translations[language as keyof typeof translations]

  const gameLinks = [
    { href: "/cs2", label: t.cs2Cheats, icon: "CS2" },
    { href: "/csgo-cheats", label: t.csgoeCheats, icon: "CSGO" },
    { href: "/valorant-cheats", label: t.valorantCheats, icon: "VAL" },
    { href: "/roblox-cheats", label: t.robloxCheats, icon: "RBX" },
  ]

  const navLinks = [
    { href: "/discord", label: t.discord, icon: MessageSquare },
    { href: "/contact", label: t.contact, icon: MessageSquare },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-[#050212]/95 backdrop-blur supports-[backdrop-filter]:bg-[#050212]/60">
      <div className="w-full px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Purpleware<span className="text-sm align-top">®</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-purple-200 hover:text-white hover:bg-purple-900/20 transition-colors ${
                pathname === "/" ? "bg-purple-900/30 text-purple-100" : ""
              }`}
            >
              Home
            </Link>

            {/* Game Cheats Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-purple-200 hover:text-white hover:bg-purple-900/20 flex items-center space-x-1"
                >
                  <span>{t.gameCheats}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-[#0A0518] border-purple-900/40 backdrop-blur-sm">
                {gameLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-3 px-3 py-2 text-purple-200 hover:text-white hover:bg-purple-900/20 transition-colors ${
                        pathname === link.href ? "bg-purple-900/30 text-purple-100" : ""
                      }`}
                    >
                      <div className="w-6 h-6 bg-purple-800 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{link.icon}</span>
                      </div>
                      <span>{link.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Discord Link */}
            <Link
              href="/discord"
              className={`px-3 py-2 rounded-md text-purple-200 hover:text-white hover:bg-purple-900/20 transition-colors ${
                pathname === "/discord" ? "bg-purple-900/30 text-purple-100" : ""
              }`}
            >
              {t.discord}
            </Link>

            {/* Language Toggle */}
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-purple-200 hover:text-white hover:bg-purple-900/20 flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span>{language}</span>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Toggle Mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-purple-200 hover:text-white hover:bg-purple-900/20"
            >
              <Globe className="h-4 w-4" />
              <span className="ml-1">{language}</span>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-purple-200 hover:text-white hover:bg-purple-900/20">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#050212] border-purple-900/40 backdrop-blur-sm">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="text-xl font-bold text-white">
                      Purpleware<span className="text-sm align-top">®</span>
                    </span>
                  </div>

                  {/* Game Cheats Section */}
                  <div className="space-y-2">
                    <h3 className="text-purple-300 font-medium text-sm uppercase tracking-wide px-3">{t.gameCheats}</h3>
                    {gameLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-3 py-3 rounded-md text-purple-200 hover:text-white hover:bg-purple-900/20 transition-colors ${
                          pathname === link.href ? "bg-purple-900/30 text-purple-100" : ""
                        }`}
                      >
                        <div className="w-6 h-6 bg-purple-800 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{link.icon}</span>
                        </div>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Other Links */}
                  <div className="space-y-2 pt-4 border-t border-purple-900/20">
                    {navLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-3 py-3 rounded-md text-purple-200 hover:text-white hover:bg-purple-900/20 transition-colors ${
                            pathname === link.href ? "bg-purple-900/30 text-purple-100" : ""
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span>{link.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
