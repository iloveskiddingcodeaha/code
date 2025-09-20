"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Sparkles, Eye, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function RobloxCheats() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Main exploits/scripts
  const mainScripts = [
    {
      id: 1,
      title: "Synapse X",
      game: "Roblox Executor",
      description: "Premium Roblox executor with advanced features and Level 8 execution.",
      features: ["Level 8", "Script Hub", "Premium"],
      popular: true,
      slug: "synapse-x",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Synapse+X",
      uploader: "Admin",
      isPremium: true,
    },
    {
      id: 2,
      title: "KRNL Executor",
      game: "Roblox Executor",
      description: "Free Roblox executor with good stability and Level 7 execution capabilities.",
      features: ["Level 7", "Free", "Stable"],
      popular: true,
      slug: "krnl-executor",
      thumbnail: "/placeholder.svg?height=200&width=300&text=KRNL",
      uploader: "Admin",
      isPremium: false,
    },
    {
      id: 3,
      title: "Arsenal Aimbot",
      game: "Arsenal Script",
      description: "Advanced aimbot script for Arsenal with customizable settings and ESP features.",
      features: ["Aimbot", "ESP", "Silent Aim"],
      popular: false,
      slug: "arsenal-aimbot",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Arsenal+Aimbot",
      uploader: "Admin",
      isPremium: false,
    },
    {
      id: 4,
      title: "Blox Fruits Auto Farm",
      game: "Blox Fruits Script",
      description: "Complete auto farming script for Blox Fruits with quest automation and fruit collection.",
      features: ["Auto Farm", "Quest Bot", "Fruit Finder"],
      popular: true,
      slug: "blox-fruits-auto-farm",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Blox+Fruits",
      uploader: "Admin",
      isPremium: false,
    },
  ]

  // New scripts row
  const newScripts = [
    {
      id: 5,
      title: "Da Hood Silent Aim",
      game: "Da Hood Script",
      description: "Silent aim script for Da Hood with rage features and anti-lock bypass.",
      features: ["Silent Aim", "Rage", "Anti-Lock"],
      popular: true,
      new: true,
      slug: "da-hood-silent-aim",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Da+Hood",
      uploader: "Admin",
      isPremium: false,
    },
    {
      id: 6,
      title: "Pet Simulator X Dupe",
      game: "Pet Simulator X Script",
      description: "Pet duplication script for Pet Simulator X with auto-hatch and mailbox features.",
      features: ["Pet Dupe", "Auto Hatch", "Mailbox"],
      popular: true,
      new: true,
      slug: "pet-sim-x-dupe",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Pet+Sim+X",
      uploader: "Admin",
      isPremium: false,
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">
            Roblox Exploits & Scripts
          </span>
        </motion.h1>
        <motion.p
          className="text-lg text-green-200 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Powerful exploits and scripts for Roblox games.
        </motion.p>
      </motion.div>

      {/* Popular Scripts Grid */}
      <div>
        <motion.h2
          className="text-2xl font-bold text-green-100 mb-6"
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

      {/* New Scripts Row */}
      <div>
        <motion.h2
          className="text-2xl font-bold text-green-100 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          New Scripts
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          transition={{ delayChildren: 0.3 }}
        >
          {newScripts.map((script) => (
            <ScriptCard key={script.id} script={script} index={0} itemVariants={itemVariants} isNew />
          ))}
        </motion.div>
      </div>

      {/* Instructions Section */}
      <motion.div
        className="bg-[#050212] border border-green-900/40 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-green-100 mb-4">How to use scripts</h3>
        <ol className="space-y-3 text-green-200">
          {[
            "Click on any script to view details and download",
            "Download your preferred executor (KRNL, Synapse X, etc.)",
            "Run the executor as administrator",
            "Inject into Roblox and paste the script",
          ].map((step, index) => (
            <motion.li
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <span className="bg-green-900 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                {index + 1}
              </span>
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
  isNew = false,
}: {
  script: any
  index: number
  itemVariants: any
  isNew?: boolean
}) {
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <Card className="bg-[#050212] border-green-900/40 hover:border-green-700 transition-all duration-300 h-full overflow-hidden">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={script.thumbnail || "/placeholder.svg"}
            alt={script.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Badges */}
          <div className="absolute top-2 right-2 flex gap-2">
            {script.popular && (
              <Badge className={script.isPremium ? "bg-purple-700" : "bg-green-700"}>
                <Star className="h-3 w-3 mr-1" /> Popular
              </Badge>
            )}
            {isNew && (
              <Badge className="bg-blue-600">
                <Sparkles className="h-3 w-3 mr-1" /> NEW
              </Badge>
            )}
            {!script.isPremium && <Badge className="bg-green-600">FREE</Badge>}
          </div>

          {/* Stats overlay - Remove downloads */}
          <div className="absolute bottom-2 left-2 flex items-center gap-3 text-white text-sm">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{script.uploader}</span>
            </div>
          </div>
        </div>

        <CardHeader className="pb-3">
          <Badge variant="outline" className="mb-2 w-fit border-green-800/50 text-green-200 bg-green-900/30">
            {script.game}
          </Badge>
          <CardTitle className="text-lg text-green-100">{script.title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 pb-3">
          <p className="text-green-200 text-sm line-clamp-2">{script.description}</p>
          <div className="flex flex-wrap gap-1">
            {script.features.slice(0, 3).map((feature: string, idx: number) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-green-900/40 text-green-100 border-green-900/50 text-xs"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Link href={`/roblox-cheats/${script.slug}`} className="w-full">
            <Button className="w-full bg-zinc-900 hover:bg-zinc-800 border border-green-800/50 text-green-300 hover:text-white transition-all duration-300 group">
              <Eye className="mr-2 h-4 w-4" />
              View Script
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
