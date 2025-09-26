"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function KeySystemPage() {
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleGetKey = () => {
    setIsRedirecting(true)
    // Redirect to workink.net
    window.open("https://workink.net", "_blank")
    setTimeout(() => setIsRedirecting(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/script-hub"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Script Hub
        </Link>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Key System
          </h1>

          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-white">Get Your Access Key</h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              To access PurpleLoader, you need to get a key from our link shortener. This helps support the development
              of our scripts and keeps them free for everyone.
            </p>

            <button
              onClick={handleGetKey}
              disabled={isRedirecting}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {isRedirecting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Redirecting...
                </>
              ) : (
                <>
                  <ExternalLink className="w-4 h-4" />
                  Get Key
                </>
              )}
            </button>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                After completing the link, return here with your key to access PurpleLoader
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400">Available</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <div className="text-2xl font-bold text-purple-400">Free</div>
              <div className="text-sm text-gray-400">Always</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
              <div className="text-2xl font-bold text-purple-400">Safe</div>
              <div className="text-sm text-gray-400">Secure</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
