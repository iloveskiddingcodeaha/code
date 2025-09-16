"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Shield, Zap, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const gameCategories = [
    {
      name: "CS2",
      description: "Premium subscription service for Counter-Strike 2 with exclusive features",
      href: "/cs2",
      icon: <span className="text-white font-bold text-sm">CS2</span>,
      isSubscription: true,
    },
    {
      name: "Roblox",
      description: "Free and premium Roblox exploits and scripts",
      href: "/roblox-cheats",
      icon: <span className="text-white font-bold text-sm">RBX</span>,
      isSubscription: false,
    },
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
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent relative">
                <span className="animate-sparkle">Welcome to Purpleware</span>
              </span>
            </h1>

            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">We skid so you dont.</p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/discord">
                <Button className="bg-black hover:bg-purple-900/30 text-purple-300 hover:text-white border border-purple-600/50 px-6 py-2.5 rounded-md shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 transition-all">
                  Join Discord
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Game Categories Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Premium Gaming Tools
            </h2>
            <p className="text-purple-200 max-w-2xl mx-auto">Quality tools for your favorite games.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gameCategories.map((game, index) => (
              <Link key={index} href={game.href} className="group">
                <Card className="bg-black/50 border border-purple-800/30 hover:border-purple-600/50 backdrop-blur-sm h-full transition-all hover:bg-purple-900/10 hover:shadow-lg hover:shadow-purple-600/10">
                  <CardContent className="p-6">
                    <div
                      className={`${game.isSubscription ? "bg-purple-600" : "bg-green-600"} w-12 h-12 rounded-md flex items-center justify-center mb-4 group-hover:${game.isSubscription ? "bg-purple-500" : "bg-green-500"} transition-colors shadow-lg`}
                    >
                      {game.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {game.name}
                      {game.isSubscription && (
                        <span className="ml-2 text-sm bg-purple-600 px-2 py-1 rounded">Premium</span>
                      )}
                    </h3>
                    <p className="text-purple-200 mb-4 group-hover:text-purple-100 transition-colors">
                      {game.description}
                    </p>
                    <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300">
                      {game.isSubscription ? "View Subscription" : "View Cheats"}{" "}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Why Choose Purpleware
            </h2>
            <p className="text-purple-200 max-w-2xl mx-auto">We deliver quality, reliability, and performance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield className="h-5 w-5 text-purple-400" />}
              title="Undetected"
              description="Our tools use advanced techniques to stay hidden from anti-cheat systems."
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5 text-purple-400" />}
              title="Regular Updates"
              description="Weekly updates to ensure compatibility with the latest game versions."
            />
            <FeatureCard
              icon={<Download className="h-5 w-5 text-purple-400" />}
              title="Easy Setup"
              description="Simple installation process with comprehensive support documentation."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="bg-purple-900/20 rounded-xl p-8 border border-purple-800/30 text-center backdrop-blur-sm">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-3 text-white">Ready to dominate?</h2>
              <p className="text-purple-200 mb-6">Join our community and access premium gaming tools.</p>
              <Link href="/discord">
                <Button className="bg-white text-black hover:bg-purple-100 px-6 py-2.5 rounded-md font-medium shadow-lg hover:shadow-xl transition-all">
                  Join Discord
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard number="1,000+" label="Happy Users" />
            <StatCard number="2" label="Game Platforms" />
            <StatCard number="10+" label="Different Tools" />
            <StatCard number="Weekly" label="Updates" />
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
