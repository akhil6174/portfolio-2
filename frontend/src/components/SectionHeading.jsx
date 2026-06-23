import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal>
      <div className={`flex flex-col ${alignment} max-w-2xl mb-12 md:mb-16`}>
        {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-slate text-base md:text-lg leading-relaxed">{description}</p>
        )}
      </div>
    </Reveal>
  )
}
