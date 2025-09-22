"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function RobloxCheats() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Main scripts (game-specific scripts)
  const mainScripts = [
    {
      id: 3,
      title: "Fisch Script",
      game: "Fisch Script",
      description: "Script for fisch, really goood for auto-farming and staying undeteced.",
      features: ["Auto-Fisch", "Teleport", "Dupe"],
      slug: "FischScript",
      thumbnail: "/images/asdasdas.png",
      uploader: "Admin",
    },
    {
      id: 4,
      title: "Blox Fruits Auto Farm",
      game: "Blox Fruits Script",
      description: "Complete auto farming script for Blox Fruits with quest automation and fruit collection.",
      features: ["Auto Farm", "Quest Bot", "Fruit Finder"],
      slug: "blox-fruits-auto-farm",
      thumbnail: "/images/blox-fruits-game-logo-npygzghjgcfk6h0d.webp",
      uploader: "Admin",
    },
    {
      id: 5,
      title: "99 Nights In The Forest Script",
      game: "99 Nights In The Forest",
      description: "Best script that is keyless for 99 nights in the Forest",
      features: ["Auto-farm", "Auto-fuel", "Bring all"],
      slug: "99-nights-script",
      thumbnail: "/images/99.png",
      uploader: "Admin",
    },
    {
      id: 6,
      title: "Pet Simulator X Dupe",
      game: "Pet Simulator X Script",
      description: "Pet duplication script for Pet Simulator X with auto-hatch and mailbox features.",
      features: ["Pet Dupe", "Auto Hatch", "Mailbox"],
      slug: "pet-sim-x-dupe",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Pet+Sim+X",
      uploader: "Admin",
    },
  ]

  // Executors (moved to "More Scripts" section)
  const executors = [
    {
      id: 1,
      title: "Solara",
      game: "Roblox Executor",
      description: "Powerful Roblox executor with advanced features and reliable execution.",
      features: ["Advanced Execution", "User Friendly", "Free"],
      slug: "Solara",
      thumbnail: "/images/solara-logo.png",
      uploader: "Admin",
    },
    {
      id: 2,
      title: "KRNL Executor",
      game: "Roblox Executor",
      description: "Free Roblox executor with good stability and Level 7 execution capabilities.",
      features: ["Level 7", "Free", "Stable"],
      slug: "krnl-executor",
      thumbnail: "/placeholder.svg?height=200&width=300&text=KRNL",
      uploader: "Admin",
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
          <span className="text-white font-bold text-xl">RBX</span>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            Roblox Executors & Scripts
          </span>
        </motion.h1>
        <motion.p
          className="text-lg text-purple-200 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Executors and scripts for Roblox.
        </motion.p>
      </motion.div>

      {/* Popular Scripts Grid (Game Scripts) */}
      <div>
        <motion.h2
          className="text-2xl font-bold text-purple-100 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Popular Scripts
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {mainScripts.map((script, index) => (
            <ScriptCard key={script.id} script={script} index={index} itemVariants={itemVariants} />
          ))}
        </motion.div>
      </div>

      {/* Executors Section (Previously "More Scripts") */}
      <div>
        <motion.h2
          className="text-2xl font-bold text-purple-100 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Executors
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={{ delayChildren: 0.3 }}
        >
          {executors.map((executor) => (
            <ScriptCard key={executor.id} script={executor} index={0} itemVariants={itemVariants} />
          ))}
        </motion.div>
      </div>

      {/* Instructions Section */}
      <motion.div
        className="bg-[#050212] border border-purple-900/40 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-purple-100 mb-4">How to use scripts</h3>
        <ol className="space-y-3 text-purple-200">
          {[
            "Download an executor from the Executors section (Solara, KRNL, etc.)",
            "Run the executor as administrator",
            "Click on any script from Popular Scripts to view details and copy the code",
            "Inject into Roblox and paste the script code",
          ].map((step, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <span className="bg-purple-900 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                {index + 1}
              </span>
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
          Need help? Join our Discord for support and script sharing.
        </motion.div>
      </motion.div>
    </div>
  )
}

function ScriptCard({
  script,
  index,
  itemVariants,
}: {
  script: any
  index: number
  itemVariants: any
}) {
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <Card className="bg-[#050212] border-purple-900/40 hover:border-purple-700 transition-all duration-300 h-full overflow-hidden">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={script.thumbnail || "/placeholder.svg"}
            alt={script.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Stats overlay */}
          <div className="absolute bottom-2 left-2 flex items-center gap-3 text-white text-sm">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{script.uploader}</span>
            </div>
          </div>
        </div>

        <CardHeader className="pb-3">
          <Badge variant="outline" className="mb-2 w-fit border-purple-800/50 text-purple-200 bg-purple-900/30">
            {script.game}
          </Badge>
          <CardTitle className="text-lg text-purple-100">{script.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 pb-3">
          <p className="text-purple-200 text-sm line-clamp-2">{script.description}</p>
          <div className="flex flex-wrap gap-1">
            {script.features.slice(0, 3).map((feature: string, idx: number) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-purple-900/40 text-purple-100 border-purple-900/50 text-xs"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Link href={`/roblox-cheats/${script.slug}`} className="w-full">
            <Button className="w-full bg-zinc-900 hover:bg-zinc-800 border border-purple-800/50 text-purple-300 hover:text-white transition-all duration-300 group">
              <Eye className="mr-2 h-4 w-4" />
              View Script
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
