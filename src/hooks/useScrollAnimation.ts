import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface UseScrollAnimationOptions {
  once?: boolean
  margin?: string
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { once = true, margin = '-100px' } = options
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin })

  return { ref, isInView }
}
