# Portfolio V2

## Project Overview
This project is a modern, responsive portfolio website migrated from a static HTML/CSS/JS version to a React-based architecture. It features 3D elements, advanced animations, and a modular component structure.

## Technical Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **Animations:** GSAP (ScrollTrigger), Framer Motion
- **3D Graphics:** React Three Fiber (@react-three/fiber, @react-three/drei)
- **Icons:** Lucide React, Devicon

## Project Structure
- `src/components/`: Reusable UI components (Hero, About, Skills, etc.)
- `src/utils/`: Helper functions
- `src/styles/`: Global styles and Tailwind configuration
- `src/config.jsx`: Centralized configuration for text and data
- `src/main.jsx`: Application entry point

## Key Features
- **3D Code Screen:** Interactive 3D element in the Hero section.
- **Role Rotator:** Dynamic text animation using Framer Motion.
- **Scroll Animations:** Section reveal animations powered by GSAP.
- **Glassmorphism:** Modern UI design with blurred backgrounds and gradients.
- **Responsive Design:** Fully optimized for all device sizes.

## Development
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`

## Documentation
Each component file contains detailed comments explaining its utility, technical implementation, workflow, and relationships with other files.
