// app/page.tsx
"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Shield, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Sparkle from 'react-sparkle'

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

  // The translations object is defined here as a constant.
  // The "translations is not defined" error is unusual for this setup.
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

  // 't' is correctly derived here, ensuring it always refers to a valid translation set.
  const t = translations[language]

  const gameCategories = [
    {
      name: "CS2",
      description: t.cs2Description,
      href: "/cs2",
      icon: <span className="text-white font-bold text-sm">CS2</span>,
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
      icon: <span className="text-white font-bold text-sm">VAL</span>,
    },
    // Uncomment if you decide to add Roblox to your Home page display
    // {
    //   name: "Roblox",
    //   description: t.robloxDescription,
    //   href: "/roblox-cheats",
    //   icon: <span className="text-white font-bold text-sm">RBLX</span>,
    // },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Purple Moon Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-40 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 space-y-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="text-center space-y-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                {t.heroTitle}
              </span>
              {isLoaded && (
                <Sparkle
                  color="#A020F0"
                  count={50}
                  minSize={7}
                  maxSize={12}
                  overflowPx={0}
                  fadeOutSpeed={30}
                  newSparkleOnFadeOut={true}
                  flicker={true}
                  flickerSpeed="normal"
                />
              )}
            </h1>

            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">{t.heroSubtitle}</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/cs2">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-md border border-purple-500/50 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/30 transition-all">
                  {t.cs2Button}
                </Button>
              </Link>
              <Link href="/discord">
                <Button className="bg-black hover:bg-purple-900/30 text-purple-300 hover:text-white border border-purple-600/50 px-6 py-2.5 rounded-md shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 transition-all">
                  {t.discordButton}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Game Categories Section */}
        <section className="py-16">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                {t.gamesTitle}
              </h2>
              <p className="text-purple-200 max-w-2xl mx-auto">{t.gamesSubtitle}</p>
            </div>

            {/* Changed from grid to flex for better control with fixed width cards */}
            <div className="flex flex-wrap justify-center gap-4">
              {gameCategories.map((game, index) => (
                <Link key={index} href={game.href} className="group">
                  {/* Added w-[250px] to fix the card width */}
                  <Card className="w-[250px] bg-black/50 border border-purple-800/30 hover:border-purple-600/50 backdrop-blur-sm h-full transition-all hover:bg-purple-900/10 hover:shadow-lg hover:shadow-purple-600/10">
                    <CardContent className="p-4">
                      {game.name === "CSGO" ? (
                        <div className="mb-3">
                          {game.icon}
                        </div>
                      ) : (
                        <div className="bg-purple-600 w-10 h-10 rounded-md flex items-center justify-center mb-3 group-hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30">
                          {game.icon}
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {language === "RU" ? `Читы ${game.name}` : `${game.name} Cheats`}
                      </h3>
                      <p className="text-purple-200 mb-3 text-sm group-hover:text-purple-100 transition-colors">
                        {game.description}
                      </p>
                      <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300">
                        {t.viewCheats} <ChevronRight className="h-3 w-3 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                {t.featuresTitle}
              </h2>
              <p className="text-purple-200 max-w-2xl mx-auto">{t.featuresSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Shield className="h-5 w-5 text-purple-400" />}
                title={t.undetectedTitle}
                description={t.undetectedDesc}
              />
              <FeatureCard
                icon={<Zap className="h-5 w-5 text-purple-400" />}
                title={t.updatesTitle}
                description={t.updatesDesc}
              />
              <FeatureCard
                icon={<Download className="h-5 w-5 text-purple-400" />}
                title={t.setupTitle}
                description={t.setupDesc}
              />
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-12">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="bg-purple-900/20 rounded-xl p-8 border border-purple-800/30 text-center backdrop-blur-sm">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-3 text-white">{t.ctaTitle}</h2>
                <p className="text-purple-200 mb-6">{t.ctaSubtitle}</p>
                <Link href="/discord">
                  <Button className="bg-white text-black hover:bg-purple-100 px-6 py-2.5 rounded-md font-medium shadow-lg hover:shadow-xl transition-all">
                    {t.joinDiscord}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-16">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard number="1,000+" label={t.happyUsers} />
              <StatCard number="4" label={t.gamePlatforms} />
              <StatCard number="12+" label={t.differentCheats} />
              <StatCard number={t.weekly} label={t.updates} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-black/50 border border-purple-800/30 hover:border-purple-600/50 backdrop-blur-sm p-5 rounded-lg transition-all hover:bg-purple-900/10">
      <div className="bg-purple-900/30 p-2.5 rounded-md w-fit mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-purple-200 text-sm">{description}</p>
    </div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-black/50 border border-purple-800/30 hover:border-purple-600/50 backdrop-blur-sm p-4 text-center rounded-lg transition-all hover:bg-purple-900/10">
      <div className="text-2xl font-bold text-white mb-1">{number}</div>
      <div className="text-purple-200 text-sm">{label}</div>
    </div>
  )
}
