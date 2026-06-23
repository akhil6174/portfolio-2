import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data/projects.js'

function ProjectCard({ project, onImageClick, delay }) {
  return (
    <Reveal delay={delay}>
      <motion.div
        className="glass rounded-3xl overflow-hidden h-full flex flex-col group"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => onImageClick(project)}
          className="relative aspect-[16/10] overflow-hidden bg-raised cursor-zoom-in"
          aria-label={`View larger screenshot of ${project.title}`}
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextSibling.style.display = 'flex'
            }}
          />
          <div
            className="hidden w-full h-full items-center justify-center font-mono text-xs text-muted"
            style={{ display: 'none' }}
          >
            screenshot placeholder
          </div>
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
        </button>

        <div className="p-6 md:p-7 flex flex-col flex-1">
          {project.featured && (
            <span className="eyebrow mb-2 self-start">Featured</span>
          )}
          <h3 className="font-display text-lg font-semibold text-paper">{project.title}</h3>
          <p className="text-sm text-signal mt-1">{project.tagline}</p>
          <p className="text-sm text-slate mt-3 leading-relaxed flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-raised text-muted border border-line"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-5 pt-5 border-t border-line">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-signal transition-colors"
            >
              <FiGithub size={15} /> Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-signal transition-colors"
              >
                <FiExternalLink size={15} /> Live demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

export default function Projects() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section id="projects" className="section-padding py-24 md:py-32 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A mix of research prototypes and full-stack builds — each one solving a specific problem rather than ticking a portfolio checkbox."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            onImageClick={setActiveImage}
            delay={i * 0.07}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[90] bg-ink/95 flex items-center justify-center p-6 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                aria-label="Close image"
                className="absolute -top-12 right-0 text-paper hover:text-signal p-2"
              >
                <FiX size={24} />
              </button>
              <img
                src={activeImage.image}
                alt={`${activeImage.title} full screenshot`}
                className="w-full rounded-2xl border border-line"
              />
              <p className="text-center text-sm text-slate mt-4">{activeImage.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
