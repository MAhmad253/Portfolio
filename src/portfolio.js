/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ahmad's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Muhammad Ahmad Portfolio",
    type: "website",
    url: "http://muhammadahmad.com/",
  },
};

//Home Page
const greeting = {
  title: "Muhammad Ahmad",
  logo_name: "Ahmad",
  nickname: "Ahmad_Ch",
  subTitle:
    "AI Engineer & Data Scientist | LLM Fine-Tuning Specialist  Python, FastAPI, LangChain, LangGraph, PyTorch, Hugging Face  Fine-tuning, training & deploying production-ready AI systems for international clients",
  portfolio_repository: "https://github.com/MAhmad253?tab=repositories",
  githubProfile: "https://github.com/MAhmad253",
};
const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/MAhmad253",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-ahmad-7278ab250/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ahmadarshadaa62@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

// const skills = {
//   data: [
//     {
//       title: "Data Science & AI",
//       fileName: "DataScienceImg",
//       skills: [
//         "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
//         "⚡ Experience of working with Computer Vision and NLP projects",
//         "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Tensorflow",
//           fontAwesomeClassname: "logos-tensorflow",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Keras",
//           fontAwesomeClassname: "simple-icons:keras",
//           style: {
//             backgroundColor: "white",
//             color: "#D00000",
//           },
//         },
//         {
//           skillName: "PyTorch",
//           fontAwesomeClassname: "logos-pytorch",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Python",
//           fontAwesomeClassname: "ion-logo-python",
//           style: {
//             backgroundColor: "transparent",
//             color: "#3776AB",
//           },
//         },
//         {
//           skillName: "Deeplearning",
//           imageSrc: "deeplearning_ai_logo.png",
//         },
//       ],
//     },
//     {
//       title: "Full Stack Development",
//       fileName: "FullStackImg",
//       skills: [
//         "⚡ Building responsive website front end using React-Redux",
//         "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
//         "⚡ Creating application backend in Node, Express & Flask",
//       ],
//       softwareSkills: [
//         {
//           skillName: "HTML5",
//           fontAwesomeClassname: "simple-icons:html5",
//           style: {
//             color: "#E34F26",
//           },
//         },
//         {
//           skillName: "CSS3",
//           fontAwesomeClassname: "fa-css3",
//           style: {
//             color: "#1572B6",
//           },
//         },
//         {
//           skillName: "Sass",
//           fontAwesomeClassname: "simple-icons:sass",
//           style: {
//             color: "#CC6699",
//           },
//         },
//         {
//           skillName: "JavaScript",
//           fontAwesomeClassname: "simple-icons:javascript",
//           style: {
//             backgroundColor: "#000000",
//             color: "#F7DF1E",
//           },
//         },
//         {
//           skillName: "ReactJS",
//           fontAwesomeClassname: "simple-icons:react",
//           style: {
//             color: "#61DAFB",
//           },
//         },
//         {
//           skillName: "NodeJS",
//           fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
//           style: {
//             color: "#339933",
//           },
//         },
//         {
//           skillName: "NPM",
//           fontAwesomeClassname: "simple-icons:npm",
//           style: {
//             color: "#CB3837",
//           },
//         },
//         {
//           skillName: "Yarn",
//           fontAwesomeClassname: "simple-icons:yarn",
//           style: {
//             color: "#2C8EBB",
//           },
//         },
//         {
//           skillName: "Gatsby",
//           fontAwesomeClassname: "simple-icons:gatsby",
//           style: {
//             color: "#663399",
//           },
//         },
//         {
//           skillName: "Flutter",
//           fontAwesomeClassname: "simple-icons:flutter",
//           style: {
//             color: "#02569B",
//           },
//         },
//       ],
//     },
//     {
//       title: "Cloud Infra-Architecture",
//       fileName: "CloudInfraImg",
//       skills: [
//         "⚡ Experience working on multiple cloud platforms",
//         "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
//         "⚡ Deploying deep learning models on cloud to use on mobile devices",
//         "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
//       ],
//       softwareSkills: [
//         {
//           skillName: "GCP",
//           fontAwesomeClassname: "simple-icons:googlecloud",
//           style: {
//             color: "#4285F4",
//           },
//         },
//         {
//           skillName: "AWS",
//           fontAwesomeClassname: "simple-icons:amazonaws",
//           style: {
//             color: "#FF9900",
//           },
//         },
//         {
//           skillName: "Azure",
//           fontAwesomeClassname: "simple-icons:microsoftazure",
//           style: {
//             color: "#0089D6",
//           },
//         },
//         {
//           skillName: "Firebase",
//           fontAwesomeClassname: "simple-icons:firebase",
//           style: {
//             color: "#FFCA28",
//           },
//         },
//         {
//           skillName: "PostgreSQL",
//           fontAwesomeClassname: "simple-icons:postgresql",
//           style: {
//             color: "#336791",
//           },
//         },
//         {
//           skillName: "MongoDB",
//           fontAwesomeClassname: "simple-icons:mongodb",
//           style: {
//             color: "#47A248",
//           },
//         },
//         {
//           skillName: "Docker",
//           fontAwesomeClassname: "simple-icons:docker",
//           style: {
//             color: "#1488C6",
//           },
//         },
//         {
//           skillName: "Kubernetes",
//           fontAwesomeClassname: "simple-icons:kubernetes",
//           style: {
//             color: "#326CE5",
//           },
//         },
//       ],
//     },
//     {
//       title: "UI/UX Design",
//       fileName: "DesignImg",
//       skills: [
//         "⚡ Designing highly attractive user interface for mobile and web applications",
//         "⚡ Customizing logo designs and building logos from scratch",
//         "⚡ Creating the flow of application functionalities to optimize user experience",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Adobe XD",
//           fontAwesomeClassname: "simple-icons:adobexd",
//           style: {
//             color: "#FF2BC2",
//           },
//         },
//         {
//           skillName: "Figma",
//           fontAwesomeClassname: "simple-icons:figma",
//           style: {
//             color: "#F24E1E",
//           },
//         },
//         {
//           skillName: "Adobe Illustrator",
//           fontAwesomeClassname: "simple-icons:adobeillustrator",
//           style: {
//             color: "#FF7C00",
//           },
//         },
//         {
//           skillName: "Inkscape",
//           fontAwesomeClassname: "simple-icons:inkscape",
//           style: {
//             color: "#000000",
//           },
//         },
//       ],
//     },
//   ],
// };
const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building machine learning and deep learning models for real-world classification and prediction problems",
        "⚡ Experience working with Natural Language Processing, Large Language Models and AI-powered applications",
        "⚡ Developing Retrieval-Augmented Generation systems using LangChain, LangGraph Vector Databases and Hugging Face models",
        "⚡ Designing and developing AI agents and agentic workflows with tool calling, function calling, memory, and multi-step reasoning",
        "⚡ Working with LLM APIs, prompt engineering, structured outputs, function calling, and AI evaluation techniques",
        "⚡ Designing scalable AI solutions for real-world use cases and delivering intelligent applications for multinational clients",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            backgroundColor: "transparent",
            color: "#FFD21E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
            color: "#1C3C3C",
          },
        },
        {
          skillName: "LangGraph",
          fontAwesomeClassname: "thesvg:langgraph-langchain",
          style: {
            backgroundColor: "transparent",
            color: "#1C3C3C",
          },
        },
       
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing scalable REST APIs and AI-powered backend applications using FastAPI and Flask",
        "⚡ Integrating machine learning and NLP models with web and mobile applications",
        "⚡ Building secure and structured backend systems using databases, validation and software development best practices",
        "⚡ Building and integrating AI/ML, NLP, LLM, and RAG systems into web and mobile applications",
      ],
      softwareSkills: [
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "REST API",
          fontAwesomeClassname: "carbon:api",
          style: {
            color: "#005571",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "Pydantic",
          fontAwesomeClassname: "simple-icons:pydantic",
          style: {
            color: "#E92063",
          },
        },
      ],
    },
    {
      title: "Databases & AI Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working with relational and NoSQL databases for storing application and user data",
        "⚡ Designing database architectures and integrating relational and vector databases including PostgreSQL, ChromaDB, FAISS, and Pinecone to build scalable AI-powered data retrieval systems",
        "⚡ Connecting databases with FastAPI applications and machine learning systems",
        "⚡ Using Git, GitHub and development tools to manage and maintain software projects",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },
        {
          skillName: "FAISS",
          fontAwesomeClassname: "carbon:data-base",
          style: {
            color: "#0467DF",
          },
        },
        {
          skillName: "ChromaDB",
          fontAwesomeClassname: "carbon:data-base",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Data Analysis & Visualization",
      fileName: "DesignImg",
      skills: [
       "⚡ Cleaning, preprocessing, and transforming structured and unstructured datasets using Python",
       "⚡ Performing exploratory data analysis (EDA) to identify patterns, trends, correlations, and data quality issues",
       "⚡ Applying feature engineering and feature selection techniques to improve machine learning model performance",
       "⚡ Building and evaluating machine learning models for classification, regression, and prediction problems",
       "⚡ Creating meaningful data visualizations using Python libraries such as Matplotlib and Seaborn",
       "⚡ Working with Pandas, NumPy, and Scikit-learn for data analysis, preprocessing, and machine learning workflows",
      ],
      softwareSkills: [
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#11557C",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "COMSATS University Islamabad, Sahiwal Campus",
      subtitle: "Bachelor of Science in Software Engineering (BSSE)",
      logo_path: "png_uni.png",
      alt_name: "COMSATS University Islamabad",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studied core software engineering subjects including Programming Fundamentals, Object-Oriented Programming, Data Structures & Algorithms, Database Systems, Machine Learning, and Design Patterns.",
        "⚡ Built hands-on AI and Machine Learning projects using Python, PyTorch, LangChain, FastAPI, Retrieval-Augmented Generation (RAG), and Large Language Models (LLMs).",
        "⚡ Completed multiple academic and personal projects including Fake News Detection, Multi-PDF AI Research Assistant, and AI Resume Salary Prediction System while strengthening problem-solving and backend development skills.",
      ],
      website_link: "https://sahiwal.comsats.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "AI For Everyone",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/03b55eee9e91bc0844471f6ba45d2e7f",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Agentic AI",
      subtitle: "NeXskill - Be Productive",
      logo_path: "org_white.webp",
      certificate_link:
        "https://drive.google.com/file/d/1tlsOqCxx1bNa_ug7h5ZLgCZgHI0BpBK9/view?usp=drive_link",
      alt_name: "NeXskill",
      color_code: "#000000",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/8bca806ff26018e2657475148f7de530",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Certificate of Completion: AI Fluency for Small Businesses",
      subtitle: "Anthropic",
      logo_path: "anthropicresearch_logo.jpg",
      certificate_link:
        "https://verify.skilljar.com/c/b2mzeykk6iyx",
      alt_name: "Anthropic",
      color_code: "#f9f9f7",
    },
    {
      title: "Data Science Methodology",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/790939b64b18a39a977d8710b7a6d32e",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Certificate of completion: AI Capabilities and Limitations",
      subtitle: "Anthropic",
      logo_path: "anthropicresearch_logo.jpg",
      certificate_link:
        "https://verify.skilljar.com/c/urrcr7qoqvey",
      alt_name: "Anthropic",
      color_code: "#f9f9f7",
    },
    {
      title: "Introduction to Data Science in Python",
      subtitle: "DataCamp",
      logo_path: "datacamp_logo_icon_249069.webp",
      certificate_link:
        "https://www.datacamp.com/completed/statement-of-accomplishment/course/6b7b53473dac584c14083477640df8da57f96c91",
      alt_name: "DataCamp",
      color_code: "#08dd63",
    },
    {
      title: "Introduction to SQL",
      subtitle: "DataCamp",
      logo_path: "datacamp_logo_icon_249069.webp",
      certificate_link:
        "https://www.datacamp.com/completed/statement-of-accomplishment/course/fc01f357e3c81e0fba28a5cf66b80515dbbafe2f",
      alt_name: "DataCamp",
      color_code: "#08dd63",
    },
    {
      title: "Tools for Data Science",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/17ba82d6a6f14ef73a04926ddfa7fe9d",
      alt_name: "IBM",
      color_code: "#4285F499",
    },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked on various AI and software projects as an AI/ML Developer and Software Engineer. I have hands-on experience with Machine Learning, Deep Learning, RAG, LLMs, and backend development. I enjoy building intelligent solutions and continuously learning new technologies while contributing to the AI and open-source community.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Engineer",
          company: "Recurso Labs.",
          company_url: "https://www.recursolabs.com/",
          logo_path: "recurso_labs_logo.jpg",
          duration: "Aug 2026 - Present",
          location: "Lahore, Pakistan",
          description:
            "Working on cutting-edge Generative AI solutions at DevOrbis, specializing in LLMs, RAG, AI Agents, and conversational AI. Designing scalable AI pipelines using prompt engineering, embeddings, vector databases, tool/function calling, and LLM evaluation. Building production-ready, context-aware AI systems that automate complex workflows and deliver intelligent, reliable, and high-quality results.",
          color: "#000000",
        },
         {
          title: "Freelance AI Engineer",
          company: "Fiver",
          // company_url: "",
          logo_path: "fiver.webp",
          duration: "2025 - Present",
          location: "Remote",
          description:
            "Working as a Freelance AI Engineer, delivering multiple AI and Generative AI projects for clients. Building and deploying solutions using LLMs, RAG, AI Agents, prompt engineering, embeddings, vector databases, tool/function calling, and conversational AI. Developing scalable, production-ready AI applications tailored to real-world business requirements and client needs.",
          color: "#000000",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Recurso Labs.",
          company_url: "https://www.recursolabs.com/",
          logo_path: "recurso_labs_logo.jpg",
          duration: "May 2026 - Aug 2026",
          location: "Lahore, Pakistan",
          description:
            "Developing AI and backend solutions, particularly RAG-based systems and intelligent applications. Working on LLM-powered features, data processing, retrieval and ranking workflows, while improving AI systems through testing, evaluation, and optimization.",
          color: "#000000",
        },
        {
          title: "Machine Learning Engineer Intern",
          company: "Intern Intelligence",
          company_url: "https://www.internintelligence.org/",
          logo_path: "intern_intelligence.jpg",
          duration: "Aug 2025 - Oct 2025",
          location: "Remote",
          description:
            "Worked as a Machine Learning Engineer Intern, contributing to the development of AI and machine learning solutions. Gained hands-on experience in data preprocessing, model training, evaluation, and deployment using Python. Built and integrated machine learning models with FastAPI, worked on NLP-based applications, and collaborated with the team to develop scalable, production-ready solutions. Also participated in debugging, testing, documentation, and continuous improvement of ML workflows while using Git for version control.",
          color: "#ee3c26",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
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
    profile_image_path: "contract_pic4.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "LDA Avenue 1 D Block, lahore",
    locality: "Lahore",
    country: "Pakistan",
    region: "Lahore",
    postalCode: "54792",
    streetAddress: "LDA Avenue 1 D Block, lahore",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};
const contactInfo = {
  title: "Contact Me",
  subtitle: "Have a project in mind? Tell me about your requirements.",
  number: "+92XXXXXXXXXX",
  email_address: "ahmadarshadaa62@gmail.com",
};
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  contactInfo,
};
