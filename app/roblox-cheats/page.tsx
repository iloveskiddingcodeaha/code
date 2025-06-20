"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Lock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function RobloxCheats() {
  // Sample Roblox cheats data
  const cheats = [
    {
      id: 1,
      title: "Roblox || Xeno || Executor",
      game: "Roblox",
      description:
        "All-in-one script executor with support for hundreds of popular Roblox games. Regular updates and new scripts added weekly.",
      features: ["Multi-Game", "Auto-Update", "Script Hub"],
      popular: true,
      downloadUrl: "https://www.mediafire.com/file/m58tkql3yfro1db/Xeno-v1.1.75.zip/file",
      password: "Nothing!",
    },
    {
      id: 2,
      title: "Roblox || Visual || Executor",
      game: "Roblox",
      description:
        "Powerful script executor with built-in script hub and keyless system. Works great for most popular games like Arsenal, Blox Fruits, and more.",
      features: ["Keyless", "Built-in Scripts", "Fast Injection"],
      popular: true,
      downloadUrl: "https://lootdest.org/s?g7ItR7JK",
      password: "Nothing!",
    },
  ]

  return (
    <div className="space-y-12 relative">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-900 rounded-full blur-[120px] opacity-10 -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-900 rounded-full blur-[120px] opacity-10 -z-10"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-full flex items-center justify-center shadow-lg shadow-purple-900/20">
            <span className="text-white font-bold text-xl">RBX</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
            Roblox Cheats & Scripts
          </span>
        </h1>
        <p className="text-lg text-purple-100 max-w-3xl mx-auto text-center">
          Enhance your Roblox experience with our premium scripts and exploits. All products are regularly updated and
          tested to ensure compatibility with the latest game versions.
        </p>
      </motion.div>

      {/* Cheats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cheats.map((cheat, index) => (
          <motion.div
            key={cheat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="bg-[#0A0518] border-purple-900/40 hover:border-purple-700 transition-all duration-300 h-full">
              <motion.div className="bg-purple-900 h-24 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <span className="text-white font-bold text-xl relative z-10">RBX</span>
                {cheat.popular && (
                  <motion.div
                    className="absolute top-2 right-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Badge className="bg-purple-700">
                      <Star className="h-3 w-3 mr-1" /> Popular
                    </Badge>
                  </motion.div>
                )}
              </motion.div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge variant="outline" className="mb-2 border-blue-900/50 text-purple-300 bg-blue-900/30">
                      {cheat.game}
                    </Badge>
                    <CardTitle className="text-xl text-purple-100 group-hover:text-white transition-colors">
                      {cheat.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-purple-300 group-hover:text-purple-200 transition-colors">{cheat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cheat.features.map((feature: string, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-900/40 text-purple-200 border-blue-900/50"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-purple-400">
                  <div className="flex items-center text-amber-400">
                    <Lock className="h-3 w-3 mr-1" /> Password: {cheat.password}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={cheat.downloadUrl} className="w-full" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-800 hover:bg-purple-700 relative overflow-hidden group">
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-700/0 via-purple-700/30 to-purple-700/0"
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
                      Download <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="bg-[#0A0518] border-purple-900/40 rounded-xl p-6">
        <h2 className="text-xl font-bold text-purple-200 mb-4">How to Use Our Roblox Scripts</h2>
        <ol className="space-y-3 text-purple-300">
          <li className="flex items-start">
            <span className="bg-blue-900/50 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
              1
            </span>
            <span>Download the script package using the download button</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-900/50 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
              2
            </span>
            <span>Extract the files using the provided password</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-900/50 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
              3
            </span>
            <span>Open your Roblox executor and load the script</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-900/50 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
              4
            </span>
            <span>Execute the script and enjoy your enhanced gaming experience</span>
          </li>
        </ol>
        <div className="mt-4 text-purple-400 text-sm">
          For detailed installation instructions and troubleshooting, join our Discord server.
        </div>
      </div>
    </div>
  )
}
