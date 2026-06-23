# Akhilendra Dwivedi — Portfolio

A full-stack portfolio site: React + Vite + Tailwind + Framer Motion on the frontend,
Express + MongoDB + Nodemailer on the backend.

```
portfolio/
├── frontend/   React (Vite) app
└── backend/    Express API + MongoDB
```

---

## 1. Prerequisites

- Node.js 18+ and npm
- A MongoDB database — either:
  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier, no local install needed), or
  - MongoDB running locally (`mongodb://localhost:27017`)
- An email account to send contact-form notifications from (Gmail example included below)

---

## 2. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Open `.env` and fill in:

| Variable | What to put |
|---|---|
| `MONGODB_URI` | Your MongoDB connection string (Atlas or local) |
| `CLIENT_ORIGIN` | `http://localhost:5173` for local dev |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | Your email provider's SMTP settings |
| `SMTP_USER` | The sending email address |
| `SMTP_PASS` | An app password (see below) |
| `CONTACT_RECEIVER_EMAIL` | Where contact form messages should land |

### Getting a Gmail App Password
1. Enable 2-Step Verification on your Google account.
2. Go to https://myaccount.google.com/apppasswords
3. Generate a password for "Mail" and paste the 16-character code into `SMTP_PASS`.
4. Use `smtp.gmail.com`, port `465`, `SMTP_SECURE=true`.

You can swap in any other SMTP provider (Outlook, Zoho, SendGrid SMTP, etc.) the same way.

### Run the backend

```bash
npm run dev      # auto-restarts on file changes (Node's --watch)
# or
npm start        # plain start
```

The API will run at `http://localhost:5000`. Confirm it's alive:

```bash
curl http://localhost:5000/api/health
```

### API reference

**POST `/api/contact`**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Research collaboration",
  "message": "Hi Akhilendra, I'd love to talk about..."
}
```

Validates input, saves to MongoDB, and (if SMTP is configured) emails a notification.
Rate-limited to 5 submissions per IP every 15 minutes.

**GET `/api/contact`** — lists stored submissions (paginated). This is for your own debugging;
add authentication before exposing it on a public deployment.

---

## 3. Frontend setup

```bash
cd frontend
npm install
cp .env.example .env
```

In `.env`, set:

```
VITE_API_URL=http://localhost:5000
```

### Run the frontend

```bash
npm run dev
```

Visit `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 4. Content you should replace before publishing

Everything below is a clearly-marked placeholder — search for `TODO:` in the codebase to find every spot:

- **`frontend/src/data/profile.js`** — real email, resume URL, profile photo path
- **`frontend/src/data/profile.js` → `socialLinks`** — real GitHub, LinkedIn, X, Google Scholar URLs
- **`frontend/src/data/projects.js`** — real project descriptions, GitHub/demo links, screenshots
- **`frontend/src/data/achievements.js`** — real dates and accomplishments
- **`frontend/src/data/testimonials.js`** — real quotes (or remove the section until you have some)
- **`frontend/src/data/skills.js`** — adjust proficiency percentages to match reality
- **`frontend/public/assets/`** — drop in your real profile photo and project screenshots (see `assets/README.md` inside that folder)
- **`frontend/public/resume-placeholder.pdf`** — your actual resume PDF
- **`frontend/public/og-cover.png`** — a 1200×630px image for social link previews

If an image file is missing, the site falls back to a placeholder block rather than breaking, so you can deploy before all assets are final.

---

## 5. Deployment notes

- **Frontend**: deploys cleanly to Vercel or Netlify. Set `VITE_API_URL` to your deployed backend URL as an environment variable in the hosting dashboard.
- **Backend**: deploys to Render, Railway, or a VPS. Set all `.env` variables in the hosting dashboard's environment settings. Update `CLIENT_ORIGIN` to your live frontend URL once deployed.
- **MongoDB**: Atlas is the easiest path — no server to manage, free tier is enough for a portfolio's contact form traffic.

---

## 6. Tech stack

**Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, React Icons
**Backend:** Node.js, Express, Mongoose (MongoDB), Nodemailer, Helmet, express-rate-limit
