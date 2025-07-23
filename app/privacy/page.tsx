"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Database, Lock } from "lucide-react"
import { useEffect, useState } from "react"

export default function PrivacyPage() {
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
      title: "Privacy Policy",
      subtitle: "Your privacy is important to us. This policy explains how we handle your information.",
      lastUpdated: "Last updated: January 2025",
      overview: "Overview",
      overviewText:
        "Purpleware is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.",
      infoCollected: "Information We Collect",
      infoCollectedText:
        "We may collect basic usage data, Discord usernames when you contact support, IP addresses for security purposes, and system information for compatibility checks. We do not collect personal information unless voluntarily provided.",
      howWeUse: "How We Use Information",
      howWeUseText:
        "Information is used to provide and improve our services, respond to support requests, ensure security and prevent abuse, and analyze usage patterns to enhance user experience.",
      dataSharing: "Data Sharing",
      dataSharingText:
        "We do not sell, trade, or rent your personal information to third parties. We may share information only when required by law or to protect our rights and users' safety.",
      dataSecurity: "Data Security",
      dataSecurityText:
        "We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
      cookies: "Cookies and Tracking",
      cookiesText:
        "Our website may use cookies to enhance user experience and analyze website traffic. You can disable cookies in your browser settings, though this may affect functionality.",
      thirdParty: "Third-Party Services",
      thirdPartyText:
        "Our website may contain links to third-party services. We are not responsible for the privacy practices of these external sites. Please review their privacy policies.",
      userRights: "Your Rights",
      userRightsText:
        "You have the right to request information about data we hold, request correction of inaccurate data, request deletion of your data, and opt-out of certain data processing activities.",
      changes: "Changes to Privacy Policy",
      changesText:
        "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.",
      contact: "Contact Us",
      contactText:
        "If you have questions about this Privacy Policy, please contact us through our Discord server or direct message @hhushed.",
    },
    RU: {
      title: "Политика конфиденциальности",
      subtitle: "Ваша конфиденциальность важна для нас. Эта политика объясняет, как мы обрабатываем вашу информацию.",
      lastUpdated: "Последнее обновление: Январь 2025",
      overview: "Обзор",
      overviewText:
        "Purpleware привержена защите вашей конфиденциальности. Эта Политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию при использовании наших сервисов.",
      infoCollected: "Информация, которую мы собираем",
      infoCollectedText:
        "Мы можем собирать базовые данные об использовании, имена пользователей Discord при обращении в поддержку, IP-адреса в целях безопасности и системную информацию для проверки совместимости. Мы не собираем личную информацию, если она не предоставлена добровольно.",
      howWeUse: "Как мы используем информацию",
      howWeUseText:
        "Информация используется для предоставления и улучшения наших сервисов, ответа на запросы поддержки, обеспечения безопасности и предотвращения злоупотреблений, а также анализа паттернов использования для улучшения пользовательского опыта.",
      dataSharing: "Обмен данными",
      dataSharingText:
        "Мы не продаем, не обмениваем и не сдаем в аренду вашу личную информацию третьим лицам. Мы можем делиться информацией только когда это требуется по закону или для защиты наших прав и безопасности пользователей.",
      dataSecurity: "Безопасность данных",
      dataSecurityText:
        "Мы внедряем соответствующие меры безопасности для защиты вашей информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни один метод передачи через интернет не является на 100% безопасным.",
      cookies: "Куки и отслеживание",
      cookiesText:
        "Наш веб-сайт может использовать куки для улучшения пользовательского опыта и анализа трафика веб-сайта. Вы можете отключить куки в настройках браузера, хотя это может повлиять на функциональность.",
      thirdParty: "Сторонние сервисы",
      thirdPartyText:
        "Наш веб-сайт может содержать ссылки на сторонние сервисы. Мы не несем ответственности за практики конфиденциальности этих внешних сайтов. Пожалуйста, ознакомьтесь с их политиками конфиденциальности.",
      userRights: "Ваши права",
      userRightsText:
        "Вы имеете право запросить информацию о данных, которые мы храним, запросить исправление неточных данных, запросить удаление ваших данных и отказаться от определенных действий по обработке данных.",
      changes: "Изменения в Политике конфиденциальности",
      changesText:
        "Мы можем время от времени обновлять эту Политику конфиденциальности. Изменения будут опубликованы на этой странице с обновленной датой пересмотра.",
      contact: "Свяжитесь с нами",
      contactText:
        "Если у вас есть вопросы об этой Политике конфиденциальности, пожалуйста, свяжитесь с нами через наш Discord сервер или прямое сообщение @hhushed.",
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
            <Shield className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>

          <p className="text-xl text-purple-200 max-w-3xl mx-auto">{t.subtitle}</p>
          <p className="text-sm text-purple-300">{t.lastUpdated}</p>
        </div>

        {/* Privacy Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <PrivacySection
            icon={<Eye className="h-5 w-5 text-purple-400" />}
            title={t.overview}
            content={t.overviewText}
          />

          <PrivacySection
            icon={<Database className="h-5 w-5 text-blue-400" />}
            title={t.infoCollected}
            content={t.infoCollectedText}
          />

          <PrivacySection
            icon={<Shield className="h-5 w-5 text-green-400" />}
            title={t.howWeUse}
            content={t.howWeUseText}
          />

          <PrivacySection
            icon={<Lock className="h-5 w-5 text-yellow-400" />}
            title={t.dataSharing}
            content={t.dataSharingText}
          />

          <PrivacySection
            icon={<Shield className="h-5 w-5 text-purple-400" />}
            title={t.dataSecurity}
            content={t.dataSecurityText}
          />

          <PrivacySection
            icon={<Eye className="h-5 w-5 text-orange-400" />}
            title={t.cookies}
            content={t.cookiesText}
          />

          <PrivacySection
            icon={<Database className="h-5 w-5 text-red-400" />}
            title={t.thirdParty}
            content={t.thirdPartyText}
          />

          <PrivacySection
            icon={<Lock className="h-5 w-5 text-green-400" />}
            title={t.userRights}
            content={t.userRightsText}
          />

          <PrivacySection
            icon={<Shield className="h-5 w-5 text-purple-400" />}
            title={t.changes}
            content={t.changesText}
          />

          <PrivacySection
            icon={<Shield className="h-5 w-5 text-purple-400" />}
            title={t.contact}
            content={t.contactText}
          />
        </div>
      </div>
    </div>
  )
}

function PrivacySection({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
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
