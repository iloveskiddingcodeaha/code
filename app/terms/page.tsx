"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, Scale } from "lucide-react"
import { useEffect, useState } from "react"

export default function TermsPage() {
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
      title: "Terms of Service",
      subtitle: "Please read these terms carefully before using Purpleware services.",
      lastUpdated: "Last updated: January 2025",
      acceptance: "Acceptance of Terms",
      acceptanceText:
        "By accessing and using Purpleware services, you accept and agree to be bound by the terms and provision of this agreement.",
      useOfService: "Use of Service",
      useText:
        "Purpleware provides gaming tools and software for educational and entertainment purposes. Users must comply with all applicable laws and regulations.",
      restrictions: "Restrictions",
      restrictionsText:
        "Users are prohibited from: redistributing our software without permission, using our tools for commercial purposes without authorization, attempting to reverse engineer or modify our software, and engaging in any illegal activities.",
      disclaimer: "Disclaimer",
      disclaimerText:
        "Purpleware tools are provided 'as is' without any warranties. We are not responsible for any consequences resulting from the use of our software, including but not limited to game bans or account suspensions.",
      limitation: "Limitation of Liability",
      limitationText:
        "In no event shall Purpleware be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services.",
      termination: "Termination",
      terminationText:
        "We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason whatsoever.",
      changes: "Changes to Terms",
      changesText:
        "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.",
      contact: "Contact Information",
      contactText:
        "If you have any questions about these Terms of Service, please contact us through our Discord server or direct message.",
    },
    RU: {
      title: "Условия использования",
      subtitle: "Пожалуйста, внимательно прочитайте эти условия перед использованием сервисов Purpleware.",
      lastUpdated: "Последнее обновление: Январь 2025",
      acceptance: "Принятие условий",
      acceptanceText:
        "Получая доступ и используя сервисы Purpleware, вы принимаете и соглашаетесь соблюдать условия и положения этого соглашения.",
      useOfService: "Использование сервиса",
      useText:
        "Purpleware предоставляет игровые инструменты и программное обеспечение в образовательных и развлекательных целях. Пользователи должны соблюдать все применимые законы и правила.",
      restrictions: "Ограничения",
      restrictionsText:
        "Пользователям запрещается: распространять наше программное обеспечение без разрешения, использовать наши инструменты в коммерческих целях без авторизации, пытаться реверс-инжинирить или модифицировать наше программное обеспечение, и заниматься любой незаконной деятельностью.",
      disclaimer: "Отказ от ответственности",
      disclaimerText:
        "Инструменты Purpleware предоставляются 'как есть' без каких-либо гарантий. Мы не несем ответственности за любые последствия, возникающие в результате использования нашего программного обеспечения, включая, но не ограничиваясь, банами в играх или приостановкой аккаунтов.",
      limitation: "Ограничение ответственности",
      limitationText:
        "Ни при каких обстоятельствах Purpleware не несет ответственности за любые косвенные, случайные, особые, последующие или штрафные убытки, возникающие в результате использования наших сервисов.",
      termination: "Прекращение",
      terminationText:
        "Мы оставляем за собой право прекратить или приостановить доступ к нашим сервисам немедленно, без предварительного уведомления, по любой причине.",
      changes: "Изменения в условиях",
      changesText:
        "Мы оставляем за собой право изменять эти условия в любое время. Изменения вступают в силу немедленно после публикации на нашем веб-сайте.",
      contact: "Контактная информация",
      contactText:
        "Если у вас есть вопросы об этих Условиях использования, пожалуйста, свяжитесь с нами через наш Discord сервер или прямое сообщение.",
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <div className="relative min-h-screen">
      {/* Purple Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 space-y-8">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-4 shadow-lg shadow-purple-600/30">
            <Scale className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>

          <p className="text-xl text-purple-200 max-w-3xl mx-auto">{t.subtitle}</p>
          <p className="text-sm text-purple-300">{t.lastUpdated}</p>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <TermsSection
            icon={<Shield className="h-5 w-5 text-purple-400" />}
            title={t.acceptance}
            content={t.acceptanceText}
          />

          <TermsSection
            icon={<Shield className="h-5 w-5 text-purple-400" />}
            title={t.useOfService}
            content={t.useText}
          />

          <TermsSection
            icon={<AlertTriangle className="h-5 w-5 text-red-400" />}
            title={t.restrictions}
            content={t.restrictionsText}
          />

          <TermsSection
            icon={<AlertTriangle className="h-5 w-5 text-yellow-400" />}
            title={t.disclaimer}
            content={t.disclaimerText}
          />

          <TermsSection
            icon={<Scale className="h-5 w-5 text-purple-400" />}
            title={t.limitation}
            content={t.limitationText}
          />

          <TermsSection
            icon={<AlertTriangle className="h-5 w-5 text-red-400" />}
            title={t.termination}
            content={t.terminationText}
          />

          <TermsSection
            icon={<Shield className="h-5 w-5 text-purple-400" />}
            title={t.changes}
            content={t.changesText}
          />

          <TermsSection
            icon={<Shield className="h-5 w-5 text-purple-400" />}
            title={t.contact}
            content={t.contactText}
          />
        </div>
      </div>
    </div>
  )
}

function TermsSection({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <Card className="bg-black/50 border border-purple-800/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-white">
          <div className="bg-purple-900/30 p-2 rounded-md">{icon}</div>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-purple-200 leading-relaxed">{content}</p>
      </CardContent>
    </Card>
  )
}
