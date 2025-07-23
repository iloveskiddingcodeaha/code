"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Mail, Clock, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ContactPage() {
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
      title: "Contact Us",
      subtitle: "Get in touch with the Purpleware team for support, questions, or feedback.",
      discordTitle: "Discord Support",
      discordDesc: "Join our Discord server for real-time support and community discussions.",
      directContactTitle: "Direct Contact",
      directContactDesc: "Need direct help? Contact our main developer for personalized assistance.",
      responseTimeTitle: "Response Time",
      responseTimeDesc: "We typically respond within 2-4 hours during active hours.",
      communityTitle: "Community Help",
      communityDesc: "Our community members are always ready to help with common questions.",
      joinDiscord: "Join Discord Server",
      contactDeveloper: "Contact Developer",
      beforeContact: "Before You Contact Us",
      step1: "Check our Discord server for common questions and solutions",
      step2: "Make sure you've followed the installation instructions correctly",
      step3: "Have your system information ready (OS, game version, etc.)",
      step4: "Describe your issue clearly with any error messages",
      supportHours: "Support Hours",
      timezone: "EST/EDT Timezone",
      weekdays: "Monday - Friday: 2 PM - 11 PM",
      weekends: "Saturday - Sunday: 12 PM - 10 PM",
    },
    RU: {
      title: "Связаться с нами",
      subtitle: "Свяжитесь с командой Purpleware для поддержки, вопросов или отзывов.",
      discordTitle: "Поддержка Discord",
      discordDesc:
        "Присоединяйтесь к нашему серверу Discord для поддержки в реальном времени и обсуждений в сообществе.",
      directContactTitle: "Прямой контакт",
      directContactDesc: "Нужна прямая помощь? Свяжитесь с нашим главным разработчиком для персональной помощи.",
      responseTimeTitle: "Время ответа",
      responseTimeDesc: "Мы обычно отвечаем в течение 2-4 часов в активные часы.",
      communityTitle: "Помощь сообщества",
      communityDesc: "Участники нашего сообщества всегда готовы помочь с общими вопросами.",
      joinDiscord: "Присоединиться к Discord серверу",
      contactDeveloper: "Связаться с разработчиком",
      beforeContact: "Перед тем как связаться с нами",
      step1: "Проверьте наш Discord сервер на наличие общих вопросов и решений",
      step2: "Убедитесь, что вы правильно следовали инструкциям по установке",
      step3: "Подготовьте информацию о вашей системе (ОС, версия игры и т.д.)",
      step4: "Четко опишите вашу проблему с любыми сообщениями об ошибках",
      supportHours: "Часы поддержки",
      timezone: "Часовой пояс EST/EDT",
      weekdays: "Понедельник - Пятница: 14:00 - 23:00",
      weekends: "Суббота - Воскресенье: 12:00 - 22:00",
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <div className="relative min-h-screen">
      {/* Purple Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/15 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-4 shadow-lg shadow-purple-600/30">
            <Mail className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>

          <p className="text-xl text-purple-200 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Discord Support */}
          <Card className="bg-black/50 border border-purple-800/30 hover:border-purple-600/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-600 p-2 rounded-md">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-white">{t.discordTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-200">{t.discordDesc}</p>
              <Link href="/discord">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">{t.joinDiscord}</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Direct Contact */}
          <Card className="bg-black/50 border border-purple-800/30 hover:border-purple-600/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-600 p-2 rounded-md">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-white">{t.directContactTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-purple-200">{t.directContactDesc}</p>
              <div className="bg-purple-900/30 p-4 rounded-md border border-purple-800/50">
                <p className="text-purple-100 font-medium">
                  Discord: <span className="text-purple-300">@hhushed</span>
                </p>
              </div>
              <Button
                className="w-full bg-zinc-900 hover:bg-zinc-800 border border-purple-800/50 text-purple-300 hover:text-white"
                onClick={() => {
                  navigator.clipboard.writeText("@hhushed")
                  // You could add a toast notification here
                }}
              >
                {t.contactDeveloper}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Response Time */}
          <Card className="bg-black/50 border border-purple-800/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">{t.responseTimeTitle}</h3>
              </div>
              <p className="text-purple-200">{t.responseTimeDesc}</p>
            </CardContent>
          </Card>

          {/* Community Help */}
          <Card className="bg-black/50 border border-purple-800/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-5 w-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">{t.communityTitle}</h3>
              </div>
              <p className="text-purple-200">{t.communityDesc}</p>
            </CardContent>
          </Card>
        </div>

        {/* Before You Contact */}
        <Card className="bg-black/50 border border-purple-800/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">{t.beforeContact}</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-purple-200">
              <li className="flex items-start">
                <span className="bg-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                <span>{t.step1}</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                <span>{t.step2}</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                <span>{t.step3}</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                  4
                </span>
                <span>{t.step4}</span>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Support Hours */}
        <Card className="bg-purple-900/20 border border-purple-800/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">{t.supportHours}</h3>
            <div className="space-y-2 text-purple-200">
              <p className="font-medium text-purple-100">{t.timezone}</p>
              <p>{t.weekdays}</p>
              <p>{t.weekends}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
