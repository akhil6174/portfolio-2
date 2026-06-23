// REAL PROJECTS DATA — Replacing placeholders with authentic work.
// Image paths point to your static asset directory.

export const projects = [
  {
    id: 'gov-scheme-ai',
    title: 'Gov Scheme AI',
    tagline: 'AI-powered government policy recommendations through natural language matching.',
    description:
      'An intelligent recommendation platform that matches users with relevant Indian government schemes. Features a hybrid retrieval system combining semantic search via Qdrant and rule-based filters, paired with Grok API (xAI) for multilingual explanations and text-to-speech accessibility.',
    tags: ['React.js', 'FastAPI', 'Qdrant', 'Grok API', 'Docker', 'Node.js', 'MongoDB Atlas'],
    image: '/assets/projects/gov-scheme.jpg',
    github: 'https://github.com/akhil6174/gov-scheme-ai',
    demo: '', // Add live link when available
    featured: true,
  },
  {
    id: 'narrative-consistency-evaluator',
    title: 'Pathway Narrative Consistency Evaluator',
    tagline: 'Automated literary consistency validation via real-time stream analysis.',
    description:
      'An AI system built to evaluate if a character\'s backstory aligns consistently with structural novel events. Uses a Retrieval-Augmented Generation (RAG) pipeline leveraging Pathway ETL for live streaming data processing, sentence transformers, and a locally hosted Qwen2.5-7B model managed via Ollama.',
    tags: ['Python', 'Pathway', 'Ollama', 'Qwen2.5', 'RAG', 'Sentence Transformers', 'Docker'],
    image: '/assets/projects/narrative-evaluator.jpg',
    github: 'https://github.com/akhil6174/narrative-consistency-evaluator',
    demo: '', // Add live link when available
    featured: true,
  },
  {
    id: 'litnavigator-ai',
    title: 'LitNavigator AI',
    tagline: 'Multi-agent intelligence engine automating academic research gap discovery.',
    description:
      'An autonomous research assistant that orchestrates multi-agent LangChain architectures to run literature reviews, citation mapping, and entity gap identification. Implements hybrid RAG (ChromaDB + BM25 matching) along with dynamic Neo4j Knowledge Graphs.',
    tags: ['Python', 'LangChain', 'Neo4j', 'ChromaDB', 'BM25', 'Streamlit', 'LangSmith'],
    image: '/assets/projects/litnavigator.jpg',
    github: 'https://github.com/akhil6174/litnavigator-ai',
    demo: '', // Add live link when available
    featured: true,
  },
  {
    id: 'ai-trip-planner',
    title: 'AI Trip Planner',
    tagline: 'Bespoke custom itinerary generation built over responsive frontend layers.',
    description:
      'A responsive travel planning web application that leverages the Gemini API to formulate personalized travel structures based on individual user parameters. Integrated with Google Places data endpoints and backed by a clean Firebase architecture with secure authentication maps.',
    tags: ['React.js', 'Gemini API', 'Firebase', 'Google Places API', 'Tailwind CSS'],
    image: '/assets/projects/trip-planner.jpg',
    github: 'https://github.com/akhil6174/ai-trip-planner',
    demo: 'https://portfolio-akhilendra-dwivedis-projects.vercel.app/', // Pointed to your deployment suite
    featured: false,
  },
  {
    id: 'vdo-conferencing',
    title: 'VDO Video Platform',
    tagline: 'Low-latency peer-to-peer real-time communication portal.',
    description:
      'A low-latency real-time video and audio communication platform engineered directly over custom WebRTC peer-to-peer protocols. Features optimized signaling engines, local media stream connection loops, and cross-browser optimized layout interfaces to handle dynamic packet-loss.',
    tags: ['WebRTC', 'JavaScript', 'Node.js', 'HTML5/CSS3', 'Socket.io'],
    image: '/assets/projects/vdo.jpg',
    github: 'https://github.com/akhil6174/vdo-webrtc',
    demo: '', // Add live link when available
    featured: false,
  },
]