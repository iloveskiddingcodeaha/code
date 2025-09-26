"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Check, Key } from "lucide-react"
import Link from "next/link"
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
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Script Hub
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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

            <Card className="relative bg-black border-gray-800 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                {/* Script Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-white">{SCRIPT_NAME}</h2>
                  </div>
                  <p className="text-gray-400 text-lg">{SCRIPT_DESCRIPTION}</p>
                </div>

                {/* Script Code Display */}
                <div className="mb-8">
                  <div className="bg-black rounded-xl border border-gray-800 overflow-hidden">
                    <div className="bg-gray-900 px-4 py-2 border-b border-gray-800">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 font-mono text-sm">Script Code</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={handleCopyScript}
                          className="text-gray-400 hover:text-white hover:bg-gray-800"
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
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 text-lg"
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

                  <Link href="/key-system">
                    <Button
                      variant="outline"
                      className="border-purple-600 text-purple-400 hover:bg-purple-900/50 hover:text-white py-3 px-8 text-lg bg-transparent"
                    >
                      <Key className="h-5 w-5 mr-2" />
                      Key System
                    </Button>
                  </Link>
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
          <p className="text-gray-500">Need help? Join our Discord community for support and updates.</p>
        </motion.div>
      </div>
    </div>
  )
}
