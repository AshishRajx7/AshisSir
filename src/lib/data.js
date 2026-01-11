import { Cpu, Zap, Book, Lightbulb } from "lucide-react";

export const professorData = {
  name: "Dr. Ashis Tripathy",
  title: "Associate Professor",
  tagline:
    "I work on MEMS, sensors, nanomaterials, and biomedical engineering applications.",
  department: "School of Electronics Engineering (SENSE)",
  university: "Vellore Institute of Technology, Chennai",

  biography: [
    "I am currently working as an Associate Professor in the School of Electronics Engineering (SENSE) at Vellore Institute of Technology (VIT), Chennai. My research interests focus on materials for electronics applications, MEMS, sensor fabrication, wearable electronics, nanomaterial synthesis, and biomedical engineering.",

    "Before joining VIT Chennai, I worked as a Scientific Investigator at the CMEMS R&D Center for Microelectromechanical Systems, School of Engineering, University of Minho, Portugal. I have also served as an Assistant Professor at Thapar Institute of Engineering and Technology, JK Lakshmipat University Jaipur, and Siksha O Anusandhan University, Odisha.",

    "I received my PhD in Biomedical Engineering from the University of Malaya, Malaysia, where I was honored with the Award of Excellence 2017 for outstanding doctoral research. I have been a recipient of several national and international fellowships including MHRD India, High Impact Research Grant from Malaysia, and a Postdoctoral International Exchange Fellowship from China."
  ],

  academicPhilosophy:
    "My academic philosophy is centered on combining strong theoretical foundations with hands on experimental research. I believe impactful innovation emerges from interdisciplinary collaboration and mentoring students to become independent thinkers capable of solving real world engineering problems.",

  researchInterests: [
    "MEMS and NEMS",
    "Sensor Design and Fabrication",
    "Nanomaterials for Electronics",
    "Wearable and Flexible Electronics",
    "Biomedical Engineering",
    "Humidity Sensors and Electronic Nose Systems"
  ],

  careerTimeline: [
    {
      year: "2022 Present",
      title: "Associate Professor",
      institution: "Vellore Institute of Technology, Chennai"
    },
    {
      year: "2019 2022",
      title: "Scientific Investigator",
      institution: "University of Minho, Portugal"
    },
    {
      year: "2018 2020",
      title: "Assistant Professor II",
      institution: "Thapar Institute of Engineering and Technology, Patiala"
    },
    {
      year: "2016 2018",
      title: "Assistant Professor",
      institution: "JK Lakshmipat University, Jaipur"
    },
    {
      year: "2010 2013",
      title: "Assistant Professor",
      institution: "Institute of Technical Education and Research, Odisha"
    }
  ],

  highlights: {
    experience: 14,
    publications: 40,
    students: 30
  },

  contact: {
    address:
      "School of Electronics Engineering (SENSE), VIT Chennai, Tamil Nadu, India",
    email: "ashis.tripathy@vit.ac.in",
    phone: "",
    profiles: {
      googleScholar: "",
      researchGate: "",
      orcid: "",
      linkedin: ""
    }
  }
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" }
];

export const educationHistory = [
  {
    degree: "Postdoctoral Research Fellow",
    institution: "University of Minho, Portugal",
    year: "2019 2022",
    specialization:
      "Nanomaterials, Sensors, Wearable Electronics, and Biomedical Engineering",
    achievements: ["Postdoctoral International Exchange Fellowship"]
  },
  {
    degree: "Doctor of Philosophy in Biomedical Engineering",
    institution: "University of Malaya, Malaysia",
    year: "2014 2017",
    specialization:
      "Humidity Sensors, Perovskite Oxides, and Biomedical Applications",
    achievements: ["Award of Excellence 2017"]
  },
  {
    degree: "Master of Technology in Electronics and Instrumentation Engineering",
    institution: "Jadavpur University, India",
    year: "2008 2010",
    specialization: "Electronic Nose and Sensor Systems",
    achievements: ["GATE Rank 108", "CGPA 9.05"]
  },
  {
    degree: "Bachelor of Technology in Electronics and Instrumentation Engineering",
    institution: "Biju Patnaik University of Technology, Odisha",
    year: "2003 2007",
    specialization: "Electronics and Instrumentation",
    achievements: []
  }
];

export const researchAreas = [
  {
    id: "mems",
    title: "MEMS and Sensor Fabrication",
    summary:
      "I focus on the design and fabrication of MEMS based humidity sensors, electronic nose systems, and flexible sensing devices.",
    icon: Cpu
  },
  {
    id: "nano",
    title: "Nanomaterials for Electronics",
    summary:
      "My work involves synthesis and characterization of ceramic and polymer nanocomposites for electronic and biomedical applications.",
    icon: Zap
  },
  {
    id: "wearable",
    title: "Wearable Electronics",
    summary:
      "I develop flexible and stretchable sensors for healthcare monitoring and wearable electronic systems.",
    icon: Lightbulb
  },
  {
    id: "biomedical",
    title: "Biomedical Engineering",
    summary:
      "My research includes biocompatible materials, drug delivery systems, and biomedical sensor applications.",
    icon: Book
  }
];

export const fundedProjects = [
  {
    title:
      "Advanced Humidity Sensor Development Using Ceramic Nanocomposites",
    role: "Principal Investigator",
    fundingAgency:
      "Ministry of Higher Education Malaysia High Impact Research Grant",
    duration: "2015 2017",
    outcomes:
      "I developed high sensitivity humidity sensors with improved response and recovery times for electronic and biomedical applications.",
    status: "Completed"
  },
  {
    title:
      "MEMS and Flexible Sensor Systems for Wearable Electronics",
    role: "Scientific Investigator",
    fundingAgency: "University of Minho Portugal",
    duration: "2019 2022",
    outcomes:
      "I worked on fabrication and characterization of MEMS based flexible sensors for healthcare monitoring and wearable electronics.",
    status: "Completed"
  }
];

export const teachingInfo = {
  philosophy:
    "I aim to connect theoretical concepts with experimental research and industrial relevance. My teaching approach focuses on building strong fundamentals while encouraging students to engage in innovation, fabrication, and applied research.",

  undergraduateCourses: [
    { code: "ECE", title: "Sensors and Transducers" },
    { code: "ECE", title: "Electronic Instrumentation" }
  ],

  postgraduateCourses: [
    { code: "PG", title: "MEMS and Sensor Systems" },
    { code: "PG", title: "Advanced Materials for Electronics" }
  ],

  curriculumContributions:
    "I actively supervise BTech and MTech projects related to sensors, MEMS, nanomaterials, and biomedical engineering.",

  labInnovations:
    "I guide students in hands on fabrication and characterization of microelectronics and nanoelectronics devices for academic and research purposes."
};
export const publications = [
  {
    category: "Journal Articles",
    title:
      "Synthesis, Morphological and Electromechanical Characterization of Ceramic Nanocomposite Thin Films for Energy Storage Applications",
    authors: "Ashis Tripathy et al.",
    year: 2018,
    venue: "IOP Conference Series Materials Science and Engineering",
    abstract:
      "In this work, I investigated ceramic polymer nanocomposite thin films for flexible energy storage and electronic applications, focusing on dielectric behavior, flexibility, and electromechanical performance.",
    doi: "",
    citationCount: 0
  },
  {
    category: "Journal Articles",
    title:
      "Moisture Sensitive Armalcolite PDMS Flexible Sensor for Humidity Detection",
    authors: "Ashis Tripathy et al.",
    year: 2018,
    venue: "Sensors and Actuators B Chemical, Elsevier",
    abstract:
      "I developed a highly sensitive flexible humidity sensor based on armalcolite PDMS nanocomposites, demonstrating excellent sensitivity, fast response, low hysteresis, and long term stability.",
    doi: "",
    citationCount: 0
  },
  {
    category: "Journal Articles",
    title:
      "Dielectric and AC Conductivity Studies of Porous Armalcolite Nanocomposite Based Humidity Sensors",
    authors: "Ashis Tripathy et al.",
    year: 2017,
    venue: "Journal of the American Ceramic Society, Wiley",
    abstract:
      "This study presents my work on porous armalcolite nanocomposites used as dielectric type humidity sensors, analyzing conduction mechanisms, hysteresis behavior, and long term stability.",
    doi: "",
    citationCount: 0
  },
  {
    category: "Journal Articles",
    title:
      "Uniformly Porous Nanocrystalline Ca Mg Fe Ti Oxide Ceramic for Impedance Type Humidity Sensors",
    authors: "Ashis Tripathy et al.",
    year: 2016,
    venue: "Sensors",
    abstract:
      "I report the synthesis and characterization of porous electro ceramic nanocomposites exhibiting high sensitivity, fast response, and excellent stability for humidity sensing applications.",
    doi: "",
    citationCount: 0
  },
  {
    category: "Book Chapters",
    title:
      "Current Advancements in Ceramic Matrix Composites",
    authors: "Ashis Tripathy",
    year: 2016,
    venue: "Springer",
    abstract:
      "In this book chapter, I reviewed recent developments in ceramic matrix composites, focusing on processing techniques, mechanical behavior, and applications in advanced engineering systems.",
    doi: "",
    citationCount: 0
  }
];
export const studentData = {
  stats: {
    phd: 5,
    masters: 12,
    undergrad: 20
  },

  currentScholars: [
    {
      name: "Research Scholar 1",
      topic: "MEMS based humidity sensors"
    },
    {
      name: "Research Scholar 2",
      topic: "Flexible wearable electronics"
    },
    {
      name: "Research Scholar 3",
      topic: "Nanomaterials for biomedical applications"
    }
  ],

  notableAlumni: [
    {
      name: "Alumnus 1",
      achievement: "Research Engineer in Sensor Technology"
    },
    {
      name: "Alumnus 2",
      achievement: "Doctoral Researcher in Biomedical Engineering"
    }
  ]
};

