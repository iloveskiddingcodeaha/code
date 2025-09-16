"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Lock, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function RobloxCheats() {
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
      title: `Roblox Exploits & Scripts`,
      subtitle: `Powerful exploits and scripts for Roblox games..`,
      popularExploits: `Popular Exploits`,
      moreExploits: `More Exploits`,
      password: `Password`,
      download: `Download`,
      popular: `Popular`,
      new: `NEW`,
      free: `FREE`,
      step1: `Download the exploit using the button`,
      step2: `Extract the files with the password if required`,
      step3: `Run the exploit as administrator`,
      step4: `Inject into Roblox and load your scripts`,
      troubleHelp: `Having trouble? Join our Discord for help and script sharing.`,
    },
    RU: {
      title: `Эксплойты и скрипты Roblox`,
      subtitle: `Мощные эксплойты и скрипты для игр Roblox..`,
      popularExploits: `Популярные эксплойты`,
      moreExploits: `Больше эксплойтов`,
      password: `Пароль`,
      download: `Скачать`,
      popular: `Популярный`,
      new: `НОВЫЙ`,
      free: `БЕСПЛАТНО`,
      step1: `Скачайте эксплойт, используя кнопку`,
      step2: `Распакуйте файлы с паролем, если требуется`,
      step3: `Запустите эксплойт от имени администратора`,
      step4: `Инжектите в Roblox и загрузите ваши скрипты`,
      troubleHelp: `Проблемы? Присоединяйтесь к нашему Discord за помощью и обменом скриптов.`,
    },
  }

  const t = translations[language as keyof typeof translations]

  // Main exploits
  const mainExploits = [
    {
      id: 1,
      title: `Synapse X | Premium`,
      game: "Roblox",
      description:
        language === "RU"
          ? `Премиум эксплойт для Roblox с продвинутыми функциями. Лучший выбор для серьезных пользователей.`
          : `Premium Roblox exploit with advanced features. The best choice for serious users.`,
      features: ["Level 8", "Script Hub", "Premium"],
      popular: true,
      downloadUrl: "https://lootdest.org/s?synapsex",
      password: "synapse123",
      isPremium: true,
    },
    {
      id: 2,
      title: `KRNL | Free`,
      game: "Roblox",
      description:
        language === "RU"
          ? `Бесплатный эксплойт для Roblox с хорошими функциями. Отличный выбор для начинающих.`
          : `Free Roblox exploit with good features. Great choice for beginners.`,
      features: ["Level 7", "Free", language === "RU" ? `Стабильный` : "Stable"],
      popular: true,
      downloadUrl: "https://github.com/purpleware/krnl.zip",
      password: language === "RU" ? `Ничего!` : "Nothing!",
      isPremium: false,
    },
    {
      id: 3,
      title: `Fluxus | Free`,
      game: "Roblox",
      description:
        language === "RU"
          ? `Бесплатный эксплойт с хорошей совместимостью. Регулярные обновления и поддержка.`
          : `Free exploit with good compatibility. Regular updates and support.`,
      features: ["Level 6", language === "RU" ? `Бесплатный` : "Free", language === "RU" ? `Обновления` : "Updates"],
      popular: false,
      downloadUrl: "https://gofile.io/d/fluxus",
      password: language === "RU" ? `Ничего!` : "Nothing!",
      isPremium: false,
    },
    {
      id: 4,
      title: `Oxygen U | Free`,
      game: "Roblox",
      description:
        language === "RU"
          ? `Новый бесплатный эксплойт с современным интерфейсом. Простой в использовании.`
          : `New free exploit with modern interface. Easy to use.`,
      features: ["Level 7", language === "RU" ? `Современный UI` : "Modern UI", language === "RU" ? `Простой` : "Easy"],
      popular: true,
      downloadUrl: "https://lootdest.org/s?oxygenu",
      password: language === "RU" ? `Ничего!` : "Nothing!",
      isPremium: false,
    },
  ]

  // New exploits row
  const newExploits = [
    {
      id: 5,
      title: `Script-Ware | Premium`,
      game: "Roblox",
      description:
        language === "RU"
          ? `Новый премиум эксплойт с отличными функциями. Получите ранний доступ!`
          : `New premium exploit with excellent features. Get early access!`,
      features: ["Level 8", language === "RU" ? `Премиум` : "Premium", language === "RU" ? `Новый` : "New"],
      popular: true,
      new: true,
      downloadUrl: "https://lootdest.org/s?scriptware",
      password: "scriptware123",
      isPremium: true,
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
          className="inline-flex items-center justify-center w-16 h-16 bg-green-800 rounded-full mb-4"
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
          <span className="text-white font-bold text-xl">RBX</span>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">{t.title}</span>
        </motion.h1>
        <motion.p
          className="text-lg text-green-200 max-w-3xl mx-auto"
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
              "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(10, 5, 24, 0) 70%)",
              "radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(10, 5, 24, 0) 70%)",
              "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(10, 5, 24, 0) 70%)",
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

      {/* Main Exploits Grid */}
      <div>
        <motion.h2
          className="text-2xl font-bold text-green-100 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.popularExploits}
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {mainExploits.map((exploit, index) => (
            <motion.div key={exploit.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="bg-[#050212] border-green-900/40 hover:border-green-700 transition-all duration-300 h-full">
                <motion.div
                  className={`${exploit.isPremium ? "bg-purple-900" : "bg-green-900"} h-24 flex items-center justify-center relative overflow-hidden`}
                  whileHover={{
                    backgroundColor: exploit.isPremium ? "#6d28d9" : "#15803d",
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
                  <span className="text-white font-bold text-xl relative z-10">RBX</span>
                  {exploit.popular && (
                    <motion.div
                      className="absolute top-2 right-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <Badge className={exploit.isPremium ? "bg-purple-700" : "bg-green-700"}>
                        <Star className="h-3 w-3 mr-1" /> {t.popular}
                      </Badge>
                    </motion.div>
                  )}
                  {!exploit.isPremium && (
                    <motion.div
                      className="absolute top-2 left-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <Badge className="bg-green-600">{t.free}</Badge>
                    </motion.div>
                  )}
                </motion.div>
                <CardHeader>
                  <Badge variant="outline" className="mb-2 w-fit border-green-800/50 text-green-200 bg-green-900/30">
                    {exploit.game}
                  </Badge>
                  <CardTitle className="text-xl text-green-100">{exploit.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-green-200">{exploit.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exploit.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <Badge variant="secondary" className="bg-green-900/40 text-green-100 border-green-900/50">
                          {feature}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center text-xs text-amber-400">
                    <Lock className="h-3 w-3 mr-1" /> {t.password}: {exploit.password}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={exploit.downloadUrl} className="w-full" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-zinc-900 hover:bg-zinc-800 border border-green-800/50 text-green-300 hover:text-white relative overflow-hidden group transition-all duration-300">
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-zinc-700/0 via-green-800/20 to-zinc-700/0"
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

      {/* New Exploits Row */}
      <div>
        <motion.h2
          className="text-2xl font-bold text-green-100 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.moreExploits}
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={{ delayChildren: 0.3 }}
        >
          {newExploits.map((exploit) => (
            <motion.div key={exploit.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <Card className="bg-[#050212] border-green-900/40 hover:border-green-700 transition-all duration-300 h-full">
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
                  <span className="text-white font-bold text-xl relative z-10">RBX</span>
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
                  <Badge variant="outline" className="mb-2 w-fit border-green-800/50 text-green-200 bg-green-900/30">
                    {exploit.game}
                  </Badge>
                  <CardTitle className="text-xl text-green-100">{exploit.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-green-200">{exploit.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exploit.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <Badge variant="secondary" className="bg-green-900/40 text-green-100 border-green-900/50">
                          {feature}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-center text-xs text-amber-400">
                    <Lock className="h-3 w-3 mr-1" /> {t.password}: {exploit.password}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={exploit.downloadUrl} className="w-full" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-zinc-900 hover:bg-zinc-800 border border-green-800/50 text-green-300 hover:text-white relative overflow-hidden group transition-all duration-300">
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-zinc-700/0 via-green-800/20 to-zinc-700/0"
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
        className="bg-[#050212] border border-green-900/40 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ol className="space-y-3 text-green-200">
          {[t.step1, t.step2, t.step3, t.step4].map((step, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <motion.span
                className="bg-green-900 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0"
                whileHover={{ scale: 1.1, backgroundColor: "#15803d" }}
              >
                {index + 1}
              </motion.span>
              <span>{step}</span>
            </motion.li>
          ))}
        </ol>
        <motion.div
          className="mt-4 text-green-300 text-sm"
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
