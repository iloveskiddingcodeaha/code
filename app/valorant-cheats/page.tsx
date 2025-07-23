"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Lock, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ValorantCheats() {
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
      title: `Valorant Cheats/Rage Cheats`,
      subtitle: `Dominate the competition with our undetected Valorant tools..`,
      popularCheats: `Popular Cheats`,
      moreCheats: `More Cheats`,
      password: `Password`,
      download: `Download`,
      popular: `Popular`,
      new: `NEW`,
      step1: `Download the cheat using the button (duh)`,
      step2: `Extract the files with the password we gave you`,
      step3: `Run the loader as admin and follow the instructions (some cheats need extreme injector, grab it from our discord)`,
      step4: `Launch Valorant and start destroying everyone`,
      troubleHelp: `Having trouble? Hit us up on Discord and we'll help you get set up.`,
    },
    RU: {
      title: `Читы Valorant/Рейдж читы`,
      subtitle: `Доминируйте над конкурентами с нашими необнаруживаемыми инструментами Valorant..`,
      popularCheats: `Популярные читы`,
      moreCheats: `Больше читов`,
      password: `Пароль`,
      download: `Скачать`,
      popular: `Популярный`,
      new: `НОВЫЙ`,
      step1: `Скачайте чит, используя кнопку (очевидно)`,
      step2: `Распакуйте файлы с паролем, который мы дали вам`,
      step3: `Запустите загрузчик от имени администратора и следуйте инструкциям (некоторые читы требуют extreme injector, возьмите его из нашего discord)`,
      step4: `Запустите Valorant и начните уничтожать всех`,
      troubleHelp: `Проблемы? Обратитесь к нам в Discord, и мы поможем вам настроить.`,
    },
  }

  const t = translations[language as keyof typeof translations]

  // Main cheats
  const mainCheats = [
    {
      id: 1,
      title: `ValoHack | Rage/Legit`,
      game: "Valorant",
      description:
        language === "RU"
          ? `Мощный чит для Valorant с продвинутым аимботом и ESP. Идеально подходит для рейдж и легитной игры.`
          : `Powerful Valorant cheat with advanced aimbot and ESP. Perfect for both rage and legit gameplay.`,
      features: ["Aimbot", "ESP", "Triggerbot"],
      popular: true,
      downloadUrl: "https://lootdest.org/s?valohack",
      password: "valorant123",
    },
    {
      id: 2,
      title: `RiotBreaker | External`,
      game: "Valorant",
      description:
        language === "RU"
          ? `Внешний чит для Valorant с отличными функциями безопасности. Стабильный и надежный.`
          : `External Valorant cheat with excellent safety features. Stable and reliable.`,
      features: ["External", language === "RU" ? `Безопасный` : "Safe", language === "RU" ? `Визуалы` : "Visuals"],
      popular: false,
      downloadUrl: "https://github.com/purpleware/riotbreaker.zip",
      password: language === "RU" ? `Ничего!` : "Nothing!",
    },
    {
      id: 3,
      title: `ValoRage | HvH`,
      game: "Valorant",
      description:
        language === "RU"
          ? `Специально разработан для HvH сценариев в Valorant. Продвинутые функции для соревновательной игры.`
          : `Specifically designed for HvH scenarios in Valorant. Advanced features for competitive play.`,
      features: [
        language === "RU" ? `HvH` : "HvH",
        language === "RU" ? `Рейдж бот` : "Rage Bot",
        language === "RU" ? `Анти-аим` : "Anti-Aim",
      ],
      popular: true,
      downloadUrl: "https://gofile.io/d/valorage",
      password: language === "RU" ? `Ничего!` : "Nothing!",
    },
    {
      id: 4,
      title: `ValoLegit | Stealth`,
      game: "Valorant",
      description:
        language === "RU"
          ? `Легитный чит для Valorant, разработанный для незаметной игры. Минимальный риск обнаружения.`
          : `Legit Valorant cheat designed for stealth gameplay. Minimal detection risk.`,
      features: [language === "RU" ? `Легитный` : "Legit", "Smooth Aim", language === "RU" ? `Скрытый` : "Stealth"],
      popular: true,
      downloadUrl: "https://lootdest.org/s?valolegit",
      password: language === "RU" ? `Ничего!` : "Nothing!",
    },
  ]

  // New cheats row
  const newCheats = [
    {
      id: 5,
      title: `ValoNew | Beta`,
      game: "Valorant",
      description:
        language === "RU"
          ? `Новейший чит для Valorant в бета-версии. Получите ранний доступ к новым функциям!`
          : `Newest Valorant cheat in beta version. Get early access to new features!`,
      features: [
        language === "RU" ? `Бета` : "Beta",
        language === "RU" ? `Новые функции` : "New Features",
        language === "RU" ? `Тестирование` : "Testing",
      ],
      popular: true,
      new: true,
      downloadUrl: "https://lootdest.org/s?valonew",
      password: language === "RU" ? `Ничего!` : "Nothing!",
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

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

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
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <span className="text-white font-bold text-xl">VAL</span>
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

        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full -z-10 opacity-30 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(10, 5, 24, 0) 70%)",
              "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(10, 5, 24, 0) 70%)",
              "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(10, 5, 24, 0) 70%)",
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Main Cheats Grid */}
      <div>
        <motion.h2
          className="text-2xl font-bold text-purple-100 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.popularCheats}
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {mainCheats.map((cheat, index) => (
            <motion.div key={cheat.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="bg-[#050212] border-purple-900/40 hover:border-purple-700 transition-all duration-300 h-full">
                <motion.div
                  className="bg-purple-900 h-24 flex items-center justify-center relative overflow-hidden"
                  whileHover={{
                    backgroundColor: "#6d28d9",
                    transition: { duration: 0.3 },
                  }}
                >
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
                  <span className="text-white font-bold text-xl relative z-10">VAL</span>
                  {cheat.popular && (
                    <motion.div
                      className="absolute top-2 right-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <Badge className="bg-purple-700">
                        <Star className="h-3 w-3 mr-1" /> {t.popular}
                      </Badge>
                    </motion.div>
                  )}
                </motion.div>
                <CardHeader>
                  <Badge variant="outline" className="mb-2 w-fit border-purple-800/50 text-purple-200 bg-purple-900/30">
                    {cheat.game}
                  </Badge>
                  <CardTitle className="text-xl text-purple-100">{cheat.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-purple-200">{cheat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cheat.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <Badge variant="secondary" className="bg-purple-900/40 text-purple-100 border-purple-900/50">
                          {feature}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center text-xs text-amber-400">
                    <Lock className="h-3 w-3 mr-1" /> {t.password}: {cheat.password}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={cheat.downloadUrl} className="w-full" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-zinc-900 hover:bg-zinc-800 border border-purple-800/50 text-purple-300 hover:text-white relative overflow-hidden group transition-all duration-300">
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-zinc-700/0 via-purple-800/20 to-zinc-700/0"
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

      {/* New Cheats Row */}
      <div>
        <motion.h2
          className="text-2xl font-bold text-purple-100 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.moreCheats}
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={{ delayChildren: 0.3 }}
        >
          {newCheats.map((cheat) => (
            <motion.div key={cheat.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="bg-[#050212] border-purple-900/40 hover:border-purple-700 transition-all duration-300 h-full">
                <motion.div
                  className="bg-purple-800 h-24 flex items-center justify-center relative overflow-hidden"
                  whileHover={{
                    backgroundColor: "#6d28d9",
                    transition: { duration: 0.3 },
                  }}
                >
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
                  <span className="text-white font-bold text-xl relative z-10">VAL</span>
                  <motion.div
                    className="absolute top-2 right-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <Badge className="bg-purple-600">
                      <Sparkles className="h-3 w-3 mr-1" /> {t.new}
                    </Badge>
                  </motion.div>
                </motion.div>
                <CardHeader>
                  <Badge variant="outline" className="mb-2 w-fit border-purple-800/50 text-purple-200 bg-purple-900/30">
                    {cheat.game}
                  </Badge>
                  <CardTitle className="text-xl text-purple-100">{cheat.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-purple-200">{cheat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cheat.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <Badge variant="secondary" className="bg-purple-900/40 text-purple-100 border-purple-900/50">
                          {feature}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center text-xs text-amber-400">
                    <Lock className="h-3 w-3 mr-1" /> {t.password}: {cheat.password}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={cheat.downloadUrl} className="w-full" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-zinc-900 hover:bg-zinc-800 border border-purple-800/50 text-purple-300 hover:text-white relative overflow-hidden group transition-all duration-300">
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-zinc-700/0 via-purple-800/20 to-zinc-700/0"
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

      {/* Additional Info Section */}
      <motion.div
        className="bg-[#050212] border border-purple-900/40 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ol className="space-y-3 text-purple-200">
          {[t.step1, t.step2, t.step3, t.step4].map((step, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <motion.span
                className="bg-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0"
                whileHover={{ scale: 1.1, backgroundColor: "#6d28d9" }}
              >
                {index + 1}
              </motion.span>
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
