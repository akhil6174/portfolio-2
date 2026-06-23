import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { education, profile } from '../data/profile.js'
import { useCountUp } from '../hooks/useCountUp.js'

function Counter({ target, suffix = '', label }) {
  const [value, ref] = useCountUp(target)
  return (
    <div ref={ref} className="text-center md:text-left">
      <p className="font-display text-3xl md:text-4xl font-semibold text-paper">
        {value}
        <span className="text-signal">{suffix}</span>
      </p>
      <p className="text-xs md:text-sm text-slate mt-1 font-mono uppercase tracking-wider">
        {label}
      </p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-padding py-24 md:py-32 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="About"
        title="Research-minded, build-oriented"
        description={profile.longBio}
      />

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <Reveal>
          <div className="space-y-8">
            {education.map((item, i) => (
              <div key={item.id} className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-signal" />
                {i !== education.length - 1 && (
                  <div className="absolute left-[5px] top-5 w-px h-[calc(100%+1rem)] bg-line" />
                )}
                <span className="font-mono text-xs text-signal uppercase tracking-wider">
                  {item.period} {item.status === 'current' && '· In progress'}
                </span>
                <h3 className="font-display text-lg md:text-xl font-semibold text-paper mt-2">
                  {item.degree}
                </h3>
                <p className="text-sm text-slate mt-1">{item.institution}</p>
                <p className="text-sm text-muted mt-3 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold text-paper mb-2">
                Career direction
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Working toward roles where applied research meets production systems —
                AI researcher, ML engineer, data scientist, or WiFi sensing specialist,
                wherever rigorous modeling and real deployment intersect.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10 pt-8 border-t border-line">
              <Counter target={4} label="Projects shipped" />
              <Counter target={2} label="Research areas" />
              <Counter target={5} suffix="+" label="ML frameworks" />
              <Counter target={2} label="Degrees" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
