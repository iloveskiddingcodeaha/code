"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Shield, Zap, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CS2Subscription() {
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
      title: "CS2 Premium Subscription",
      subtitle: "Unlock the full potential of Counter-Strike 2 with our premium subscription service",
      monthlyPlan: "Monthly Plan",
      yearlyPlan: "Yearly Plan",
      lifetimePlan: "Lifetime Plan",
      month: "month",
      year: "year",
      oneTime: "one-time",
      mostPopular: "Most Popular",
      bestValue: "Best Value",
      subscribe: "Subscribe Now",
      features: "Features",
      support: "24/7 Support",
      updates: "Regular Updates",
      undetected: "Undetected",
      premium: "Premium Features",
      community: "Private Community",
      configs: "Premium Configs",
      aimbot: "Advanced Aimbot",
      esp: "Premium ESP",
      misc: "Misc Features",
      skinChanger: "Skin Changer",
      antiAim: "Anti-Aim",
      rageBot: "Rage Bot",
      legitBot: "Legit Bot",
      streamProof: "Stream Proof",
      hwid: "HWID Spoofer",
      customization: "Full Customization",
    },
    RU: {
      title: "Премиум подписка CS2",
      subtitle: "Раскройте весь потенциал Counter-Strike 2 с нашим премиум сервисом подписки",
      monthlyPlan: "Месячный план",
      yearlyPlan: "Годовой план",
      lifetimePlan: "Пожизненный план",
      month: "месяц",
      year: "год",
      oneTime: "разовый",
      mostPopular: "Самый популярный",
      bestValue: "Лучшая цена",
      subscribe: "Подписаться",
      features: "Функции",
      support: "Поддержка 24/7",
      updates: "Регулярные обновления",
      undetected: "Необнаруживаемый",
      premium: "Премиум функции",
      community: "Приватное сообщество",
      configs: "Премиум конфиги",
      aimbot: "Продвинутый аимбот",
      esp: "Премиум ESP",
      misc: "Разные функции",
      skinChanger: "Смена скинов",
      antiAim: "Анти-аим",
      rageBot: "Рейдж бот",
      legitBot: "Легит бот",
      streamProof: "Защита от стрима",
      hwid: "HWID спуфер",
      customization: "Полная настройка",
    },
  }

  const t = translations[language as keyof typeof translations]

  const plans = [
    {
      name: t.monthlyPlan,
      price: "$9.99",
      period: t.month,
      popular: false,
      features: [t.aimbot, t.esp, t.misc, t.support, t.updates, t.undetected],
    },
    {
      name: t.yearlyPlan,
      price: "$79.99",
      period: t.year,
      popular: true,
      badge: t.mostPopular,
      features: [
        t.aimbot,
        t.esp,
        t.misc,
        t.skinChanger,
        t.antiAim,
        t.rageBot,
        t.legitBot,
        t.support,
        t.updates,
        t.undetected,
        t.community,
        t.configs,
      ],
    },
    {
      name: t.lifetimePlan,
      price: "$199.99",
      period: t.oneTime,
      popular: false,
      badge: t.bestValue,
      features: [
        t.aimbot,
        t.esp,
        t.misc,
        t.skinChanger,
        t.antiAim,
        t.rageBot,
        t.legitBot,
        t.streamProof,
        t.hwid,
        t.customization,
        t.support,
        t.updates,
        t.undetected,
        t.community,
        t.configs,
      ],
    },
  ]

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
          <Crown className="h-8 w-8 text-white" />
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

      {/* Pricing Plans */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card
              className={`relative h-full ${plan.popular ? "border-purple-500 bg-purple-900/20" : "bg-[#050212] border-purple-900/40"} hover:border-purple-700 transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-3 py-1">{plan.badge}</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-purple-100 mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-purple-300 ml-1">/{plan.period}</span>
                </div>
                <Button
                  className={`w-full ${plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-zinc-900 hover:bg-zinc-800"} text-white transition-all duration-300`}
                  asChild
                >
                  <Link href="/discord">{t.subscribe}</Link>
                </Button>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-purple-200">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Features Showcase */}
      <motion.div
        className="bg-[#050212] border border-purple-900/40 rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-purple-100 mb-6 text-center">{t.features}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Shield className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">{t.undetected}</h4>
            <p className="text-purple-200 text-sm">
              Advanced anti-detection technology keeps you safe from VAC and other anti-cheat systems.
            </p>
          </div>
          <div className="text-center">
            <Zap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">{t.updates}</h4>
            <p className="text-purple-200 text-sm">
              Weekly updates ensure compatibility with the latest CS2 patches and improvements.
            </p>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">{t.community}</h4>
            <p className="text-purple-200 text-sm">
              Access to our private Discord community with exclusive configs and support.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center bg-purple-900/20 rounded-xl p-8 border border-purple-800/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">Ready to dominate CS2?</h3>
        <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Purpleware for their CS2 cheating needs. Get started today and
          experience the difference.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg" asChild>
          <Link href="/discord">Join Discord & Subscribe</Link>
        </Button>
      </motion.div>
    </div>
  )
}
