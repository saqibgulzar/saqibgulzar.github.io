import { FaGoogleScholar, FaResearchgate, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const profile = {
  name: "Saqib Gulzar",
  title: "SCITT Assistant Professor",
  lab: "Gulzar Lab",
  institution: "Colorado State University Pueblo",
  email: "saqib.gulzar@csupueblo.edu",
  office: "CIHHI 254",
  phone: "919.793.5471",
  socials: {
    googleScholar: "https://scholar.google.com",
    linkedIn: "https://linkedin.com",
    email: "mailto:saqib.gulzar@csupueblo.edu",
    researchGate: "https://researchgate.net"
  }
};

export const bio = `Welcome! I am currently a SCITT Assistant Professor at Colorado State University Pueblo. I completed my PhD under the supervision of Prof. Shane Underwood in the Department of Civil, Construction, and Environmental Engineering at North Carolina State University.

My primary research is in the field of infrastructure materials and resilience, and my ongoing research centers on employing bottom-up, multiscale mechanistic investigations to explore asphalt concrete and its primary constituent asphalt binder. These investigations involve rheological characterization of asphalt binders, understanding the underlying damage and healing mechanics, and performance evaluation of asphalt concrete for viscoelastic, viscoplastic, and fatigue damage characterization. Additionally, I employ top-down systems studies to uncover needs and knowledge gaps that can be informed by the findings of the bottom-up investigations. These studies include assessment of impact of extreme events such as flooding and heatwaves on pavement structural performance, modeling the impact of climate change on road networks, and developing quantification techniques and metrics to model the existing vulnerabilities at material, pavement, and network scales.`;

export const areasOfInterest = [
  {
    title: "Modeling and study of transportation infrastructure materials",
    items: [
      "Multiscale mechanics and modeling of asphalt materials",
      "Rheology and chemistry of asphalt binders",
      "Continuum damage and healing mechanics",
      "Performance evaluation of infrastructure materials",
      "Uncertainty quantification and probabilistic characterization"
    ]
  },
  {
    title: "Sustainable transportation infrastructure materials",
    items: [
      "Recycled materials such as recycled asphalt pavement (RAP), recycled asphalt shingles (RAS), etc.",
      "Use of recycling agents, additives, softeners, etc.",
      "Positive reuse of waste materials in road infrastructure"
    ]
  },
  {
    title: "Transportation infrastructure resilience",
    items: [
      "Infrastructure resilience modeling",
      "System dynamics and agent-based modeling",
      "Impact assessment and adaptation methodologies",
      "Impact of external factors on pavement performance"
    ]
  }
];

export const news = [
  {
    year: "2024",
    content: "New journal publication in Construction and Building Materials — asphalt binder characterization using waveform-based viscoelastic measures.",
    link: ""
  },
  {
    year: "2023",
    content: "Invited reviewer for International Journal of Pavement Engineering and Construction and Building Materials.",
    link: ""
  },
  {
    year: "2022",
    content: "CCEE professor and Ph.D. student receive awards from APSE!",
    link: "https://www.ccee.ncsu.edu/news/2022/ccee-professor-ph-d-student-receive-awards-from-apse/"
  }
];

// ─── JOURNAL PUBLICATIONS ─────────────────────────────────────────────────────
export const publications = [
  {
    id: "J18",
    authors: ["Gulzar, S.", "Underwood, S."],
    year: "2024",
    title: "Asphalt binder characterization using waveform-based viscoelastic measures and time-temperature superposition principle under large strains.",
    journal: "Construction and Building Materials",
    doi: "https://doi.org/10.1016/j.conbuildmat.2024.137177",
    figure: "" // provide image path or URL
  },
  {
    id: "J17",
    authors: ["Xue, L.", "Gulzar, S.", "Castorena, C."],
    year: "2024",
    title: "Linear viscoelastic, viscoplastic, and damage characterization of recycled asphalt binders and mixtures containing recycling agents with long-term aging.",
    journal: "Mechanics of Time-Dependent Materials",
    doi: "https://doi.org/10.1007/s11043-024-09721-4",
    figure: ""
  },
  {
    id: "J16",
    authors: ["Gulzar, S.", "Xue, L.", "Preciado, J.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Phenomenological modeling of aging and rejuvenation on asphalt binder fatigue characteristics.",
    journal: "Construction and Building Materials",
    doi: "https://doi.org/10.1016/j.conbuildmat.2024.135929",
    figure: ""
  },
  {
    id: "J15",
    authors: ["Preciado, J.", "Gulzar, S.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Low-Temperature Performance Evaluation of Recycled Binder Blends for Assessing Recycling Agents for Acceptance.",
    journal: "ASCE Journal of Materials in Civil Engineering",
    doi: "https://doi.org/10.1061/JMCEE7.MTENG-17661",
    figure: ""
  },
  {
    id: "J14",
    authors: ["Fried, A.", "Boz, I.", "Preciado, J.", "Gulzar, S.", "Underwood, B. S.", "Castorena, C.", "Habbouche, J."],
    year: "2024",
    title: "Evaluation of Alternative Approaches to Restore the Rheology of Recycled Asphalt Binder Blends.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981241235179",
    figure: ""
  },
  {
    id: "J13",
    authors: ["Preciado, J.", "Gulzar, S.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Performance Assessment of High Reclaimed Asphalt Pavement Asphalt Mixtures with Recycling Agents.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981241236483",
    figure: ""
  },
  {
    id: "J12",
    authors: ["Preciado, J.", "Gulzar, S.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2023",
    title: "Benchmarking Recycled Binder Blends Using Statistical Analysis: A Case Study of Virginia and North Carolina.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981231178812",
    figure: ""
  },
  {
    id: "J11",
    authors: ["Gulzar, S.", "Castorena, C.", "Underwood, B. S."],
    year: "2023",
    title: "An investigation into the nonlinear rheological behavior of modified asphalt binders using large amplitude oscillatory shear rheology.",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2023.2211211",
    figure: ""
  },
  {
    id: "J10",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2022",
    title: "Damage Evolution and Healing Mechanics of Asphalt Binder under Large Amplitude Oscillatory Shear.",
    journal: "International Journal of Fatigue",
    doi: "https://doi.org/10.1016/j.ijfatigue.2022.107060",
    figure: ""
  },
  {
    id: "J9",
    authors: ["Gulzar, S.", "Underwood, B. S.", "Kim, Y. R."],
    year: "2021",
    title: "Nonlinear Viscoelastic Response of Asphalt Binder under Large Amplitude Oscillatory Shear.",
    journal: "Journal of Materials in Civil Engineering",
    doi: "https://doi.org/10.1061/(ASCE)MT.1943-5533.0003757",
    figure: ""
  },
  {
    id: "J8",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2021",
    title: "Use of Reclaimed Asphalt Pavement in Flexible Pavements: Review of Rheological Modification Mechanisms and Performance Impacts.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981211017568",
    figure: ""
  },
  {
    id: "J7",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Nonlinear Viscoelastic Response of Asphalt Binder under Large Amplitude Oscillatory Shear (LAOS).",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2020.1795355",
    figure: ""
  },
  {
    id: "J6",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2021",
    title: "Continuum Damage Healing Mechanics of Asphalt Binder.",
    journal: "Journal of Engineering Mechanics",
    doi: "https://doi.org/10.1061/(ASCE)EM.1943-7889.0001893",
    figure: ""
  },
  {
    id: "J5",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Model Comparison of Viscoelastic Properties of Asphalt Binder.",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2018.1558259",
    figure: ""
  },
  {
    id: "J4",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Evaluation of Impact of Environmental Factors on Rutting Performance of Pavements over a Pavement Network.",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2020.1811888",
    figure: ""
  },
  {
    id: "J3",
    authors: ["Gulzar, S.", "Underwood, B. S.", "Zalghout, A."],
    year: "2020",
    title: "Impact of Climate Change on In-Service Pavement Performance: Case Study from Virginia.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/0361198119900113",
    figure: ""
  },
  {
    id: "J2",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2019",
    title: "Determination of Shift Factor–Temperature Relationship for Asphalt Materials in the Glassy Region.",
    journal: "Construction and Building Materials",
    doi: "https://doi.org/10.1016/j.conbuildmat.2019.01.036",
    figure: ""
  },
  {
    id: "J1",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2019",
    title: "Use of a Controlled Stress Protocol to Characterize Fatigue, Creep, and Rutting Potential of Asphalt Binder.",
    journal: "Journal of Materials in Civil Engineering",
    doi: "https://doi.org/10.1061/(ASCE)MT.1943-5533.0002820",
    figure: ""
  }
];

// ─── CONFERENCE PRESENTATIONS ─────────────────────────────────────────────────
// TODO: Add your conference presentations below. Format:
// { id: "C1", authors: [...], year: "YYYY", title: "...", conference: "...", location: "...", doi/url: "" }
export const conferenceProceedings: Array<{
  id: string;
  authors: string[];
  year: string;
  title: string;
  conference: string;
  location?: string;
  url?: string;
  figure?: string;
}> = [
  // Example entry (replace with real ones):
  // {
  //   id: "C1",
  //   authors: ["Gulzar, S.", "Underwood, B. S."],
  //   year: "2023",
  //   title: "Title of conference paper",
  //   conference: "Transportation Research Board Annual Meeting",
  //   location: "Washington, D.C.",
  //   url: "",
  //   figure: ""
  // },
];

// ─── BOOK CHAPTERS ────────────────────────────────────────────────────────────
// TODO: Add your book chapters below. Format:
// { id: "BC1", authors: [...], year: "YYYY", title: "...", book: "...", editors: [...], publisher: "...", doi: "" }
export const bookChapters: Array<{
  id: string;
  authors: string[];
  year: string;
  title: string;
  book: string;
  editors?: string[];
  publisher?: string;
  doi?: string;
  figure?: string;
}> = [
  // Example entry (replace with real ones):
  // {
  //   id: "BC1",
  //   authors: ["Gulzar, S.", "Underwood, B. S."],
  //   year: "2022",
  //   title: "Chapter title",
  //   book: "Book Title",
  //   editors: ["Editor, A.", "Editor, B."],
  //   publisher: "Publisher Name",
  //   doi: "",
  //   figure: ""
  // },
];

// ─── RESEARCH AREAS ───────────────────────────────────────────────────────────
export const researchAreas = [
  {
    id: "safety",
    title: "Safety",
    shortTitle: "Safety",
    tagline: "Reducing risk on our roads through data-driven engineering.",
    description: `Road safety is one of the most pressing challenges in transportation engineering. Our research investigates the material, structural, and system-level factors that contribute to pavement-related safety hazards — from skid resistance and surface friction to work zone design and crash risk modeling. We combine lab-scale characterization with network-level analysis to develop evidence-based safety improvements.`,
    subareas: [
      {
        title: "Pavement Surface Friction & Skid Resistance",
        description: "Characterizing the friction properties of pavement surfaces and their evolution with traffic and weather, identifying conditions that elevate wet-pavement crash risk.",
        figure: ""
      },
      {
        title: "Work Zone Safety",
        description: "Analyzing traffic flow disruptions, driver behavior, and material performance in active construction and maintenance zones to reduce work zone incidents.",
        figure: ""
      },
      {
        title: "Crash Risk & Pavement Condition",
        description: "Developing models that link pavement structural and surface condition indicators (roughness, rut depth, cracking) to crash frequency and severity.",
        figure: ""
      },
      {
        title: "Vulnerable Road Users",
        description: "Evaluating pavement surface conditions, shoulder design, and infrastructure treatments that affect the safety of pedestrians and cyclists.",
        figure: ""
      }
    ],
    figure: ""
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    shortTitle: "Infrastructure",
    tagline: "Understanding and improving the materials that carry our roads.",
    description: `Durable, high-performing infrastructure begins with a deep understanding of materials. Our research employs multiscale mechanistic investigations — from asphalt binder rheology to mixture-scale fatigue and rutting — to characterize how pavements are built, how they age, and how they fail. This foundational work informs better material specifications, design practices, and asset management strategies.`,
    subareas: [
      {
        title: "Asphalt Binder Characterization",
        description: "Probing nonlinear rheological behavior of asphalt binders using advanced protocols such as Large Amplitude Oscillatory Shear (LAOS), capturing waveform distortions, damage onset, and healing mechanics.",
        figure: ""
      },
      {
        title: "Continuum Damage & Healing Mechanics",
        description: "Developing thermodynamics-based frameworks to quantify fatigue damage evolution and self-healing capacity in asphalt binders and mixtures under cyclic loading.",
        figure: ""
      },
      {
        title: "Asphalt Mixture Performance",
        description: "Evaluating asphalt mixtures for viscoelastic, viscoplastic (rutting), and fatigue responses using mechanistic testing frameworks that bridge the lab-field performance gap.",
        figure: ""
      },
      {
        title: "Sustainable Pavement Materials",
        description: "Investigating recycled asphalt pavement (RAP), recycled asphalt shingles (RAS), and recycling agents to maximize recycled content while maintaining mixture durability.",
        figure: ""
      }
    ],
    figure: ""
  },
  {
    id: "resilience",
    title: "Resilience",
    shortTitle: "Resilience",
    tagline: "Engineering transportation systems that absorb and adapt.",
    description: `Transportation infrastructure faces escalating threats from climate change, extreme weather events, and aging asset bases. Our research develops quantitative frameworks to measure, model, and improve the resilience of pavement materials, individual pavements, and entire road networks — enabling agencies to prioritize investments that deliver the greatest resilience gains under uncertainty.`,
    subareas: [
      {
        title: "Climate Change Impact Assessment",
        description: "Modeling how projected temperature increases and shifting precipitation patterns alter pavement performance and life-cycle costs across regional road networks.",
        figure: ""
      },
      {
        title: "Extreme Events & Natural Hazards",
        description: "Assessing structural performance impacts of flooding, heatwaves, and freeze-thaw cycles on pavement systems, quantifying damage potential and recovery timelines.",
        figure: ""
      },
      {
        title: "Network Vulnerability & Risk",
        description: "Developing metrics and models to identify vulnerabilities at material, pavement, and network scales — enabling risk-informed maintenance and adaptation planning.",
        figure: ""
      },
      {
        title: "Systems Dynamics Modeling",
        description: "Applying system dynamics and agent-based modeling to simulate the behavior of pavement networks under compounding stresses from climate, traffic, aging, and hazard events.",
        figure: ""
      }
    ],
    figure: ""
  },
  {
    id: "transportation",
    title: "Transportation",
    shortTitle: "Transportation",
    tagline: "Connecting people, places, and communities through smart infrastructure.",
    description: `Transportation is a system — and its performance depends on how well materials, structures, networks, and people interact. Our research takes a systems-level view of transportation infrastructure: understanding how pavement condition affects mobility, how network design influences accessibility and equity, and how emerging technologies and data analytics can be harnessed to manage transportation assets more effectively.`,
    subareas: [
      {
        title: "Pavement Performance & Mobility",
        description: "Linking pavement structural condition, roughness, and ride quality to vehicle operating costs, fuel efficiency, and traveler experience across road networks.",
        figure: ""
      },
      {
        title: "Asset Management & Life-Cycle Analysis",
        description: "Developing data-driven asset management frameworks that optimize maintenance, rehabilitation, and replacement decisions over the full pavement life cycle.",
        figure: ""
      },
      {
        title: "Transportation Equity & Access",
        description: "Examining how pavement condition and infrastructure investment patterns affect access to economic opportunity, healthcare, and essential services for underserved communities.",
        figure: ""
      },
      {
        title: "Data Analytics & Emerging Technologies",
        description: "Leveraging emerging sensor technologies, machine learning, and large-scale pavement performance databases to advance data-driven infrastructure management.",
        figure: ""
      }
    ],
    figure: ""
  }
];

// Keep legacy export for backward compat
export const researchPillars = researchAreas.map(a => ({
  title: a.title,
  items: a.subareas.map(s => s.title)
}));

// ─── TEACHING ─────────────────────────────────────────────────────────────────
export const teachingCourses = [
  {
    code: "CE 342",
    title: "Transportation Engineering",
    level: "Undergraduate",
    description: "Fundamentals of transportation systems including geometric design, traffic flow theory, highway capacity, and pavement design. Includes hands-on lab sessions for material testing."
  },
  {
    code: "CE 442 / CE 542",
    title: "Pavement Materials and Design",
    level: "Undergraduate/Graduate",
    description: "Characterization of pavement materials — aggregates, asphalt binders, and mixtures — followed by structural pavement design using mechanistic-empirical approaches."
  },
  {
    code: "CE 610",
    title: "Infrastructure Resilience",
    level: "Graduate",
    description: "Explores methodologies for quantifying and improving the resilience of civil infrastructure to natural hazards, climate change, and aging. Topics include vulnerability assessment, systems modeling, and adaptation planning."
  },
  {
    code: "CE 620",
    title: "Advanced Asphalt Materials",
    level: "Graduate",
    description: "In-depth treatment of asphalt binder and mixture characterization, advanced rheology, continuum damage mechanics, and performance testing frameworks for pavement materials."
  }
];

export const teachingPhilosophy = `My teaching philosophy centers on bridging the gap between theory and practice. I aim to cultivate critical thinking by grounding every concept in real-world infrastructure problems, encouraging students to question assumptions, design experiments, and interpret data rigorously. I believe in an active learning environment where students learn by doing — whether through laboratory exercises, computational assignments, or case studies drawn from current research.`;

// ─── AI APPS FOR LEARNING ─────────────────────────────────────────────────────
// TODO: Add your specific AI apps / tools. The examples below are illustrative — replace with real ones.
export const aiAppsForLearning: Array<{
  title: string;
  description: string;
  url?: string;
  tags?: string[];
  figure?: string;
}> = [
  // Example entries — replace with your actual apps:
  // {
  //   title: "Asphalt Rheology Explorer",
  //   description: "An interactive simulation tool that lets students explore how temperature, frequency, and modifier type affect asphalt binder stiffness and phase angle.",
  //   url: "",
  //   tags: ["Rheology", "Simulation", "Undergraduate"],
  //   figure: ""
  // },
  // {
  //   title: "Pavement Climate Impact Calculator",
  //   description: "A web-based tool for students to model the impact of temperature increases on pavement rutting and fatigue life across different climate scenarios.",
  //   url: "",
  //   tags: ["Climate", "Pavement Design", "Graduate"],
  //   figure: ""
  // },
];

// ─── VIGNETTES ────────────────────────────────────────────────────────────────
// TODO: Add your vignettes / short essays / notes. Replace examples below.
export const vignettes: Array<{
  slug: string;
  title: string;
  date: string;
  summary: string;
  content?: string;
  tags?: string[];
}> = [
  // Example entries — replace with real vignettes from your WordPress site:
  // {
  //   slug: "why-roads-crack",
  //   title: "Why Do Roads Crack? A Material Science Perspective",
  //   date: "2023-09-15",
  //   summary: "A short essay exploring the fundamental material science behind asphalt fatigue cracking, written for a general audience.",
  //   tags: ["Outreach", "Asphalt", "Fundamentals"]
  // },
  // {
  //   slug: "climate-and-pavements",
  //   title: "Climate Change Is Quietly Destroying Our Roads",
  //   date: "2022-11-10",
  //   summary: "How rising temperatures and intensified rainfall events are accelerating pavement deterioration faster than most transportation agencies realize.",
  //   tags: ["Climate", "Infrastructure", "Outreach"]
  // },
];

// ─── RESOURCES ─────────────────────────────────────────────────────────────────
// TODO: Add your resource links / tools / datasets. Replace examples below.
export const resources: Array<{
  category: string;
  items: Array<{
    title: string;
    description: string;
    url?: string;
  }>;
}> = [
  // Example categories — replace with your actual resources:
  // {
  //   category: "Software & Tools",
  //   items: [
  //     {
  //       title: "FlexPAVE",
  //       description: "FHWA's mechanistic-empirical pavement analysis software for flexible pavements.",
  //       url: "https://www.fhwa.dot.gov"
  //     }
  //   ]
  // },
  // {
  //   category: "Datasets",
  //   items: [
  //     {
  //       title: "LTPP Database",
  //       description: "Long-Term Pavement Performance database maintained by FHWA.",
  //       url: "https://infopave.fhwa.dot.gov"
  //     }
  //   ]
  // },
];
