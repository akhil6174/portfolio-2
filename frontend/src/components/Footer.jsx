import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { profile, socialLinks, navLinks } from '../data/profile.js'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  email: FiMail,
  scholar: SiGooglescholar,
}

export default function Footer() {
  return (
    <footer className="border-t border-line section-padding py-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="font-display font-semibold text-lg text-paper">
            {profile.initials}
            <span className="text-signal">.</span>
          </a>
          <p className="text-sm text-slate mt-2 max-w-xs">
            Building ML systems that read signals most people walk past.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate hover:text-paper transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.id] || FiMail
            return (
              <a
                key={link.id}
                href={link.url}
                target={link.id !== 'email' ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-slate hover:text-signal hover:border-signal/40 transition-colors"
              >
                <Icon size={14} />
              </a>
            )
          })}
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">Built with React · Express · MongoDB</p>
      </div>
    </footer>
  )
}
