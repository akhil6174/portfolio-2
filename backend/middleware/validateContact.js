// Lightweight request-level validation before hitting the DB layer.
// Mongoose schema validation is the second line of defense (see models/Contact.js).

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactInput(req, res, next) {
  const { name, email, subject, message } = req.body || {}
  const errors = []

  if (!name || typeof name !== 'string' || !name.trim()) {
    errors.push('Name is required.')
  }
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    errors.push('A valid email address is required.')
  }
  if (!subject || typeof subject !== 'string' || !subject.trim()) {
    errors.push('Subject is required.')
  }
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters.')
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors,
    })
  }

  // Trim all string fields before they hit the controller
  req.body.name = name.trim()
  req.body.email = email.trim().toLowerCase()
  req.body.subject = subject.trim()
  req.body.message = message.trim()

  next()
}
