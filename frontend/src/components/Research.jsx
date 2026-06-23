import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import SignalTrace from './SignalTrace.jsx'
import { researchInterests } from '../data/research.js'

export default function Research() {
  return (
    <section id="research" className="relative section-padding py-24 md:py-32 max-w-6xl mx-auto overflow-hidden">
      <div className="absolute right-0 top-1/3 w-1/2 opacity-[0.05] pointer-events-none">
        <SignalTrace className="w-full h-40" color="#E8623C" />
      </div>

      <SectionHeading
        eyebrow="Research"
        title="What I'm trying to understand"
        description="Signals are everywhere — the question is how much of the physical world we can read from them without ever pointing a camera at it."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {researchInterests.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.08}>
            <motion.div
              className="relative glass rounded-3xl p-7 md:p-8 h-full overflow-hidden group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <span className="font-mono text-xs text-ember">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg font-semibold text-paper mt-3 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed">{item.description}</p>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-signal/5 group-hover:bg-signal/10 transition-colors duration-300" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
