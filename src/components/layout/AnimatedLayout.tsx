import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useLocation } from 'react-router-dom'

interface AnimatedLayoutProps {
  children: React.ReactNode
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    x: -20,
    scale: 0.98
  },
  enter: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
    }
  }
}

export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
