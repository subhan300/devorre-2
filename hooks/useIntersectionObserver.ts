"use client"
import { useState, useEffect, RefObject } from "react"

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

const useIntersectionObserver = (options: IntersectionObserverOptions = {}): [RefObject<HTMLElement>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(ref) // Only animate once
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(ref)

    return () => observer.disconnect()
  }, [ref, options])

  return [setRef as RefObject<HTMLElement>, isIntersecting]
}

export default useIntersectionObserver