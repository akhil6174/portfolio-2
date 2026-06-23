import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { skillCategories } from '../data/skills.js'

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-sm text-paper">{name}</span>
        <span className="font-mono text-xs text-signal">{level}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-line overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-signal to-signal/60"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding py-24 md:py-32 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Skills"
        title="Tools of the trade"
        description="A working stack spanning research-grade ML to production-grade full stack development."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, ci) => (
          <Reveal key={category.id} delay={ci * 0.08}>
            <motion.div
              className="glass rounded-3xl p-7 md:p-8 h-full hover:border-signal/20 transition-colors"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="font-display text-base md:text-lg font-semibold text-paper mb-6">
                {category.label}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
