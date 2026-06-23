import { Router } from 'express'
import { createContactMessage, listContactMessages } from '../controllers/contactController.js'
import { contactRateLimiter } from '../middleware/rateLimiter.js'
import { validateContactInput } from '../middleware/validateContact.js'

const router = Router()

// POST /api/contact — submit the contact form
router.post('/', contactRateLimiter, validateContactInput, createContactMessage)

// GET /api/contact — list submissions (debug/admin use; add auth before exposing publicly)
router.get('/', listContactMessages)

export default router
