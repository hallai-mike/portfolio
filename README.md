# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript. This application showcases your projects, skills, and contact information in a beautiful, professional layout.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Project Showcase**: Display your projects with images, descriptions, and technologies used
- **Project Details**: Individual pages for each project with comprehensive information
- **Search & Filter**: Find projects by title, description, or technologies
- **Contact Information**: Display your contact details and social links
- **Certifications**: Showcase your professional certifications
- **Modern UI**: Beautiful gradient designs and smooth animations

## Pages

1. **Home**: Hero section, personal info, recent projects, and certifications
2. **Projects**: All projects with search and filter functionality
3. **Project Detail**: Individual project pages with images and detailed information
4. **Contact**: Contact information and placeholder for contact form

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`.

## Customization

### Personal Information

Edit `src/data/data.ts` to update your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  address: "Your Address",
  email: "your.email@example.com",
  // ... other fields
};
```

### Projects

Add your projects to the `projects` array in `src/data/data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Title",
    status: "completed", // or "in-progress"
    dateRange: {
      start: "2023-01-01",
      end: "2023-06-30"
    },
    description: "Brief description",
    technologies: ["React", "Node.js", "MongoDB"],
    images: ["image-url-1", "image-url-2"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://project-demo.com",
    details: "Detailed project description"
  }
];
```

### Certifications

Add your certifications to the `certifications` array:

```typescript
export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2023-03-15",
    credentialId: "CERT-123456",
    url: "https://verification-url.com"
  }
];
```

## Deployment to GitHub Pages

### 1. Update Homepage URL

Edit the `homepage` field in `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

Replace `yourusername` with your actual GitHub username.

### 2. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 3. Add Deployment Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 4. Deploy

```bash
npm run deploy
```

### 5. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Set the source to "Deploy from a branch"
4. Select the `gh-pages` branch
5. Save the settings

Your portfolio will be available at `https://yourusername.github.io/portfolio`

## Adding a Contact Form

The contact page includes a placeholder for a contact form. You can integrate with services like:

- **Formspree**: Simple form handling
- **Netlify Forms**: Built-in form processing
- **EmailJS**: Send emails directly from JavaScript
- **Custom Backend**: Build your own API

Example with Formspree:

```jsx
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

## Technologies Used

- **React 19**: Modern React with hooks
- **TypeScript**: Type-safe development
- **React Router**: Client-side routing
- **CSS3**: Modern styling with gradients and animations
- **GitHub Pages**: Free hosting

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── *.css
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   ├── Contact.tsx
│   └── *.css
├── data/               # Sample data
│   └── data.ts
├── types/              # TypeScript interfaces
│   └── index.ts
└── App.tsx             # Main application component
```

## Available Scripts

- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run tests
- `npm run deploy`: Deploy to GitHub Pages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with customization, please open an issue on GitHub.
