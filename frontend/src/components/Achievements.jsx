import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { achievements } from '../data/achievements.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding py-24 md:py-32 max-w-4xl mx-auto">
      <SectionHeading
        eyebrow="Achievements"
        title="Markers along the way"
        align="left"
      />

      <div className="relative pl-8 md:pl-10">
        <div className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-px bg-line" />
        <div className="space-y-10">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} direction="left">
              <div className="relative">
                <div className="absolute -left-8 md:-left-10 top-1.5 w-3 h-3 rounded-full bg-ember ring-4 ring-ink" />
                <span className="font-mono text-xs text-ember">{item.year}</span>
                <h3 className="font-display text-lg font-semibold text-paper mt-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate mt-2 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
