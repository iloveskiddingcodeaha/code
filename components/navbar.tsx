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
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }))
  }

  const translations = {
    EN: {
      gameCheats: "Game Cheats",
      cs2Cheats: "CS2",
      csgoeCheats: "CSGO",
      valorantCheats: "Valorant",
      discord: "Discord",
      contact: "Contact",
    },
    RU: {
      gameCheats: "Игровые читы",
      cs2Cheats: "CS2",
      csgoeCheats: "CSGO",
      valorantCheats: "Valorant",
      discord: "Discord",
      contact: "Контакты",
    },
  }

  const t = translations[language as keyof typeof translations]

  const gameLinks = [
    { href: "/cs2", label: t.cs2Cheats, icon: "CS2" },
    { href: "/csgo-cheats", label: t.csgoeCheats, icon: "GO" },
    { href: "/valorant-cheats", label: t.valorantCheats, icon: "VAL" },
    { href: "/roblox-cheats", label: t.robloxCheats, icon: "RBX" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/90">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left Side */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">
                Purpleware<span className="text-purple-400 text-sm align-top">®</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 rounded text-white hover:text-purple-400 hover:bg-purple-900/20 transition-colors ${
                pathname === "/" ? "bg-purple-900/30 text-purple-400" : ""
              }`}
            >
              Home
            </Link>

            {/* Game Cheats Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-purple-400 hover:bg-purple-900/20 flex items-center space-x-1 px-3 py-2"
                >
                  <span>{t.gameCheats}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-black border-purple-900/30">
                {gameLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-3 px-3 py-2 text-white hover:text-purple-400 hover:bg-purple-900/20 transition-colors ${
                        pathname === link.href ? "bg-purple-900/30 text-purple-400" : ""
                      }`}
                    >
                      <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{link.icon}</span>
                      </div>
                      <span>{link.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/discord"
              className={`px-3 py-2 rounded text-white hover:text-purple-400 hover:bg-purple-900/20 transition-colors ${
                pathname === "/discord" ? "bg-purple-900/30 text-purple-400" : ""
              }`}
            >
              {t.discord}
            </Link>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="text-white hover:text-purple-400 hover:bg-purple-900/20 flex items-center space-x-2 px-3 py-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language}</span>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white hover:text-purple-400 hover:bg-purple-900/20 h-9 px-3"
            >
              <Globe className="h-4 w-4" />
              <span className="ml-1">{language}</span>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-purple-400 hover:bg-purple-900/20 h-9 px-3"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-black border-purple-900/30">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="text-xl font-bold text-white">
                      Purpleware<span className="text-purple-400 text-sm align-top">®</span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-3 py-3 rounded text-white hover:text-purple-400 hover:bg-purple-900/20 transition-colors ${
                        pathname === "/" ? "bg-purple-900/30 text-purple-400" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-purple-400 font-medium text-xs uppercase tracking-wide px-3">{t.gameCheats}</h3>
                    {gameLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-3 py-3 rounded text-white hover:text-purple-400 hover:bg-purple-900/20 transition-colors ${
                          pathname === link.href ? "bg-purple-900/30 text-purple-400" : ""
                        }`}
                      >
                        <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{link.icon}</span>
                        </div>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-purple-900/20">
                    <Link
                      href="/discord"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded text-white hover:text-purple-400 hover:bg-purple-900/20 transition-colors ${
                        pathname === "/discord" ? "bg-purple-900/30 text-purple-400" : ""
                      }`}
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>{t.discord}</span>
                    </Link>
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
