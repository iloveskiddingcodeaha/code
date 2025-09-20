"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, User, Calendar, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"

// Mock data - in a real app, this would come from a database
const scriptsData = {
  "synapse-x": {
    id: 1,
    title: "Synapse X",
    game: "Roblox Executor",
    description:
      "Synapse X is the premier Roblox executor, offering unparalleled script execution capabilities with Level 8 access. This premium tool provides advanced features including a built-in script hub, custom DLL injection, and superior stability. Perfect for serious scripters who demand the best performance and reliability.",
    longDescription: `Synapse X stands as the gold standard in Roblox script execution. With its Level 8 execution capabilities, you can run even the most complex scripts without limitations. 

Key Features:
• Level 8 script execution - Run any script without restrictions
• Built-in script hub with hundreds of verified scripts
• Advanced debugging tools and error handling
• Custom DLL injection for maximum compatibility
• Regular updates to maintain compatibility with Roblox updates
• Premium support from our development team

This executor is perfect for advanced users who need reliable, powerful script execution. Whether you're running complex game scripts or developing your own, Synapse X provides the tools you need.`,
    features: ["Level 8 Execution", "Script Hub", "Premium Support", "DLL Injection", "Advanced Debugging"],
    thumbnail: "/placeholder.svg?height=400&width=600&text=Synapse+X+Screenshot",
    uploader: "Admin",
    uploadDate: "2024-01-15",
    downloads: 15420,
    rating: 4.8,
    isPremium: true,
    downloadUrl: "https://example.com/synapse-x-download",
    fileSize: "12.5 MB",
    version: "v3.0.5b",
    requirements: ["Windows 10/11", "Roblox Client", ".NET Framework 4.8"],
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Synapse+X+Interface",
      "/placeholder.svg?height=300&width=500&text=Script+Hub",
      "/placeholder.svg?height=300&width=500&text=Execution+Panel",
    ],
  },
  "krnl-executor": {
    id: 2,
    title: "KRNL Executor",
    game: "Roblox Executor",
    description:
      "KRNL is a powerful, free Roblox executor that offers Level 7 script execution capabilities. Known for its stability and user-friendly interface, KRNL is perfect for beginners and experienced users alike. Regular updates ensure compatibility with the latest Roblox versions.",
    longDescription: `KRNL has established itself as one of the most reliable free Roblox executors available. With Level 7 execution capabilities, it can handle the vast majority of scripts while maintaining excellent stability.

Key Features:
• Level 7 script execution - Compatible with most scripts
• Completely free to use with no hidden costs
• User-friendly interface perfect for beginners
• Regular updates to maintain Roblox compatibility
• Active community support and script sharing
• Lightweight and fast execution

KRNL is ideal for users who want a reliable executor without the premium price tag. It's perfect for running popular game scripts and exploring the world of Roblox scripting.`,
    features: ["Level 7 Execution", "Free", "User Friendly", "Regular Updates", "Community Support"],
    thumbnail: "/placeholder.svg?height=400&width=600&text=KRNL+Interface",
    uploader: "Admin",
    uploadDate: "2024-01-20",
    downloads: 28350,
    rating: 4.6,
    isPremium: false,
    downloadUrl: "https://example.com/krnl-download",
    fileSize: "8.2 MB",
    version: "v2.4.1",
    requirements: ["Windows 10/11", "Roblox Client", "Visual C++ Redistributable"],
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=KRNL+Main+Interface",
      "/placeholder.svg?height=300&width=500&text=Script+Editor",
      "/placeholder.svg?height=300&width=500&text=Settings+Panel",
    ],
  },
  "arsenal-aimbot": {
    id: 3,
    title: "Arsenal Aimbot",
    game: "Arsenal Script",
    description:
      "Advanced aimbot script for Arsenal featuring customizable settings, ESP, and silent aim capabilities. Dominate the battlefield with precision targeting and enhanced visual information.",
    longDescription: `This Arsenal aimbot script provides everything you need to dominate in Arsenal matches. With advanced targeting algorithms and customizable settings, you can fine-tune your gameplay experience.

Features:
• Advanced aimbot with customizable FOV and smoothness
• ESP (Extra Sensory Perception) to see enemies through walls
• Silent aim for undetectable targeting
• Customizable keybinds and settings
• Anti-detection measures built-in
• Works with all Arsenal game modes

Perfect for players who want to improve their Arsenal performance and climb the leaderboards. The script is regularly updated to maintain compatibility with Arsenal updates.`,
    features: ["Aimbot", "ESP", "Silent Aim", "Customizable", "Anti-Detection"],
    thumbnail: "/placeholder.svg?height=400&width=600&text=Arsenal+Aimbot+Preview",
    uploader: "Admin",
    uploadDate: "2024-01-18",
    downloads: 8920,
    rating: 4.4,
    isPremium: false,
    downloadUrl: "https://example.com/arsenal-aimbot-script",
    fileSize: "2.1 MB",
    version: "v1.8.3",
    requirements: ["Any Roblox Executor", "Arsenal Game"],
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Aimbot+Settings",
      "/placeholder.svg?height=300&width=500&text=ESP+Preview",
      "/placeholder.svg?height=300&width=500&text=In-Game+Usage",
    ],
  },
  "blox-fruits-auto-farm": {
    id: 4,
    title: "Blox Fruits Auto Farm",
    game: "Blox Fruits Script",
    description:
      "Complete automation script for Blox Fruits featuring auto farming, quest completion, fruit collection, and level grinding. Save time and progress faster with this comprehensive script.",
    longDescription: `This comprehensive Blox Fruits script automates virtually every aspect of the game, allowing you to progress efficiently while away from your computer.

Complete Feature Set:
• Auto farm NPCs and bosses for maximum XP gain
• Automatic quest acceptance and completion
• Fruit finder and auto-collection system
• Auto stats allocation based on your build
• Teleportation to farming locations
• Auto-dodge and combat optimization
• Safe anti-detection measures

Whether you're a new player looking to level up quickly or a veteran grinding for end-game content, this script provides everything you need to maximize your Blox Fruits experience.`,
    features: ["Auto Farm", "Quest Bot", "Fruit Finder", "Auto Stats", "Teleportation"],
    thumbnail: "/placeholder.svg?height=400&width=600&text=Blox+Fruits+Auto+Farm",
    uploader: "Admin",
    uploadDate: "2024-01-22",
    downloads: 45230,
    rating: 4.9,
    isPremium: false,
    downloadUrl: "https://example.com/blox-fruits-script",
    fileSize: "5.7 MB",
    version: "v4.2.1",
    requirements: ["Level 7+ Executor", "Blox Fruits Game"],
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Auto+Farm+Interface",
      "/placeholder.svg?height=300&width=500&text=Quest+System",
      "/placeholder.svg?height=300&width=500&text=Fruit+Collection",
    ],
  },
  "da-hood-silent-aim": {
    id: 5,
    title: "Da Hood Silent Aim",
    game: "Da Hood Script",
    description:
      "Advanced silent aim script for Da Hood with rage features and anti-lock bypass. Dominate PvP encounters with undetectable targeting and enhanced combat features.",
    longDescription: `This Da Hood script is designed for serious PvP players who want to dominate the streets. With advanced silent aim technology and rage features, you'll have a significant advantage in combat.

Advanced Features:
• Silent aim with customizable targeting
• Rage mode for maximum damage output
• Anti-lock bypass to counter enemy scripts
• Customizable keybinds and settings
• ESP to track enemies and items
• Anti-detection and security measures

Perfect for players who want to excel in Da Hood's competitive PvP environment. The script is optimized for performance and regularly updated for compatibility.`,
    features: ["Silent Aim", "Rage Mode", "Anti-Lock", "ESP", "PvP Optimized"],
    thumbnail: "/placeholder.svg?height=400&width=600&text=Da+Hood+Silent+Aim",
    uploader: "Admin",
    uploadDate: "2024-01-25",
    downloads: 12450,
    rating: 4.5,
    isPremium: false,
    downloadUrl: "https://example.com/da-hood-script",
    fileSize: "3.4 MB",
    version: "v2.1.0",
    requirements: ["Level 6+ Executor", "Da Hood Game"],
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Silent+Aim+Settings",
      "/placeholder.svg?height=300&width=500&text=Rage+Features",
      "/placeholder.svg?height=300&width=500&text=Combat+Interface",
    ],
  },
  "pet-sim-x-dupe": {
    id: 6,
    title: "Pet Simulator X Dupe",
    game: "Pet Simulator X Script",
    description:
      "Pet duplication script for Pet Simulator X with auto-hatch, mailbox features, and inventory management. Multiply your pets and dominate the leaderboards.",
    longDescription: `This Pet Simulator X script provides powerful duplication and automation features to help you build the ultimate pet collection and dominate the game.

Comprehensive Features:
• Pet duplication system for rare pets
• Auto-hatch eggs with customizable settings
• Mailbox automation for trading and gifts
• Inventory management and organization
• Auto-farm coins and gems
• Teleportation to all game areas
• Anti-detection security measures

Whether you're looking to duplicate rare pets or automate the grinding process, this script provides all the tools you need to excel in Pet Simulator X.`,
    features: ["Pet Duplication", "Auto Hatch", "Mailbox Auto", "Inventory Management", "Anti-Detection"],
    thumbnail: "/placeholder.svg?height=400&width=600&text=Pet+Sim+X+Dupe",
    uploader: "Admin",
    uploadDate: "2024-01-28",
    downloads: 23180,
    rating: 4.7,
    isPremium: false,
    downloadUrl: "https://example.com/pet-sim-x-script",
    fileSize: "4.1 MB",
    version: "v3.5.2",
    requirements: ["Level 7+ Executor", "Pet Simulator X Game"],
    screenshots: [
      "/placeholder.svg?height=300&width=500&text=Duplication+Interface",
      "/placeholder.svg?height=300&width=500&text=Auto+Hatch+Settings",
      "/placeholder.svg?height=300&width=500&text=Mailbox+Features",
    ],
  },
}

export default function ScriptDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const script = scriptsData[slug as keyof typeof scriptsData]

  if (!script) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Script Not Found</h1>
        <Link href="/roblox-cheats">
          <Button className="bg-green-600 hover:bg-green-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Scripts
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Back Button */}
      <Link href="/roblox-cheats">
        <Button variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-900/20">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Scripts
        </Button>
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="mb-2 bg-green-600">{script.game}</Badge>
                <h1 className="text-3xl font-bold text-white mb-2">{script.title}</h1>
                <p className="text-green-200 text-lg">{script.description}</p>
              </div>
              {script.isPremium && <Badge className="bg-purple-600 text-white">Premium</Badge>}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm text-green-300">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>By {script.uploader}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(script.uploadDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{script.rating}/5</span>
              </div>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-80 rounded-lg overflow-hidden"
          >
            <Image src={script.thumbnail || "/placeholder.svg"} alt={script.title} fill className="object-cover" />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">Features</h3>
            <div className="flex flex-wrap gap-2">
              {script.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="bg-green-900/40 text-green-100 border-green-900/50">
                  {feature}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
            <div className="text-green-200 whitespace-pre-line leading-relaxed">{script.longDescription}</div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Download Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-[#050212] border-green-900/40">
              <CardHeader>
                <CardTitle className="text-green-100 flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-300">Version:</span>
                    <span className="text-white">{script.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-300">File Size:</span>
                    <span className="text-white">{script.fileSize}</span>
                  </div>
                </div>

                <Link href={script.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
