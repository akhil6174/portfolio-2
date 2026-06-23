import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks, profile } from '../data/profile.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function handleLinkClick() {
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="section-padding flex items-center justify-between h-16 md:h-[72px]">
        <a
          href="#"
          className="font-display font-semibold text-lg text-paper tracking-tight hover:text-signal transition-colors"
        >
          {profile.initials}
          <span className="text-signal">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate hover:text-paper transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full border border-signal/30 text-signal text-sm font-medium hover:bg-signal/10 transition-colors"
        >
          Let&apos;s talk
        </a>

        <button
          className="md:hidden text-paper p-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu size={26} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-ink/98 z-50 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between h-16 section-padding">
              <span className="font-display font-semibold text-lg text-paper">
                {profile.initials}
                <span className="text-signal">.</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-paper p-2"
              >
                <HiX size={26} />
              </button>
            </div>
            <motion.ul
              className="flex flex-col gap-2 px-8 mt-8"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    closed: { opacity: 0, x: -16 },
                    open: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block py-3 text-2xl font-display text-paper hover:text-signal transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
