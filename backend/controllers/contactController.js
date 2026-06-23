import Contact from '../models/Contact.js'
import { sendContactNotification } from '../config/email.js'

// POST /api/contact
export async function createContactMessage(req, res, next) {
  try {
    const { name, email, subject, message } = req.body

    const contact = new Contact({
      name,
      email,
      subject,
      message,
      ipAddress: req.ip,
    })

    // Mongoose schema validation runs here and throws ValidationError if invalid
    await contact.validate()
    await contact.save()

    const emailResult = await sendContactNotification({ name, email, subject, message })
    if (emailResult.sent) {
      contact.emailSent = true
      await contact.save()
    }

    return res.status(201).json({
      success: true,
      message: "Thanks — your message has been sent. I'll get back to you soon.",
      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      },
    })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((e) => e.message)
      return res.status(400).json({
        success: false,
        message: errors[0] || 'Invalid input.',
        errors,
      })
    }
    next(err)
  }
}

// GET /api/contact  (simple admin/debug listing — protect or remove in production)
export async function listContactMessages(req, res, next) {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1)
    const limit = Math.min(parseInt(req.query.limit) || 20, 100)
    const skip = (page - 1) * limit

    const [messages, total] = await Promise.all([
      Contact.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Contact.countDocuments(),
    ])

    return res.status(200).json({
      success: true,
      data: messages,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (err) {
    next(err)
  }
}
