import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { profile } from '../data/profile.js'

export default function ResumeSection() {
  return (
    <section className="section-padding py-16 md:py-20 max-w-6xl mx-auto">
      <Reveal>
        <div className="relative glass-strong rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-signal/10 blur-3xl" />

          <div className="flex items-start gap-5 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-signal/10 flex items-center justify-center shrink-0">
              <FiFileText className="text-signal" size={22} />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-paper">
                Want the full picture?
              </h3>
              <p className="text-sm md:text-base text-slate mt-2 max-w-md">
                A one-page résumé with education, research, projects, and skills —
                kept current, no fluff.
              </p>
            </div>
          </div>

          <motion.a
            href={profile.resumeUrl}
            download
            className="relative z-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-signal text-ink font-medium text-sm shrink-0"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiDownload size={16} />
            Download résumé (PDF)
          </motion.a>
        </div>
      </Reveal>
    </section>
  )
}
