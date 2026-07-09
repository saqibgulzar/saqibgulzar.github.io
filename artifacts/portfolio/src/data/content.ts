import { FaGoogleScholar, FaResearchgate, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const profile = {
  name: "Saqib Gulzar",
  title: "SCITT Assistant Professor",
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

export const publications = [
  {
    id: "J18",
    authors: ["Gulzar, S.", "Underwood, S."],
    year: "2024",
    title: "Asphalt binder characterization using waveform-based viscoelastic measures and time-temperature superposition principle under large strains.",
    journal: "Construction and Building Materials",
    doi: "https://doi.org/10.1016/j.conbuildmat.2024.137177"
  },
  {
    id: "J17",
    authors: ["Xue, L.", "Gulzar, S.", "Castorena, C."],
    year: "2024",
    title: "Linear viscoelastic, viscoplastic, and damage characterization of recycled asphalt binders and mixtures containing recycling agents with long-term aging.",
    journal: "Mechanics of Time-Dependent Materials",
    doi: "https://doi.org/10.1007/s11043-024-09721-4"
  },
  {
    id: "J16",
    authors: ["Gulzar, S.", "Xue, L.", "Preciado, J.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Phenomenological modeling of aging and rejuvenation on asphalt binder fatigue characteristics.",
    journal: "Construction and Building Materials",
    doi: "https://doi.org/10.1016/j.conbuildmat.2024.135929"
  },
  {
    id: "J15",
    authors: ["Preciado, J.", "Gulzar, S.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Low-Temperature Performance Evaluation of Recycled Binder Blends for Assessing Recycling Agents for Acceptance.",
    journal: "ASCE Journal of Materials in Civil Engineering",
    doi: "https://doi.org/10.1061/JMCEE7.MTENG-17661"
  },
  {
    id: "J14",
    authors: ["Fried, A.", "Boz, I.", "Preciado, J.", "Gulzar, S.", "Underwood, B. S.", "Castorena, C.", "Habbouche, J."],
    year: "2024",
    title: "Evaluation of Alternative Approaches to Restore the Rheology of Recycled Asphalt Binder Blends.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981241235179"
  },
  {
    id: "J13",
    authors: ["Preciado, J.", "Gulzar, S.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Performance Assessment of High Reclaimed Asphalt Pavement Asphalt Mixtures with Recycling Agents.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981241236483"
  },
  {
    id: "J12",
    authors: ["Preciado, J.", "Gulzar, S.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2023",
    title: "Benchmarking Recycled Binder Blends Using Statistical Analysis: A Case Study of Virginia and North Carolina.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981231178812"
  },
  {
    id: "J11",
    authors: ["Gulzar, S.", "Castorena, C.", "Underwood, B. S."],
    year: "2023",
    title: "An investigation into the nonlinear rheological behavior of modified asphalt binders using large amplitude oscillatory shear rheology.",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2023.2211211"
  },
  {
    id: "J10",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2022",
    title: "Damage Evolution and Healing Mechanics of Asphalt Binder under Large Amplitude Oscillatory Shear.",
    journal: "International Journal of Fatigue",
    doi: "https://doi.org/10.1016/j.ijfatigue.2022.107060"
  },
  {
    id: "J9",
    authors: ["Gulzar, S.", "Underwood, B. S.", "Kim, Y. R."],
    year: "2021",
    title: "Nonlinear Viscoelastic Response of Asphalt Binder under Large Amplitude Oscillatory Shear.",
    journal: "Journal of Materials in Civil Engineering",
    doi: "https://doi.org/10.1061/(ASCE)MT.1943-5533.0003757"
  },
  {
    id: "J8",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2021",
    title: "Use of Reclaimed Asphalt Pavement in Flexible Pavements: Review of Rheological Modification Mechanisms and Performance Impacts.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981211017568"
  },
  {
    id: "J7",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Nonlinear Viscoelastic Response of Asphalt Binder under Large Amplitude Oscillatory Shear (LAOS).",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2020.1795355"
  },
  {
    id: "J6",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2021",
    title: "Continuum Damage Healing Mechanics of Asphalt Binder.",
    journal: "Journal of Engineering Mechanics",
    doi: "https://doi.org/10.1061/(ASCE)EM.1943-7889.0001893"
  },
  {
    id: "J5",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Model Comparison of Viscoelastic Properties of Asphalt Binder.",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2018.1558259"
  },
  {
    id: "J4",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Evaluation of Impact of Environmental Factors on Rutting Performance of Pavements over a Pavement Network.",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2020.1811888"
  },
  {
    id: "J3",
    authors: ["Gulzar, S.", "Underwood, B. S.", "Zalghout, A."],
    year: "2020",
    title: "Impact of Climate Change on In-Service Pavement Performance: Case Study from Virginia.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/0361198119900113"
  },
  {
    id: "J2",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2019",
    title: "Determination of Shift Factor–Temperature Relationship for Asphalt Materials in the Glassy Region.",
    journal: "Construction and Building Materials",
    doi: "https://doi.org/10.1016/j.conbuildmat.2019.01.036"
  },
  {
    id: "J1",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2019",
    title: "Use of a Controlled Stress Protocol to Characterize Fatigue, Creep, and Rutting Potential of Asphalt Binder.",
    journal: "Journal of Materials in Civil Engineering",
    doi: "https://doi.org/10.1061/(ASCE)MT.1943-5533.0002820"
  }
];

export const researchPillars = [
  {
    title: "Modeling and Study of Infrastructure Materials",
    items: [
      "Multiscale mechanics and modeling of asphalt materials",
      "Nonlinear viscoelastic analysis of asphalt binders (large amplitude oscillatory shear, LAOS)",
      "Continuum damage and healing mechanics",
      "Performance evaluation: viscoelastic, viscoplastic, fatigue damage"
    ]
  },
  {
    title: "Sustainable Transportation Infrastructure Materials",
    items: [
      "Recycled asphalt pavement (RAP) and recycled asphalt shingles (RAS)",
      "Recycling agents, additives, and softeners",
      "Aging and rejuvenation of binder blends"
    ]
  },
  {
    title: "Transportation Infrastructure Resilience",
    items: [
      "Impact of climate change and extreme events on pavement performance",
      "Pavement network vulnerability assessment",
      "System dynamics and agent-based modeling of pavement networks"
    ]
  }
];

export const teachingCourses = [
  {
    title: "Transportation Engineering",
    level: "Undergraduate"
  },
  {
    title: "Pavement Materials and Design",
    level: "Undergraduate/Graduate"
  },
  {
    title: "Infrastructure Resilience",
    level: "Graduate"
  },
  {
    title: "Advanced Asphalt Materials",
    level: "Graduate"
  }
];
