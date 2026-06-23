import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name must be under 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      minlength: [3, 'Subject must be at least 3 characters'],
      maxlength: [150, 'Subject must be under 150 characters'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters'],
      maxlength: [5000, 'Message must be under 5000 characters'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // Operational metadata, not part of the original spec but useful for moderation
    ipAddress: {
      type: String,
      select: false,
    },
    emailSent: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
)

contactSchema.index({ createdAt: -1 })

const Contact = mongoose.model('Contact', contactSchema)

export default Contact
