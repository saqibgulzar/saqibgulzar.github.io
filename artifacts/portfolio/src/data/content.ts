import { FaGoogleScholar, FaResearchgate, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const profile = {
  name: "Saqib Gulzar",
  title: "Assistant Professor, School of Engineering",
  title2: "Research Director, Southern Colorado Institute of Transportation Technology",
  lab: "Gulzar Lab",
  institution: "Colorado State University Pueblo",
  office: "TEE-220F",
  mailingAddress: "2200 Bonforte Blvd, Pueblo, CO 81001",
  email: "saqib.gulzar@csupueblo.edu",
  phone: "919.793.5471",
  socials: {
    googleScholar: "https://scholar.google.com",
    linkedIn: "https://linkedin.com",
    email: "mailto:saqib.gulzar@csupueblo.edu",
    researchGate: "https://researchgate.net"
  }
};

export const bio = `Dr. Saqib Gulzar is an Assistant Professor in the School of Engineering at Colorado State University Pueblo. He also serves as the Research Director of the Southern Colorado Institute of Transportation Technology (SCITT). Dr. Gulzar completed his PhD at North Carolina State University and Masters from Indian Institute of Technology, Delhi. His academic credentials shine with accolades from NIT Srinagar, IIT Delhi, and NC State University, including BTech Gold Medal, IITD Academic Excellence Award and the Sloan Graduate Fellowship at NCSU.

His research areas span across safety, infrastructure, transportation and resilience. Dr. Gulzar is the recipient of several best paper and society awards including APSE — Academy of Pavement Science and Engineering's Outstanding Student Member Award and Best Paper Award runner-up from AKM20 committee of Transportation Research Board, USA.

Dr. Gulzar serves as the Editor of several journals and serves on the AKN11 Standing Committee of the Transportation Research Board of the National Academies of Sciences, Engineering, and Medicine (NASEM).`;

export const areasOfInterest = [
  {
    title: "Safety",
    items: [
      "Traffic safety analysis and crash risk modeling",
      "Roadway safety: surface friction, geometric design, and signage",
      "Rail safety: track condition, grade crossings, and human factors",
      "Construction and work zone safety"
    ]
  },
  {
    title: "Infrastructure",
    items: [
      "Multiscale mechanics and characterization of asphalt binders (LAOS, damage, healing)",
      "Asphalt mixture performance: fatigue, rutting, and low-temperature cracking",
      "Sustainable pavement materials: RAP, RAS, recycling agents, and rejuvenation",
      "Performance testing protocols and material specification development"
    ]
  },
  {
    title: "Resilience",
    items: [
      "Climate change impact on pavement performance and life-cycle costs",
      "Extreme events (flooding, heatwaves) and infrastructure vulnerability",
      "Network-level risk quantification and adaptation planning",
      "System dynamics and agent-based modeling of pavement networks"
    ]
  },
  {
    title: "Transportation",
    items: [
      "Pavement condition, ride quality, and mobility",
      "Data-driven asset management and life-cycle analysis",
      "Transportation equity and access for underserved communities",
      "Emerging technologies and data analytics for infrastructure management"
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
// Numbered J1 (oldest) → J28 (newest)
export const publications = [
  {
    id: "J28",
    authors: ["Gulzar, S.", "Underwood, S."],
    year: "2024",
    title: "Asphalt binder characterization using waveform-based viscoelastic measures and time-temperature superposition principle under large strains.",
    journal: "Construction and Building Materials",
    doi: "https://doi.org/10.1016/j.conbuildmat.2024.137177",
    figure: ""
  },
  {
    id: "J27",
    authors: ["Xue, L.", "Gulzar, S.", "Castorena, C."],
    year: "2024",
    title: "Linear viscoelastic, viscoplastic, and damage characterization of recycled asphalt binders and mixtures containing recycling agents with long-term aging.",
    journal: "Mechanics of Time-Dependent Materials",
    doi: "https://doi.org/10.1007/s11043-024-09721-4",
    figure: ""
  },
  {
    id: "J26",
    authors: ["Gulzar, S.", "Xue, L.", "Preciado, J.", "Fried, A.", "Castorena, C.", "Underwood, S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Phenomenological modeling of aging and rejuvenation on asphalt binder fatigue characteristics.",
    journal: "Construction and Building Materials",
    doi: "https://doi.org/10.1016/j.conbuildmat.2024.135929",
    figure: ""
  },
  {
    id: "J25",
    authors: ["Preciado, J.", "Gulzar, S.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Low-Temperature Performance Evaluation of Recycled Binder Blends for Assessing Recycling Agents for Acceptance.",
    journal: "ASCE Journal of Materials in Civil Engineering",
    doi: "https://doi.org/10.1061/JMCEE7.MTENG-17661",
    figure: ""
  },
  {
    id: "J24",
    authors: ["Fried, A.", "Boz, I.", "Preciado, J.", "Gulzar, S.", "Underwood, B. S.", "Castorena, C.", "Habbouche, J."],
    year: "2024",
    title: "Evaluation of Alternative Approaches to Restore the Rheology of Recycled Asphalt Binder Blends.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981241235179",
    figure: ""
  },
  {
    id: "J23",
    authors: ["Preciado, J.", "Gulzar, S.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Performance Assessment of High Reclaimed Asphalt Pavement Asphalt Mixtures with Recycling Agents.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981241236483",
    figure: ""
  },
  {
    id: "J22",
    authors: ["Preciado, J.", "Gulzar, S.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2023",
    title: "Benchmarking Recycled Binder Blends Using Statistical Analysis: A Case Study of Virginia and North Carolina.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981231178812",
    figure: ""
  },
  {
    id: "J21",
    authors: ["Gulzar, S.", "Fried, A.", "Preciado, J.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2023",
    title: "Towards sustainable roads: A state-of-the-art review on the use of recycling agents in recycled asphalt mixtures.",
    journal: "Journal of Cleaner Production",
    doi: "https://doi.org/10.1016/j.jclepro.2023.136994",
    figure: ""
  },
  {
    id: "J20",
    authors: ["Gulzar, S.", "Castorena, C.", "Underwood, B. S."],
    year: "2023",
    title: "An investigation into the nonlinear rheological behavior of modified asphalt binders using large amplitude oscillatory shear rheology.",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2023.2211211",
    figure: ""
  },
  {
    id: "J19",
    authors: ["Fried, A.", "Xue, L.", "Gulzar, S.", "Preciado, J.", "Underwood, B. S.", "Castorena, C."],
    year: "2022",
    title: "Evaluation of Recycling Agent and Extender Dosage Selection Procedures to Restore the High-temperature Climatic Performance Grade.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981221074361",
    figure: ""
  },
  {
    id: "J18",
    authors: ["Matini, N.", "Gulzar, S.", "Underwood, B. S.", "Castorena, C."],
    year: "2022",
    title: "Evaluation of Structural Performance of Pavements under Extreme Events: Flooding and Heatwave Case Studies.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981221077984",
    figure: ""
  },
  {
    id: "J17",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2022",
    title: "Damage Evolution and Healing Mechanics of Asphalt Binder under Large Amplitude Oscillatory Shear.",
    journal: "International Journal of Fatigue",
    doi: "https://doi.org/10.1016/j.ijfatigue.2022.107060",
    figure: ""
  },
  {
    id: "J16",
    authors: ["Habbouche, J.", "Boz, I.", "Underwood, B. S.", "Castorena, C.", "Gulzar, S.", "Fried, A.", "Preciado, J."],
    year: "2021",
    title: "Review From Multiple Perspectives for the State of the Practice on the Use of Recycled Asphalt Materials and Recycling Agents in Asphalt Concrete Surface Mixtures.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981211061130",
    figure: ""
  },
  {
    id: "J15",
    authors: ["Gulzar, S.", "Goenaga, B.", "Underwood, B. S."],
    year: "2021",
    title: "Novel index for vulnerability assessment of flexible pavement infrastructure to temperature rise: a case study of developing countries.",
    journal: "ASCE Journal of Infrastructure Systems",
    doi: "https://doi.org/10.1061/(ASCE)IS.1943-555X.0000669",
    figure: ""
  },
  {
    id: "J14",
    authors: ["Gulzar, S.", "Underwood, B. S.", "Kim, Y. R."],
    year: "2021",
    title: "Nonlinear Viscoelastic Response of Asphalt Binder under Large Amplitude Oscillatory Shear.",
    journal: "Journal of Materials in Civil Engineering",
    doi: "https://doi.org/10.1061/(ASCE)MT.1943-5533.0003757",
    figure: ""
  },
  {
    id: "J13",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2021",
    title: "Use of Reclaimed Asphalt Pavement in Flexible Pavements: Review of Rheological Modification Mechanisms and Performance Impacts.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/03611981211017568",
    figure: ""
  },
  {
    id: "J12",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2021",
    title: "Continuum Damage Healing Mechanics of Asphalt Binder.",
    journal: "Journal of Engineering Mechanics",
    doi: "https://doi.org/10.1061/(ASCE)EM.1943-7889.0001893",
    figure: ""
  },
  {
    id: "J11",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Nonlinear viscoelastic response of crumb rubber modified asphalt binder under large strains.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/0361198120907097",
    figure: ""
  },
  {
    id: "J10",
    authors: ["Ding, J.", "Wang, Y. D.", "Gulzar, S.", "Kim, Y. R.", "Underwood, B. S."],
    year: "2020",
    title: "Uncertainty quantification of simplified viscoelastic continuum damage fatigue model using the Bayesian inference-based Markov Chain Monte Carlo method.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/036119812091014",
    figure: ""
  },
  {
    id: "J9",
    authors: ["Gulzar, S.", "Kim, Y. R.", "Castorena, C.", "Underwood, B. S."],
    year: "2020",
    title: "COVID-19, uncertainty, and the need for resilience-based thinking in pavement engineering.",
    journal: "Journal of Transportation Engineering, Part B: Pavements",
    doi: "https://doi.org/10.1061/JPEODX.0000235",
    figure: ""
  },
  {
    id: "J8",
    authors: ["Daryaee, D.", "Habibpour, M.", "Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Combined effect of waste polymer and rejuvenator on performance properties of reclaimed asphalt binder.",
    journal: "Construction and Building Materials",
    doi: "https://doi.org/10.1016/j.conbuildmat.2020.121059",
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
    year: "2020",
    title: "Evaluation of Impact of Environmental Factors on Rutting Performance of Pavements over a Pavement Network.",
    journal: "International Journal of Pavement Engineering",
    doi: "https://doi.org/10.1080/10298436.2020.1811888",
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
    authors: ["Gulzar, S.", "Underwood, B. S.", "Zalghout, A."],
    year: "2020",
    title: "Impact of Climate Change on In-Service Pavement Performance: Case Study from Virginia.",
    journal: "Transportation Research Record",
    doi: "https://doi.org/10.1177/0361198119900113",
    figure: ""
  },
  {
    id: "J3",
    authors: ["Vajjarapu, H.", "Verma, A.", "Gulzar, S."],
    year: "2019",
    title: "Adaptation policy framework for climate change impacts on transportation sector in developing countries.",
    journal: "Transportation in Developing Economies",
    doi: "https://doi.org/10.1007/s40890-019-0071-y",
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
// Numbered C1 (oldest) → C48 (newest). Includes peer-reviewed proceedings.
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
  {
    id: "C48",
    authors: ["Sidorova, E.", "Gulzar, S.", "Islam, M."],
    year: "2025",
    title: "Assessment and identification of wildlife crash zones in the US railroad network.",
    conference: "International Conference on Ecology and Transportation",
    location: "Denver, Colorado, USA",
    figure: ""
  },
  {
    id: "C47",
    authors: ["Sharma, M.", "Gulzar, S.", "Sidorova, E.", "Duong, T.", "Islam, M."],
    year: "2025",
    title: "Evaluating wildlife responses to highway infrastructure: a framework for reducing wildlife-vehicle collisions.",
    conference: "International Conference on Ecology and Transportation",
    location: "Denver, Colorado, USA",
    figure: ""
  },
  {
    id: "C46",
    authors: ["Evdokimoff, M.", "Gulzar, S.", "Islam, M."],
    year: "2025",
    title: "Modeling post-wildfire debris flow transportation infrastructure risk in Colorado.",
    conference: "ASCE International Conference on Transportation and Development",
    location: "Glendale, Arizona, USA",
    figure: ""
  },
  {
    id: "C45",
    authors: ["Gulzar, S.", "Islam, M."],
    year: "2025",
    title: "Enhancing dynamic modulus predictions of asphalt mixtures using scientific machine learning.",
    conference: "ASCE International Airfield and Highway Pavements Conference",
    location: "Glendale, Arizona, USA",
    figure: ""
  },
  {
    id: "C44",
    authors: ["Villafranca, C.", "Gulzar, S.", "Islam, M."],
    year: "2025",
    title: "Quantifying uncertainty in dynamic modulus for asphalt pavement design: a Colorado case study.",
    conference: "ASCE International Airfield and Highway Pavements Conference",
    location: "Glendale, Arizona, USA",
    figure: ""
  },
  {
    id: "C43",
    authors: ["Grossman, H.", "Gulzar, S.", "Islam, M."],
    year: "2025",
    title: "Physics-Informed Neural Networks for Enhanced Prediction of Dynamic Modulus in Asphalt Mixtures.",
    conference: "62nd Petersen Asphalt Research Conference",
    location: "Wyoming, USA",
    figure: ""
  },
  {
    id: "C42",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2025",
    title: "Nonlinear viscoelastic, thixotropic, damage, and healing characterization of recycled asphalt binder blends containing recycling agents.",
    conference: "62nd Petersen Asphalt Research Conference",
    location: "Wyoming, USA",
    figure: ""
  },
  {
    id: "C41",
    authors: ["Gulzar, S.", "Preciado, J.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2025",
    title: "Mapping aging dynamics across recycled asphalt binder and mixture scales containing recycling agents.",
    conference: "62nd Petersen Asphalt Research Conference",
    location: "Wyoming, USA",
    figure: ""
  },
  {
    id: "C40",
    authors: ["Turbay, E.", "Gulzar, S.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I.", "Kuhiishi, K."],
    year: "2025",
    title: "Assessment of the aging sensitivity of high reclaimed asphalt pavement asphalt mixtures with recycling agents.",
    conference: "104th Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C39",
    authors: ["Gulzar, S.", "Preciado, J.", "Fried, A.", "Castorena, C.", "Underwood, B. S.", "Habbouche, J.", "Boz, I."],
    year: "2025",
    title: "Cross-scale aging dynamics of recycled asphalt binder blends and mixtures containing recycling agents.",
    conference: "104th Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C38",
    authors: ["Sidorova, E.", "Gulzar, S.", "Islam, M."],
    year: "2024",
    title: "Study the factors causing the sound pollution from high-speed railways in urban areas.",
    conference: "Southern Colorado Transportation Conference",
    location: "Pueblo, Colorado, USA",
    figure: ""
  },
  {
    id: "C37",
    authors: ["Oyewumi, C.", "Sidorova, E.", "Islam, M.", "Gulzar, S."],
    year: "2024",
    title: "Root cause analysis of railway crash in the USA.",
    conference: "Southern Colorado Transportation Conference",
    location: "Pueblo, Colorado, USA",
    figure: ""
  },
  {
    id: "C36",
    authors: ["Grossman, H.", "Islam, M.", "Faisal, H.", "Gulzar, S.", "Sidorova, E."],
    year: "2024",
    title: "Monitoring and reducing seat belt violations and distracted driving with countermeasures.",
    conference: "Southern Colorado Transportation Conference",
    location: "Pueblo, Colorado, USA",
    figure: ""
  },
  {
    id: "C35",
    authors: ["Sharma, M.", "Duong, T.", "Gulzar, S.", "Islam, M."],
    year: "2024",
    title: "Wildlife detection and classification from trail cam video using deep learning.",
    conference: "Southern Colorado Transportation Conference",
    location: "Pueblo, Colorado, USA",
    figure: ""
  },
  {
    id: "C34",
    authors: ["Sharma, M.", "Gulzar, S.", "Duong, T.", "Islam, M.", "Faisal, H."],
    year: "2024",
    title: "Framework for evaluating wildlife responses to highway infrastructure.",
    conference: "Southern Colorado Transportation Conference",
    location: "Pueblo, Colorado, USA",
    figure: ""
  },
  {
    id: "C33",
    authors: ["Ali, H.", "Gulzar, S."],
    year: "2024",
    title: "Automated Planning and Scheduling using LLMs: Case Study of US Railways.",
    conference: "Southern Colorado Transportation Conference",
    location: "Pueblo, Colorado, USA",
    figure: ""
  },
  {
    id: "C32",
    authors: ["Evdokimoff, M.", "Gulzar, S.", "Islam, M."],
    year: "2024",
    title: "Post-wildfire debris flow infrastructure risk modeling in Colorado.",
    conference: "Southern Colorado Transportation Conference",
    location: "Pueblo, Colorado, USA",
    figure: ""
  },
  {
    id: "C31",
    authors: ["Villafranca, C.", "Gulzar, S.", "Islam, M."],
    year: "2024",
    title: "Viscoelastic modeling and uncertainty analysis of asphalt mixtures in Colorado.",
    conference: "Southern Colorado Transportation Conference",
    location: "Pueblo, Colorado, USA",
    figure: ""
  },
  {
    id: "C30",
    authors: ["Habbouche, J.", "Boz, I.", "Underwood, S.", "Castorena, C.", "Gulzar, S.", "Fried, A.", "Preciado, J."],
    year: "2024",
    title: "Engineered Frameworks for Evaluating the Use of Recycling Agents in Surface Asphalt Mixtures for Virginia.",
    conference: "Annual Meeting of the Association of Asphalt Paving Technologists (AAPT)",
    location: "Chicago, IL",
    figure: ""
  },
  {
    id: "C29",
    authors: ["Fried, A.", "Boz, I.", "Preciado, J.", "Gulzar, S.", "Underwood, S.", "Habbouche, J.", "Castorena, C."],
    year: "2024",
    title: "Evaluation of alternative approaches to restore the rheology of recycled asphalt binders.",
    conference: "103rd Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C28",
    authors: ["Xue, L.", "Gulzar, S.", "Castorena, C."],
    year: "2024",
    title: "Effect of recycling agents on the long-term aging susceptibility and performance of asphalt binders and mixtures.",
    conference: "103rd Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C27",
    authors: ["Preciado, J.", "Gulzar, S.", "Castorena, C.", "Underwood, S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Performance assessment of high RAP asphalt mixtures with recycling agents.",
    conference: "103rd Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C26",
    authors: ["Gulzar, S.", "Xue, L.", "Preciado, J.", "Fried, A.", "Castorena, C.", "Underwood, S.", "Habbouche, J.", "Boz, I."],
    year: "2024",
    title: "Understanding the impact of aging and rejuvenation on asphalt binder fatigue characteristics: an LAS-test based performance indices analysis.",
    conference: "103rd Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C25",
    authors: ["Gulzar, S.", "Fried, A.", "Preciado, J.", "Underwood, S.", "Castorena, C."],
    year: "2023",
    title: "Rheological modeling of recycled asphalt binder blends as fluid mixtures.",
    conference: "ASCE Engineering Mechanics Institute Conference",
    location: "Atlanta, Georgia",
    figure: ""
  },
  {
    id: "C24",
    authors: ["Gulzar, S.", "Underwood, S."],
    year: "2023",
    title: "Use of time-temperature shift factors for waveform-based viscoelastic measures in asphalt binder systems.",
    conference: "ASCE Engineering Mechanics Institute Conference",
    location: "Atlanta, Georgia",
    figure: ""
  },
  {
    id: "C23",
    authors: ["Preciado, J.", "Gulzar, S.", "Fried, A.", "Castorena, C.", "Underwood, S.", "Habbouche, J.", "Boz, I."],
    year: "2023",
    title: "Benchmarking recycled binder blends using statistical analysis: a case study of Virginia and North Carolina.",
    conference: "102nd Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C22",
    authors: ["Preciado, J.", "Gulzar, S.", "Fried, A.", "Castorena, C.", "Underwood, S.", "Habbouche, J.", "Boz, I."],
    year: "2023",
    title: "A framework to evaluate recycling agents based on low-temperature rheological performance.",
    conference: "102nd Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C21",
    authors: ["Habbouche, J.", "Boz, I.", "Underwood, S.", "Castorena, C.", "Gulzar, S.", "Fried, A.", "Preciado, J."],
    year: "2022",
    title: "State of the Practice on the Use of Recycling Agents in Asphalt Mixtures: Internet Surveys, Best Practices, and Lessons Learned from Multiple Perspectives.",
    conference: "101st Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C20",
    authors: ["Fried, A.", "Xue, L.", "Gulzar, S.", "Preciado, J.", "Underwood, B. S.", "Castorena, C."],
    year: "2022",
    title: "Evaluation of Recycling Agent and Extender Dosage Selection Procedures to Restore the High-temperature Climatic Performance Grade.",
    conference: "101st Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C19",
    authors: ["Matini, N.", "Gulzar, S.", "Underwood, B. S.", "Castorena, C."],
    year: "2022",
    title: "Evaluation of Structural Performance of Pavements under Extreme Events: Flooding and Heatwave Case Studies.",
    conference: "101st Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C18",
    authors: ["Habbouche, J.", "Boz, I.", "Underwood, S.", "Castorena, C.", "Gulzar, S.", "Fried, A.", "Preciado, J."],
    year: "2021",
    title: "State of the Practice on the Use of Recycling Agents in Asphalt Mixtures: Internet Surveys, Best Practices, and Lessons Learned from Multiple Perspectives.",
    conference: "Annual Meeting of the Association of Asphalt Paving Technologists (AAPT)",
    location: "Nashville, TN",
    figure: ""
  },
  {
    id: "C17",
    authors: ["Goenaga, B.", "Gulzar, S.", "Underwood, B. S."],
    year: "2021",
    title: "Development of a climate change vulnerability index for pavement infrastructure: a case study of developing countries.",
    conference: "100th Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C16",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2021",
    title: "Asphalt binder characterization using waveform-based viscoelastic measures.",
    conference: "100th Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C15",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Large amplitude oscillatory shear of modified asphalt binder.",
    conference: "Advances in Materials and Pavement Performance Prediction (AP3)",
    location: "San Antonio, Texas",
    url: "https://doi.org/10.1201/9781003027362-100",
    figure: ""
  },
  {
    id: "C14",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Fourier transform rheology of asphalt binders.",
    conference: "Advances in Materials and Pavement Performance Prediction (AP3)",
    location: "San Antonio, Texas",
    url: "https://doi.org/10.1201/9781003027362-99",
    figure: ""
  },
  {
    id: "C13",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Stress decomposition of nonlinear response of modified asphalt binder under large strains.",
    conference: "Advances in Materials and Pavement Performance Prediction (AP3)",
    location: "San Antonio, Texas",
    url: "https://doi.org/10.1201/9781003027362-101",
    figure: ""
  },
  {
    id: "C12",
    authors: ["Matini, N.", "Gulzar, S.", "Goenaga, B.", "Fried, A.", "Underwood, B. S.", "Castorena, C."],
    year: "2020",
    title: "Structural performance of pavements under extreme events: towards a resilient pavement.",
    conference: "99th Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C11",
    authors: ["Ding, J.", "Wang, Y.", "Gulzar, S.", "Kim, Y. R.", "Underwood, B. S."],
    year: "2020",
    title: "Uncertainty quantification of simplified viscoelastic continuum damage fatigue model using Bayesian inference based Markov Chain Monte Carlo method.",
    conference: "99th Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C10",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2020",
    title: "Nonlinear viscoelastic response of crumb rubber modified asphalt binder under large strains.",
    conference: "99th Annual Meeting of the Transportation Research Board",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C9",
    authors: ["Matini, N.", "Gulzar, S.", "Goenaga, B.", "Fried, A.", "Underwood, B. S.", "Castorena, C."],
    year: "2019",
    title: "Climate change and the challenges of creating a more adaptive and flexible pavement engineering paradigm.",
    conference: "Transportation Resilience 2019: 2nd International Conference on Transportation System Resilience to Natural Hazards and Extreme Weather Events",
    location: "Washington D.C.",
    figure: ""
  },
  {
    id: "C8",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2019",
    title: "Nonlinear Rheological Behavior of Asphalt Binders.",
    conference: "91st Annual Meeting of The Society of Rheology",
    location: "Raleigh, NC",
    figure: ""
  },
  {
    id: "C7",
    authors: ["Gulzar, S.", "Underwood, B. S."],
    year: "2018",
    title: "Pavement infrastructure adaptability in an uncertain future: a case study of North Carolina.",
    conference: "Annual Meeting of North Carolina Section Institute of Transportation Engineers",
    location: "Raleigh, NC",
    figure: ""
  },
  {
    id: "C6",
    authors: ["Gulzar, S."],
    year: "2018",
    title: "Advanced Characterization of Modified Asphalt Binders.",
    conference: "National Conference on Emerging Trends in Materials Science, Shri Mata Vaishno Devi University",
    location: "Katra, India",
    figure: ""
  },
  {
    id: "C5",
    authors: ["Gulzar, S.", "Ali, H.", "Doddamani, C."],
    year: "2017",
    title: "A Conceptual Framework for Introducing 'Mobility as a Service' in India: Opportunities.",
    conference: "ASCE Indian Conference 2017",
    location: "Indian Institute of Technology Delhi, India",
    figure: ""
  },
  {
    id: "C4",
    authors: ["Gulzar, S.", "Ali, H.", "Doddamani, C."],
    year: "2017",
    title: "Ant Colony Optimization in Pavement Asset Management.",
    conference: "ASCE Indian Conference 2017",
    location: "Indian Institute of Technology Delhi, India",
    figure: ""
  }
];

// ─── BOOK CHAPTERS ────────────────────────────────────────────────────────────
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
  {
    id: "BC3",
    authors: ["Gulzar, S.", "Castorena, C.", "Underwood, S."],
    year: "2021",
    title: "A nexus of tribology and rheology to study thin film mechanics of asphalt-aggregate interaction during mixing and compaction.",
    book: "Tribology and Sustainability",
    publisher: "CRC Press",
    doi: "https://doi.org/10.1201/9781003092162-15",
    figure: ""
  },
  {
    id: "BC2",
    authors: ["Gulzar, S.", "Ali, H."],
    year: "2021",
    title: "Pavement infrastructure asset management using clustering-based ant colony optimization.",
    book: "Evolutionary Data Clustering: Algorithms and Applications",
    publisher: "Springer",
    doi: "https://doi.org/10.1007/978-981-33-4191-3_10",
    figure: ""
  },
  {
    id: "BC1",
    authors: ["Gulzar, S.", "Underwood, S."],
    year: "2019",
    title: "Use of polymer nanocomposites in asphalt binder modification.",
    book: "Advanced Functional Textiles and Polymers: Fabrication, Processing and Applications",
    publisher: "Wiley",
    doi: "https://doi.org/10.1002/9781119605843.ch14",
    figure: ""
  }
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
        title: "Traffic Safety",
        description: "Analyzing crash data, driver behavior, and traffic flow patterns to identify risk factors and develop evidence-based interventions that reduce crash frequency and severity on road networks.",
        figure: ""
      },
      {
        title: "Roadway Safety",
        description: "Evaluating geometric design, pavement surface conditions (friction, roughness), signage, and roadside features to improve the inherent safety of highway and street infrastructure.",
        figure: ""
      },
      {
        title: "Rail Safety",
        description: "Investigating infrastructure and operational factors that contribute to rail incidents — including track condition, grade crossing design, and human factors — to improve the safety of rail transportation systems.",
        figure: ""
      },
      {
        title: "Construction Safety",
        description: "Assessing hazards in work zones and construction sites, examining the interaction between construction activities, worker safety, and through-traffic to develop safer project delivery practices.",
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
