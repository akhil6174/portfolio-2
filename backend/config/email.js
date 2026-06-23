import nodemailer from 'nodemailer'

let transporter = null

export function getTransporter() {
  if (transporter) return transporter

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(
      '⚠ Email credentials are not fully configured. Contact form will save to DB but emails will not send.'
    )
    return null
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  return transporter
}

export async function sendContactNotification({ name, email, subject, message }) {
  const t = getTransporter()
  if (!t) return { sent: false, reason: 'Email transporter not configured' }

  const receiver = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER

  try {
    await t.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: receiver,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from ${name} (${email}):\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })
    return { sent: true }
  } catch (err) {
    console.error('✗ Failed to send email:', err.message)
    return { sent: false, reason: err.message }
  }
}

function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
