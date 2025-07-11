"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Lock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CS2Cheats() {
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
      title: "CS2 Cheats",
      subtitle: "Our cracked cheats will forever be free, purpleware.xyz on top!",
      popularCheats: "Popular Cheats:",
      password: "Password",
      download: "Download",
    },
    RU: {
      title: "Читы CS2",
      subtitle: "Разрушайте конкуренцию с помощью мощных инструментов.",
      popularCheats: "Популярные читы",
      password: "Пароль",
      download: "Скачать",
    },
  }

  const t = translations[language as keyof typeof translations]

  const cs2Cheats = [
    {
      id: 1,
      title: "Nonagon | HvH",
      game: "CS2",
      description:
        language === "RU"
          ? "Безумно хороший аимбот с настраиваемым FOV и плавностью. Имеет контроль отдачи и триггер бот."
          : "Crazy good aimbot with adjustable FOV and smoothness. Has recoil control and trigger bot.",
      features: ["HvH", "ESP", "Bhop"],
      popular: true,
      downloadUrl: "https://lootdest.org/s?syK5j8Qj",
      password: "nonagon",
    },
    {
      id: 2,
      title: "Lightmoon | Legit",
      game: "CS2",
      description:
        language === "RU"
          ? "Довольно приличный чит, нужен extreme injector для использования DLL."
          : "Pretty decent cheat, needs extreme injector to use the DLL.",
      features: ["ESP", language === "RU" ? "Смена скинов" : "Skin Changer", "Aimbot"],
      popular: false,
      downloadUrl: "https://github.com/iloveskiddingcodeaha/Purpleware/raw/refs/heads/main/Lightmoon%20-%20Purpleware.zip",
      password: language === "RU" ? "Ничего!" : "Nothing!",
    },
    {
     id: 3,
      title: "Aimware | Semi-rage/Hvh",
      game: "CS2",
      description:
        language === "RU"
          ? "Довольно приличный чит, нужен extreme injector для использования DLL."
          : "Most well known and shitted on cheats, fun to use, is an exe do your own research on it.",
      features: ["ESP", language === "RU" ? "Смена скинов" : "Skin Changer", "Aimbot"],
      popular: false,
      downloadUrl: "https://gofile.io/d/EkC7XG",
      password: language === "RU" ? "Ничего!" : "Nothing!",
    },
    {
      id: 4,
      title: "Enigma | Legit/semi-rage",
      game: "CS2",
      description:
        language === "RU"
          ? "Довольно приличный чит, нужен extreme injector для использования DLL."
          : "Pretty decent cheat, needs extreme injector to use the DLL.",
      features: ["ESP", language === "RU" ? "Смена скинов" : "Skin Changer", "Aimbot"],
      popular: false,
      downloadUrl: "https://github.com/iloveskiddingcodeaha/purpleware.xyz/raw/refs/heads/main/EnigmaV2-PURPLEWARE.exe",
      password: language === "RU" ? "Ничего!" : "Nothing!",
    },
    {
      id: 5,
      title: "Exhack | Skin-changer/semi-rage",
      game: "CS2",
      description:
        language === "RU"
          ? "Довольно приличный чит, нужен extreme injector для использования DLL."
          : "Ok cheat, basic cheat for noobs, needs extreme injector to use the DLL.",
      features: ["ESP", language === "RU" ? "Смена скинов" : "Skin Changer", "Aimbot"],
      popular: false,
      downloadUrl: "https://github.com/iloveskiddingcodeaha/purpleware.xyz/raw/refs/heads/main/exhack.dll",
      password: language === "RU" ? "Ничего!" : "Nothing!",
    },
    {
      id: 6,
      title: "SharkHack | Semi-Legit/semi-rage",
      game: "CS2",
      description:
        language === "RU"
          ? "Довольно приличный чит, нужен extreme injector для использования DLL."
          : "Once again a decent cheat, needs a good cfg, needs extreme injector to use the DLL.",
      features: ["ESP", language === "RU" ? "Смена скинов" : "Skin Changer", "Aimbot"],
      popular: false,
      downloadUrl: "https://github.com/iloveskiddingcodeaha/purpleware.xyz/raw/refs/heads/main/SharkHack%20-%20Purpleware.zip",
      password: language === "RU" ? "Ничего!" : "Nothing!",
    },
    {
      id: 7,
      title: "Memesense | Legit/semi-rage",
      game: "CS2",
      description:
        language === "RU"
          ? "Довольно приличный чит, нужен extreme injector для использования DLL."
          : "Best Semirage cheat out there, isnt working at the time being, will be updated SOON!",
      features: ["ESP", language === "RU" ? "Смена скинов" : "Skin Changer", "Aimbot"],
      popular: false,
      downloadUrl: "https://gofile.io/d/AetKcS",
      password: language === "RU" ? "Ничего!" : "Nothing!",
    },
  ]




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
    <div className="relative container mx-auto px-4 py-12 space-y-12">
      <motion.div
        className="text-center space-y-4"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 bg-purple-800 rounded-full mx-auto mb-4"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-white font-bold text-xl">CS2</span>
        </motion.div>

        <motion.h2 className="text-3xl font-bold text-purple-200" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">{t.title}</span>
        </motion.h2>

        <motion.p
          className="text-lg text-purple-400 text-center max-w-2xl mx-auto"
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
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.h3
        className="text-2xl font-bold text-purple-100 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t.popularCheats}
      </motion.h3>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {cs2Cheats.map((cheat, idx) => (
          <motion.div key={cheat.id} variants={itemVariants} whileHover={{ y: -5 }}>
            <Card className="bg-[#050212] border-purple-900/40 hover:border-purple-700 transition-all duration-300 h-full">
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit border-purple-800/50 text-purple-200 bg-purple-900/30">
                  {cheat.game}
                </Badge>
                <CardTitle className="text-xl text-purple-100">{cheat.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-purple-200">{cheat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cheat.features.map((feature, index) => (
                    <Badge key={index} className="bg-purple-900/40 text-purple-100 border-purple-900/50">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-xs text-amber-400">
                  <Lock className="h-3 w-3 mr-1" /> {t.password}: {cheat.password}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={cheat.downloadUrl} className="w-full" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-800 hover:bg-purple-700">
                    {t.download} <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
