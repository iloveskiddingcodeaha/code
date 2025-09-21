"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function DiscordPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [language, setLanguage] = useState("EN")

  useEffect(() => {
    setIsLoaded(true)
    const savedLanguage = localStorage.getItem("language") || "EN"
    setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail)
    }
    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  const translations = {
    EN: {
      title: "Join Our Discord Community",
      subtitle: "Connect with fellow gamers, get support, and access exclusive content.",
      joinDiscord: "Join Discord Server",
      members: "Members",
      online: "Online",
      channels: "Channels",
    },
    RU: {
      title: "Присоединяйтесь к нашему Discord сообществу",
      subtitle: "Общайтесь с другими игроками, получайте поддержку и доступ к эксклюзивному контенту.",
      joinDiscord: "Присоединиться к Discord серверу",
      members: "Участников",
      online: "Онлайн",
      channels: "Каналов",
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <div className="relative min-h-screen">
      {/* Purple Discord Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/15 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-4 shadow-lg shadow-purple-600/30">
            <MessageSquare className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>

          <p className="text-xl text-purple-200 max-w-3xl mx-auto">{t.subtitle}</p>

          <div className="flex justify-center">
            <Link href="https://discord.gg/tqYF5aybnq" target="_blank" rel="noopener noreferrer">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md border border-purple-500/50 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30 transition-all text-lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                {t.joinDiscord}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Server Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/50 border border-purple-800/30 hover:border-purple-600/50 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">2,500+</div>
              <div className="text-purple-200">{t.members}</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border border-purple-800/30 hover:border-purple-600/50 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-purple-200">{t.online}</div>
            </CardContent>
          </Card>
          <Card className="bg-black/50 border border-purple-800/30 hover:border-purple-600/50 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-purple-200">{t.channels}</div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center py-12">
          <Link href="https://discord.gg/tqYF5aybnq" target="_blank" rel="noopener noreferrer">
            <Button className="bg-zinc-900 hover:bg-zinc-800 border border-purple-800/50 text-purple-300 hover:text-white px-8 py-3 rounded-md shadow-lg transition-all">
              <MessageSquare className="mr-2 h-5 w-5" />
              Join Discord Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
