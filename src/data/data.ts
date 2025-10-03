import { PersonalInfo, Project, Certification } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Mike Hallai",
  title: "I build smart, intuitive apps people love to use.",
  address: "",
  email: "",
  phone: "",
  linkedin: "https://linkedin.com/in/mhallai",
  github: "https://github.com/hallai-mike",
  about: "From AI tools to mobile and web projects, I turn ideas into polished products with thoughtful UX, solid engineering, and an eye for detail. I move fast, solve tough problems, and design experiences that feel effortless."
};

export const projects: Project[] = [
  {
    id: "lucid-query",
    title: "LucidQuery",
    status: "in-progress",
    dateRange: {
      start: "Aug 2025",
      end: ""
    },
    description: "An AI-powered file system with chat for unstructured data.",
    technologies: ["React", "TypeScript", "GenAI", "Firebase", "RAG"],
    images: [
      `${process.env.PUBLIC_URL}/project-images/lucid-query/2-docs.png`,
      `${process.env.PUBLIC_URL}/project-images/lucid-query/3-chat-example.png`,
      `${process.env.PUBLIC_URL}/project-images/lucid-query/4-chat-sources.png`,
      `${process.env.PUBLIC_URL}/project-images/lucid-query/5-second-chat-example.png`
    ],
    githubUrl: "",
    liveUrl: "",
    details: {
      role: "Contributor, Architect, Full-Stack Developer",
      painPoint: "Small businesses struggle to securely use AI on their unstructured data.",
      curiosity: "",
      idea: "The app combines a familiar file-system interface with an AI-powered chat. Users can upload and organize files into folders, while the system automatically processes them by chunking content, generating embeddings, and storing vectors in a database. The AI chat then takes user queries, embeds them, retrieves the most relevant data, and generates context-aware answers grounded in the uploaded content.",
      challenges: "Extracting text from diverse file types was tricky. No single library worked well. I solved this by combining multiple libraries, balancing coverage with accuracy.",
      learnings: "Deepened expertise in Retrieval-Augmented Generation (RAG) and designing agentic systems that can interact with various data sources",
      impact: "Currently in development, but already helps me answer technical documentation questions more accurately than base LLMs. This demonstrates how it can save time and reduce errors for small businesses."
    }
  },
  {
    id: "comic-dreamer",
    title: "Comic Dreamer",
    status: "completed",
    dateRange: {
      start: "Jun 2025",
      end: "Aug 2025"
    },
    description: "Turn your dreams into comic book stories.",
    technologies: ["iOS", "Swift", "TypeScript", "GenAI", "Firebase"],
    images: [
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/1-icon.PNG`,
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/2-landing.PNG`,
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/3-form-empty.PNG`,
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/4-form-filled.PNG`,
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/5-loading.PNG`,
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/6-result.PNG`,
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/7-gallery.PNG`,
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/8-record-page.PNG`,
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/9-profile.PNG`,
      `${process.env.PUBLIC_URL}/project-images/comic-dreamer/10-pricing.PNG`
    ],
    githubUrl: "",
    liveUrl: "",
    details: {
      role: "Creator, UX Designer, Full-Stack Developer",
      painPoint: "",
      curiosity: "This project tested how quickly I could build when leaning fully on AI tools. I intentionally chose unfamiliar technologies (iOS/Swift for the frontend and Firebase for the backend) to see if I could maintain velocity while learning something new.",
      idea: "The app lets users jot down what they remember from their dreams and instantly transforms the text into a comic book-style image. Dreams can be saved in a personal “Dream Library” for future reflection.",
      challenges: "My biggest challenge was building in iOS for the first time. With AI-assisted coding, I discovered that adopting new platforms doesn’t have to slow development.",
      learnings: "iOS, Firebase, Google Cloud, Generative AI APIs",
      impact: "This project showcases how recent advances in generative AI make entirely new types of creative apps possible."
    }
  },
  {
    id: "vehicle-tco-calculator",
    title: "Vehicle Total Cost of Ownership Calculator",
    status: "completed",
    dateRange: {
      start: "Jun 2025",
      end: "Jun 2025"
    },
    description: "A faster way to compare the true cost of owning cars.",
    technologies: ["Web App", "HTML", "CSS", "AWS S3", "Vibe Coding"],
    images: [
      `${process.env.PUBLIC_URL}/project-images/tco-calculator/1-top.png`,
      `${process.env.PUBLIC_URL}/project-images/tco-calculator/2-chart-1.png`,
      `${process.env.PUBLIC_URL}/project-images/tco-calculator/3-chart-2.png`,
      `${process.env.PUBLIC_URL}/project-images/tco-calculator/4-table.png`,
      `${process.env.PUBLIC_URL}/project-images/tco-calculator/5-services.png`
    ],
    githubUrl: "",
    liveUrl: "http://vehicle-cost-calculator.s3-website.us-east-2.amazonaws.com/",
    details: {
      role: "Creator, Front-End Developer",
      painPoint: "",
      curiosity: "I wanted to test how quickly I could build a functional app by “vibe coding.”",
      idea: "I built a vehicle total cost of ownership calculator that goes beyond what I could find online. It compares vehicles by factoring in purchase price, financing rates and terms, fuel costs for both EVs and ICE vehicles, registration, and maintenance.",
      challenges: "",
      learnings: "Vibe coding and rapid prototyping",
      impact: "After only a few hours of work, I had a calculator that outperformed every existing option I could find."
    }
  },
  {
    id: "cravey",
    title: "Cravey",
    status: "on-hold",
    dateRange: {
      start: "Jan 2024",
      end: "Feb 2025"
    },
    description: "Helping groups quickly decide where to eat.",
    technologies: ["Figma", "UX Design", "React", "AWS", "Python"],
    images: [
      `${process.env.PUBLIC_URL}/project-images/cravey/1-icon.png`,
      `${process.env.PUBLIC_URL}/project-images/cravey/2-landing-desktop.png`,
      `${process.env.PUBLIC_URL}/project-images/cravey/3-splash.png`,
      `${process.env.PUBLIC_URL}/project-images/cravey/4-landing-mobile.png`,
      `${process.env.PUBLIC_URL}/project-images/cravey/5-results.png`,
      `${process.env.PUBLIC_URL}/project-images/cravey/6-filters.png`
    ],
    githubUrl: "",
    details: {
      role: "Creator, UX Designer, Full-Stack Developer",
      painPoint: "Choosing a restaurant with friends or coworkers is a common but frustrating problem. I believed a simple app could streamline the process.",
      curiosity: "I wanted a project to sharpen my UX design skills, so I wireframed and mocked up this application. My plan was to move into development if the design proved compelling.",
      idea: "Users can join a session, either in-person or remotely, to collaboratively decide where to eat by upvoting or vetoing options. To reduce friction, the app automatically suggests restaurants based on the group’s location.",
      challenges: "The Google Maps Places API proved too costly for a free model. The “Nearby” queries and image fetches would have required charging users a subscription fee.",
      learnings: "UX design process and evaluating product viability",
      impact: "After testing the concept, I concluded the value proposition wasn’t strong enough for the subscription I would have to charge to recoup API costs so I decided to pause development."
    }
  },
  {
    id: "vida",
    title: "VIDA",
    status: "completed",
    dateRange: {
      start: "Jan 2021",
      end: "Aug 2021"
    },
    description: "Monitoring daily activities to support patient care.",
    technologies: ["React Native", "AWS", "IoT", "Serverless", "UX Design"],
    images: [
      `${process.env.PUBLIC_URL}/project-images/vida/1-splash.png`,
      `${process.env.PUBLIC_URL}/project-images/vida/2-summary.png`,
      `${process.env.PUBLIC_URL}/project-images/vida/3-sleep-day.png`,
      `${process.env.PUBLIC_URL}/project-images/vida/4-sleep-week.png`,
      `${process.env.PUBLIC_URL}/project-images/vida/5-mobility-day.png`,
      `${process.env.PUBLIC_URL}/project-images/vida/6-nutrition-week.png`,
      `${process.env.PUBLIC_URL}/project-images/vida/7-vitals-day.png`
    ],
    githubUrl: "",
    liveUrl: "",
    details: {
      role: "Contributor, Backend Developer, some Front End Development, some UI/UX Design",
      painPoint: "",
      curiosity: "",
      idea: "VIDA was built for a company specializing in in-home sensors that tracked a patient’s “Activities of Daily Living” such as showering or cooking. The mobile app allowed caregivers and family members to monitor this data in real time and receive alerts when unusual patterns suggested a potential concern.",
      challenges: "Coordinating development across three teams in different time zones created communication and alignment hurdles. Additionally, navigating Apple’s App Store review process introduced unexpected complexity and delays.",
      learnings: "Gained experience in REST API design and mobile development, while also learning to manage distributed collaboration and release processes",
      impact: ""
    }
  },
  {
    id: "fitrac",
    title: "FiTrac",
    status: "completed",
    dateRange: {
      start: "July 2020",
      end: "Nov 2021"
    },
    description: "A customizable, cost-free personal finance tracker.",
    technologies: ["React", "Node.js", "DynamoDB", "AWS Lambda", "PWA"],
    images: [
      `${process.env.PUBLIC_URL}/project-images/fitrac/1-icon.png`,
      `${process.env.PUBLIC_URL}/project-images/fitrac/2-home-desktop.png`,
      `${process.env.PUBLIC_URL}/project-images/fitrac/3-home-mobile.png`,
      `${process.env.PUBLIC_URL}/project-images/fitrac/4-transaction-form.png`
    ],
    githubUrl: "",
    liveUrl: "",
    details: {
      role: "Creator, UX Designer, Full-Stack Developer",
      painPoint: "Most financial tracking tools I tried had two major drawbacks: subscription fees and limited customization.",
      curiosity: "",
      idea: "I wanted a tool that was fully customizable, where I owned all of my data, and where ongoing costs were negligible. So I built my own application.",
      challenges: "I chose DynamoDB for this project, which introduced a steep learning curve with NoSQL data modeling. In hindsight, a relational database might have been a better fit, but DynamoDB impressed me with its speed and generous free tier.",
      learnings: "Gained hands-on experience with AWS and NoSQL database design",
      impact: "FiTrac meets my needs perfectly and is part of my daily routine. I can extend or modify the code whenever I think of new features. The app runs on AWS for less than one dollar per month."
    }
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "UX Design Certificate",
    issuer: "Google"
  },
  {
    id: "2",
    name: "Certified Platform Developer I",
    issuer: "Salesforce"
  },
  {
    id: "3",
    name: "Certified Platform Developer II",
    issuer: "Salesforce"
  },
  {
    id: "4",
    name: "Certified Platform App Builder",
    issuer: "Salesforce"
  },
  {
    id: "5",
    name: "Certified Administrator",
    issuer: "Salesforce"
  },
  {
    id: "6",
    name: "Certified AI Associate",
    issuer: "Salesforce"
  },
  {
    id: "7",
    name: "Certified AI Specialist",
    issuer: "Salesforce"
  },
  {
    id: "8",
    name: "Certified Experience Cloud Consultant",
    issuer: "Salesforce"
  },
  {
    id: "9",
    name: "Certified Service Cloud Consultant",
    issuer: "Salesforce"
  },
  {
    id: "10",
    name: "Certified Data Cloud Consultant",
    issuer: "Salesforce"
  },
]; 