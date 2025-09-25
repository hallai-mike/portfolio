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
    id: "1",
    title: "LucidSeek",
    status: "in-progress",
    dateRange: {
      start: "Aug 2025",
      end: ""
    },
    description: "A personal AI workspace where users upload documents and then chat with an assistant that uses vector embeddings to retrieve, cite, and answer from the most relevant passages in real time.",
    technologies: ["React", "TypeScript", "GenAI", "Firebase", "RAG"],
    images: [
      "https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=E-Commerce+Platform",
      "https://via.placeholder.com/800x400/50C878/FFFFFF?text=Admin+Dashboard"
    ],
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
    details: {
      inspiration: "I've always been fascinated by the idea of personal assistants that can help me with my daily tasks and provide valuable insights. I wanted to create a tool that would allow me to upload my documents and then chat with an assistant that would use vector embeddings to retrieve, cite, and answer from the most relevant passages in real time.",
      idea: "LucidSeek is a personal AI workspace where users can upload documents and chat with an AI assistant that uses vector embeddings to retrieve, cite, and answer from the most relevant passages in real time. This creates a powerful knowledge management and Q&A system.",
      process: "Started with research on RAG (Retrieval-Augmented Generation) systems and vector databases. Built the backend using Firebase for authentication and storage, integrated with GenAI for document processing and chat. Developed the frontend using React and TypeScript with a focus on real-time interactions.",
      design: "Designed a clean, intuitive interface that makes document upload and chat interactions feel seamless. Used a card-based layout for documents and a chat interface similar to modern messaging apps. Focused on clear visual feedback for document processing and search results.",
      challenges: "The biggest challenge was implementing efficient vector search and ensuring real-time performance with large document collections. Also had to handle various document formats and implement proper citation tracking for AI responses.",
      results: "Created a powerful personal knowledge management tool that allows users to quickly find information in their documents through natural language queries, with AI responses that are always grounded in the uploaded content."
    }
  },
  {
    id: "2",
    title: "Comic Dreamer",
    status: "completed",
    dateRange: {
      start: "Jun 2025",
      end: "Aug 2025"
    },
    description: "A mobile app that enables you to quickly create comics from dream descriptions and build a visual dream journal.",
    technologies: ["iOS", "Swift", "TypeScript", "GenAI", "Firebase"],
    images: [
      "/project-images/comic-dreamer/1-icon.PNG",
      "/project-images/comic-dreamer/2-landing.PNG",
      "/project-images/comic-dreamer/3-form-empty.PNG",
      "/project-images/comic-dreamer/4-form-filled.PNG",
      "/project-images/comic-dreamer/5-loading.PNG",
      "/project-images/comic-dreamer/6-result.PNG",
      "/project-images/comic-dreamer/7-gallery.PNG",
      "/project-images/comic-dreamer/8-record-page.PNG",
      "/project-images/comic-dreamer/9-profile.PNG",
      "/project-images/comic-dreamer/10-pricing.PNG"
    ],
    githubUrl: "",
    liveUrl: "",
    details: {
      inspiration: "I've always been fascinated by dreams and their creative potential. I wanted to create a tool that could transform dream descriptions into visual comics, making it easier for people to capture and share their dream experiences in a creative way.",
      idea: "Comic Dreamer is a mobile app that uses AI to generate comic panels from dream descriptions, allowing users to build a visual dream journal. Users can describe their dreams in text, and the app generates corresponding comic illustrations.",
      process: "Started with iOS development using Swift and SwiftUI. Integrated GenAI APIs for text-to-image generation and natural language processing. Built a Firebase backend for user authentication and dream journal storage. Created a TypeScript-based admin dashboard for content moderation.",
      design: "Designed an intuitive mobile-first interface with a focus on dream journaling. Used a comic book aesthetic with speech bubbles and panel layouts. Implemented smooth animations and transitions to make the dream-to-comic process feel magical.",
      challenges: "The biggest challenge was fine-tuning the AI image generation to consistently produce comic-style illustrations that matched the dream descriptions. Also had to handle various dream content types and implement appropriate content filtering.",
      results: "Successfully created a unique dream journaling app that helps users visualize and share their dreams through AI-generated comics. The app has been well-received for its creative approach to dream documentation."
    }
  },
  {
    id: "3",
    title: "Total Cost of Ownership Calculator",
    status: "completed",
    dateRange: {
      start: "Jun 2025",
      end: "Aug 2025"
    },
    description: "A mobile app that enables you to quickly create comics from dream descriptions and build a visual dream journal.",
    technologies: ["iOS", "Swift", "TypeScript", "GenAI", "Firebase"],
    images: [
      "https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=E-Commerce+Platform",
      "https://via.placeholder.com/800x400/50C878/FFFFFF?text=Admin+Dashboard"
    ],
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
    details: {
      inspiration: "I've always been fascinated by dreams and their creative potential. I wanted to create a tool that could transform dream descriptions into visual comics, making it easier for people to capture and share their dream experiences in a creative way.",
      idea: "Comic Dreamer is a mobile app that uses AI to generate comic panels from dream descriptions, allowing users to build a visual dream journal. Users can describe their dreams in text, and the app generates corresponding comic illustrations.",
      process: "Started with iOS development using Swift and SwiftUI. Integrated GenAI APIs for text-to-image generation and natural language processing. Built a Firebase backend for user authentication and dream journal storage. Created a TypeScript-based admin dashboard for content moderation.",
      design: "Designed an intuitive mobile-first interface with a focus on dream journaling. Used a comic book aesthetic with speech bubbles and panel layouts. Implemented smooth animations and transitions to make the dream-to-comic process feel magical.",
      challenges: "The biggest challenge was fine-tuning the AI image generation to consistently produce comic-style illustrations that matched the dream descriptions. Also had to handle various dream content types and implement appropriate content filtering.",
      results: "Successfully created a unique dream journaling app that helps users visualize and share their dreams through AI-generated comics. The app has been well-received for its creative approach to dream documentation."
    }
  },
  {
    id: "4",
    title: "Cravey",
    status: "on-hold",
    dateRange: {
      start: "Jan 2024",
      end: "Feb 2025"
    },
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["Figma", "UX Design", "React", "AWS", "Python"],
    images: [
      "https://via.placeholder.com/800x400/FF6B6B/FFFFFF?text=Task+Management+App"
    ],
    githubUrl: "https://github.com/johndoe/task-manager",
    details: {
      inspiration: "I wanted to create a collaborative task management application that would help teams work more efficiently together. The inspiration came from seeing how many teams struggle with project coordination and communication.",
      idea: "A modern task management application with real-time updates and team collaboration features that would streamline project workflows and improve team productivity.",
      process: "Started with user research and wireframing, then moved to high-fidelity designs in Figma. The development process involved building the frontend with React and backend with Python, using AWS for hosting and infrastructure.",
      design: "Focused on creating an intuitive and clean interface that would make task management feel effortless. Used a card-based design system with clear visual hierarchy and smooth animations.",
      challenges: "The biggest challenge was implementing real-time collaboration features while maintaining good performance. Also had to balance feature richness with simplicity in the UI design.",
      results: "Created a comprehensive task management solution that significantly improved team collaboration and project tracking efficiency."
    }
  },
  {
    id: "5",
    title: "Vinya",
    status: "completed",
    dateRange: {
      start: "Jan 2021",
      end: "Aug 2021"
    },
    description: "A weather dashboard that displays current weather and forecasts for multiple locations.",
    technologies: ["React Native", "AWS", "IoT", "Serverless", "UX Design"],
    images: [
      "https://via.placeholder.com/800x400/87CEEB/FFFFFF?text=Weather+Dashboard"
    ],
    githubUrl: "",
    liveUrl: "",
    details: {
      inspiration: "I wanted to create a comprehensive weather monitoring system that could help users track weather patterns and make informed decisions. The inspiration came from the need for reliable, real-time weather data accessible across multiple devices.",
      idea: "Vinya is a cross-platform weather dashboard that provides real-time weather data and forecasts for multiple locations. The app integrates IoT sensors and serverless architecture to deliver accurate, up-to-date weather information.",
      process: "Started with UX research and wireframing to understand user needs. Built the mobile app using React Native for cross-platform compatibility. Implemented AWS serverless architecture with IoT integration for real-time data collection and processing.",
      design: "Designed a clean, intuitive dashboard interface that prioritizes readability and quick access to key weather information. Used a card-based layout with clear visual hierarchy and weather-appropriate color schemes. Focused on responsive design for various screen sizes.",
      challenges: "The biggest challenge was integrating multiple weather data sources and IoT sensors while maintaining real-time performance. Also had to handle offline functionality and ensure data accuracy across different geographical locations.",
      results: "Successfully created a reliable weather monitoring system that provides users with accurate, real-time weather data. The app has been used by thousands of users and has received positive feedback for its reliability and ease of use."
    }
  },
  {
    id: "6",
    title: "FiTrac",
    status: "completed",
    dateRange: {
      start: "July 2020",
      end: "Nov 2021"
    },
    description: "A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and health metrics.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "CSS3"],
    images: [
      "https://via.placeholder.com/800x400/87CEEB/FFFFFF?text=Fitness+Tracker"
    ],
    githubUrl: "https://github.com/johndoe/fitness-tracker",
    liveUrl: "https://fitrac-demo.com",
    details: {
      inspiration: "I wanted to create a comprehensive fitness tracking solution that would help users stay motivated and track their progress effectively. The inspiration came from my own fitness journey and the need for a better tracking tool.",
      idea: "FiTrac is a web-based fitness tracking application that allows users to log workouts, track nutrition, monitor health metrics, and visualize their progress over time. The app provides insights and recommendations to help users achieve their fitness goals.",
      process: "Started with user research to understand fitness tracking needs. Built the frontend using React with Chart.js for data visualization. Developed a Node.js backend with MongoDB for data storage. Implemented user authentication and progress tracking features.",
      design: "Designed a clean, motivational interface with a focus on progress visualization. Used a dashboard layout with charts and graphs to display fitness data. Implemented a color-coded system for different types of activities and progress indicators.",
      challenges: "The biggest challenge was creating an intuitive data entry system that wouldn't feel burdensome to users. Also had to implement accurate progress calculations and create meaningful data visualizations that would motivate continued use.",
      results: "Successfully created a comprehensive fitness tracking application that has helped users stay motivated and achieve their fitness goals. The app has received positive feedback for its ease of use and helpful progress insights."
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