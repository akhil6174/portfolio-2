import { useEffect, useState } from 'react'

export function useTypingEffect(words, { typeSpeed = 70, deleteSpeed = 40, pause = 1800 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!words || words.length === 0) return

    const current = words[index % words.length]

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1))
      },
      deleting ? deleteSpeed : typeSpeed
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, pause])

  useEffect(() => {
    if (!words || words.length === 0) return
    setText(words[index % words.length].substring(0, subIndex))
  }, [subIndex, index, words])

  return text
}
