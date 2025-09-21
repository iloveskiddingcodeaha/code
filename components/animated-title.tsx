"use client"

import { useEffect, useState } from "react"

const titles = [

]

const getNextTitle = (used: number[]) => {
  if (used.length === titles.length) return { title: titles[0], newUsed: [0] }

  let nextIndex
  do {
    nextIndex = Math.floor(Math.random() * titles.length)
  } while (used.includes(nextIndex))

  return { title: titles[nextIndex], newUsed: [...used, nextIndex] }
}

const AnimatedTitle = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentTitle, setCurrentTitle] = useState(titles[0])
  const [index, setIndex] = useState(0)
  const [usedIndexes, setUsedIndexes] = useState<number[]>([0])

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 125
    const pauseBeforeDelete = 1000
    const pauseBeforeNext = 500

    const handler = setTimeout(() => {
      if (!isDeleting && index < currentTitle.length) {
        setText(currentTitle.slice(0, index + 1))
        setIndex(i => i + 1)
      } else if (!isDeleting && index === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
      } else if (isDeleting && index > 0) {
        setText(currentTitle.slice(0, index - 1))
        setIndex(i => i - 1)
      } else if (isDeleting && index === 0) {
        setIsDeleting(false)
        setTimeout(() => {
          const { title, newUsed } = getNextTitle(usedIndexes)
          setCurrentTitle(title)
          setUsedIndexes(newUsed)
        }, pauseBeforeNext)
      }
    }, typingSpeed)

    return () => clearTimeout(handler)
  }, [index, isDeleting, currentTitle, usedIndexes])

  useEffect(() => {
    document.title = text
  }, [text])

  return null
}

export default AnimatedTitle
