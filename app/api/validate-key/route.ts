import { type NextRequest, NextResponse } from "next/server"

// Simple in-memory store for keys (use a database in production)
const keyStore = new Map<string, { createdAt: number; valid: boolean }>()

// Key pattern: PW-YYYYMMDD-XXXXXXXX (PW-20241201-A1B2C3D4)
const KEY_PATTERN = /^PW-\d{8}-[A-Z0-9]{8}$/

// 24 hours in milliseconds
const KEY_VALIDITY_DURATION = 24 * 60 * 60 * 1000

export async function GET(request: NextRequest) {
  // Enable CORS
  const response = new NextResponse()
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type")

  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get("key")

    // Check if key parameter is provided
    if (!key) {
      return NextResponse.json(
        {
          valid: false,
          message: "No key provided. Please include a key parameter.",
        },
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        },
      )
    }

    // Validate key pattern
    if (!KEY_PATTERN.test(key)) {
      return NextResponse.json(
        {
          valid: false,
          message: "Invalid key format. Key must follow pattern: PW-YYYYMMDD-XXXXXXXX",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        },
      )
    }

    // Check if key exists in store
    const keyData = keyStore.get(key)
    const currentTime = Date.now()

    if (!keyData) {
      // Generate new key entry if it doesn't exist (simulating key creation)
      keyStore.set(key, {
        createdAt: currentTime,
        valid: true,
      })

      return NextResponse.json(
        {
          valid: true,
          message: "Key is valid and active.",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        },
      )
    }

    // Check if key has expired (24 hours)
    const keyAge = currentTime - keyData.createdAt
    if (keyAge > KEY_VALIDITY_DURATION) {
      keyStore.delete(key) // Clean up expired key
      return NextResponse.json(
        {
          valid: false,
          message: "Key has expired. Please get a new key.",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        },
      )
    }

    // Check if key is still valid
    if (!keyData.valid) {
      return NextResponse.json(
        {
          valid: false,
          message: "Key has been revoked or is no longer valid.",
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        },
      )
    }

    // Key is valid
    return NextResponse.json(
      {
        valid: true,
        message: "Key is valid and active.",
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      },
    )
  } catch (error) {
    console.error("Key validation error:", error)
    return NextResponse.json(
      {
        valid: false,
        message: "Internal server error. Please try again later.",
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      },
    )
  }
}

// Handle CORS preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}

// Cleanup function to remove expired keys (optional)
function cleanupExpiredKeys() {
  const currentTime = Date.now()
  for (const [key, data] of keyStore.entries()) {
    if (currentTime - data.createdAt > KEY_VALIDITY_DURATION) {
      keyStore.delete(key)
    }
  }
}

// Run cleanup every hour
setInterval(cleanupExpiredKeys, 60 * 60 * 1000)
