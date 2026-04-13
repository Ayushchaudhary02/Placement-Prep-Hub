export const FULLSTACK_ROADMAP = {
  month1: {
    number: 1,
    title: "HTML + CSS + Git",
    subtitle: "Basics",
    color: "#3B82F6",
    duration: "4 weeks",
    weeks: [
      {
        number: 1,
        title: "HTML Foundations",
        subtitle: "Structure of the web",
        topics: [
          "HTML boilerplate",
          "Headings h1–h6",
          "p/div/span",
          "Lists (ul/ol/li)",
          "Links & images",
          "Forms & inputs",
          "Semantic tags",
          "VS Code setup",
          "Live Server"
        ],
        project: {
          title: "Personal bio page",
          description: "naam, photo, about me, contact form (no CSS yet)"
        },
        resources: [
          { title: "CodeWithHarry — HTML full course (YouTube, Hindi)", url: "#" },
          { title: "freeCodeCamp — Responsive Web Design, first 20 lessons", url: "#" },
          { title: "MDN HTML reference — har tag ke liye", url: "#" }
        ],
        tip: "Pehle din sirf structure banao. HTML = skeleton, CSS = kapde. Ek bhi CSS line mat likho is week mein.",
        schedule: [
          { time: "30 min", label: "Revision", desc: "HTML tags dobara likh" },
          { time: "1.5 hr", label: "New Concept", desc: "ek tag seekhna at depth" },
          { time: "1.5 hr", label: "Hands-on", desc: "khud website banao" },
          { time: "30 min", label: "Commit", desc: "GitHub push + notes" }
        ],
        doList: [
          "Rozana ek HTML element seekho",
          "DevTools inspect karo",
          "MDN docs padhna",
          "Daily GitHub commit"
        ],
        avoidList: [
          "CSS abhi nahi",
          "JavaScript nahi",
          "Copy-paste code",
          "Multiple courses saath mein"
        ],
        selfCheckQuestions: [
          "Kya bina dekhe HTML boilerplate likh sakta hoon?",
          "Kya semantic tags samajhta hoon?",
          "Kya GitHub mein daily commit kar raha hoon?"
        ]
      },
      {
        number: 2,
        title: "CSS Basics",
        subtitle: "Colors, fonts, box model",
        topics: [
          "Selectors & specificity",
          "Colors & backgrounds",
          "Typography",
          "Box model (margin/padding/border)",
          "Width & height",
          "Display (block/inline)",
          "CSS variables",
          "Google Fonts"
        ],
        project: {
          title: "Style Week 1's bio page",
          description: "Same HTML, sirf CSS add karo"
        },
        resources: [
          { title: "Apna College — CSS playlist (YouTube, Hindi)", url: "#" },
          { title: "CSS-Tricks — Complete Guide to Flexbox", url: "#" },
          { title: "Kevin Powell — CSS for beginners (YouTube)", url: "#" }
        ],
        tip: "Box model is the most important concept. DevTools (F12) mein box model visualizer zaroor dekho.",
        schedule: [
          { time: "30 min", label: "Revision", desc: "kal likha CSS dobara likh" },
          { time: "1.5 hr", label: "New Concept", desc: "Ek CSS property deeply" },
          { time: "1.5 hr", label: "Hands-on", desc: "khud design karo" },
          { time: "30 min", label: "Commit", desc: "Progress push karo" }
        ],
        doList: [
          "Box model samajhna",
          "DevTools ke visualizer dekho",
          "Google Fonts use karo",
          "Responsive fonts"
        ],
        avoidList: [
          "Bootstrap abhi nahi",
          "Tailwind nahi",
          "Copy designs without understanding",
          "Hardcoded colors"
        ],
        selfCheckQuestions: [
          "Kya box model samajh gaya?",
          "Kya selector specificity samajhta hoon?",
          "Kya CSS variables banaa sakta hoon?"
        ]
      },
      {
        number: 3,
        title: "Flexbox + Grid",
        subtitle: "Layout master",
        topics: [
          "display:flex",
          "justify-content",
          "align-items",
          "flex-wrap",
          "display:grid",
          "grid-template-columns",
          "gap",
          "grid-area",
          "Navbar layout",
          "Card grid"
        ],
        project: {
          title: "Netflix/Zomato-jaisi card grid",
          description: "navbar + hero section + 6 cards grid"
        },
        resources: [
          { title: "Flexbox Froggy — flexboxfroggy.com (game, must play)", url: "https://flexboxfroggy.com" },
          { title: "Grid Garden — cssgridgarden.com (game, must play)", url: "https://cssgridgarden.com" },
          { title: "Kevin Powell — Flexbox vs Grid (YouTube)", url: "#" }
        ],
        tip: "Pehle Flexbox Froggy complete karo (1 hour), phir Grid Garden. Games ke through seekhna sab clear ho jaata hai.",
        schedule: [
          { time: "30 min", label: "Game", desc: "Flexbox Froggy ya Grid" },
          { time: "1.5 hr", label: "Concept", desc: "Flexbox deeply seekh" },
          { time: "1.5 hr", label: "Build", desc: "nav aur card grid banao" },
          { time: "30 min", label: "Commit", desc: "GitHub push" }
        ],
        doList: [
          "Flexbox Froggy complete karo",
          "Grid Garden complete karo",
          "Netflix-style layout banao",
          "Responsive design"
        ],
        avoidList: [
          "Bootstrap grid",
          "Float layouts",
          "Absolute positioning for layout",
          "Skipping games"
        ],
        selfCheckQuestions: [
          "Kya sirf Flexbox se navbar bana sakta hoon?",
          "Kya Grid samajhta hoon?",
          "Kya mobile-responsive layout bana sakta hoon?"
        ]
      },
      {
        number: 4,
        title: "Responsive Design + Git + Final Project",
        subtitle: "Deployment ready",
        topics: [
          "Media queries",
          "Mobile-first approach",
          "Viewport meta tag",
          "CSS transitions",
          "Hover effects",
          "Git init/add/commit",
          "GitHub repo",
          "GitHub Pages deploy"
        ],
        project: {
          title: "Portfolio website",
          description: "Home, About, Projects, Contact pages. GitHub Pages pe live karo."
        },
        resources: [
          { title: "freeCodeCamp — Responsive Web Design cert (finish it)", url: "#" },
          { title: "Traversy Media — Git & GitHub crash course (YouTube)", url: "#" },
          { title: "GitHub Pages documentation", url: "https://pages.github.com" }
        ],
        tip: "Mobile-first likhna start karo. GitHub pe daily commit karo. Portfolio link resume mein zaroor ho.",
        schedule: [
          { time: "30 min", label: "Setup", desc: "GitHub Pages setup kar" },
          { time: "2 hr", label: "Build", desc: "Portfolio website (4 pages)" },
          { time: "1 hr", label: "Responsive", desc: "Media queries add karo" },
          { time: "30 min", label: "Deploy", desc: "GitHub Pages live karo" }
        ],
        doList: [
          "Mobile-first approach",
          "Media queries sahi tarike se",
          "GitHub Pages deploy",
          "Portfolio link resume mein"
        ],
        avoidList: [
          "Desktop-first approach",
          "Too many breakpoints",
          "Forgetting viewport meta tag",
          "Not testing on mobile"
        ],
        selfCheckQuestions: [
          "Kya mera portfolio GitHub Pages pe live hai?",
          "Kya mobile mein bhi acha lag raha hai?",
          "Kya GitHub commit history clean hai?"
        ]
      }
    ]
  },
  month2: {
    number: 2,
    title: "JavaScript",
    subtitle: "Core to Advanced",
    color: "#7C3AED",
    duration: "4 weeks",
    weeks: [
      {
        number: 1,
        title: "Variables, Loops, Functions",
        subtitle: "JavaScript basics",
        topics: [
          "Variables (var, let, const)",
          "Data types",
          "Operators",
          "Conditional statements",
          "For/while loops",
          "Functions",
          "Scope & closure",
          "Hoisting"
        ],
        project: {
          title: "Calculator app",
          description: "Basic arithmetic calculator with HTML UI"
        },
        resources: [
          { title: "javascript.info — Variables & Data Types", url: "https://javascript.info" },
          { title: "Namaste JavaScript — Akshay Saini (YouTube, Hindi)", url: "#" },
          { title: "Chai aur Code — Hitesh Choudhary (YouTube, Hindi)", url: "#" }
        ],
        tip: "Namaste JavaScript series must-watch — closures aur hoisting ekdum clear ho jaayega.",
        schedule: [
          { time: "30 min", label: "Revision", desc: "Previous concept revise" },
          { time: "1.5 hr", label: "Concept", desc: "Ek concept deeply" },
          { time: "1.5 hr", label: "Code", desc: "Mini project banao" },
          { time: "30 min", label: "Commit", desc: "GitHub push" }
        ],
        doList: [
          "Rozana ek concept samjho",
          "Mini project banao",
          "Console log ke saath debug karo",
          "Daily commit"
        ],
        avoidList: [
          "var keyword use karna",
          "Not understanding scope",
          "Copy-paste code",
          "Skipping closures"
        ],
        selfCheckQuestions: [
          "Kya let aur const mein difference samajhta hoon?",
          "Kya closure kya hota hai samajhta hoon?",
          "Kya function scope samajhta hoon?"
        ]
      },
      {
        number: 2,
        title: "DOM & Events",
        subtitle: "Making pages interactive",
        topics: [
          "DOM manipulation",
          "querySelector/getElementById",
          "innerHTML vs textContent",
          "Event listeners",
          "Event delegation",
          "preventDefault/stopPropagation",
          "Form validation",
          "Local Storage"
        ],
        project: {
          title: "To-Do list app",
          description: "Add, delete, mark complete with localStorage persistence"
        },
        resources: [
          { title: "MDN — DOM Manipulation Guide", url: "https://mdn.org" },
          { title: "javascript.info — Events", url: "https://javascript.info" },
          { title: "Chai aur Code — DOM series (Hindi)", url: "#" }
        ],
        tip: "Event delegation samajhna zaroori hai large-scale apps ke liye.",
        schedule: [
          { time: "30 min", label: "Revision", desc: "Previous concept revise" },
          { time: "1.5 hr", label: "Concept", desc: "Events aur DOM deeply" },
          { time: "1.5 hr", label: "Build", desc: "To-Do app complete" },
          { time: "30 min", label: "Commit", desc: "GitHub push + notes" }
        ],
        doList: [
          "QuerySelector samjho",
          "Event delegation practice karo",
          "localStorage use karo",
          "Form validation implement karo"
        ],
        avoidList: [
          "onclick attribute use karna",
          "Not using event delegation",
          "innerHTML security risk ignore karna",
          "localStorage without sanitization"
        ],
        selfCheckQuestions: [
          "Kya DOM traversal samajhta hoon?",
          "Kya event delegation kya hai samajhta hoon?",
          "Kya localStorage use kar sakta hoon?"
        ]
      },
      {
        number: 3,
        title: "Async JavaScript",
        subtitle: "Promises, async/await, Fetch API",
        topics: [
          "Promises",
          "Callbacks",
          "async/await",
          "Fetch API",
          "Error handling (try/catch)",
          "HTTP methods",
          "API integration",
          "Error states"
        ],
        project: {
          title: "Weather app",
          description: "Fetch weather data from OpenWeather API, display in UI"
        },
        resources: [
          { title: "javascript.info — Promises", url: "https://javascript.info" },
          { title: "Namaste JavaScript — Event Loop (YouTube)", url: "#" },
          { title: "MDN — Fetch API", url: "https://mdn.org" }
        ],
        tip: "Event loop samajhna chahiye async code understand karne ke liye.",
        schedule: [
          { time: "30 min", label: "Concept", desc: "Promises aur async intro" },
          { time: "1.5 hr", label: "Deep", desc: "Event loop + await" },
          { time: "1.5 hr", label: "API", desc: "Weather app with Fetch" },
          { time: "30 min", label: "Test", desc: "Postman se test karo" }
        ],
        doList: [
          "Promise chain samjho",
          "async/await use karo",
          "Error handling implement karo",
          "Real API integrate karo"
        ],
        avoidList: [
          "Callback hell",
          "Not handling errors",
          "Ignoring CORS issues",
          "Not testing edge cases"
        ],
        selfCheckQuestions: [
          "Kya Promise kya hota hai samajhta hoon?",
          "Kya async/await use kar sakta hoon?",
          "Kya Fetch API se data fetch kar sakta hoon?"
        ]
      },
      {
        number: 4,
        title: "Advanced Concepts",
        subtitle: "ES6+, OOP, Performance",
        topics: [
          "Arrow functions",
          "Destructuring",
          "Spread operator",
          "Template literals",
          "Classes & inheritance",
          "Prototypes",
          "this keyword",
          "Performance tips"
        ],
        project: {
          title: "Quiz app",
          description: "Class-based quiz with scoring, localStorage, timer"
        },
        resources: [
          { title: "javascript.info — ES6+ Features", url: "https://javascript.info" },
          { title: "freeCodeCamp — JS Algorithms & Data Structures", url: "#" },
          { title: "You Don't Know JS — Kyle Simpson (free online)", url: "#" }
        ],
        tip: "OOP concepts zaroori hain React aur backend coding ke liye.",
        schedule: [
          { time: "30 min", label: "Concept", desc: "ES6+ features intro" },
          { time: "1.5 hr", label: "OOP", desc: "Classes aur inheritance" },
          { time: "1.5 hr", label: "Build", desc: "Quiz app complete" },
          { time: "30 min", label: "Optimize", desc: "Code refactor karo" }
        ],
        doList: [
          "Arrow functions samjho",
          "Destructuring practice karo",
          "Classes use karo",
          "this keyword samjho"
        ],
        avoidList: [
          "Regular functions everywhere",
          "Not understanding spread operator",
          "Prototype confusion ignore karna",
          "Performance bottlenecks"
        ],
        selfCheckQuestions: [
          "Kya arrow functions aur regular functions mein difference samajhta hoon?",
          "Kya class banaa sakta hoon?",
          "Kya destructuring use kar sakta hoon?"
        ]
      }
    ]
  },
  month3: {
    number: 3,
    title: "React.js",
    subtitle: "Frontend Framework",
    color: "#059669",
    duration: "4 weeks",
    weeks: [
      {
        number: 1,
        title: "React Basics",
        subtitle: "Components, JSX, Props",
        topics: [
          "React setup (Vite/CRA)",
          "Components (functional)",
          "JSX syntax",
          "Props",
          "Rendering lists",
          "Conditional rendering",
          "Component composition",
          "React DevTools"
        ],
        project: {
          title: "Todo app with React",
          description: "Functional components, props, list rendering"
        },
        resources: [
          { title: "react.dev — Official React Docs (best)", url: "https://react.dev" },
          { title: "Chai aur Code — React Playlist (Hindi)", url: "#" },
          { title: "Scrimba — React Course (interactive, free)", url: "#" }
        ],
        tip: "Component thinking start karo. React = breaking UI into components.",
        schedule: [
          { time: "30 min", label: "Setup", desc: "Vite project create" },
          { time: "1.5 hr", label: "Concept", desc: "Components aur JSX" },
          { time: "1.5 hr", label: "Code", desc: "Todo app banao" },
          { time: "30 min", label: "Practice", desc: "Props drilling" }
        ],
        doList: [
          "React DevTools install karo",
          "Functional components use karo",
          "Props pass karo aur destructure karo",
          "Component nesting practice karo"
        ],
        avoidList: [
          "Class components (unless needed)",
          "Direct state mutation",
          "Props drilling too deep",
          "Not breaking into components"
        ],
        selfCheckQuestions: [
          "Kya JSX samajhta hoon?",
          "Kya props use kar sakta hoon?",
          "Kya list render kar sakta hoon?"
        ]
      },
      {
        number: 2,
        title: "State & Hooks",
        subtitle: "useState, useEffect, More",
        topics: [
          "useState hook",
          "useEffect hook",
          "useCallback",
          "useMemo",
          "Custom hooks",
          "Dependency array",
          "Cleanup functions",
          "Performance optimization"
        ],
        project: {
          title: "Weather app with React",
          description: "useState for state, useEffect for API calls"
        },
        resources: [
          { title: "react.dev — Hooks API Reference", url: "https://react.dev" },
          { title: "Chai aur Code — Hooks Deep Dive (Hindi)", url: "#" },
          { title: "The Odin Project — React Hooks Section", url: "#" }
        ],
        tip: "useEffect dependency array zaroori hai. Galat use karne se infinite loops hote hain.",
        schedule: [
          { time: "30 min", label: "Concept", desc: "useState intro" },
          { time: "1.5 hr", label: "useEffect", desc: "Side effects aur cleanup" },
          { time: "1.5 hr", label: "Build", desc: "Weather app with API" },
          { time: "30 min", label: "Debug", desc: "React DevTools" }
        ],
        doList: [
          "useState samjho",
          "useEffect properly use karo",
          "Dependency array understand karo",
          "Custom hook banao"
        ],
        avoidList: [
          "Dependency array ignore karna",
          "Infinite loops create karna",
          "Every value as dependency",
          "Not cleaning up effects"
        ],
        selfCheckQuestions: [
          "Kya useState use kar sakta hoon?",
          "Kya useEffect dependency array samajhta hoon?",
          "Kya custom hook banaa sakta hoon?"
        ]
      },
      {
        number: 3,
        title: "Router & Context",
        subtitle: "Multi-page apps & State Management",
        topics: [
          "React Router v6",
          "Routes & navigation",
          "URL parameters",
          "useContext hook",
          "Context API",
          "Provider pattern",
          "Global state management",
          "Nested routing"
        ],
        project: {
          title: "Blog app with Router",
          description: "Multiple pages, navigation, context for global state"
        },
        resources: [
          { title: "react-router.org — Official Docs", url: "https://react-router.org" },
          { title: "Chai aur Code — Router + Context (Hindi)", url: "#" },
          { title: "The Odin Project — React Router", url: "#" }
        ],
        tip: "Context API sufficient for medium apps. Redux only for large apps with complex state.",
        schedule: [
          { time: "30 min", label: "Router", desc: "React Router setup" },
          { time: "1.5 hr", label: "Routes", desc: "Multi-page routing" },
          { time: "1.5 hr", label: "State", desc: "Context API implement" },
          { time: "30 min", label: "Debug", desc: "Navigation test" }
        ],
        doList: [
          "React Router setup karo",
          "Routes define karo",
          "useContext use karo",
          "Global state manage karo"
        ],
        avoidList: [
          "Redux without reason",
          "Over-complex routing",
          "Prop drilling instead of context",
          "Not organizing context properly"
        ],
        selfCheckQuestions: [
          "Kya React Router use kar sakta hoon?",
          "Kya useContext se global state manage kar sakta hoon?",
          "Kya multi-page app banaa sakta hoon?"
        ]
      },
      {
        number: 4,
        title: "Advanced React",
        subtitle: "Tailwind CSS, Performance, Advanced patterns",
        topics: [
          "Tailwind CSS basics",
          "Responsive design in Tailwind",
          "Error boundaries",
          "Lazy loading & Suspense",
          "Code splitting",
          "Performance metrics",
          "Testing basics",
          "Deployment"
        ],
        project: {
          title: "E-commerce product listing",
          description: "Tailwind styling, product filters, cart state with context"
        },
        resources: [
          { title: "tailwindcss.com — Official Docs", url: "https://tailwindcss.com" },
          { title: "Chai aur Code — Tailwind CSS (Hindi)", url: "#" },
          { title: "Vercel Docs — React Deployment", url: "https://vercel.com" }
        ],
        tip: "Tailwind best practice: utility classes prefer karo custom CSS se, but don't over-engineer.",
        schedule: [
          { time: "30 min", label: "Tailwind", desc: "Utility classes setup" },
          { time: "1.5 hr", label: "Build", desc: "E-commerce UI with Tailwind" },
          { time: "1.5 hr", label: "Feature", desc: "Filters aur cart implement" },
          { time: "30 min", label: "Deploy", desc: "Vercel mein push karo" }
        ],
        doList: [
          "Tailwind CSS use karo",
          "Responsive design implement karo",
          "Deployment setup karo",
          "Performance optimize karo"
        ],
        avoidList: [
          "Tailwind without understanding",
          "Not testing responsiveness",
          "Skipping performance optimization",
          "Not deploying project"
        ],
        selfCheckQuestions: [
          "Kya Tailwind CSS use kar sakta hoon?",
          "Kya responsive design banaa sakta hoon?",
          "Kya app Vercel pe deploy kar sakta hoon?"
        ]
      }
    ]
  },
  month4: {
    number: 4,
    title: "Node.js + Express",
    subtitle: "Backend Development",
    color: "#D97706",
    duration: "4 weeks",
    weeks: [
      {
        number: 1,
        title: "Node.js Basics",
        subtitle: "Server setup, Modules, File system",
        topics: [
          "Node.js runtime",
          "CommonJS modules",
          "npm & package.json",
          "File system module",
          "HTTP module",
          "Creating server",
          "Request/response",
          "Nodemon setup"
        ],
        project: {
          title: "Simple HTTP server",
          description: "Basic server handling GET/POST requests, serving files"
        },
        resources: [
          { title: "nodejs.org — Official Docs", url: "https://nodejs.org" },
          { title: "Traversy Media — Node.js Crash Course (YouTube)", url: "#" },
          { title: "The Odin Project — NodeJS Fundamentals", url: "#" }
        ],
        tip: "Pehle HTTP module samjho, phir Express padhna aasan ho jayega.",
        schedule: [
          { time: "30 min", label: "Setup", desc: "Node.js install karo" },
          { time: "1.5 hr", label: "Concepts", desc: "Modules aur HTTP" },
          { time: "1.5 hr", label: "Build", desc: "Simple server banao" },
          { time: "30 min", label: "Test", desc: "Postman se test karo" }
        ],
        doList: [
          "npm commands practice karo",
          "Modules understand karo",
          "HTTP methods samjho",
          "Nodemon use karo"
        ],
        avoidList: [
          "Global variables",
          "No error handling",
          "Hardcoded ports",
          "Not using Nodemon"
        ],
        selfCheckQuestions: [
          "Kya simple HTTP server banaa sakta hoon?",
          "Kya npm packages install kar sakta hoon?",
          "Kya Node.js modules understand karta hoon?"
        ]
      },
      {
        number: 2,
        title: "Express.js Framework",
        subtitle: "Routing, Middleware, REST APIs",
        topics: [
          "Express setup",
          "Routing (GET/POST/PUT/DELETE)",
          "Middleware",
          "Request/response objects",
          "Error handling",
          "Static files serving",
          "Environment variables",
          "MVC pattern"
        ],
        project: {
          title: "Notes API (in-memory)",
          description: "REST API for CRUD operations without database"
        },
        resources: [
          { title: "expressjs.com — Official Docs", url: "https://expressjs.com" },
          { title: "Chai aur Code — Express Basics (Hindi)", url: "#" },
          { title: "The Odin Project — Express Fundamentals", url: "#" }
        ],
        tip: "MVC pattern follow karo from day 1. Models, Views, Controllers separate rakho.",
        schedule: [
          { time: "30 min", label: "Setup", desc: "Express project init" },
          { time: "1.5 hr", label: "Routing", desc: "Routes define karo" },
          { time: "1.5 hr", label: "API", desc: "CRUD endpoints banao" },
          { time: "30 min", label: "Test", desc: "Postman testing" }
        ],
        doList: [
          "Express app setup karo",
          "Routes define karo",
          "Middleware use karo",
          "Error handling implement karo"
        ],
        avoidList: [
          "No error handling",
          "Mixing concerns (MVC ignore karna)",
          "No validation",
          "Hardcoded values"
        ],
        selfCheckQuestions: [
          "Kya Express app start kar sakta hoon?",
          "Kya REST API design kar sakta hoon?",
          "Kya MVC pattern follow kar sakta hoon?"
        ]
      },
      {
        number: 3,
        title: "Database Integration",
        subtitle: "MongoDB + Mongoose Basics",
        topics: [
          "MongoDB Atlas setup",
          "Mongoose ODM",
          "Schema definition",
          "Models",
          "CRUD with Mongoose",
          "Validation",
          "Relationships",
          "Indexing basics"
        ],
        project: {
          title: "Notes API with MongoDB",
          description: "Integrate MongoDB, define schemas, CRUD operations"
        },
        resources: [
          { title: "MongoDB University — Free Courses", url: "https://mongodb.com/learn" },
          { title: "Chai aur Code — MongoDB + Mongoose (Hindi)", url: "#" },
          { title: "Mongoose.js Official Docs", url: "https://mongoosejs.com" }
        ],
        tip: "Database mein bina proper validation ke kuch mat daalo. Data integrity zaroori hai.",
        schedule: [
          { time: "30 min", label: "Setup", desc: "MongoDB Atlas account" },
          { time: "1.5 hr", label: "Schema", desc: "Mongoose models define" },
          { time: "1.5 hr", label: "CRUD", desc: "Database operations" },
          { time: "30 min", label: "Test", desc: "API with DB test" }
        ],
        doList: [
          "MongoDB setup karo",
          "Mongoose connection establish karo",
          "Schema define karo",
          "CRUD operations implement karo"
        ],
        avoidList: [
          "Validation skip karna",
          "Plain text passwords save karna",
          "No error handling",
          "Inefficient queries"
        ],
        selfCheckQuestions: [
          "Kya MongoDB connection kar sakta hoon?",
          "Kya Mongoose schema banaa sakta hoon?",
          "Kya database se CRUD kar sakta hoon?"
        ]
      },
      {
        number: 4,
        title: "Authentication & Advanced",
        subtitle: "JWT, Security, Deployment",
        topics: [
          "User registration",
          "Password hashing (bcrypt)",
          "JWT authentication",
          "Protected routes",
          "Refresh tokens",
          "CORS handling",
          "Rate limiting",
          "Deployment (Render/Railway)"
        ],
        project: {
          title: "Secure Notes API",
          description: "User auth with JWT, protected endpoints, password hashing"
        },
        resources: [
          { title: "Traversy Media — JWT Tutorial (YouTube)", url: "#" },
          { title: "Chai aur Code — Auth Series (Hindi)", url: "#" },
          { title: "Render.com & Railway Docs", url: "#" }
        ],
        tip: "Password kabhi plain text mein save mat karo. bcrypt mandatory hai. JWT expiry handle karo.",
        schedule: [
          { time: "30 min", label: "Auth", desc: "JWT concept samjho" },
          { time: "1.5 hr", label: "Implement", desc: "Login/Register endpoints" },
          { time: "1.5 hr", label: "Secure", desc: "Protected routes setup" },
          { time: "30 min", label: "Deploy", desc: "Render pe push karo" }
        ],
        doList: [
          "bcrypt use karo",
          "JWT implement karo",
          "Protected routes banao",
          "CORS configure karo"
        ],
        avoidList: [
          "Plain text passwords",
          "Expired tokens ignore karna",
          "No CORS handling",
          "Sensitive data in JWT"
        ],
        selfCheckQuestions: [
          "Kya bcrypt se password hash kar sakta hoon?",
          "Kya JWT implement kar sakta hoon?",
          "Kya protected routes banaa sakta hoon?"
        ]
      }
    ]
  },
  month5: {
    number: 5,
    title: "Full Integration",
    subtitle: "React + Node + Database",
    color: "#DC2626",
    duration: "4 weeks",
    weeks: [
      {
        number: 1,
        title: "CORS & API Integration",
        subtitle: "Connecting frontend to backend",
        topics: [
          "CORS basics",
          "API calls from React",
          "Error handling",
          "Loading states",
          "Token management",
          "Axios vs Fetch",
          "Request interceptors",
          "Response handling"
        ],
        project: {
          title: "Connect React frontend to Notes API",
          description: "CRUD operations from React with proper error handling"
        },
        resources: [
          { title: "MDN — CORS Explained", url: "https://mdn.org" },
          { title: "Chai aur Code — Frontend Backend Integration (Hindi)", url: "#" },
          { title: "Axios Documentation", url: "https://axios-http.com" }
        ],
        tip: "CORS errors common hain. Backend server CORS properly configure karo.",
        schedule: [
          { time: "30 min", label: "CORS", desc: "CORS concept samjho" },
          { time: "1.5 hr", label: "API", desc: "React se API calls" },
          { time: "1.5 hr", label: "Error", desc: "Error handling implement" },
          { time: "30 min", label: "Test", desc: "Full flow test karo" }
        ],
        doList: [
          "CORS configure karo",
          "Fetch API properly use karo",
          "Error states handle karo",
          "Token management setup karo"
        ],
        avoidList: [
          "CORS star (*) everywhere",
          "No error boundaries",
          "Hardcoded URLs",
          "Token exposing in logs"
        ],
        selfCheckQuestions: [
          "Kya CORS samajhta hoon?",
          "Kya React se API calls kar sakta hoon?",
          "Kya error handling implement kar sakta hoon?"
        ]
      },
      {
        number: 2,
        title: "State Management",
        subtitle: "Context, Redux intro",
        topics: [
          "Context API patterns",
          "useReducer hook",
          "Custom hooks for state",
          "Global state structure",
          "Redux basics (optional)",
          "Redux Toolkit intro",
          "Middleware patterns",
          "DevTools"
        ],
        project: {
          title: "Notes app with global state",
          description: "Context API for auth, notes, UI state management"
        },
        resources: [
          { title: "react.dev — useReducer Hook", url: "https://react.dev" },
          { title: "Chai aur Code — State Management (Hindi)", url: "#" },
          { title: "Redux Toolkit Docs", url: "https://redux-toolkit.js.org" }
        ],
        tip: "Context + useReducer sufficient ho sakte hain. Redux sirf complex apps mein chahiye.",
        schedule: [
          { time: "30 min", label: "Concept", desc: "useReducer samjho" },
          { time: "1.5 hr", label: "Context", desc: "Global state structure" },
          { time: "1.5 hr", label: "Build", desc: "Complete state setup" },
          { time: "30 min", label: "Debug", desc: "Redux DevTools" }
        ],
        doList: [
          "useReducer samjho",
          "Context properly organize karo",
          "Custom hooks create karo",
          "Global state logic separate rakho"
        ],
        avoidList: [
          "Redux without reason",
          "Over-complex state structure",
          "Prop drilling remaining",
          "Not memoizing context"
        ],
        selfCheckQuestions: [
          "Kya useReducer use kar sakta hoon?",
          "Kya Context API properly organize kar sakta hoon?",
          "Kya custom hooks banaa sakta hoon?"
        ]
      },
      {
        number: 3,
        title: "File Upload & Advanced Features",
        subtitle: "Multer, Image handling, Search/Filter",
        topics: [
          "File upload (Multer)",
          "File validation",
          "Image compression",
          "Avatar/Profile pictures",
          "Search functionality",
          "Filtering & pagination",
          "Sorting",
          "CSV export"
        ],
        project: {
          title: "Notes app with file upload",
          description: "Upload attachments, profile pictures, export notes as CSV"
        },
        resources: [
          { title: "Multer Middleware Docs", url: "https://github.com/expressjs/multer" },
          { title: "Chai aur Code — File Upload (Hindi)", url: "#" },
          { title: "Sharp Library — Image Processing", url: "https://sharp.pixelplumbing.com" }
        ],
        tip: "File upload security zaroori hai. Validate aur sanitize karo harmesha.",
        schedule: [
          { time: "30 min", label: "Setup", desc: "Multer configuration" },
          { time: "1.5 hr", label: "Upload", desc: "File upload implement" },
          { time: "1.5 hr", label: "Search", desc: "Search aur filter" },
          { time: "30 min", label: "Export", desc: "CSV export feature" }
        ],
        doList: [
          "Multer setup karo",
          "File validation implement karo",
          "Image compression use karo",
          "Search properly implement karo"
        ],
        avoidList: [
          "No file validation",
          "Storing files locally (use cloud)",
          "Exposing file paths",
          "No security checks"
        ],
        selfCheckQuestions: [
          "Kya file upload implement kar sakta hoon?",
          "Kya search functionality banaa sakta hoon?",
          "Kya image resize kar sakta hoon?"
        ]
      },
      {
        number: 4,
        title: "Polish & Deployment",
        subtitle: "Final optimization, Testing, Deploy",
        topics: [
          "Unit testing (Jest)",
          "Integration testing",
          "Performance optimization",
          "SEO basics",
          "Accessibility (a11y)",
          "Environment config",
          "CI/CD basics",
          "Monitoring & logging"
        ],
        project: {
          title: "Polish complete Notes app",
          description: "Add tests, optimize, deploy to production"
        },
        resources: [
          { title: "Jest Documentation", url: "https://jestjs.io" },
          { title: "Chai aur Code — Testing (Hindi)", url: "#" },
          { title: "Vercel + Render Deployment Guides", url: "#" }
        ],
        tip: "Deployment pehle local testing zaroor karo. Production bugs expensive hote hain.",
        schedule: [
          { time: "1 hr", label: "Test", desc: "Unit tests likho" },
          { time: "1 hr", label: "Optimize", desc: "Performance improve karo" },
          { time: "1.5 hr", label: "Deploy", desc: "Vercel + Render setup" },
          { time: "30 min", label: "Monitor", desc: "Logging setup karo" }
        ],
        doList: [
          "Tests likho",
          "Performance profile karo",
          "Both frontends + backend deploy karo",
          "Logging implement karo"
        ],
        avoidList: [
          "No testing",
          "Deploying without testing",
          "No error logging",
          "Secrets in code"
        ],
        selfCheckQuestions: [
          "Kya unit tests likha sakta hoon?",
          "Kya app Vercel + Render pe deploy kar sakta hoon?",
          "Kya performance optimize kar sakta hoon?"
        ]
      }
    ]
  },
  month6: {
    number: 6,
    title: "Real-Time & Polish",
    subtitle: "WebSockets, Performance, Interview Prep",
    color: "#DB2777",
    duration: "4 weeks",
    weeks: [
      {
        number: 1,
        title: "WebSockets & Real-Time",
        subtitle: "Socket.io, Live features",
        topics: [
          "WebSocket basics",
          "Socket.io library",
          "Emit & listen",
          "Namespaces & rooms",
          "Real-time notifications",
          "Chat implementation",
          "Connection handling",
          "Fallbacks"
        ],
        project: {
          title: "Real-time notification system",
          description: "Socket.io for live notifications in Notes app"
        },
        resources: [
          { title: "Socket.io Documentation", url: "https://socket.io" },
          { title: "Chai aur Code — WebSockets (Hindi)", url: "#" },
          { title: "Traversy Media — Socket.io Tutorial", url: "#" }
        ],
        tip: "Real-time features ka overhead hota hai. Sirf zaroori jagah use karo.",
        schedule: [
          { time: "30 min", label: "Concept", desc: "WebSocket basics" },
          { time: "1.5 hr", label: "Setup", desc: "Socket.io integration" },
          { time: "1.5 hr", label: "Feature", desc: "Real-time notifications" },
          { time: "30 min", label: "Test", desc: "Multiple clients test" }
        ],
        doList: [
          "Socket.io setup karo",
          "Events emit aur listen karo",
          "Rooms use karo",
          "Connection errors handle karo"
        ],
        avoidList: [
          "Over-using WebSockets",
          "No error handling",
          "Memory leaks from listeners",
          "Not testing with multiple clients"
        ],
        selfCheckQuestions: [
          "Kya Socket.io use kar sakta hoon?",
          "Kya real-time notifications implement kar sakta hoon?",
          "Kya events properly manage kar sakta hoon?"
        ]
      },
      {
        number: 2,
        title: "Performance & Caching",
        subtitle: "Redis, CDN, Database optimization",
        topics: [
          "Redis basics",
          "Caching strategies",
          "Session storage with Redis",
          "CDN integration",
          "Query optimization",
          "Database indexing",
          "Rate limiting",
          "Monitoring performance"
        ],
        project: {
          title: "Add caching & optimization to Notes app",
          description: "Redis for sessions, query caching, CDN for assets"
        },
        resources: [
          { title: "Redis Documentation", url: "https://redis.io" },
          { title: "Chai aur Code — Caching (Hindi)", url: "#" },
          { title: "Database Indexing Best Practices", url: "#" }
        ],
        tip: "Zaroori optimization karo. Production mein slow app users lose karte hain.",
        schedule: [
          { time: "30 min", label: "Cache", desc: "Redis setup" },
          { time: "1.5 hr", label: "Strategy", desc: "Caching pattern implement" },
          { time: "1.5 hr", label: "Query", desc: "Database optimize karo" },
          { time: "30 min", label: "Monitor", desc: "Performance tracking" }
        ],
        doList: [
          "Redis use karo",
          "Caching implement karo",
          "Database queries optimize karo",
          "Performance metrics track karo"
        ],
        avoidList: [
          "Over-caching",
          "Stale cache issues",
          "N+1 query problems",
          "Not monitoring performance"
        ],
        selfCheckQuestions: [
          "Kya Redis use kar sakta hoon?",
          "Kya caching strategy implement kar sakta hoon?",
          "Kya database queries optimize kar sakta hoon?"
        ]
      },
      {
        number: 3,
        title: "Security & DevOps",
        subtitle: "Best practices, CI/CD, Monitoring",
        topics: [
          "Security headers",
          "XSS prevention",
          "CSRF protection",
          "SQL injection prevention",
          "Environment secrets",
          "GitHub Actions CI/CD",
          "Docker basics",
          "Error tracking & logging"
        ],
        project: {
          title: "Secure & deploy Notes app with CI/CD",
          description: "GitHub Actions automation, Docker containerization"
        },
        resources: [
          { title: "OWASP Top 10 Security", url: "https://owasp.org/www-project-top-ten/" },
          { title: "GitHub Actions Documentation", url: "https://github.com/features/actions" },
          { title: "Docker Getting Started", url: "https://docker.com" }
        ],
        tip: "Security nahi to sab waste hai. Har security issue seriously lo.",
        schedule: [
          { time: "30 min", label: "Security", desc: "Security headers setup" },
          { time: "1.5 hr", label: "CI/CD", desc: "GitHub Actions workflows" },
          { time: "1.5 hr", label: "Docker", desc: "Containerize karo" },
          { time: "30 min", label: "Monitor", desc: "Error tracking setup" }
        ],
        doList: [
          "Security headers configure karo",
          "GitHub Actions setup karo",
          "Docker use karo",
          "Error logging implement karo"
        ],
        avoidList: [
          "Secrets in code",
          "No security headers",
          "Outdated dependencies",
          "No monitoring"
        ],
        selfCheckQuestions: [
          "Kya security best practices follow kar sakta hoon?",
          "Kya GitHub Actions setup kar sakta hoon?",
          "Kya Docker use kar sakta hoon?"
        ]
      },
      {
        number: 4,
        title: "Interview Prep & Portfolio",
        subtitle: "System design, algorithms, job-ready",
        topics: [
          "System design basics",
          "Data structures & algorithms",
          "LeetCode problems",
          "Behavioral interviews",
          "Portfolio website",
          "Resume optimization",
          "LinkedIn optimization",
          "Interview mock sessions"
        ],
        project: {
          title: "Complete polished portfolio website",
          description: "Showcase Notes app and other projects with great presentation"
        },
        resources: [
          { title: "LeetCode Practice Problems", url: "https://leetcode.com" },
          { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
          { title: "Behavioral Interview Guide", url: "#" }
        ],
        tip: "Portfolio + GitHub zaroori hain. Companies aapko dekho ke judge karenge.",
        schedule: [
          { time: "1 hr", label: "DSA", desc: "LeetCode problems solve" },
          { time: "1.5 hr", label: "Design", desc: "System design cases" },
          { time: "1 hr", label: "Portfolio", desc: "Website optimize" },
          { time: "30 min", label: "Mock", desc: "Mock interview" }
        ],
        doList: [
          "LeetCode daily practice karo",
          "System design problems samjho",
          "Portfolio polished rakho",
          "Mock interviews lena"
        ],
        avoidList: [
          "Portfolio ignore karna",
          "GitHub profile empty rakha",
          "Resume details nahi likhe",
          "DSA practice nahi karna"
        ],
        selfCheckQuestions: [
          "Kya DSA problems solve kar sakta hoon?",
          "Kya system design discuss kar sakta hoon?",
          "Kya portfolio impressive hai?"
        ]
      }
    ]
  }
};

export default FULLSTACK_ROADMAP;
