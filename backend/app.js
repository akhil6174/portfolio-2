import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import contactRoutes from './routes/contactRoutes.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'

export function createApp() {
  const app = express()

  app.use(helmet())
  app.use(express.json({ limit: '10kb' }))

  const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
  app.use(
    cors({
      origin: allowedOrigin,
      methods: ['GET', 'POST'],
    })
  )

  app.get('/', (req, res) => {
    res.json({ status: 'ok', service: 'portfolio-backend' })
  })

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
  })

  app.use('/api/contact', contactRoutes)

  app.use(notFound)
  app.use(errorHandler)

  return app
}
