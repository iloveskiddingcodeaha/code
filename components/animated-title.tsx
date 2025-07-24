"use client"

import { useEffect, useState } from "react"

const AnimatedTitle = () => {
  const fullTitle = "Purpleware - Cracked cheats"
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 150
    const pauseTime = isDeleting ? 0 : 1000 // Pause before deleting

    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullTitle.length) {
        setIndex(index + 1)
      } else if (!isDeleting && index === fullTitle.length) {
        setIsDeleting(true)
      } else if (isDeleting && index > 0) {
        setIndex(index - 1)
      } else {
        setIsDeleting(false)
      }
    }, index === fullTitle.length ? pauseTime : typingSpeed)

    return () => clearTimeout(timeout)
  }, [index, isDeleting])

  useEffect(() => {
    document.title = fullTitle.slice(0, index)
  }, [index])

  return null
}

export default AnimatedTitle
