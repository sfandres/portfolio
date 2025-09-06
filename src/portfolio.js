/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Andres J. Sanchez-Fernandez | Portfolio",
  description:
    "Data Scientist & Machine Learning Engineer. Bridging academic rigor with practical, industry-facing data science and teaching.",
  og: {
    title: "Andres J. Sanchez-Fernandez | Portfolio",
    type: "website",
    url: "http://sfandres.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Andres J. Sanchez-Fernandez",
  logo_name: "sfandres",
  nickname: "",
  subTitle:
    "PhD Engineer & AI practitioner focused on data science and deep learning for real-world research problems. Lecturer at UNIR. Passionate about bringing research to tech and business.",
  resumeLink:
    "https://drive.google.com/file/d/11Civ1J3MpbWPBqtTNDuy9u8TiBdJ_mVp/view?usp=sharing",
  portfolio_repository: "https://github.com/sfandres",
  githubProfile: "https://github.com/sfandres",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  // {
  //   name: "Github",
  //   link: "https://github.com/sfandres",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sfandres/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sfandres94/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Gmail",
    link: "mailto:andres.sanchez1994@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Deep Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with real-world datasets",
        "⚡ Hands-on with PyTorch, Python, scikit-learn, pandas, NumPy",
        "⚡ Experiment tracking, Git-based workflows, and distributed training (Slurm, Ray)",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: { color: "#F37626" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#f32626ff" },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: { backgroundColor: "white", color: "#D00000" },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
      ],
    },
    {
      title: "Teaching & Analytics",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Lecturer at UNIR: ML (supervised & unsupervised), Deep Learning, Big Data & Analytics",
        "⚡ Tools for instruction & BI: Jupyter, KNIME, Power BI, Tableau",
        "⚡ SQL data work and reproducible notebooks for classes and projects",
      ],
      softwareSkills: [
        {
          skillName: "KNIME",
          fontAwesomeClassname: "simple-icons:knime",
          style: { color: "#FFCC00" },
        },
        {
          skillName: "Google Colab",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: { color: "#ffa200ff" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: { color: "#E97627" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
      ],
    },
    {
      title: "HPC & MLOps (Academic)",
      fileName: "DesignImg",
      skills: [
        "⚡ Distributed training on HPC clusters with Slurm and Ray",
        "⚡ CUDA/C++ background from doctoral research in parallel computing",
        "⚡ Git version control and collaborative workflows",
      ],
      softwareSkills: [
        {
          skillName: "Slurm",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: { color: "#000000" },
        },
        {
          skillName: "Ray",
          fontAwesomeClassname: "simple-icons:ray",
          style: { color: "#028CF0" },
        },
        {
          skillName: "CUDA",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: { color: "#76B900" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture - Teaching",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Google Scholar",
      iconifyClassname: "simple-icons:googlescholar",
      style: { color: "#4285F4" },
      profileLink: "https://scholar.google.es/citations?user=AYtHK3EAAAAJ",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: { color: "#20BEFF" },
      profileLink: "https://www.kaggle.com/sfandres",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "International PhD in Mechatronics Engineering (Computer Science)",
      subtitle: "University of Malaga",
      logo_path: "uma_logo.png",
      alt_name: "University of Malaga",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ High-performance parallel computing research (C++/CUDA).",
        "⚡ Awarded Cum Laude unanimously in the PhD defense.",
      ],
      website_link: "https://www.uma.es/doctorado-mecatronica/",
    },
    // {
    //   title: "Universidad Europea",
    //   subtitle: "Máster en Energías Renovables",
    //   logo_path: "ue_logo.png",
    //   alt_name: "Universidad Europea",
    //   duration: "2020 - 2021",
    //   descriptions: [],
    //   website_link: "https://universidadeuropea.com/",
    // },
    {
      title: "MSc in Mechatronics Engineering",
      subtitle: "University of Malaga",
      logo_path: "uma_logo.png",
      alt_name: "University of Malaga",
      duration: "2016 - 2017",
      descriptions: ["⚡ Specialized in Mechanics, Robotics, and Automation"],
      website_link: "https://www.uma.es/master-en-ingenieria-mecatronica/",
    },
    {
      title: "BSc in Industrial Technology Engineering",
      subtitle: "University of Malaga",
      logo_path: "uma_logo.png",
      alt_name: "University of Malaga",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ Specialized in Industrial Technologies, focusing on Automation and Robotics.",
      ],
      website_link:
        "https://www.uma.es/grado-en-ingenieria-en-tecnologias-industriales",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Six-Year Research Periods 2018–2024 Awarded (Sexenio)",
      subtitle: "ANECA, 2025",
      logo_path: "aneca_logo.png",
      certificate_link: "",
      alt_name: "ANECA",
      color_code: "#ffffffff",
    },
    {
      title: "AWS Generative AI Applications Professional Certificate",
      subtitle: "Amazon Web Services, 2025",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/3HUH2PFKP5MQ",
      alt_name: "Amazon Web Services (AWS)",
      color_code: "#ffffffff",
    },
    {
      title:
        "Accreditation as Assistant Lecturer Doctor (Profesor Ayudante Doctor)",
      subtitle: "ANECA, 2022",
      logo_path: "aneca_logo.png",
      certificate_link: "",
      alt_name: "ANECA",
      color_code: "#ffffffff",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "DeepLearning.AI (Andrew Ng), 2022",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/KW9GC3RFJQ8Q",
      alt_name: "DeepLearning.AI",
      color_code: "#ffffffff",
    },
    {
      title: "Writing in the Sciences (with Honors)",
      subtitle: "Stanford University, 2022",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/R628DCR34LPR",
      alt_name: "Stanford University",
      color_code: "#ffffffff",
    },
    {
      title: "Fundamentals of Accelerated Computing with CUDA C/C++",
      subtitle: "NVIDIA, 2019",
      logo_path: "nvidia_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XuPTqqxkDlZVtJ01eGvjFP27IfIl1PJp/view",
      alt_name: "NVIDIA",
      color_code: "#ffffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Academic & Industry",
  description:
    "Blending university teaching, applied AI/ML research, and real-world data science projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Lecturer at the School of Engineering and Technology",
          company: "International University of La Rioja (UNIR)",
          company_url: "https://www.unir.net/facultades/esit/",
          logo_path: "unir_logo.png",
          duration: "Nov 2024 - Present",
          location: "Remote, Spain",
          description:
            "Teaching ML and AI courses across undergraduate and master’s programs: ML II, Unsupervised ML, AI for Energy & Infrastructure, and Big Data, Analytics & Data Science for Decision Making.",
        },
        {
          title: "Lecturer at the Faculty of Education",
          company: "International University of La Rioja (UNIR)",
          company_url: "https://www.unir.net/facultades/facultad-educacion/",
          logo_path: "unir_logo.png",
          duration: "Feb 2024 - Nov 2024",
          location: "Remote, Spain",
          description:
            "Taught 'Programming and Robotics for Teachers'. Directed Master’s theses in Educational Technology & Digital Competences.",
        },
        {
          title: "PhD scientific and research staff - Postdoctoral",
          company: "University of Extremadura",
          company_url: "https://epcc.unex.es/",
          logo_path: "uex_logo.png",
          duration: "May 2022 - May 2024",
          location: "Caceres, Spain",
          description:
            "Research on self-supervised learning for remote sensing (Python/PyTorch, Slurm, Ray, HPC). Assistant Professor for Distributed Computing and Multimedia Systems.",
        },
        {
          title: "R&D support data scientist",
          company: "CénitS-COMPUTAEX",
          company_url: "https://computaex.es/",
          logo_path: "computaex_logo.png",
          duration: "Feb 2021 - May 2022",
          location: "Caceres, Spain",
          description:
            "Machine learning for early fault detection in wind turbines (Python, scikit-learn, SQL, clustering, classification).",
        },
        {
          title: "Researcher staff - PhD student",
          company: "University of Malaga",
          company_url: "https://www.ac.uma.es/index.html",
          logo_path: "uma_logo.png",
          duration: "Jan 2018 - Sep 2020",
          location: "Malaga, Spain",
          description:
            "High-performance computing research (C++/CUDA). Assistant Professor for ICTs Applied to Podiatry. Three-month research stay (Sept 2018 – Dec 2018) at Ghent University / VIB for data mining and modeling for biomedicine (biometric data).",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Junior Researcher",
          company: "University of Malaga (with ESA collaboration)",
          company_url:
            "https://www.uma.es/robotics-and-mechatronics/?set_language=en",
          logo_path: "uma_logo.png",
          duration: "Oct 2015 - Sep 2017",
          location: "Malaga, Spain",
          description:
            "Rover modeling in MATLAB/Simulink for space exploration simulation.",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Selected academic and applied projects in AI and data science",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published research articles.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ssl-small-in-domain-remote-sensing",
      name:
        "Self-Supervised Learning on Small In-Domain Datasets Can Overcome Supervised Learning in Remote Sensing",
      createdAt: "2024",
      description:
        "Research article analyzing the performance of self-supervised learning on small in-domain datasets in remote sensing; published in IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (IEEE).",
      url: "https://doi.org/10.1109/JSTARS.2024.3421622",
    },
    {
      id: "federated-learning-meets-remote-sensing",
      name: "Federated learning meets remote sensing",
      createdAt: "2024",
      description:
        "Research article reviewing and systematizing federated learning methods for remote sensing; published in Expert Systems with Applications (Elsevier).",
      url: "https://doi.org/10.1016/j.eswa.2024.124583",
    },
    {
      id: "reliability-wind-turbines-power-curves-failures",
      name:
        "Reliability of onshore wind turbines based on linking power curves to failure and maintenance records: A case study in central Spain",
      createdAt: "2023",
      description:
        "Research article linking SCADA-based power curves with failure and maintenance records to assess onshore wind turbine reliability; published in Wind Energy (Wiley).",
      url: "https://doi.org/10.1002/we.2793",
    },
    {
      id: "vpp-visibility-based-path-planning-uav",
      name:
        "VPP: Visibility-Based Path Planning Heuristic for Monitoring Large Regions of Complex Terrain Using a UAV Onboard Camera",
      createdAt: "2022",
      description:
        "Research article presenting a visibility-based path planning heuristic for UAV monitoring of complex terrain; published in IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (IEEE).",
      url: "https://doi.org/10.1109/JSTARS.2021.3134948",
    },
    {
      id: "sdem-viewshed-ijgis",
      name:
        "A Data Relocation Approach for Terrain Surface Analysis on Multi-GPU Systems: A Case Study on the Total Viewshed Problem",
      createdAt: "2021",
      description:
        "Research article introducing a multi-GPU data relocation approach for solving the total viewshed problem in terrain surface analysis; published in International Journal of Geographical Information Science (Taylor & Francis).",
      url: "https://doi.org/10.1080/13658816.2020.1844207",
    },
    {
      id: "alfi-latent-fingerprint-ieee-access",
      name:
        "Asynchronous Processing for Latent Fingerprint Identification on Heterogeneous CPU–GPU Systems",
      createdAt: "2020",
      description:
        "Research article proposing an asynchronous processing framework for latent fingerprint identification on CPU–GPU systems; published in IEEE Access (IEEE).",
      url: "https://doi.org/10.1109/ACCESS.2020.3005476",
    },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_andres.png",
    description:
      "Reach out for research collaborations, teaching opportunities, or applied ML/AI projects.",
  },
  blogSection: {
    title: "Research Profiles",
    subtitle: "Google Scholar profile and publications.",
    link: "https://scholar.google.es/citations?user=AYtHK3EAAAAJ",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Marbella, Andalusia, Spain",
    locality: "Marbella",
    country: "Spain",
    region: "Andalusia",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/8Gphe7CTSpXhMa6E7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
