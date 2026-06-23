// ============================================================
// SITE CONFIG — replace placeholder values marked with "TODO:"
// ============================================================

export const profile = {
  name: 'Akhilendra Dwivedi',
  initials: 'AD',
  role: 'Software Development, AI Research',
  typingRoles: [
    'AI Researcher',
    'Machine Learning Engineer',
    'Data Scientist',
    'WiFi Sensing Researcher',
  ],
  location: 'Jalandhar, Punjab, India',
  bio:
    "I'm an M.Tech student in Artificial Intelligence at NIT Jalandhar, building artificial intelligence systems that turn ambient signals into understanding — from wireless channel data to applied research prototypes. I care about models that work in the real world, not just on benchmarks.",
  longBio:
    "My research sits at the intersection of signal processing and deep learning. I'm currently exploring WiFi sensing — using channel state information (CSI) from commodity wireless hardware to infer human activity, presence, and motion without cameras or wearables. Before this, I completed my B.Tech in Information Technology, where I first got hooked on the idea that data, modeled well, can describe the physical world without ever touching it.",
  // TODO: replace with real profile photo at /src/assets/profile.jpg
  photo: '/assets/profile.png',
  // TODO: replace with real resume PDF
  resumeUrl: '/akhil_resume.pdf',
  email: 'akhilendra.dwivedi@example.com', // TODO: replace with real email
}

export const socialLinks = [
  { id: 'github', label: 'GitHub', url: 'https://github.com/akhil6174/' }, // TODO
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/akhilendra-dwivedi-861679218/' }, // TODO
  { id: 'email', label: 'Email', url: 'mailto:akhil6174dwivedi@gmail.com' }, // TODO
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const education = [
  {
    id: 'mtech',
    degree: 'M.Tech in Artificial Intelligence',
    institution: 'Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar',
    period: '2025 — 2027',
    status: 'current',
    description:
      'Coursework and research in deep learning, signal processing, and applied AI systems, with a thesis focus on WiFi-based sensing.',
  },
  {
    id: 'btech',
    degree: 'B.Tech in Information Technology',
    institution: 'Dr. Ambedkar Institute of Technology for Handicapped, Kanpur',
    period: '2020 — 2024',
    status: 'completed',
    description:
      'Affiliated with Abdul Kalam Technical University. Built a foundation in data structures, algorithms, and software engineering ahead of a shift toward ML research.',
  },
]
