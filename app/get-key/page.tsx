"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Key, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function GetKey() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleGetKey = () => {
    window.open("https://workink.net", "_blank", "noopener,noreferrer")
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
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/script-hub">
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Script Hub
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Get Key
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Get your access key to unlock premium features</p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl blur opacity-20"></div>

            <Card className="relative bg-gray-900 border-gray-800 rounded-2xl">
              <CardContent className="p-8">
                {/* Instructions */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">How to Get Your Key</h2>
                  <p className="text-gray-400 mb-6">Follow these simple steps to get your access key:</p>
                </div>

                {/* Steps */}
                <div className="space-y-6 mb-8">
                  {[
                    {
                      step: "1",
                      title: "Visit Key Site",
                      description: "Click the button below to visit our key generation site",
                    },
                    {
                      step: "2",
                      title: "Complete Tasks",
                      description: "Complete the required tasks on the external site",
                    },
                    {
                      step: "3",
                      title: "Get Your Key",
                      description: "Copy your generated key from the site",
                    },
                    {
                      step: "4",
                      title: "Return Here",
                      description: "Come back and use your key to access premium features",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Get Key Button */}
                <div className="text-center mb-8">
                  <Button
                    onClick={handleGetKey}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 text-lg"
                  >
                    <Key className="h-5 w-5 mr-2" />
                    Get Key
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>

                {/* Warning */}
                <motion.div
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex items-start gap-3">
                    <ExternalLink className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">External Site Notice</h4>
                      <p className="text-gray-400 text-sm">
                        You will be redirected to an external site (workink.net) to complete the key generation process.
                        This is normal and required for our key system.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* FAQ */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-white text-center mb-4">Frequently Asked Questions</h3>

                  <div className="space-y-3">
                    <motion.div
                      className="bg-gray-800 rounded-lg p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <h4 className="text-white font-medium mb-2">Why do I need a key?</h4>
                      <p className="text-gray-400 text-sm">
                        Keys help us maintain our service and ensure only legitimate users access our premium features.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-gray-800 rounded-lg p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <h4 className="text-white font-medium mb-2">How long does a key last?</h4>
                      <p className="text-gray-400 text-sm">
                        Keys are typically valid for 24 hours from the time of generation.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-gray-800 rounded-lg p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    >
                      <h4 className="text-white font-medium mb-2">Is it safe?</h4>
                      <p className="text-gray-400 text-sm">
                        Yes, our key system is completely safe and does not require any personal information.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
