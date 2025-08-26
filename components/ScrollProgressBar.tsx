'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 gradient-mesh-bg origin-left z-[100] shadow-lg"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgressBar
