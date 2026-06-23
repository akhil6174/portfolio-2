import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const initialState = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('')

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) {
      next.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.subject.trim()) next.subject = 'Subject is required.'
    if (!form.message.trim()) {
      next.message = 'Message is required.'
    } else if (form.message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters.'
    }
    return next
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('loading')
    setServerMessage('')

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setServerMessage(data.message || 'Message sent successfully.')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setServerMessage(err.message || 'Could not send your message. Please try again.')
    }
  }

  const fields = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' },
  ]

  return (
    <section id="contact" className="section-padding py-24 md:py-32 max-w-3xl mx-auto">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Research collaboration, an internship lead, or just a question about WiFi sensing — I read everything that comes through here."
        align="center"
      />

      <Reveal>
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 space-y-5" noValidate>
          <div className="grid md:grid-cols-2 gap-5">
            {fields.slice(0, 2).map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm text-slate mb-2">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full bg-raised border border-line rounded-xl px-4 py-3 text-sm text-paper placeholder:text-muted focus:border-signal/50 outline-none transition-colors"
                  aria-invalid={Boolean(errors[field.name])}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                />
                {errors[field.name] && (
                  <p id={`${field.name}-error`} className="text-xs text-ember mt-1.5">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm text-slate mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              className="w-full bg-raised border border-line rounded-xl px-4 py-3 text-sm text-paper placeholder:text-muted focus:border-signal/50 outline-none transition-colors"
              aria-invalid={Boolean(errors.subject)}
            />
            {errors.subject && <p className="text-xs text-ember mt-1.5">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-slate mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about what you have in mind…"
              className="w-full bg-raised border border-line rounded-xl px-4 py-3 text-sm text-paper placeholder:text-muted focus:border-signal/50 outline-none transition-colors resize-none"
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <p className="text-xs text-ember mt-1.5">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={status === 'loading'}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-signal text-ink font-medium text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={status !== 'loading' ? { scale: 1.01 } : {}}
            whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
          >
            {status === 'loading' ? (
              <>
                <span className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <FiSend size={16} />
                Send message
              </>
            )}
          </motion.button>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-signal text-sm bg-signal/10 rounded-xl px-4 py-3"
            >
              <FiCheck size={16} />
              {serverMessage}
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-ember text-sm bg-ember/10 rounded-xl px-4 py-3"
            >
              <FiAlertCircle size={16} />
              {serverMessage}
            </motion.div>
          )}
        </form>
      </Reveal>
    </section>
  )
}
