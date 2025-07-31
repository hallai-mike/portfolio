import { PersonalInfo, Project, Certification } from '../types';

export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  address: "123 Developer Street, Tech City, TC 12345",
  email: "john.doe@email.com",
  phone: "+1 (555) 123-4567",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  about: "I'm a passionate full-stack developer with 5+ years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies. I love creating user-friendly applications that solve real-world problems."
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    status: "completed",
    dateRange: {
      start: "2023-01-01",
      end: "2023-06-30"
    },
    description: "A full-stack e-commerce platform with payment processing, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    images: [
      "https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=E-Commerce+Platform",
      "https://via.placeholder.com/800x400/50C878/FFFFFF?text=Admin+Dashboard"
    ],
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
    details: "This project involved building a complete e-commerce solution from scratch. Key features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard for inventory and sales tracking. The application is deployed on AWS with auto-scaling capabilities."
  },
  {
    id: "2",
    title: "Task Management App",
    status: "in-progress",
    dateRange: {
      start: "2023-08-01"
    },
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    images: [
      "https://via.placeholder.com/800x400/FF6B6B/FFFFFF?text=Task+Management+App"
    ],
    githubUrl: "https://github.com/johndoe/task-manager",
    details: "Currently developing a modern task management application that allows teams to collaborate on projects in real-time. Features include task creation, assignment, progress tracking, file sharing, and team communication. The app uses Firebase for real-time database and authentication."
  },
  {
    id: "3",
    title: "Weather Dashboard",
    status: "completed",
    dateRange: {
      start: "2022-09-01",
      end: "2022-11-30"
    },
    description: "A weather dashboard that displays current weather and forecasts for multiple locations.",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    images: [
      "https://via.placeholder.com/800x400/87CEEB/FFFFFF?text=Weather+Dashboard"
    ],
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    liveUrl: "https://weather-demo.com",
    details: "Built a responsive weather dashboard that integrates with the OpenWeather API to display current weather conditions and 7-day forecasts. Features include location search, temperature charts, weather maps, and customizable widgets. The app is fully responsive and works on all devices."
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023-03-15",
    credentialId: "AWS-123456",
    url: "https://aws.amazon.com/certification/"
  },
  {
    id: "2",
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022-11-20",
    credentialId: "GCP-789012",
    url: "https://cloud.google.com/certification/"
  },
  {
    id: "3",
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022-08-10",
    credentialId: "MDB-345678",
    url: "https://university.mongodb.com/"
  }
]; 