import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  function next() {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }
  function prev() {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[index]

  return (
    <section id="testimonials" className="section-padding py-24 md:py-32 max-w-4xl mx-auto">
      <SectionHeading eyebrow="Testimonials" title="What others have said" align="center" />

      <Reveal>
        <div className="relative glass rounded-3xl p-8 md:p-12 text-center min-h-[260px] flex flex-col items-center justify-center">
          <FaQuoteLeft className="text-signal/40 mb-5" size={28} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-lg md:text-xl text-paper leading-relaxed max-w-2xl mx-auto">
                "{current.quote}"
              </p>
              <p className="mt-6 font-display font-semibold text-paper">{current.name}</p>
              <p className="text-sm text-slate">{current.title}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-slate hover:text-signal hover:border-signal/40 transition-colors"
            >
              <FiChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === index ? 'bg-signal' : 'bg-line'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-slate hover:text-signal hover:border-signal/40 transition-colors"
            >
              <FiChevronRight size={16} />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
