// app/page.tsx
"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Shield, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Sparkle from 'react-sparkle'

const translations = {
  EN: {
    heroTitle: "Welcome to Purpleware?",
    heroSubtitle: "We skid and steal so you don't.",
    cs2Button: "CS2 Cheats",
    discordButton: "Join Discord",
    gamesTitle: "Cheats we provide at the time being:",
    gamesSubtitle: "",
    cs2Description: "Advanced cheats for Counter-Strike 2 with undetected features",
    csgoDescription: "Legacy hacks for CS:GO that still work flawlessly",
    valorantDescription: "Precision aimbots and ESP for Valorant",
    robloxDescription: "Powerful scripts and exploits for Roblox games",
    skidDescription: "Random cracked and skidded tools from around the internet",
    viewCheats: "View Cheats",
    featuresTitle: "Why Choose Purpleware",
    featuresSubtitle: "We deliver quality, reliability, and performance.",
    undetectedTitle: "Undetected",
    undetectedDesc: "Our tools use advanced techniques to stay hidden from anti-cheat systems.",
    updatesTitle: "Regular Updates",
    updatesDesc: "Weekly updates to ensure compatibility with the latest game versions.",
    setupTitle: "Easy Setup",
    setupDesc: "Simple installation process with comprehensive support documentation.",
    ctaTitle: "Ready to dominate?",
    ctaSubtitle: "Join our community and access premium gaming tools.",
    joinDiscord: "Join Discord",
    happyUsers: "Happy Users",
    gamePlatforms: "Game Platforms",
    differentCheats: "Different Tools",
    updates: "Updates",
    weekly: "Weekly",
  },
  RU: {
    heroTitle: "Добро пожаловать в Purpleware",
    heroSubtitle: "Получите несправедливое преимущество с нашими премиум инструментами.",
    cs2Button: "Читы CS2",
    discordButton: "Присоединиться к Discord",
    gamesTitle: "Читы для всех ваших любимых игр",
    gamesSubtitle: "Премиум инструменты для каждой игры, созданные до совершенства.",
    cs2Description: "Продвинутые читы для Counter-Strike 2 с необнаруживаемыми функциями",
    csgoDescription: "Наследие хаков для CS:GO, которые все еще работают безупречно",
    valorantDescription: "Точные аимботы и ESP для Valorant",
    robloxDescription: "Мощные скрипты и эксплойты для игр Roblox",
    skidDescription: "Случайные крякнутые и скопированные инструменты со всего интернета",
    viewCheats: "Посмотреть читы",
    featuresTitle: "Почему выбирают Purpleware",
    featuresSubtitle: "Мы обеспечиваем качество, надежность и производительность.",
    undetectedTitle: "Необнаруживаемые",
    undetectedDesc: "Наши инструменты используют передовые техники, чтобы оставаться скрытыми от анти-чит систем.",
    updatesTitle: "Регулярные обновления",
    updatesDesc: "Еженедельные обновления для обеспечения совместимости с последними версиями игр.",
    setupTitle: "Простая установка",
    setupDesc: "Простой процесс установки с полной документацией поддержки.",
    ctaTitle: "Готовы доминировать?",
    ctaSubtitle: "Присоединяйтесь к нашему сообществу и получите доступ к премиум игровым инструментам.",
    joinDiscord: "Присоединиться к Discord",
    happyUsers: "Довольных пользователей",
    gamePlatforms: "Игровых платформ",
    differentCheats: "Различных инструментов",
    updates: "Обновления",
    weekly: "Еженедельно",
  },
}

export default function Home() {
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

  const t = translations[language]

  const gameCategories = [
    {
      name: "CS2",
      description: t.cs2Description,
      href: "/cs2",
      icon: <span className="text-white font-bold text-2xl">CS2</span>,
    },
    {
      name: "CSGO",
      description: t.csgoDescription,
      href: "/csgo-cheats",
      icon: <span className="text-white font-bold text-2xl">CSGO</span>,
    },
    {
      name: "Valorant",
      description: t.valorantDescription,
      href: "/valorant-cheats",
      icon: <span className="text-white font-bold text-2xl">VAL</span>,
    },
    {
      name: "Skid",
      description: t.skidDescription,
      href: "/skid",
      icon: <span className="text-white font-bold text-2xl">SKD</span>,
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-black">
      <div className="relative z-10 space-y-16">
        {/* Remaining page content... */}
      </div>
    </div>
  )
}
