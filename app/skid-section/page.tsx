"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Sparkles, Lock, Code } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function SkidSection() {
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

  /* ──────────────────────────────────────────────────────────────────────────
   * Translation
   * ────────────────────────────────────────────────────────────────────────── */
  const translations = {
    EN: {
      title: "Skid Section / Source Codes",
      subtitle: "Free educational sources & skidded projects.",
      popularSkids: "Popular Sources",
      moreSkids: "More Sources",
      password: "Password",
      download: "Download",
      popular: "Popular",
      new: "NEW",
      stepsTitle: "How to use these sources",
      steps: [
        "Download the source code using the button",
        "Extract the files (usually no password needed)",
        "Open in your favourite IDE and study the code",
        "Learn, modify and create your own projects",
      ],
      troubleHelp: "Need help understanding the code? Join our Discord for discussions.",
    },
    RU: {
      title: "Секция скидов / Исходные коды",
      subtitle: "Бесплатные исходники и проекты для обучения.",
      popularSkids: "Популярные исходники",
      moreSkids: "Больше исходников",
      password: "Пароль",
      download: "Скачать",
      popular: "Популярный",
      new: "НОВЫЙ",
      stepsTitle: "Как использовать исходники",
      steps: [
        "Скачайте исходник, используя кнопку",
        "Распакуйте файлы (обычно пароль не нужен)",
        "Откройте в любимой IDE и изучите код",
        "Учитесь, модифицируйте и создавайте свои проекты",
      ],
      troubleHelp: "Нужна помощь? Присоединяйтесь к нашему Discord для обсуждений.",
    },
  }

  const t = translations[language as keyof typeof translations]
  /* ────────────────────────────────────────────────────────────────────────── */

  const mainSkids = [
    {
      id: 1,
      title: "Simple Aimbot | C++",
      game: "Source Code",
      description: language === "RU" ? "Простой исходный код аимбота на C++." : "Simple aimbot source in C++.",
      features: ["C++", "Educational", "Basic"],
      popular: true,
      downloadUrl: "https://github.com/purpleware/simple-aimbot.zip",
      password: "None",
    },
    {
      id: 2,
      title: "ESP Wallhack | C#",
      game: "Source Code",
      description: language === "RU" ? "ESP/Wallhack исходник на C#." : "ESP/Wallhack source in C#.",
      features: ["C#", "Overlay", "ESP"],
      popular: false,
      downloadUrl: "https://github.com/purpleware/esp-wallhack.zip",
      password: "None",
    },
    {
      id: 3,
      title: "Memory Scanner | Python",
      game: "Source Code",
      description: language === "RU" ? "Сканер памяти на Python." : "Memory scanner in Python.",
      features: ["Python", "Memory", "Scanner"],
      popular: true,
      downloadUrl: "https://github.com/purpleware/memory-scanner.zip",
      password: "None",
    },
    {
      id: 4,
      title: "DLL Injector | C++",
      game: "Source Code",
      description: language === "RU" ? "Простой DLL инжектор на C++." : "Simple DLL injector in C++.",
      features: ["C++", "DLL", "Injector"],
      popular: true,
      downloadUrl: "https://github.com/purpleware/dll-injector.zip",
      password: "None",
    },
  ]

  const newSkids = [
    {
      id: 5,
      title: "Web Scraper | JavaScript (Beta)",
      game: "Source Code",
      description: language === "RU" ? "Новый веб-скрапер на JavaScript." : "Brand-new web scraper in JavaScript.",
      features: ["JavaScript", "Automation", "Web"],
      popular: true,
      new: true,
      downloadUrl: "https://github.com/purpleware/web-scraper.zip",
      password: "None",
    },
  ]

  /* ──────────────────────────────────────────────────────────────────────────
   * Animation variants
   * ────────────────────────────────────────────────────────────────────────── */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  }
  /* ────────────────────────────────────────────────────────────────────────── */

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <motion.div
        className="text-center space-y-4"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 bg-purple-800 rounded-full mb-4"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Code className="h-8 w-8 text-white" />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            {t.title}
          </span>
        </motion.h1>
        <motion.p
          className="text-lg text-purple-200 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t.subtitle}
        </motion.p>
      </motion.div>

      {/* Popular Sources */}
      <Section
        heading={t.popularSkids}
        items={mainSkids}
        t={t}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* New Sources */}
      <Section
        heading={t.moreSkids}
        items={newSkids}
        t={t}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        isNew
      />

      {/* How-to Section */}
      <motion.div
        className="bg-[#050212] border border-purple-900/40 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-purple-100 mb-4">{t.stepsTitle}</h2>
        <ol className="space-y-3 text-purple-200">
          {t.steps.map((step, idx) => (
            <motion.li
              key={idx}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
            >
              <span className="bg-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                {idx + 1}
              </span>
              <span>{step}</span>
            </motion.li>
          ))}
        </ol>
        <motion.div
          className="mt-4 text-purple-300 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {t.troubleHelp}
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
 * Helper Components
 * ────────────────────────────────────────────────────────────────────────── */
type Skid = {
  id: number
  title: string
  game: string
  description: string
  features: string[]
  popular: boolean
  downloadUrl: string
  password: string
  new?: boolean
}

function Section({
  heading,
  items,
  t,
  containerVariants,
  itemVariants,
  isNew = false,
}: {
  heading: string
  items: Skid[]
  t: any
  containerVariants: any
  itemVariants: any
  isNew?: boolean
}) {
  return (
    <div>
      <motion.h2
        className="text-2xl font-bold text-purple-100 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((skid, idx) => (
          <motion.div key={skid.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="bg-[#050212] border-purple-900/40 hover:border-purple-700 transition-all duration-300 h-full">
              {/* Top colored bar */}
              <motion.div
                className={`
                  ${isNew ? "bg-purple-800" : "bg-purple-900"}
                  h-24 flex items-center justify-center relative overflow-hidden
                `}
                whileHover={{ backgroundColor: "#6d28d9", transition: { duration: 0.3 } }}
              >
                {/* Diagonal grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />
                <Code className="h-8 w-8 text-white relative z-10" />
                {skid.popular && (
                  <motion.div
                    className="absolute top-2 right-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1, type: "spring" }}
                  >
                    <Badge className="bg-purple-700">
                      <Star className="h-3 w-3 mr-1" /> {t.popular}
                    </Badge>
                  </motion.div>
                )}
                {skid.new && (
                  <motion.div
                    className="absolute top-2 right-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1, type: "spring" }}
                  >
                    <Badge className="bg-purple-600">
                      <Sparkles className="h-3 w-3 mr-1" /> {t.new}
                    </Badge>
                  </motion.div>
                )}
              </motion.div>

              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit border-purple-800/50 text-purple-200 bg-purple-900/30">
                  {skid.game}
                </Badge>
                <CardTitle className="text-xl text-purple-100">{skid.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-purple-200">{skid.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skid.features.map((feature, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-purple-900/40 text-purple-100 border-purple-900/50"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-xs text-green-400">
                  <Lock className="h-3 w-3 mr-1" /> {t.password}: {skid.password}
                </div>
              </CardContent>

              <CardFooter>
                <Link href={skid.downloadUrl} className="w-full" target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-zinc-900 hover:bg-zinc-800 border border-purple-800/50 text-purple-300 hover:text-white relative overflow-hidden group transition-all duration-300">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-zinc-700/0 via-purple-800/20 to-zinc-700/0"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          repeatDelay: 0.5,
                        }}
                      />
                      <span className="relative z-10 flex items-center">
                        {t.download}{" "}
                        <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
