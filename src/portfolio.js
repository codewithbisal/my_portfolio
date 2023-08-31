/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bisal's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Bisal Saeed Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Bisal Saeed",
  logo_name: "Bisal Saeed",
  subTitle:
    "A dedicated electrical engineer with a strong passion for creating end-to-end solutions that drive sustainable and scalable technological advancements.",
  resumeLink:
    "https://drive.google.com/file/d/1KNNgaDlRxBIEFxaN0Fcw6xml2bhbuL-G/view?usp=sharing",
  githubProfile: "https://github.com/Bisal-hub",
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
    link: "https://github.com/codewithbisal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bisal-saeed-2aa7bb275/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:2021ee151@student.uet.edu.pk",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in creating scalable, production-ready models for diverse deep learning and statistical applications",
        "⚡ Extensive involvement in Computer Vision, NLP, and Sentiment Analysis projects",
        "⚡ Advanced quantitative modeling for dynamic forecasting, time series analysis, and stock level prediction",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos:pandas-icon",
          style: {
            backgroundColor: "transparent",
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
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Matplot",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front-end using React",
        "⚡ Designing and developing professional websites using WordPress",
        "⚡ Creating application backend in Node.js",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "zondicons:php-elephant",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "wordpress",
          fontAwesomeClassname: "skill-icons:wordpress",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Computer Architecture RTL Design",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in designing and optimizing digital circuits using Register-Transfer Level (RTL) methodologies",
        "⚡ Hands-on experience with hardware description languages (HDL) for creating efficient and reliable computer architecture designs",
        "⚡ Expertise in simulating and verifying RTL designs, ensuring their functionality and performance",
      ],
      softwareSkills: [
        {
          skillName: "System-Verilog",
          fontAwesomeClassname: "file-icons:systemverilog",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "devicon:bash",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Vim",
          fontAwesomeClassname: "logos:vim",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Putty",
          fontAwesomeClassname: "devicon:putty",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "logos:ubuntu",
          style: {
            color: "#336791",
          },
        },

        {
          skillName: "GoogleColab",
          fontAwesomeClassname: "simple-icons:googlecolab",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "hackerrank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/bisals500",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/bisalsaeed",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Engineering and Technology",
      subtitle: "B.Sc. in Electrical Engineering",
      logo_path: "uet.png",
      alt_name: "UET",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I have studied advanced engineering subjects like Electronic Design and Circuits, Data Stuctures and Algorithms, Discrete Math, Signal System and Design, LA etc.",
        "⚡ Apart from this, I have done labs on Electrical and Electronics, Circuit Analysis, Electricity and Magnetism, Programming Fundamentals etc.",
        "⚡ Elected as Class Representative for the top-merit students in the respective batch, showcasing leadership and organizational skills",
      ],
      website_link: "https://www.uet.edu.pk/",
    },
    {
      title: "Kinnaird College For Women",
      subtitle: "Intermediate in Pre-Engineering",
      logo_path: "kcc.png",
      alt_name: "KC",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I Studied foundational engineering courses encompassing fundamental principles of mathematical and physical laws",
        "⚡ During my time at college, I took part in tech events and attended ted talks conducted by college.",
      ],
      website_link: "https://www.kinnaird.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Computer Vision",
      subtitle: "- Ryan Holbrook",
      logo_path: "kaggle.png",
      certificate_link:
        "https://drive.google.com/file/d/1OVtDHGcXB9DYY9uYLlfw9LfFZ2y1yQQf/view?usp=sharing",
      alt_name: "Kaggle",
      color_code: "#ffffff",
    },
    {
      title: "7th Annual Women Tech Quest",
      subtitle: "- 10 pearls",
      logo_path: "10pearls.png",
      certificate_link:
        "https://drive.google.com/file/d/1UywXvR5Y-JGK8EdlbMzO-w-8T13v7_9v/view?usp=sharing",
      alt_name: "10 Pearls",
      color_code: "#ffffff",
    },

    {
      title: "Pandas",
      subtitle: "- Aleksey Bilogur",
      logo_path: "kaggle.png",
      certificate_link:
        "https://drive.google.com/file/d/1tQBNLeQKDGn2EW8pAelFig29pDnnYbPW/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Numpy",
      subtitle: "- Great Learning Academy",
      logo_path: "Gleaning.png",
      certificate_link:
        "https://drive.google.com/file/d/1wWg1X6FeH2ZpqF3dyoew9GyC2CPffbq3/view?usp=sharing",
      alt_name: "Great Learning",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to Generative AI ",
      subtitle: "- Google",
      logo_path: "google.png",
      certificate_link:
        "https://drive.google.com/file/d/1eNOTbAsAFhM4wDb6eFpB-5k7lV5kZbHe/view?usp=sharing",
      alt_name: "Google Cloud",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to Dev-Ops",
      subtitle: "- Great Learning Academy",
      logo_path: "Gleaning.png",
      certificate_link:
        "https://drive.google.com/file/d/1hgBu3jFMF5YgzEIjJnMrx0O19Djn7vsG/view?usp=sharing",
      alt_name: "Great Learning",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Research,Micro-Internship and Volunteership",
  description:
    "I served as a Research Assistant at the Digital Design Research Center and received training from reputable companies in roles spanning Software Development and Data Analysis. My passion for event organization and workshop facilitation led me to engage with several technical societies as their representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Research Work",
      work: true,
      experiences: [
        {
          title: "Research Assitant and Project Intern",
          company: "Digital Design Research Center",
          company_url: "https://www.uet.edu.pk/researchcentre/",
          logo_path: "DDRC.png",
          duration: "June 2023 - PRESENT",
          location: "Lahore, Pakistan",

          description:
            "I am working in DDRC lab as Research Assistant and Project Intern.I am engaged in researching Linux-compatible RISC-V cores simulated on gem5, specifically focusing on constructing the Cva6 model within gem5. Executing comprehensive hardware and software analyses, and presenting results through contour graphs to determine optimal latencies. The objective is to validate and document the feasibility of constructing the Cva6 model on gem5.",
        },
      ],
    },
    {
      title: "Internships and Additional Work Experience",
      experiences: [
        {
          title: "Software Developer",
          company: "Girls in Tech Hackathon",
          company_url: "https://girlsintech.org/",
          logo_path: "GIT.png",
          duration: "June 2023-Aug 2023",
          description:
            "Developed a high-impact GreenTribe website along with other developers and designers for users lacking proper waste management facilities in Nigeria ; conducted international user research, created app using react",
        },
        {
          title: "Front-End Developer Intern",
          company: "Interns Pk",
          company_url: "https://interns.pk/",
          logo_path: "Internpk.png",
          duration: "Aug 2023 - Sep 2023",

          description:
            "During this one month internship I was exposed to different challenges related to HTML , CSS , JS , PHP & WORDPRESS . I applied my knowledge by working on real-life projects. This program was aimed to train us for the job market, by the job market.",
        },
        {
          title:
            "Artificial Intelligence Virtual Experience Participant on FORAGE",
          company: "Cognizant",
          company_url: "https://www.cognizant.com/us/en",
          logo_path: "Cogzinant.png",
          duration: "July 2023",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        },
        {
          title: "Software Engineering Virtual Experience on FORAGE",
          company: "JPMorgan Chase & Co.",
          company_url: "https://www.jpmorganchase.com/",
          logo_path: "JPmorgan.png",
          duration: "Aug 2023",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
        },
        {
          title: "AI Fellowship Participant",
          company: "UET ACM Society",
          company_url: "https://uetacm.org/",
          logo_path: "ACM.png",
          duration: "July 2023 - Aug 2023",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#010101",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Chairperson Web Development Team",
          company: "IEEE society UET",
          company_url: "https://about.google/",
          logo_path: "IEEE.png",
          duration: "Sep 2023 - PRESENT",
          location: "Lahore, Pakistan",
          description:
            "Developed a responsive IEEE website featuring compelling updates along with team. Organized and led web development workshops, as well as AI and web development hackathons for students. ",
        },
        {
          title: "Google Developer Students Club Member",
          company: "GDSC-UET",
          company_url:
            "https://gdsc.community.dev/university-of-engineering-and-technology-uet-lahore-campus/",
          logo_path: "google_logo.png",
          duration: "June 2023 - PRESENT",
          color: "#ffffff",
          description:
            "We have well established developer club in university which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        },
        {
          title: "WomenWhoCode Data Science Community - General Member",
          company: "Women Who Code",
          company_url: "https://www.womenwhocode.com/",
          logo_path: "WWC.png",
          duration: "May 2023 - PRESENT",
          description:
            "I am active member of WWC community.I have attended multiple virtual conferences and hacknights etc.These events include Data Science, Python and ML Engineering.",
        },
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
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "R2.png",
    description:
      "You can reach out to me through Gmail and LinkedIn for any inquiries. I'll make sure to respond within 24 hours. Feel free to connect if you need assistance with ML, AI, React, Android, Cloud, or Opensource Development.",
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
