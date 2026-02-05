/**
 * Detailed documentation for each skill in the Technical Arsenal.
 * Used by the SkillDetail component.
 */

export const skillDetails = {
  // --- Frontend ---
  "React": {
    name: "React",
    definition: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    description: "Maintained by Meta, React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    utilities: [
      "Building reusable UI components",
      "Managing complex state efficiently",
      "Creating single-page applications (SPAs)",
      "Virtual DOM for high performance"
    ],
    quickStart: {
      step1: "Install Node.js",
      step2: "npx create-react-app my-app",
      step3: "cd my-app",
      step4: "npm start"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg"
  },
  "Next.js": {
    name: "Next.js",
    definition: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.",
    description: "It provides the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
    utilities: [
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "API Routes",
      "Automatic Code Splitting"
    ],
    quickStart: {
      step1: "npx create-next-app@latest",
      step2: "Follow the setup wizard",
      step3: "cd my-next-app",
      step4: "npm run dev"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nextjs/nextjs-original.svg"
  },
  "TypeScript": {
    name: "TypeScript",
    definition: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    description: "It adds static type definitions to JavaScript to help you identify problems before you run your code. It saves you time catching errors and providing fixes before you run code.",
    utilities: [
      "Static typing for JavaScript",
      "Enhanced IDE support & Autocomplete",
      "Catching errors at compile-time",
      "Easier refactoring of large codebases"
    ],
    quickStart: {
      step1: "npm install -g typescript",
      step2: "tsc --init",
      step3: "Create .ts files",
      step4: "tsc index.ts"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg"
  },
  "Tailwind": {
    name: "Tailwind CSS",
    definition: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    description: "Tailwind allows you to build modern websites rapidly without leaving your HTML. It's highly customizable and optimizes for production by removing unused CSS.",
    utilities: [
      "Rapid UI development",
      "Responsive design made easy",
      "Highly customizable design system",
      "Small bundle size in production"
    ],
    quickStart: {
      step1: "npm install -D tailwindcss",
      step2: "npx tailwindcss init",
      step3: "Configure tailwind.config.js",
      step4: "Add directives to CSS"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg"
  },

  // --- Design ---
  "Figma": {
    name: "Figma",
    definition: "Figma is a collaborative interface design tool, with robust vector graphics editing and prototyping capabilities.",
    description: "It runs in the browser, making it easy for teams to create, test, and ship better designs from start to finish. It's the industry standard for UI/UX design.",
    utilities: [
      "Real-time collaboration",
      "Vector networks",
      "Interactive prototyping",
      "Design systems management"
    ],
    quickStart: {
      step1: "Sign up at figma.com",
      step2: "Create a new design file",
      step3: "Create a frame (press F)",
      step4: "Start designing!"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/figma/figma-original.svg"
  },
  "Adobe XD": {
    name: "Adobe XD",
    definition: "Adobe XD is a vector-based user experience design tool for web apps and mobile apps.",
    description: "It allows you to wireframe, design, prototype, present, and share amazing experiences for web, mobile, voice, and more.",
    utilities: [
      "Wireframing & Prototyping",
      "Voice prototyping",
      "Auto-animate transitions",
      "Adobe Creative Cloud integration"
    ],
    quickStart: {
      step1: "Install via Creative Cloud",
      step2: "Select artboard size",
      step3: "Design UI elements",
      step4: "Switch to Prototype mode"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/xd/xd-plain.svg"
  },
  "Photoshop": {
    name: "Adobe Photoshop",
    definition: "The world's best imaging and graphic design software.",
    description: "From photo editing and compositing to digital painting, animation, and graphic design, Photoshop is the tool for creative professionals.",
    utilities: [
      "Photo editing & manipulation",
      "Digital painting",
      "Graphic design",
      "Web layout design"
    ],
    quickStart: {
      step1: "Install Photoshop",
      step2: "Create new document",
      step3: "Select tools from toolbar",
      step4: "Work with layers"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/photoshop/photoshop-plain.svg"
  },
  "Canva": {
    name: "Canva",
    definition: "Canva is a free-to-use online graphic design tool.",
    description: "Use it to create social media posts, presentations, posters, videos, logos and more. It offers a simple drag-and-drop interface.",
    utilities: [
      "Quick graphic creation",
      "Social media templates",
      "Presentation design",
      "Brand kit management"
    ],
    quickStart: {
      step1: "Go to canva.com",
      step2: "Choose a template",
      step3: "Drag & drop elements",
      step4: "Download or share"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/canva/canva-original.svg"
  },

  // --- Backend ---
  "Node.js": {
    name: "Node.js",
    definition: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    description: "It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications.",
    utilities: [
      "Building scalable network apps",
      "Server-side scripting",
      "Real-time services (Chat, Gaming)",
      "RESTful API development"
    ],
    quickStart: {
      step1: "Install Node.js",
      step2: "Create server.js",
      step3: "Write HTTP server code",
      step4: "node server.js"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg"
  },
  "Python": {
    name: "Python",
    definition: "Python is an interpreted, high-level and general-purpose programming language.",
    description: "Known for its readability and vast ecosystem, Python is widely used in web development, data science, AI, and automation.",
    utilities: [
      "Web Development (Django, Flask)",
      "Data Science & Analytics",
      "Artificial Intelligence",
      "Scripting & Automation"
    ],
    quickStart: {
      step1: "Install Python",
      step2: "Create script.py",
      step3: "print('Hello World')",
      step4: "python script.py"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg"
  },
  "Express": {
    name: "Express.js",
    definition: "Fast, unopinionated, minimalist web framework for Node.js.",
    description: "It provides a robust set of features for web and mobile applications and facilitates the rapid development of Node based web applications.",
    utilities: [
      "Building web servers",
      "API development",
      "Middleware integration",
      "Routing management"
    ],
    quickStart: {
      step1: "npm install express",
      step2: "const app = express()",
      step3: "Define routes",
      step4: "app.listen(3000)"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg"
  },
  "FastAPI": {
    name: "FastAPI",
    definition: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+.",
    description: "It is based on standard Python type hints. It's one of the fastest Python frameworks available, on par with NodeJS and Go.",
    utilities: [
      "High performance APIs",
      "Automatic interactive documentation",
      "Easy data validation",
      "Async support"
    ],
    quickStart: {
      step1: "pip install fastapi uvicorn",
      step2: "Create main.py",
      step3: "Define app = FastAPI()",
      step4: "uvicorn main:app --reload"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/fastapi/fastapi-original.svg"
  },

  // --- AI & ML ---
  "TensorFlow": {
    name: "TensorFlow",
    definition: "An end-to-end open source platform for machine learning.",
    description: "It has a comprehensive, flexible ecosystem of tools, libraries and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML powered applications.",
    utilities: [
      "Deep Learning models",
      "Neural Networks",
      "Model deployment (TFLite, TFJS)",
      "Scientific computing"
    ],
    quickStart: {
      step1: "pip install tensorflow",
      step2: "Import tensorflow as tf",
      step3: "Build your model",
      step4: "Train and evaluate"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tensorflow/tensorflow-original.svg"
  },
  "PyTorch": {
    name: "PyTorch",
    definition: "An open source machine learning framework that accelerates the path from research prototyping to production deployment.",
    description: "Developed by Meta, it offers a dynamic computational graph and is widely loved by researchers for its flexibility and Pythonic nature.",
    utilities: [
      "Computer Vision",
      "Natural Language Processing",
      "Reinforcement Learning",
      "Dynamic Neural Networks"
    ],
    quickStart: {
      step1: "pip install torch",
      step2: "import torch",
      step3: "Define tensors/models",
      step4: "Run training loop"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/pytorch/pytorch-original.svg"
  },
  "OpenAI": {
    name: "OpenAI API",
    definition: "An API providing access to powerful AI models like GPT-4 and DALL-E.",
    description: "Developers can use the API to build applications that understand and generate natural language or code, generate images, and more.",
    utilities: [
      "Text generation & completion",
      "Code generation",
      "Image generation",
      "Semantic search & embeddings"
    ],
    quickStart: {
      step1: "Get API Key",
      step2: "pip install openai",
      step3: "Initialize client",
      step4: "Make API calls"
    },
    imagePlaceholder: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
  },
  "LangChain": {
    name: "LangChain",
    definition: "A framework for developing applications powered by language models.",
    description: "It enables applications that are context-aware and reason based on the provided context, making it easier to build complex LLM applications.",
    utilities: [
      "Chaining LLM calls",
      "Document loading & parsing",
      "Chat history management",
      "Agent creation"
    ],
    quickStart: {
      step1: "pip install langchain",
      step2: "Define LLM wrapper",
      step3: "Create prompt templates",
      step4: "Run chains"
    },
    imagePlaceholder: "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png"
  },

  // --- Database ---
  "PostgreSQL": {
    name: "PostgreSQL",
    definition: "A powerful, open source object-relational database system.",
    description: "It uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.",
    utilities: [
      "Complex relational queries",
      "JSON storage (NoSQL capabilities)",
      "Data integrity & ACID compliance",
      "Geospatial data (PostGIS)"
    ],
    quickStart: {
      step1: "Install PostgreSQL",
      step2: "Create database",
      step3: "Connect via client/CLI",
      step4: "Execute SQL queries"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg"
  },
  "MongoDB": {
    name: "MongoDB",
    definition: "A source-available cross-platform document-oriented database program.",
    description: "Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas, making it flexible and scalable.",
    utilities: [
      "Flexible document schema",
      "High scalability & sharding",
      "Rapid prototyping",
      "Big data storage"
    ],
    quickStart: {
      step1: "Install MongoDB / Atlas",
      step2: "Connect via driver",
      step3: "Insert documents",
      step4: "Query collections"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg"
  },
  "Redis": {
    name: "Redis",
    definition: "An in-memory data structure store, used as a database, cache, and message broker.",
    description: "It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams.",
    utilities: [
      "High-speed caching",
      "Session management",
      "Real-time analytics",
      "Message queuing (Pub/Sub)"
    ],
    quickStart: {
      step1: "Install Redis server",
      step2: "redis-cli",
      step3: "SET key value",
      step4: "GET key"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/redis/redis-original.svg"
  },
  "MySQL": {
    name: "MySQL",
    definition: "An open-source relational database management system.",
    description: "It is widely used for web applications and is a central component of the LAMP open-source web application software stack.",
    utilities: [
      "Structured data storage",
      "Transaction support",
      "Web application backends",
      "Data warehousing"
    ],
    quickStart: {
      step1: "Install MySQL Server",
      step2: "Secure installation",
      step3: "Create user & DB",
      step4: "Connect and query"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg"
  },

  // --- DevOps & Cloud ---
  "Docker": {
    name: "Docker",
    definition: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
    description: "Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.",
    utilities: [
      "Application containerization",
      "Consistent environments",
      "Microservices deployment",
      "CI/CD integration"
    ],
    quickStart: {
      step1: "Install Docker Desktop",
      step2: "Create Dockerfile",
      step3: "docker build -t my-app .",
      step4: "docker run my-app"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg"
  },
  "AWS": {
    name: "Amazon Web Services",
    definition: "A comprehensive, evolving cloud computing platform provided by Amazon.",
    description: "It offers a wide range of services including computing power, database storage, content delivery, and other functionalities to help businesses scale and grow.",
    utilities: [
      "Cloud computing (EC2)",
      "Serverless functions (Lambda)",
      "Storage solutions (S3)",
      "Managed databases (RDS)"
    ],
    quickStart: {
      step1: "Create AWS Account",
      step2: "Set up IAM user",
      step3: "Choose service (e.g., S3)",
      step4: "Deploy/Configure"
    },
    imagePlaceholder: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  "Git": {
    name: "Git",
    definition: "A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    description: "Git is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase.",
    utilities: [
      "Source code management",
      "Collaboration & merging",
      "History tracking",
      "Branching workflows"
    ],
    quickStart: {
      step1: "git init",
      step2: "git add .",
      step3: "git commit -m 'Initial commit'",
      step4: "git push origin main"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg"
  },
  "Linux": {
    name: "Linux",
    definition: "A family of open-source Unix-like operating systems based on the Linux kernel.",
    description: "Linux is the leading operating system on servers and other big iron systems such as mainframe computers, and the only OS used on TOP500 supercomputers.",
    utilities: [
      "Server OS environment",
      "Command line power",
      "Scripting (Bash)",
      "System administration"
    ],
    quickStart: {
      step1: "Install Distro (Ubuntu/Arch)",
      step2: "Open Terminal",
      step3: "Update packages (apt/pacman)",
      step4: "Explore filesystem"
    },
    imagePlaceholder: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/linux/linux-original.svg"
  },

  // Fallback
  "DEFAULT": {
    name: "Technology",
    definition: "A powerful tool in the modern development stack.",
    description: "This technology is essential for building robust, scalable, and efficient software solutions.",
    utilities: [
      "Efficiency improvement",
      "Scalability",
      "Modern development workflow",
      "Industry standard"
    ],
    quickStart: {
      step1: "Visit official documentation",
      step2: "Install via package manager",
      step3: "Configure environment",
      step4: "Start coding"
    },
    imagePlaceholder: "https://via.placeholder.com/150"
  }
};

export const getSkillDetails = (skillName) => {
  return skillDetails[skillName] || { ...skillDetails["DEFAULT"], name: skillName };
};
