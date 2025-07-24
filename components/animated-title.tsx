"use client"

import { useEffect, useState } from "react"

const AnimatedTitle = () => {
  const fullTitle = "Purpleware - Cracked cheats"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        const next = prev + 1
        if (next > fullTitle.length) return 0
        return next
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    document.title = fullTitle.slice(0, index)
  }, [index])

  return null
}

export default AnimatedTitle
