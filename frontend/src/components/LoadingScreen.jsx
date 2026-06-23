import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import SignalTrace from './SignalTrace.jsx'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="relative w-64 h-16">
            <SignalTrace className="w-full h-full" />
            <motion.div
              className="absolute inset-0 bg-ink"
              initial={{ x: '0%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{ maskImage: 'linear-gradient(to right, black 50%, transparent 100%)' }}
            />
          </div>
          <motion.p
            className="mt-6 font-mono text-xs tracking-[0.25em] text-signal uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            Calibrating signal…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
