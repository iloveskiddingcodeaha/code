"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Shield, Zap, Crosshair, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [language, setLanguage] = useState("EN")

  useEffect(() => {
    setIsLoaded(true)
    // Get language from localStorage or default to EN
    const savedLanguage = localStorage.getItem("language") || "EN"
    setLanguage(savedLanguage)
  }, [])

  useEffect(() => {
    // Listen for language changes
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail)
    }
    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  const translations = {
    EN: {
      welcomeTag: "Website was recoded, sorry if it looks different - @hhushed",
      heroTitle: "Welcome to Purpleware",
      heroSubtitle: "Get an unfair advantage with our (cracked) cheats.",
      cs2Button: "CS2 Cheats",
      discordButton: "Join Discord",
      gamesTitle: "Cheats For All Your Main Games",
      gamesSubtitle: "Cheats for every game, trying to make the best free website OF ALL TIME!",
      cs2Description: "Sick cheats for Counter-Strike 2 that won't get you banned",
      csgoDescription: "Old school hacks for CS:GO that still work great",
      valorantDescription: "Crazy good aimbots and ESP for Valorant",
      robloxDescription: "Cool scripts and exploits for tons of Roblox games",
      viewCheats: "View Cheats",
      featuresTitle: "Why Our Cheats Are Better",
      featuresSubtitle: "We're not like those other cheat sites - here's why our users stick with us",
      undetectedTitle: "Undetected AF",
      undetectedDesc: "Our cheats use crazy good bypasses to stay hidden. We haven't had a detection in over 6 months!",
      updatesTitle: "Weekly Updates",
      updatesDesc:
        "We update our stuff every week to keep up with game patches. No more waiting for fixes when games update.",
      setupTitle: "Super Easy Setup",
      setupDesc:
        "No complicated BS. Just download, extract, and you're ready to dominate. Plus our Discord is there if you need help.",
      ctaTitle: "Ready to start wrecking newgens?",
      ctaSubtitle:
        "Join our Discord and get access to all our cheats, plus chat with other cheaters who know their stuff.",
      joinDiscord: "Join Our Discord",
      happyUsers: "Happy Users",
      gamePlatforms: "Game Platforms",
      differentCheats: "Different Cheats",
      updates: "Updates",
      weekly: "Weekly",
    },
    RU: {
      welcomeTag: "@hhushed был здесь 👋",
      heroTitle: "Добро пожаловать в Purpleware",
      heroSubtitle: "Получите несправедливое преимущество с нашими (взломанными) читами.",
      cs2Button: "Читы CS2",
      discordButton: "Присоединиться к Discord",
      gamesTitle: "Читы для всех ваших любимых игр",
      gamesSubtitle: "Читы для каждой игры, пытаемся сделать лучший бесплатный сайт ВСЕХ ВРЕМЕН!",
      cs2Description: "Крутые читы для Counter-Strike 2, которые не приведут к бану",
      csgoDescription: "Старые добрые хаки для CS:GO, которые все еще отлично работают",
      valorantDescription: "Безумно хорошие аимботы и ESP для Valorant",
      robloxDescription: "Крутые скрипты и эксплойты для множества игр Roblox",
      viewCheats: "Посмотреть читы",
      featuresTitle: "Почему наши читы лучше",
      featuresSubtitle: "Мы не похожи на другие сайты с читами - вот почему наши пользователи остаются с нами",
      undetectedTitle: "Необнаруживаемые",
      undetectedDesc:
        "Наши читы используют безумно хорошие обходы, чтобы оставаться скрытыми. У нас не было обнаружений более 6 месяцев!",
      updatesTitle: "Еженедельные обновления",
      updatesDesc:
        "Мы обновляем наши читы каждую неделю, чтобы идти в ногу с патчами игр. Больше никакого ожидания исправлений при обновлении игр.",
      setupTitle: "Супер простая установка",
      setupDesc:
        "Никакой сложной ерунды. Просто скачайте, распакуйте и готовы доминировать. Плюс наш Discord всегда поможет.",
      ctaTitle: "Готовы начать уничтожать новичков?",
      ctaSubtitle:
        "Присоединяйтесь к нашему Discord и получите доступ ко всем нашим читам, плюс общайтесь с другими читерами, которые знают свое дело.",
      joinDiscord: "Присоединиться к Discord",
      happyUsers: "Довольных пользователей",
      gamePlatforms: "Игровых платформ",
      differentCheats: "Различных читов",
      updates: "Обновления",
      weekly: "Еженедельно",
    },
  }

  const t = translations[language as keyof typeof translations]

  // Game categories data
  const gameCategories = [
    {
      name: "CS2",
      description: t.cs2Description,
      href: "/cs2",
      icon: <span className="text-white font-bold text-xl">CS2</span>,
    },
    {
      name: "CSGO",
      description: t.csgoDescription,
      href: "/csgo-cheats",
      icon: <span className="text-white font-bold text-xl">CSGO</span>,
    },
    {
      name: "Valorant",
      description: t.valorantDescription,
      href: "/valorant-cheats",
      icon: <span className="text-white font-bold text-xl">VAL</span>,
    },
    {
      name: "Roblox",
      description: t.robloxDescription,
      href: "/roblox-cheats",
      icon: <span className="text-white font-bold text-xl">RBX</span>,
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[#050212] -z-10"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 -z-10"></div>
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-900/5 -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-block mb-6 px-6 py-2 bg-purple-900/10 backdrop-blur-sm rounded-full border border-purple-800/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-purple-300 text-sm font-medium">{t.welcomeTag}</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-200 to-purple-100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.heroTitle}
            </motion.h1>

            <motion.p
              className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/cs2">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-6 text-lg rounded-md relative overflow-hidden"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-700/0 via-purple-500/30 to-purple-700/0"
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        repeatDelay: 0.5,
                      }}
                    />
                    <span className="relative z-10">{t.cs2Button}</span>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/discord">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-700 text-purple-200 hover:bg-purple-900/20 px-8 py-6 text-lg rounded-md"
                  >
                    {t.discordButton}
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Categories Section */}
      <section className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            {t.gamesTitle}
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">{t.gamesSubtitle}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {gameCategories.map((game, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
              <Link href={game.href} className="group">
                <Card className="h-full bg-[#050212]/90 border-purple-900/30 hover:border-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10 overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div
                      className="bg-gradient-to-br from-purple-800 to-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                    >
                      {game.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-purple-100 mb-2 group-hover:text-white transition-colors">
                      {language === "RU" ? `Читы ${game.name}` : `${game.name} Cheats`}
                    </h3>
                    <p className="text-purple-300 mb-4 group-hover:text-purple-200 transition-colors">
                      {game.description}
                    </p>
                    <motion.div
                      className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors text-sm font-medium"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        repeatDelay: 1,
                      }}
                    >
                      {t.viewCheats} <ChevronRight className="h-4 w-4 ml-1" />
                    </motion.div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            {t.featuresTitle}
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">{t.featuresSubtitle}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-purple-300" />}
              title={t.undetectedTitle}
              description={t.undetectedDesc}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-purple-300" />}
              title={t.updatesTitle}
              description={t.updatesDesc}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Download className="h-6 w-6 text-purple-300" />}
              title={t.setupTitle}
              description={t.setupDesc}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 md:p-12 border border-purple-800/20 backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-800/5 blur-[100px] -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-xl">
              <motion.h2
                className="text-3xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t.ctaTitle}
              </motion.h2>
              <motion.p
                className="text-lg text-purple-200 mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.ctaSubtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/discord">
                  <Button
                    size="lg"
                    className="bg-white text-purple-900 hover:bg-purple-100 px-8 py-6 text-lg rounded-md"
                  >
                    {t.joinDiscord}
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="bg-purple-900/30 p-6 rounded-full border border-purple-800/40 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.05,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              }}
            >
              <Crosshair className="h-16 w-16 md:h-24 md:w-24 text-purple-100" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 pb-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <StatCard number="1,000+" label={t.happyUsers} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard number="4" label={t.gamePlatforms} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard number="12+" label={t.differentCheats} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCard number={t.weekly} label={t.updates} />
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      className="bg-[#050212]/90 border border-purple-900/30 rounded-xl p-6 hover:border-purple-800 transition-all duration-300 h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.05)" }}
    >
      <motion.div
        className="bg-purple-900/20 p-3 rounded-lg w-fit mb-4"
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-purple-100 mb-2">{title}</h3>
      <p className="text-purple-300">{description}</p>
    </motion.div>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      className="bg-[#050212]/90 border border-purple-900/30 rounded-xl p-6 text-center h-full"
      whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.4)" }}
    >
      <motion.div
        className="text-3xl md:text-4xl font-bold text-purple-100 mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
      >
        {number}
      </motion.div>
      <div className="text-purple-300 text-sm">{label}</div>
    </motion.div>
  )
}
