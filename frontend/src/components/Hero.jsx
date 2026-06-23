import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiDownload,
  FiArrowDown,
} from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { profile, socialLinks } from '../data/profile.js'
import { useTypingEffect } from '../hooks/useTypingEffect.js'
import SignalTrace from './SignalTrace.jsx'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  email: FiMail,
  scholar: SiGooglescholar,
}

export default function Hero() {
  const typed = useTypingEffect(profile.typingRoles)

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden section-padding pt-28 pb-16">
      {/* Background signal trace, large and faint */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none">
        <SignalTrace className="w-full h-[280px]" />
      </div>

      <div className="relative z-10 grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center max-w-6xl mx-auto w-full">
        <div>
          <motion.span
            className="eyebrow inline-block mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            ● Available for research collaborations
          </motion.span>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight text-paper"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {profile.name}
          </motion.h1>

          <motion.div
            className="mt-4 h-9 md:h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="font-mono text-lg md:text-xl text-signal">
              {typed}
              <span className="inline-block w-[2px] h-5 md:h-6 bg-signal ml-1 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.p
            className="mt-6 text-base md:text-lg text-slate max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {profile.bio}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-signal text-ink font-medium text-sm hover:bg-signal/90 transition-colors"
            >
              <FiDownload size={16} />
              Download résumé
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-paper font-medium text-sm hover:border-signal/40 hover:text-signal transition-colors"
            >
              View projects
            </a>
          </motion.div>

          <motion.div
            className="mt-9 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.id] || FiMail
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.id !== 'email' ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-slate hover:text-signal hover:border-signal/40 transition-colors"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          className="relative justify-self-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-signal/20 to-ember/10 blur-2xl" />
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-[2rem] glass overflow-hidden">
            {/* TODO: replace with a real photo at /assets/profile-placeholder.jpg */}
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
            <div
              className="hidden w-full h-full items-center justify-center font-display text-6xl text-signal/60"
              style={{ display: 'none' }}
            >
              {profile.initials}
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-4 py-3 font-mono text-xs text-signal">
            CSI_signal.live
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate hover:text-signal transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about section"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
