"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Star, Code, Copy, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ScriptHub() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [copied, setCopied] = useState(false)

  // Script configuration - easy to change later
  const SCRIPT_URL = "https://github.com/iloveskiddingcodeaha/PurpleLoader/blob/main/Loader"
  const SCRIPT_NAME = "PurpleLoader"
  const SCRIPT_DESCRIPTION = "Universal Roblox script loader with advanced features and clean interface"

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleCopyScript = async () => {
    try {
      await navigator.clipboard.writeText(`loadstring(game:HttpGet("${SCRIPT_URL}"))()`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy script:", err)
    }
  }

  const handleDownloadScript = () => {
    window.open(SCRIPT_URL, "_blank")
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-purple-950">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full mb-6"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Code className="text-white h-10 w-10" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Script Hub
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Premium universal script with advanced features and clean interface
          </p>
        </motion.div>

        {/* Main Script Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur opacity-25"></div>

            <Card className="relative bg-gradient-to-br from-gray-900 via-purple-950/50 to-gray-900 border-purple-800/50 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                {/* Script Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                      <Code className="text-white h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{SCRIPT_NAME}</h2>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="font-semibold">4.9</span>
                    </div>
                  </div>
                  <p className="text-purple-200 text-lg">{SCRIPT_DESCRIPTION}</p>
                </div>

                {/* Script Code Display */}
                <div className="mb-8">
                  <div className="bg-black/50 rounded-xl border border-purple-800/30 overflow-hidden">
                    <div className="bg-purple-900/30 px-4 py-2 border-b border-purple-800/30">
                      <div className="flex items-center justify-between">
                        <span className="text-purple-200 font-mono text-sm">Script Code</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={handleCopyScript}
                          className="text-purple-300 hover:text-white hover:bg-purple-800/50"
                        >
                          {copied ? (
                            <>
                              <Check className="h-4 w-4 mr-1" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-1" />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <code className="text-green-400 font-mono text-sm break-all">
                        loadstring(game:HttpGet("{SCRIPT_URL}"))()
                      </code>
                    </div>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleCopyScript}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-8 text-lg"
                  >
                    {copied ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Copied to Clipboard!
                      </>
                    ) : (
                      <>
                        <Copy className="h-5 w-5 mr-2" />
                        Copy Script
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={handleDownloadScript}
                    variant="outline"
                    className="border-purple-600 text-purple-300 hover:bg-purple-900/50 hover:text-white py-3 px-8 text-lg bg-transparent"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    View Source
                  </Button>
                </div>

                {/* Usage Instructions */}
                <div className="mt-12 bg-purple-950/30 rounded-xl p-6 border border-purple-800/30">
                  <h3 className="text-xl font-semibold text-purple-100 mb-4 text-center">How to Use</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        step: "1",
                        title: "Copy Script",
                        description: "Click the copy button above to copy the script to your clipboard",
                      },
                      {
                        step: "2",
                        title: "Open Executor",
                        description: "Launch your favorite Roblox executor (Solara, KRNL, etc.)",
                      },
                      {
                        step: "3",
                        title: "Execute",
                        description: "Paste and execute the script in your executor",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                          {item.step}
                        </div>
                        <h4 className="text-purple-100 font-semibold mb-2">{item.title}</h4>
                        <p className="text-purple-300 text-sm">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-purple-900/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">25K+</div>
                    <div className="text-purple-300 text-sm">Downloads</div>
                  </div>
                  <div className="bg-purple-900/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <div className="text-purple-300 text-sm">Rating</div>
                  </div>
                  <div className="bg-purple-900/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-purple-300 text-sm">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="max-w-2xl mx-auto mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-purple-300">Need help? Join our Discord community for support and updates.</p>
        </motion.div>
      </div>
    </div>
  )
}
