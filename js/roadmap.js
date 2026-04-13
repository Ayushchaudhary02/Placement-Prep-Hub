(function() {

const ROADMAP_DATA = [
  {
    color: '#3B82F6',
    title: 'HTML + CSS + Git Basics',
    weeks: [
      {
        title: 'Week 1 — HTML Foundations',
        subtitle: 'Structure of the web',
        topics: ['HTML boilerplate','Headings h1–h6','p / div / span','Lists ul/ol/li','Links & images','Forms & inputs','Semantic tags','VS Code setup','Live Server extension'],
        project: 'Personal bio page — naam, photo, about me, contact form (no CSS yet)',
        resources: ['CodeWithHarry — HTML full course (YouTube, Hindi)','freeCodeCamp — Responsive Web Design first 20 lessons','MDN HTML reference'],
        tip: 'Pehle din sirf structure banao. HTML = skeleton, CSS = kapde. Ek bhi CSS line mat likho is week mein.'
      },
      {
        title: 'Week 2 — CSS Basics',
        subtitle: 'Colors, fonts, box model',
        topics: ['Selectors & specificity','Colors & backgrounds','Typography','Box model (margin/padding/border)','Width & height','Display block/inline','CSS variables','Google Fonts'],
        project: 'Week 1 ki bio page ko style karo — same HTML, sirf CSS add karo',
        resources: ['Apna College — CSS playlist (YouTube, Hindi)','CSS-Tricks — Complete Guide to Flexbox','Kevin Powell — CSS for beginners (YouTube)'],
        tip: 'Box model is the most important concept. DevTools F12 mein box model visualizer zaroor dekho.'
      },
      {
        title: 'Week 3 — Flexbox + Grid',
        subtitle: 'Layout master',
        topics: ['display: flex','justify-content','align-items','flex-wrap','display: grid','grid-template-columns','gap','grid-area','Navbar layout','Card grid'],
        project: 'Netflix/Zomato-jaisi card grid — navbar + hero section + 6 cards',
        resources: ['Flexbox Froggy — flexboxfroggy.com (game, must play)','Grid Garden — cssgridgarden.com (game, must play)','Kevin Powell — Flexbox vs Grid (YouTube)'],
        tip: 'Pehle Flexbox Froggy complete karo (1 hour), phir Grid Garden. Games ke baad concepts 10x zyada yaad rahenge.'
      },
      {
        title: 'Week 4 — Responsive + Git',
        subtitle: 'Deploy your first site',
        topics: ['Media queries','Mobile-first approach','Viewport meta tag','CSS transitions','Hover effects','Git init/add/commit','GitHub repo','GitHub Pages deploy'],
        project: 'Portfolio website — Home, About, Projects, Contact. GitHub Pages pe live karo.',
        resources: ['freeCodeCamp — Responsive Web Design cert (finish it)','Traversy Media — Git & GitHub crash course (YouTube)','GitHub Pages docs'],
        tip: 'Mobile-first likhna start karo. GitHub pe daily commit karo — ye habit Month 2 se bahut kaam aayegi.'
      }
    ],
    dos: ['Rozana ek chhota project banao','DevTools mein inspect karo','MDN docs padhna seekho','Daily GitHub commit streak','Real websites copy ki koshish karo'],
    avoids: ['Multiple courses saath mein','Bootstrap/Tailwind abhi nahi','Code copy-paste karna','JavaScript ki taraf jump mat karo','Perfect design ki tension mat lo'],
    checks: ['Kya bina dekhe HTML boilerplate likh sakta hoon?','Kya box model samajhta hoon aur DevTools mein dekh sakta hoon?','Kya sirf Flexbox se navbar bana sakta hoon?','Kya mera portfolio GitHub Pages pe live hai?']
  },
  {
    color: '#7C3AED',
    title: 'JavaScript — Core to Advanced',
    weeks: [
      { title:'Week 1 — JS Basics', subtitle:'Variables, functions, DOM',
        topics:['Variables let/const','Data types','Functions','Loops','Arrays','Objects','DOM selection','DOM manipulation'],
        project:'Interactive To-Do list with add/delete/complete',
        resources:['javascript.info — best free resource','Namaste JavaScript — Akshay Saini (Hindi)','Chai aur Code — Hitesh Choudhary (Hindi)'],
        tip:'javascript.info is the best JS resource. Read it like a book.' },
      { title:'Week 2 — Events & ES6+', subtitle:'Modern JavaScript',
        topics:['Event listeners','Event delegation','Arrow functions','Spread/rest','Destructuring','Template literals','Modules'],
        project:'Quiz App with score tracking',
        resources:['javascript.info — Modern JS','Namaste JavaScript series continues','MDN JavaScript Reference'],
        tip:'ES6+ features har jagah use hoti hain React mein. Inhe solid karo.' },
      { title:'Week 3 — Async JavaScript', subtitle:'Promises, async/await, Fetch',
        topics:['Callbacks','Promises','async/await','Fetch API','Error handling','JSON','localStorage'],
        project:'Weather App using OpenWeather API',
        resources:['Namaste JavaScript — Event Loop episode (MUST WATCH)','javascript.info — Promises','Traversy Media — Fetch API'],
        tip:'Event Loop wala episode Namaste JavaScript ka ek baar zaroor dekho — visualize karke dikhate hain.' },
      { title:'Week 4 — OOP & Closures', subtitle:'Advanced concepts',
        topics:['Closures','Hoisting','this keyword','Prototypes','Classes','Scope chain','IIFE'],
        project:'Build a mini library management system using OOP',
        resources:['Namaste JavaScript — Closures','javascript.info — OOP','You Don\'t Know JS — Kyle Simpson'],
        tip:'Closures aur this keyword interview mein sabse zyada pooche jaate hain. Inhe deeply samjho.' }
    ],
    dos:['Rozana console mein experiment karo','Namaste JS series follow karo','Har concept ka chhota project banao','DevTools debugger use karo'],
    avoids:['jQuery mat seekho','Framework pe jump mat karo abhi','Sirf videos dekhna','Theory padh ke code nahi karna'],
    checks:['Kya closures samajh aata hai?','Kya async/await se API call kar sakta hoon?','Kya DOM manipulation confident hai?','Kya event loop explain kar sakta hoon?']
  },
  {
    color: '#059669',
    title: 'React.js — Frontend Framework',
    weeks: [
      { title:'Week 1 — React Basics', subtitle:'JSX, Components, Props',
        topics:['JSX','Functional components','Props','Children','Conditional rendering','Lists & keys','Fragments'],
        project:'Static portfolio in React with components',
        resources:['react.dev official docs (best)','Chai aur Code React playlist (Hindi)','Scrimba React course (free)'],
        tip:'react.dev ka Tic-tac-toe tutorial pehle din hi karo — sab kuch clear ho jaata hai.' },
      { title:'Week 2 — State & Hooks', subtitle:'useState, useEffect',
        topics:['useState','useEffect','Event handling','Forms in React','Controlled inputs','Side effects','Cleanup'],
        project:'Todo App in React with filters',
        resources:['react.dev — Hooks reference','Chai aur Code continues','MDN React Docs'],
        tip:'useState aur useEffect 80% React apps mein use hote hain. Inhe solid karo pehle.' },
      { title:'Week 3 — Router & Context', subtitle:'Navigation & State Management',
        topics:['React Router v6','Route params','useNavigate','useContext','Context Provider','Custom Hooks'],
        project:'Multi-page Blog App with routing',
        resources:['React Router docs','react.dev — Context','Chai aur Code Router series'],
        tip:'Context se global state manage karo — Redux abhi mat seekho.' },
      { title:'Week 4 — API & Tailwind', subtitle:'Real data + styling',
        topics:['Axios / Fetch in React','Loading states','Error states','Tailwind CSS setup','Utility classes','Responsive in Tailwind'],
        project:'Movie Search App using TMDB API with Tailwind UI',
        resources:['TMDB API docs','Tailwind CSS docs — tailwindcss.com','Traversy Media — React + Tailwind'],
        tip:'TMDB API free hai — real data se kaam karna confidence deta hai.' }
    ],
    dos:['Component-first sochna seekho','react.dev docs padhte raho','Props vs State clearly samjho','Small reusable components banao'],
    avoids:['Class components mat seekho','Redux abhi mat chhoona','Next.js pe jump mat karo','Over-engineering mat karo'],
    checks:['Kya useState/useEffect confident hai?','Kya React Router se multi-page app bana sakta hoon?','Kya API call React mein kar sakta hoon?','Kya ek full React app deployed hai?']
  },
  {
    color: '#D97706',
    title: 'Node.js + Express — Backend',
    weeks: [
      { title:'Week 1 — Node.js Basics', subtitle:'Server-side JavaScript',
        topics:['What is Node.js','npm & package.json','File system module','HTTP module','Path module','Environment variables','nodemon'],
        project:'Simple HTTP server without Express',
        resources:['Traversy Media — Node.js crash course','The Odin Project — NodeJS path','Chai aur Code Backend series (Hindi)'],
        tip:'Pehle bina Express ke Node HTTP module se server banao — phir Express ki value samajh aayegi.' },
      { title:'Week 2 — Express.js', subtitle:'REST API design',
        topics:['Express setup','Routes','Request/Response','Middleware','Error handling','Static files','express.Router'],
        project:'REST API for Notes App — full CRUD',
        resources:['expressjs.com docs','Traversy Media — Express crash course','Chai aur Code Express series'],
        tip:'MVC pattern follow karo from day 1 — routes, controllers, models alag folders mein.' },
      { title:'Week 3 — Middleware & Security', subtitle:'Production patterns',
        topics:['Custom middleware','CORS','Helmet.js','Rate limiting','Input validation','Morgan logger','dotenv'],
        project:'Secure REST API with validation and error handling',
        resources:['Express security best practices','CORS documentation','helmet.js docs'],
        tip:'Security basics abhi se lagao — production mein baad mein bahut kaam aayega.' },
      { title:'Week 4 — Testing with Postman', subtitle:'API testing & documentation',
        topics:['Postman collections','Thunder Client','API documentation','Status codes','RESTful conventions','Pagination'],
        project:'Fully documented Notes API with Postman collection',
        resources:['Postman docs — learning center','REST API design guide','HTTP status codes reference'],
        tip:'Postman collection banao har API ke liye — ye professional practice hai.' }
    ],
    dos:['MVC pattern follow karo','Har route Postman mein test karo','dotenv use karo secrets ke liye','Proper status codes use karo'],
    avoids:['Sab kuch server.js mein mat likho','.env file GitHub pe push mat karo','Error handling ignore mat karo','Database abhi mat laao Week 1 mein'],
    checks:['Kya Express REST API bana sakta hoon?','Kya middleware samajhta hoon?','Kya MVC structure follow kar raha hoon?','Kya Postman se API test kar sakta hoon?']
  },
  {
    color: '#DC2626',
    title: 'Database + Authentication',
    weeks: [
      { title:'Week 1 — MongoDB Basics', subtitle:'NoSQL database',
        topics:['What is MongoDB','Collections & Documents','CRUD operations','MongoDB Atlas','Mongoose ODM','Schema & Models','Validation'],
        project:'Connect Notes API to MongoDB — full CRUD with DB',
        resources:['MongoDB University free courses','Chai aur Code — Backend with MongoDB','Mongoose docs'],
        tip:'MongoDB Atlas free tier se shuru karo — local setup ki tension nahi.' },
      { title:'Week 2 — SQL Basics', subtitle:'Relational databases',
        topics:['SQL vs NoSQL','PostgreSQL basics','Tables & relations','SELECT/INSERT/UPDATE/DELETE','JOINs','Indexes','When to use SQL'],
        project:'Simple user table with CRUD in PostgreSQL',
        resources:['SQLZoo.net — free practice','PostgreSQL docs','Traversy Media — SQL crash course'],
        tip:'SQL interview mein zaroor poochha jaata hai. Basic JOINs solid karo.' },
      { title:'Week 3 — JWT Authentication', subtitle:'Secure login system',
        topics:['What is JWT','bcrypt password hashing','Register/Login flow','JWT sign & verify','Protected routes','Middleware auth','Refresh tokens'],
        project:'Complete auth system — register, login, logout, protected routes',
        resources:['Traversy Media — JWT Auth tutorial','jwt.io — debugger tool','Chai aur Code Auth series'],
        tip:'Password KABHI plain text mein save mat karo. bcrypt use karo always.' },
      { title:'Week 4 — File Uploads & Relations', subtitle:'Real-world patterns',
        topics:['Multer file uploads','Cloudinary integration','Data relationships','Population in Mongoose','Pagination','Search & filter'],
        project:'Full API with auth + file upload + search + pagination',
        resources:['Multer docs','Cloudinary Node SDK docs','Mongoose populate reference'],
        tip:'Cloudinary free tier se file storage karo — server pe mat rakhna files.' }
    ],
    dos:['bcrypt use karo passwords ke liye','JWT secret strong rakhna','Input sanitize karo always','Indexes add karo frequently queried fields pe'],
    avoids:['Plain text passwords kabhi nahi','JWT secret .env mein rakhna','Sensitive data response mein mat bhejo','Error messages mein DB details mat dikhao'],
    checks:['Kya MongoDB se CRUD kar sakta hoon?','Kya JWT auth system bana sakta hoon?','Kya basic SQL JOINs aate hain?','Kya file upload working hai?']
  },
  {
    color: '#DB2777',
    title: 'Full Project + Deployment',
    weeks: [
      { title:'Week 1 — Connect Frontend + Backend', subtitle:'Full-stack integration',
        topics:['CORS setup','Proxy configuration','Axios with JWT','Protected React routes','Auth context in React','Loading/Error states','Token storage'],
        project:'Connect your React frontend to Node/Express backend with auth',
        resources:['CORS npm docs','Traversy Media — MERN Stack tutorial','Chai aur Code Full Stack series'],
        tip:'CORS errors aayenge zaroor — samajh ke fix karo, blindly mat copy karo Stack Overflow se.' },
      { title:'Week 2 — Deployment', subtitle:'Take it live',
        topics:['Vercel for React','Render.com for Node','MongoDB Atlas setup','Environment variables in prod','Build optimization','HTTPS','Domain basics'],
        project:'Deploy your full-stack app — live URL with custom domain',
        resources:['Vercel docs','Render.com docs','MongoDB Atlas setup guide'],
        tip:'Environment variables production mein platform ke dashboard mein set karo — .env file kabhi deploy mat karo.' },
      { title:'Week 3 — Polish & Portfolio', subtitle:'Make it presentable',
        topics:['README writing','GitHub profile optimization','Screenshots & demo GIFs','Code cleanup','Comments','Error boundaries','Performance basics'],
        project:'3 polished GitHub repos with good READMEs and deployed links',
        resources:['GitHub README best practices','Shields.io — badges ke liye','Make a README guide'],
        tip:'Recruiter pehle README dekhta hai. Ek achha README = project ka first impression.' },
      { title:'Week 4 — Final Project', subtitle:'Capstone build',
        topics:['System design basics','Feature planning','Git workflow','Code review','Testing basics','Socket.io basics','Razorpay integration'],
        project:'Choose one: Full-stack Blog (MERN) OR E-commerce with Razorpay OR Real-time Chat with Socket.io',
        resources:['Socket.io docs','Razorpay docs','Traversy Media — MERN blog tutorial'],
        tip:'Ek polished project > 5 half-finished projects. Deployed link + GitHub repo dono zaroori hain.' }
    ],
    dos:['Ek project achhe se polish karo','README mein screenshots daalo','Deployed URL share karo','LinkedIn pe project post karo'],
    avoids:['Half-finished projects mat chhodo','Bina README ke repo mat rakho','Sirf local pe mat rakhna projects','Portfolio update karna bhool mat jaana'],
    checks:['Kya MERN stack app live hai?','Kya 3 GitHub repos presentable hain?','Kya LinkedIn pe projects hain?','Kya resume mein deployed links hain?']
  }
];

function injectStyles() {
  if (document.getElementById('rm-styles')) return;
  const s = document.createElement('style');
  s.id = 'rm-styles';
  s.textContent = `
    #roadmap-container { margin-top: 32px; }
    .rm-wrap { background: #fff; border-radius: 20px; box-shadow: 0 8px 48px rgba(108,99,255,0.13); overflow: hidden; animation: rmIn 0.5s ease forwards; }
    @keyframes rmIn { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
    .rm-hero { background: linear-gradient(135deg,#6C63FF 0%,#3B82F6 50%,#8B5CF6 100%); padding: 36px 32px; position: relative; overflow: hidden; }
    .rm-hero::before { content:''; position: absolute; top: -50%; right: -50%; width: 100%; height: 100%; background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 30px 30px; pointer-events: none; z-index: 0; }
    .rm-hero h2 { font-size:26px; font-weight:700; color:#fff; margin:0 0 6px; position: relative; z-index: 2; }
    .rm-hero p { font-size:14px; color:rgba(255,255,255,0.85); margin:0 0 18px; position: relative; z-index: 2; }
    .rm-stats { display:flex; gap:10px; flex-wrap:wrap; position: relative; z-index: 2; }
    .rm-stat { background:rgba(255,255,255,0.18); border:1px solid rgba(255,255,255,0.3); border-radius:20px; padding:6px 16px; font-size:12px; font-weight:600; color:#fff; }
    .rm-dots { display:flex; background:#f7f7fe; padding:14px 24px; border-bottom:1px solid #eee; gap:0; justify-content:space-around; }
    .rm-dot-item { flex:1; display:flex; flex-direction:column; align-items:center; gap:4px; cursor:pointer; }
    .rm-dot { width:13px; height:13px; border-radius:50%; border:2px solid; background:transparent; transition:all 0.3s; }
    .rm-dot.active { background:currentColor; box-shadow:0 0 0 4px rgba(108,99,255,0.2); }
    .rm-dot-lbl { font-size:10px; font-weight:600; }
    .rm-month { border-left:4px solid var(--mc); border-bottom:1px solid #f0f0f0; margin:0 24px 12px; border-radius:8px; overflow:hidden; transition:all 0.3s ease; }
    .rm-month:last-child { margin-bottom:28px; }
    .rm-month.open { box-shadow:0 6px 24px rgba(0,0,0,0.08); }
    .rm-hdr { display:flex; align-items:center; gap:14px; padding:18px 20px; cursor:pointer; transition:background 0.2s; user-select:none; }
    .rm-hdr:hover { background:rgba(108,99,255,0.04); }
    .rm-num { width:32px; height:32px; border-radius:50%; background:var(--mc); color:white; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:14px; flex-shrink:0; }
    .rm-tg { flex:1; }
    .rm-lbl { font-size:11px; font-weight:600; color:var(--mc); text-transform:uppercase; letter-spacing:0.05em; }
    .rm-ttl { font-size:16px; font-weight:700; color:#1a1a2e; margin:2px 0 0; }
    .rm-meta { display:flex; align-items:center; gap:10px; }
    .rm-badge { background:#f0f0f0; border-radius:12px; padding:4px 12px; font-size:12px; color:#555; }
    .rm-chev { font-size:11px; color:#aaa; transition:transform 0.3s; }
    .rm-month.open .rm-chev { transform:rotate(180deg); }
    .rm-body { max-height:0; overflow:hidden; transition:max-height 0.45s ease; padding:0 20px; }
    .rm-month.open .rm-body { max-height:4500px; padding:8px 20px 28px; }
    .rm-tabs { display:flex; gap:8px; margin:16px 0 14px; flex-wrap:wrap; }
    .rm-tab { padding:6px 16px; border-radius:20px; font-size:13px; font-weight:500; border:1.5px solid var(--mc); color:var(--mc); background:transparent; cursor:pointer; transition:all 0.2s; }
    .rm-tab:hover { background:rgba(108,99,255,0.06); }
    .rm-tab.active { background:var(--mc); color:white; }
    .rm-panel { display:none; }
    .rm-panel.active { display:block; animation:rmFade 0.25s ease; }
    @keyframes rmFade { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
    .rm-w-ttl { font-size:15px; font-weight:700; color:#1a1a2e; margin:0 0 3px; }
    .rm-w-sub { font-size:13px; color:#777; margin:0 0 12px; }
    .rm-topics { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px; }
    .rm-pill { padding:4px 11px; border-radius:20px; font-size:11px; font-weight:500; background:rgba(108,99,255,0.08); color:rgba(108,99,255,0.8); border:1px solid rgba(108,99,255,0.15); }
    .rm-proj { border-left:3px solid var(--mc); background:rgba(108,99,255,0.04); border-radius:0 8px 8px 0; padding:10px 14px; margin-bottom:14px; }
    .rm-proj-l { font-size:11px; font-weight:700; color:var(--mc); text-transform:uppercase; margin-bottom:4px; }
    .rm-proj-t { font-size:13px; color:#333; line-height:1.5; }
    .rm-sec-l { font-size:11px; font-weight:700; color:#555; text-transform:uppercase; letter-spacing:0.04em; margin:14px 0 8px; }
    .rm-res { list-style:none; padding:0; margin:0 0 14px; }
    .rm-res li { display:flex; align-items:center; gap:10px; padding:7px 0; border-bottom:1px solid #f4f4f4; font-size:13px; color:#333; }
    .rm-res li:last-child { border-bottom:none; }
    .rm-dot-sm { width:8px; height:8px; border-radius:50%; background:var(--mc); flex-shrink:0; }
    .rm-tip { background:#FFFBEB; border-left:3px solid #F59E0B; border-radius:0 8px 8px 0; padding:10px 14px; margin-bottom:16px; font-size:13px; color:#92400E; line-height:1.5; }
    .rm-sched { display:flex; align-items:stretch; background:#f8f8ff; border-radius:12px; padding:0; margin-bottom:16px; overflow-x:auto; gap:0; border:1px solid #e5e7eb; }
    .rm-sched-b { flex:1; text-align:center; min-width:70px; padding:12px 10px; border-right:1px solid #e5e7eb; display:flex; flex-direction:column; justify-content:center; }
    .rm-sched-b:last-child { border-right:none; }
    .rm-sched-t { font-size:13px; font-weight:700; color:var(--mc); }
    .rm-sched-l { font-size:12px; font-weight:600; color:#333; margin:2px 0; }
    .rm-sched-d { font-size:10px; color:#999; line-height:1.3; }
    .rm-da { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px; }
    .rm-do, .rm-av { border-radius:10px; padding:12px 14px; }
    .rm-do { background:#F0FDF4; border:0.5px solid #BBF7D0; }
    .rm-av { background:#FEF2F2; border:0.5px solid #FECACA; }
    .rm-do-t { font-size:12px; font-weight:700; color:#16A34A; margin-bottom:8px; }
    .rm-av-t { font-size:12px; font-weight:700; color:#DC2626; margin-bottom:8px; }
    .rm-da-i { display:flex; gap:8px; font-size:12px; color:#444; padding:2px 0; align-items:flex-start; line-height:1.4; }
    .rm-do-d { width:6px; height:6px; border-radius:50%; background:#16A34A; margin-top:4px; flex-shrink:0; }
    .rm-av-d { width:6px; height:6px; border-radius:50%; background:#DC2626; margin-top:4px; flex-shrink:0; }
    .rm-sc-t { font-size:13px; font-weight:700; color:#333; margin-bottom:10px; }
    .rm-sc-i { border-top:1px solid #f4f4f4; padding-top:12px; }
    .rm-sc-c { font-size:12px; color:#888; margin-top:8px; text-align:center; }
    .rm-ck-i { display:flex; align-items:flex-start; gap:10px; padding:6px 0; cursor:pointer; transition:all 0.2s; user-select:none; }
    .rm-ck-i:hover { opacity:0.8; }
    .rm-ck-c { width:20px; height:20px; border-radius:50%; border:2px solid #ddd; flex-shrink:0; margin-top:1px; display:flex; align-items:center; justify-content:center; font-size:11px; color:white; transition:all 0.2s; background:transparent; font-weight:700; }
    .rm-ck-i.checked .rm-ck-c { background:#16A34A; border-color:#16A34A; }
    .rm-ck-t { font-size:13px; color:#444; transition:all 0.2s; line-height:1.5; }
    .rm-ck-i.checked .rm-ck-t { text-decoration:line-through; color:#aaa; }
    @media (max-width:600px) {
      .rm-dots { padding:10px 16px; }
      .rm-month { margin:0 12px 10px; }
      .rm-month:last-child { margin-bottom:16px; }
      .rm-hdr { padding:14px 14px; }
      .rm-body { padding:0 14px; }
      .rm-month.open .rm-body { padding:8px 14px 20px; }
      .rm-da { grid-template-columns:1fr; }
    }
  `;
  document.head.appendChild(s);
}

function renderRoadmap() {
  const container = document.getElementById('roadmap-container');
  if (!container) return;

  injectStyles();

  let html = '<div class="rm-wrap">';

  // Hero
  html += `
    <div class="rm-hero">
      <h2>Full-Stack Web Development</h2>
      <p>6 months • 24 weeks • Job-ready</p>
      <div class="rm-stats">
        <div class="rm-stat">60%+ Jobs Available</div>
        <div class="rm-stat">₹4–12 LPA</div>
        <div class="rm-stat">MERN Stack</div>
      </div>
    </div>
  `;

  // Dots
  html += '<div class="rm-dots">';
  ROADMAP_DATA.forEach((m, i) => {
    html += `
      <div class="rm-dot-item" style="color:${m.color}" onclick="window.rmScrollTo(${i})">
        <div class="rm-dot ${i===0?'active':''}" style="border-color:${m.color}"></div>
        <span class="rm-dot-lbl">M${i+1}</span>
      </div>
    `;
  });
  html += '</div>';

  // Months
  ROADMAP_DATA.forEach((m, mi) => {
    html += `<div class="rm-month ${mi===0?'open':''}" id="rm-m${mi}" style="--mc:${m.color}">`;
    html += `
      <div class="rm-hdr" onclick="window.rmToggle(${mi})">
        <div class="rm-num">${mi+1}</div>
        <div class="rm-tg">
          <div class="rm-lbl">Month ${mi+1}</div>
          <div class="rm-ttl">${m.title}</div>
        </div>
        <div class="rm-meta">
          <span class="rm-badge">${m.weeks.length} weeks</span>
          <span class="rm-chev">▼</span>
        </div>
      </div>
    `;
    html += '<div class="rm-body">';

    // Tabs
    html += '<div class="rm-tabs">';
    m.weeks.forEach((w, wi) => {
      html += `<button class="rm-tab ${wi===0?'active':''}" onclick="window.rmTab(${mi},${wi})">Week ${wi+1}</button>`;
    });
    html += '</div>';

    // Panels
    m.weeks.forEach((w, wi) => {
      html += `<div class="rm-panel ${wi===0?'active':''}" data-week="${wi}">`;
      html += `<div class="rm-w-ttl">${w.title}</div>`;
      html += `<div class="rm-w-sub">${w.subtitle}</div>`;
      html += '<span class="rm-sec-l">Topics</span>';
      html += '<div class="rm-topics">';
      w.topics.forEach(t => { html += `<span class="rm-pill">${t}</span>`; });
      html += '</div>';
      html += `<div class="rm-proj"><div class="rm-proj-l">📌 Project</div><div class="rm-proj-t">${w.project}</div></div>`;
      html += '<span class="rm-sec-l">Resources</span>';
      html += '<ul class="rm-res">';
      w.resources.forEach(r => { html += `<li><span class="rm-dot-sm"></span>${r}</li>`; });
      html += '</ul>';
      html += `<div class="rm-tip">${w.tip}</div>`;
      html += '</div>';
    });

    // Schedule
    html += '<span class="rm-sec-l">Daily Schedule (4 ghante)</span>';
    html += '<div class="rm-sched">';
    html += `<div class="rm-sched-b"><div class="rm-sched-t">30 min</div><div class="rm-sched-l">Revision</div><div class="rm-sched-d">Kal ka code dobara likho</div></div>`;
    html += `<div class="rm-sched-b"><div class="rm-sched-t">1.5 hr</div><div class="rm-sched-l">New Concept</div><div class="rm-sched-d">Video + notes</div></div>`;
    html += `<div class="rm-sched-b"><div class="rm-sched-t">1.5 hr</div><div class="rm-sched-l">Hands-on</div><div class="rm-sched-d">Khud banao</div></div>`;
    html += `<div class="rm-sched-b"><div class="rm-sched-t">30 min</div><div class="rm-sched-l">GitHub</div><div class="rm-sched-d">Commit + notes</div></div>`;
    html += '</div>';

    // Do/Avoid
    html += '<div class="rm-da">';
    html += '<div class="rm-do"><div class="rm-do-t">✓ DO</div>';
    m.dos.forEach(d => { html += `<div class="rm-da-i"><span class="rm-do-d"></span>${d}</div>`; });
    html += '</div>';
    html += '<div class="rm-av"><div class="rm-av-t">✗ AVOID</div>';
    m.avoids.forEach(a => { html += `<div class="rm-da-i"><span class="rm-av-d"></span>${a}</div>`; });
    html += '</div></div>';

    // Self Check
    html += `<div class="rm-sc-t">Weekly Self-Check</div>`;
    html += `<div class="rm-sc-i" id="rm-sc${mi}">`;
    m.checks.forEach((c, ci) => {
      html += `<div class="rm-ck-i" onclick="window.rmCheck(this,${mi})"><div class="rm-ck-c"></div><span class="rm-ck-t">${c}</span></div>`;
    });
    html += '</div>';
    html += `<div class="rm-sc-c" id="rm-cnt${mi}">0/${m.checks.length} complete</div>`;

    html += '</div></div>';
  });

  html += '</div>';
  container.innerHTML = html;
}

window.rmToggle = function(i) {
  const el = document.getElementById('rm-m' + i);
  el.classList.toggle('open');
};

window.rmTab = function(mi, wi) {
  const m = document.getElementById('rm-m' + mi);
  m.querySelectorAll('.rm-tab').forEach((t, i) => t.classList.toggle('active', i === wi));
  m.querySelectorAll('.rm-panel').forEach((p, i) => p.classList.toggle('active', i === wi));
};

window.rmCheck = function(el, mi) {
  el.classList.toggle('checked');
  el.querySelector('.rm-ck-c').textContent = el.classList.contains('checked') ? '✓' : '';
  const sc = document.getElementById('rm-sc' + mi);
  const done = sc.querySelectorAll('.rm-ck-i.checked').length;
  const total = sc.querySelectorAll('.rm-ck-i').length;
  document.getElementById('rm-cnt' + mi).textContent = done + '/' + total + ' complete';
};

window.rmScrollTo = function(i) {
  document.querySelectorAll('.rm-month').forEach(m => m.classList.remove('open'));
  document.getElementById('rm-m' + i).classList.add('open');
  setTimeout(() => document.getElementById('rm-m' + i).scrollIntoView({ behavior:'smooth', block:'start' }), 50);
};

// Init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderRoadmap);
} else {
  renderRoadmap();
}

})();
