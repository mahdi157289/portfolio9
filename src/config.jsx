/**
 * File Role: Configuration Data
 * Utility: Centralizes all text content, links, and data used across the application.
 * Technical description: Exports constant objects containing static data.
 * Workflow inside the file:
 *  1. Imports Lucide icons.
 *  2. Defines data objects for each section (Hero, About, Skills, etc.).
 *  3. Exports these objects for consumption by components.
 * Relation with other files: Imported by almost all components to populate content.
 * Overall utility in the project: Decouples content from code, making updates easier.
 */

import { Code, Database, Palette, Puzzle, Gamepad2, ShoppingCart, Layout, BarChart, Glasses, MessageSquare, Users, Clock, Github, Linkedin, Twitter } from 'lucide-react';

export const social = [
  { icon: Github, link: "#" },
  { icon: Linkedin, link: "#" },
  { icon: Twitter, link: "#" }
];

export const navigation = {
  logo: "MB.",
  links: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
  cta: "✨ Hire Me"
};

export const hero = {
  title: "Welcome to my",
  titleHighlight: "World",
  subtitle: "I'm",
  name: "Mahdi Baccar",
  status: "Available for opportunities",
  description: "Crafting scalable web solutions and transforming data into insights. Passionate about clean code and innovative technologies.",
  buttons: {
    primary: "View Projects",
    secondary: "Contact Me"
  },
  roles: [
    { title: "Full Stack Developer", icon: Code },
    { title: "Data Engineer", icon: Database },
    { title: "UI/UX Enthusiast", icon: Palette },
    { title: "Problem Solver", icon: Puzzle }
  ]
};

export const about = {
  title: "About",
  titleHighlight: "Me",
  description1: "I'm Mahdi Baccar, a passionate developer with expertise in building robust web applications and designing data pipelines. I love transforming complex problems into elegant, efficient solutions.",
  description2: "My expertise spans across React, Node.js, Python, SQL, and cloud technologies. I'm passionate about creating scalable applications and deriving meaningful insights from data.",
  stats: [
    { number: '50+', label: 'Projects', icon: Code },
    { number: '30+', label: 'Clients', icon: Users },
    { number: '5+', label: 'Years', icon: Clock }
  ]
};

export const skills = {
  title: "Technical",
  titleHighlight: "Arsenal",
  description: "Technologies I work with to bring ideas to life",
  categories: [
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "React", icon: "devicon-react-original colored", level: 95 },
        { name: "Next.js", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm19.8 100.4L35.4 34.6h8.7l39 53.3V34.6h9v65.8h-8.3zM56 87.8h-9V49.2h9v38.6z"/></svg>', level: 90 },
        { name: "TypeScript", icon: "devicon-typescript-plain colored", level: 88 },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored", level: 95 }
      ]
    },
    {
      title: "Design",
      icon: "🖌️",
      color: "from-purple-500 to-fuchsia-500",
      skills: [
        { name: "Figma", icon: "devicon-figma-plain", level: 90 },
        { name: "Adobe XD", icon: "devicon-xd-plain", level: 85 },
        { name: "Photoshop", icon: "devicon-photoshop-plain", level: 80 },
        { name: "Canva", icon: "devicon-canva-original", level: 95 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 90 },
        { name: "Python", icon: "devicon-python-plain colored", level: 88 },
        { name: "Express", icon: "devicon-express-original", level: 85 },
        { name: "FastAPI", icon: "devicon-fastapi-plain colored", level: 82 }
      ]
    },
    {
      title: "AI & ML",
      icon: "🤖",
      color: "from-violet-600 to-indigo-600",
      skills: [
        { name: "TensorFlow", icon: "devicon-tensorflow-original colored", level: 80 },
        { name: "PyTorch", icon: "devicon-pytorch-original colored", level: 75 },
        { name: "OpenAI", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.045 6.045 0 0 0 6.5146 2.9001A5.9995 5.9995 0 0 0 13.2599 24a6.0281 6.0281 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1195 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2298V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0916-4.3665l3.9028-2.2519 3.9028 2.2519v4.5041l-3.9028 2.2519-3.9028-2.2519z"/></svg>', level: 85 },
        { name: "LangChain", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.828 12l2.829-2.829a4 4 0 0 0-5.657-5.657l-2.828 2.829 1.414 1.414 2.828-2.829a2 2 0 0 1 2.829 2.829L13.414 10.586l1.414 1.414zm-5.656 0L6.343 14.829a4 4 0 0 0 5.657 5.657l2.828-2.829-1.414-1.414-2.828 2.829a2 2 0 0 1-2.829-2.829l2.829-2.829-1.414-1.414zm.707-2.121l4.243 4.243-1.414 1.414-4.243-4.243 1.414-1.414z"/></svg>', level: 82 }
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", level: 90 },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 85 },
        { name: "Redis", icon: "devicon-redis-plain colored", level: 80 },
        { name: "MySQL", icon: "devicon-mysql-plain colored", level: 88 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      color: "from-orange-500 to-yellow-500",
      skills: [
        { name: "Docker", icon: "devicon-docker-plain colored", level: 85 },
        { name: "AWS", icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F90" d="M87.6 74.4c-4.9-3.2-11.2-2.5-16.1-.7-4.4 1.6-11.6 6.3-11.6 6.3l-1.8-6.7s6-3.8 11.2-5.6c6.3-2.1 13.3-1.8 19.3 1.4 6.3 3.5 8.1 10.9 8.1 19v35.8h-9.5V119h-1.8c-.4-1.8-3.5-7.7-3.9-8.4-4.2 6-11.9 9.1-19.3 8.8-12.3-.4-22.1-9.8-21.8-22.1.4-12.3 10.5-21.8 23.9-21.4 8.1.4 14.4 3.5 19.3 8.1v-6c-.1-9.5-3.9-20.4-15.8-23.6zm-15.8 33c-6.3-1.1-11.9 2.5-13.3 7.7-1.8 6.7 3.2 13.3 9.8 13.7 7 0 13.3-4.9 14.4-11.9.3-5.3-4.9-8.8-10.9-9.5zM38.6 98.6l-8.4-2.8c1.8-4.9 6-10.2 11.9-12.6 6-2.5 13-1.4 18.2 2.1l4.9-7c-7.4-5.3-17.5-6.7-26.3-3.2-8.8 3.5-15.1 11.6-17.5 20.7h17.2zm71.6-4.9c7.7-4.6 13.7 3.5 13.7 3.5l5.3-7.4s-8.1-10.2-19.7-6.3c-6 2.1-9.5 7.4-10.9 12.6h17.2c-.3-1.4 0-1.7-5.6-2.4z"/><path fill="#232F3E" d="M96.4 20.7l2.8 5.6-5.3 1.8-1.8-5.3c-2.8 1.1-4.9 3.2-6.3 6-1.8 3.2-2.5 7.4-2.5 11.2h-7c.4-5.6 1.8-11.2 4.9-15.8 3.5-4.9 8.4-8.1 15.2-9.1V20.7zM32.3 27c-3.2-1.4-6.3-1.8-9.8-1.1l-1.4-5.3 5.3-1.4 1.4 5.3c6.7-1.4 14-1.1 20 2.5 5.6 3.5 9.1 9.1 10.5 15.4H51.2c-.7-3.9-2.8-7-6-9.1-4.6-2.8-9.1-2.8-12.9-6.3zM67.7 5.3l-2.1 4.9h4.2l-2.1-4.9zm13 2.1l-2.5 4.6h4.9l-2.4-4.6z"/></svg>', level: 82 },
        { name: "Git", icon: "devicon-git-plain colored", level: 92 },
        { name: "Linux", icon: "devicon-linux-plain", level: 85 }
      ]
    }
  ],
  otherTools: {
    title: "Other",
    titleHighlight: "Tools & Technologies",
    items: [
      { name: "Three.js", icon: "devicon-threejs-original text-white" },
      { name: "GraphQL", icon: "devicon-graphql-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "Sass", icon: "devicon-sass-original colored" },
      { name: "Jest", icon: "devicon-jest-plain colored" },
      { name: "Webpack", icon: "devicon-webpack-plain colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" }
    ]
  }
};

export const projects = {
  title: "Featured",
  titleHighlight: "Projects",
  items: [
    { title: '3D Product Showcase', category: 'Three.js / WebGL', color: 'from-purple-600 to-blue-600', icon: Gamepad2 },
    { title: 'E-Commerce Platform', category: 'React / Node.js', color: 'from-pink-600 to-red-600', icon: ShoppingCart },
    { title: 'Portfolio Generator', category: 'Next.js / AI', color: 'from-green-600 to-teal-600', icon: Layout },
    { title: 'Social Dashboard', category: 'React / D3.js', color: 'from-orange-600 to-yellow-600', icon: BarChart },
    { title: 'AR Web Experience', category: 'WebXR / Three.js', color: 'from-indigo-600 to-purple-600', icon: Glasses },
    { title: 'Real-time Chat App', category: 'Socket.io / React', color: 'from-cyan-600 to-blue-600', icon: MessageSquare }
  ]
};

export const contact = {
  title: "Let's",
  titleHighlight: "Connect",
  form: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    button: "Send Message"
  }
};

export const footer = {
  copyright: "© 2024 Mahdi Baccar. Crafted with 💜 and lots of coffee."
};

export const codeScreen = {
  fileName: "portfolio.tsx",
  code: {
    variableName: "Developer",
    name: "'Mahdi Baccar'",
    skills: ["'React'", "'Node.js'", "'Python'"],
    hardWorker: "true",
    problemSolver: "true",
    functionName: "hireable",
    returnValue: "true"
  },
  comment: "// Loading next big idea..."
};
