"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestKeyPage() {
  const [key, setKey] = useState("")
  const [result, setResult] = useState<{ valid: boolean; message: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const testKey = async () => {
    if (!key.trim()) {
      setResult({ valid: false, message: "Please enter a key to test" })
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`/api/validate-key?key=${encodeURIComponent(key)}`)
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({ valid: false, message: "Failed to validate key" })
    } finally {
      setLoading(false)
    }
  }

  const generateSampleKey = () => {
    const today = new Date()
    const dateStr = today.toISOString().slice(0, 10).replace(/-/g, "")
    const randomStr = Math.random().toString(36).substr(2, 8).toUpperCase()
    const sampleKey = `PW-${dateStr}-${randomStr}`
    setKey(sampleKey)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Key Validation API Test
        </h1>

        <Card className="bg-gray-900 border-gray-800 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Test Key Validation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Enter Key:</label>
              <Input
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="PW-20241201-A1B2C3D4"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={testKey} disabled={loading} className="bg-purple-600 hover:bg-purple-700">
                {loading ? "Validating..." : "Validate Key"}
              </Button>
              <Button
                onClick={generateSampleKey}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Generate Sample Key
              </Button>
            </div>

            {result && (
              <div
                className={`p-4 rounded-lg ${result.valid ? "bg-green-900/30 border border-green-700" : "bg-red-900/30 border border-red-700"}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${result.valid ? "bg-green-400" : "bg-red-400"}`}></div>
                  <span className="font-semibold">{result.valid ? "Valid Key" : "Invalid Key"}</span>
                </div>
                <p className="text-sm text-gray-300">{result.message}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">API Documentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Endpoint:</h3>
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">GET /api/validate-key?key=YOUR_KEY</code>
            </div>

            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Key Format:</h3>
              <code className="bg-gray-800 px-2 py-1 rounded text-green-400">PW-YYYYMMDD-XXXXXXXX</code>
              <p className="text-sm text-gray-400 mt-1">Example: PW-20241201-A1B2C3D4</p>
            </div>

            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Response:</h3>
              <pre className="bg-gray-800 p-3 rounded text-sm text-green-400">
                {`{
  "valid": true/false,
  "message": "Description"
}`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Features:</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• CORS enabled for cross-origin requests</li>
                <li>• Keys valid for 24 hours</li>
                <li>• Pattern validation</li>
                <li>• Automatic cleanup of expired keys</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
