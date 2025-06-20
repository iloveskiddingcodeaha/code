"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Lock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CSGOCheats() {
  // CSGO cheats data
  const cheats = [
    {
      id: 1,
      title: "CS:GO || Gamesense || HvH",
      game: "CSGO",
      description:
        "Top HvH cheat for cs:go, comes with powerful lua's and more, really good overall for a cracked hvh cheat, very unstable sometimes tho..",
      features: ["Aimbot", "Triggerbot", "HvH"],
      popular: true,
      downloadUrl: "https://github.com/iloveskiddingcodeaha/Purpleware/raw/refs/heads/main/Purpleware%20-skeet.zip",
      password: "Nothing!",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
  }

  return (
    <div className="space-y-12 relative">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-900 rounded-full blur-[120px] opacity-20 -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-900 rounded-full blur-[120px] opacity-20 -z-10"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="space-y-4"
      >
        <motion.div className="flex items-center justify-center gap-4 mb-6" animate={pulseAnimation}>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-full flex items-center justify-center shadow-lg shadow-purple-900/20">
            <span className="text-white font-bold text-xl">CSGO</span>
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            CSGO Legacy Cheats
          </span>
        </h1>
        <p className="text-lg text-purple-200 max-w-3xl mx-auto text-center">
          Still playing CSGO? We've got you covered with our classic cheats that have been undetected for years. Perfect
          for those who haven't switched to CS2 yet.
        </p>
      </motion.div>

      {/* Notice Banner */}
      <div className="bg-purple-900/30 border border-purple-900/50 rounded-lg p-4 text-center">
        <p className="text-purple-200">
          <span className="font-semibold">Note:</span> These cheats are for the original Counter-Strike: Global
          Offensive. If you're playing CS2, check out our{" "}
          <Link href="/fps-cheats" className="text-purple-400 hover:text-purple-300 underline">
            CS2 cheats
          </Link>{" "}
          instead.
        </p>
      </div>

      {/* Cheats Grid */}
      <motion.div className="grid md:grid-cols-2 gap-6" variants={containerVariants} initial="hidden" animate="visible">
        {cheats.map((cheat, index) => (
          <motion.div key={cheat.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="bg-[#0A0518] border-purple-900/40 hover:border-purple-700 transition-all duration-300 h-full">
              <motion.div className="bg-purple-900 h-24 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"
                  style={{
                    backgroundImage: `url('/grid.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <span className="text-white font-bold text-xl relative z-10">CSGO</span>
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
                    <Badge variant="outline" className="mb-2 border-purple-800/50 text-purple-200 bg-purple-900/30">
                      {cheat.game}
                    </Badge>
                    <CardTitle className="text-xl text-purple-100 group-hover:text-white transition-colors">
                      {cheat.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-purple-200 group-hover:text-purple-100 transition-colors">{cheat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cheat.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-purple-900/40 text-purple-100 border-purple-900/50"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-purple-300">
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
      </motion.div>

      {/* Additional Info Section */}
      <motion.div
        className="bg-[#0A0518]/90 border border-purple-900/40 rounded-xl p-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2 className="text-xl font-bold text-purple-100 mb-4">How to Use Our CSGO Cheats</h2>
        <ol className="space-y-3 text-purple-200">
          <motion.li
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="bg-purple-900/50 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
              1
            </span>
            <span>Download the cheat package using the download button</span>
          </motion.li>
          <motion.li
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="bg-purple-900/50 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
              2
            </span>
            <span>Extract the files using the provided password</span>
          </motion.li>
          <motion.li
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <span className="bg-purple-900/50 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
              3
            </span>
            <span>Run the loader as administrator and follow the on-screen instructions</span>
          </motion.li>
          <motion.li
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <span className="bg-purple-900/50 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
              4
            </span>
            <span>Launch CSGO and enjoy your enhanced gaming experience</span>
          </motion.li>
        </ol>
        <motion.div
          className="mt-4 text-purple-300 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Having trouble? Hit us up on Discord and we'll help you get set up.
        </motion.div>
      </motion.div>
    </div>
  )
}
