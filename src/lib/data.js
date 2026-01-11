import { Signal, Cpu, Zap, Book, Lightbulb, Bot, Code, BarChart, ChevronRight } from 'lucide-react';

export const professorData = {
  name: "Dr. Evelyn Reed",
  title: "Professor of Electrical Engineering",
  tagline: "Pioneering the future of signal processing and intelligent systems.",
  department: "Department of Electrical & Computer Engineering",
  university: "Innovate University",
  biography: [
    "Dr. Evelyn Reed is a distinguished Professor in the Department of Electrical and Computer Engineering at Innovate University. With over two decades of experience in academia and research, her work has significantly contributed to the fields of statistical signal processing, machine learning, and wireless communications.",
    "After receiving her Ph.D. from the prestigious Techlore Institute, she held a postdoctoral position at the Advanced Research Center before joining Innovate University. Dr. Reed is a Senior Member of the IEEE and has served on technical committees for numerous international conferences. Her passion for teaching and mentorship is evident in the success of her students, many of whom are now leaders in industry and academia.",
    "Her research is driven by a desire to solve complex real-world problems, from enhancing communication reliability to developing novel AI-driven diagnostic tools. She has secured substantial funding for her research and has published extensively in top-tier journals and conferences."
  ],
  academicPhilosophy: "My philosophy is rooted in the belief that true innovation arises at the intersection of rigorous theoretical understanding and hands-on practical application. I strive to cultivate an environment of intellectual curiosity, encouraging students to challenge conventional wisdom and to not be afraid of failure. Mentorship, to me, is about guiding students to become independent, critical thinkers who can effectively articulate and pursue their own research visions.",
  researchInterests: [
    "Statistical Signal Processing",
    "Machine Learning",
    "Wireless Communications",
    "Bayesian Inference",
    "AI in Healthcare",
    "6G Communication Systems"
  ],
  careerTimeline: [
    { year: "2012 - Present", title: "Professor", institution: "Innovate University" },
    { year: "2008 - 2012", title: "Associate Professor", institution: "Innovate University" },
    { year: "2004 - 2008", title: "Assistant Professor", institution: "Innovate University" },
    { year: "2002 - 2004", title: "Postdoctoral Researcher", institution: "Advanced Research Center" },
  ],
  highlights: {
    experience: 20,
    publications: 150,
    students: 50,
  },
  contact: {
    address: "123 Innovation Drive, School of Engineering, Innovate University, Tech City, 12345",
    email: "e.reed@innovate-university.edu",
    phone: "+1 (123) 456-7890",
    profiles: {
      googleScholar: "https://scholar.google.com/citations?user=_...&amp;hl=en",
      researchGate: "https://www.researchgate.net/profile/...",
      orcid: "https://orcid.org/0000-0000-0000-0000",
      linkedin: "https://www.linkedin.com/in/...",
    }
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/teaching", label: "Teaching" },
  { href: "/students", label: "Students" },
  { href: "/contact", label: "Contact" },
];

export const educationHistory = [
  {
    degree: "Ph.D. in Electrical Engineering",
    institution: "Techlore Institute",
    year: 2002,
    specialization: "Statistical Signal Processing",
    achievements: ["Chancellor's Doctoral Fellowship", "Best Dissertation Award"]
  },
  {
    degree: "M.S. in Electrical Engineering",
    institution: "State University of Technology",
    year: 1998,
    specialization: "Communications Systems",
    achievements: ["Graduated with High Honors"]
  },
  {
    degree: "B.S. in Electrical Engineering",
    institution: "City College of Engineering",
    year: 1996,
    specialization: "Electronics",
    achievements: ["Summa Cum Laude", "Eta Kappa Nu Honor Society"]
  }
];

export const researchAreas = [
  { id: 'ssp', title: "Statistical Signal Processing", summary: "Developing novel algorithms for signal estimation, detection, and filtering in complex environments.", icon: Signal },
  { id: 'ml', title: "Machine Learning for Communications", summary: "Applying deep learning and reinforcement learning to optimize wireless communication systems.", icon: Bot },
  { id: 'wc', title: "Wireless Communications", summary: "Researching next-generation technologies including massive MIMO, millimeter-wave, and 6G networks.", icon: Zap },
  { id: 'ai-health', title: "AI in Healthcare", summary: "Utilizing signal processing and AI for medical imaging and physiological signal analysis.", icon: Lightbulb },
];

export const fundedProjects = [
  {
    title: "NextGen-AI: AI-Powered 6G Communication Systems",
    role: "Principal Investigator (PI)",
    fundingAgency: "National Science Foundation (NSF)",
    duration: "2022 - 2025",
    outcomes: "Developed 5 novel algorithms, 1 patent pending, 12 publications.",
    status: "Ongoing"
  },
  {
    title: "Project SENTINEL: Secure and Resilient IoT Networks",
    role: "Co-Principal Investigator (Co-PI)",
    fundingAgency: "Department of Defense (DoD)",
    duration: "2019 - 2023",
    outcomes: "Designed a new security protocol, graduated 2 PhD students.",
    status: "Completed"
  },
  {
    title: "Bayesian Learning for Massive MIMO Systems",
    role: "Principal Investigator (PI)",
    fundingAgency: "Industry Consortium for Wireless Tech",
    duration: "2020 - 2024",
    outcomes: "Improved channel estimation accuracy by 15%, technology transferred to partner company.",
    status: "Ongoing"
  },
];

export const publications = [
  {
    category: "Journal Papers",
    title: "Deep Unfolding for Iterative Signal Recovery",
    authors: "Reed, E., Student, A.",
    year: 2023,
    venue: "IEEE Transactions on Signal Processing",
    abstract: "This paper presents a novel deep unfolding technique that maps traditional iterative recovery algorithms onto deep neural network architectures, achieving state-of-the-art performance with improved efficiency.",
    doi: "10.1109/TSP.2023.12345",
    citationCount: 42,
  },
  {
    category: "Journal Papers",
    title: "Bayesian Channel Estimation for Millimeter-Wave Massive MIMO",
    authors: "Reed, E., Student, B.",
    year: 2022,
    venue: "IEEE Journal on Selected Areas in Communications",
    abstract: "We propose a Bayesian approach to channel estimation in mmWave massive MIMO systems that exploits the inherent sparsity of the channel, leading to significant reductions in training overhead.",
    doi: "10.1109/JSAC.2022.67890",
    citationCount: 89,
  },
    {
    category: "Conference Papers",
    title: "Federated Learning for Anomaly Detection in IoT Networks",
    authors: "Student, C., Reed, E.",
    year: 2023,
    venue: "IEEE International Conference on Communications (ICC)",
    abstract: "A privacy-preserving anomaly detection framework using federated learning is proposed for distributed IoT networks, showing high detection rates without sharing raw sensor data.",
    doi: "10.1109/ICC.2023.54321",
    citationCount: 25,
  },
  {
    category: "Conference Papers",
    title: "Reinforcement Learning for Dynamic Spectrum Access",
    authors: "Student, D., Reed, E.",
    year: 2021,
    venue: "IEEE Global Communications Conference (GLOBECOM)",
    abstract: "This work introduces a multi-agent reinforcement learning algorithm for dynamic spectrum access, enabling cognitive radio networks to learn optimal sharing policies in real-time.",
    doi: "10.1109/GLOBECOM.2021.13579",
    citationCount: 61,
  },
  {
    category: "Books/Chapters",
    title: "Chapter 5: Advanced Bayesian Signal Processing",
    authors: "Reed, E.",
    year: 2020,
    venue: "In 'Modern Signal Processing Techniques', Tech Press",
    abstract: "This chapter provides a comprehensive overview of modern Bayesian techniques, including variational inference and Monte Carlo methods, and their applications in signal processing.",
    doi: "N/A",
    citationCount: 112,
  }
];

export const teachingInfo = {
  philosophy: "I am committed to creating a dynamic and inclusive learning environment where students are not just passive recipients of information but active participants in their own education. My goal is to demystify complex topics by connecting them to real-world applications and to equip students with the critical thinking and problem-solving skills necessary for a successful career in engineering.",
  undergraduateCourses: [
    { code: "EE 201", title: "Signals and Systems" },
    { code: "EE 303", title: "Introduction to Digital Signal Processing" },
    { code: "EE 421", title: "Wireless Communications" },
  ],
  postgraduateCourses: [
    { code: "EE 550", title: "Statistical Signal Processing" },
    { code: "EE 632", title: "Machine Learning for Engineers" },
    { code: "EE 680", title: "Advanced Wireless Communications" },
  ],
  curriculumContributions: "Led the redesign of the undergraduate communications curriculum, introducing a new lab component for 'EE 421' using software-defined radios. Developed the 'EE 632' course from the ground up to meet the growing demand for machine learning expertise.",
  labInnovations: "Established the 'Wireless Systems Innovation Lab', providing students with hands-on experience in designing and testing real-world communication systems. Secured funding for state-of-the-art SDR platforms and network analyzers."
};

export const studentData = {
  stats: {
    phd: 15,
    masters: 25,
    undergrad: 10
  },
  currentScholars: [
    { name: "Alice Johnson", topic: "Semantic Communications for 6G" },
    { name: "Bob Williams", topic: "Federated Reinforcement Learning for Network Slicing" },
    { name: "Charlie Brown", topic: "Over-the-Air Computation and its Applications" },
  ],
  notableAlumni: [
    { name: "Dr. David Smith", achievement: "Research Scientist at Google AI" },
    { name: "Dr. Maria Garcia", achievement: "Assistant Professor at Stanford University" },
  ]
};
