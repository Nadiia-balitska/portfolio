const CONFIG = {
  owner: {
    name: "Nadiia Balitska",
    title: "Junior Full‑stack Developer",
    location: "Oslo, Norway",
    email: "balitskanadia2@gmail.com",
    phone: "+47 968 34 875",
    github: "https://github.com/Nadiia-balitska",
    linkedin: "https://www.linkedin.com/in/nadiia-balitska/", 
    cvURL: "./docs/Nadia_cv.pdf", 
    coverURL: "./docs/cover_letter.pdf",
    telegram: "https://t.me/nadiia_balitska",
  },
  projects: [
    {
      key: "exam-project",
      course: "Noroff",
      title: "Premium Tech Store",
      teaser: "Tech Store where you can buy different technology",
      thumb: "./assets/exam_project.jpg",
      repo: "https://github.com/Nadiia-balitska/noroff_exam_project_1",
      live: "need to be cloned",
    
      tech:["HTML","CSS","JS","Fetch", "Swagger API"],
    },
    {
      key: "GameHub",
      course: "Noroff",
      title: "GameHub - store for games",
      teaser: "E‑commerce storefront with product cards, cart, and responsive UI.",
      thumb: "./assets/gamehub.jpg",
      repo: "https://github.com/Nadiia-balitska/game-hub-noroff-assigment",
      live: "https://nadiia-balitska.github.io/game-hub-noroff-assigment/",
      tech:["HTML","CSS","JS", "Fetch"],
    },
    {
      key: "javascript1",
      course: "Noroff",
      title: "Muzeum landing web app",
      teaser: "Landing web-page, where you can see information about muzeum ",
      thumb: "./assets/muzeum.jpg",
      repo: "https://github.com/Nadiia-balitska/noroff-semester-project-muzeum",
      live: "https://nadiia-balitska.github.io/noroff-semester-project-muzeum/",
    
      tech:["HTML","CSS","JS","Fetch"],
    },
      {
      key: "Team semester project",
      course: "Noroff",
      title: "Semester Project Edugate school",
      teaser: "Web-based result management system which allows students, teachers, and admins to view, update, and manage academic records efficiently",
      thumb: "./assets/eduGate.png",
      repo: "https://github.com/NoroffFEU/edu-gate-oct24ft",
      live: "need to be cloned first",    
      tech:["HTML","CSS","JS"]
    },
    {
      key: "Soft Serve project",
      course: "Soft Serve ",
      title: "Soft Serve project Space-to-Study ",
      teaser: "Studying enviroment where both students and teachers can find themselv",
      thumb: "./assets/spase_to_study.jpg",
      repo: "https://github.com/Nadiia-balitska/Project-SS",
      live: "https://project-ss-sooty.vercel.app",
      back: "https://github.com/Nadiia-balitska/BackEnd-SS-project",
    
      tech:["HTML","CSS","JS", "React", "Redux", "Type Script", "Node.js", "Express.js"]
    },
      {
      key: "Team project water track",
      course: "Bootcamp Team Project",
      title: "Team project water track",
      teaser: "Web-app where you can track your water consumption",
      thumb: "./assets/water_track.jpg",
      repo: "https://github.com/LigerCode3443/AquaTrack",
      live: "https://aqua-track.netlify.app",
      back: "https://github.com/defaultnastia/water-tracker-be",
    
      tech:["HTML","CSS","JS", "React", "Type Script", "Redux", "Node.js", "Express.js"]
    },
     {
      key: "Inteship project",
      course: "Adtelliget org. Bidmatic",
      title: "Intership project",
      teaser: "Intership study project with more press into how to create advertisments inside web-app using Prebid.js",
      thumb: "./assets/bidmatic_intership.jpg",
      repo: "https://github.com/Nadiia-balitska/adtelligent_front",
      live: "https://adtelligent-front.vercel.app",
      back: "https://github.com/Nadiia-balitska/adtelligent_back",
    
      tech:["HTML","CSS","JS", "React", "Type Script", "Tailwind", "Zustand", "Node.js", "Fastify.js", "Prebid.js"]
    },
     {
      key: "money-guard",
      course: "Bootcamp Project",
      title: "Bootcamp project money guard",
      teaser: "Web application for tracking personal finances with user authentication, transaction management, and data visualization.",
      thumb: "./assets/moneu_guard.jpg",
      repo: "https://github.com/Nadiia-balitska/money-guard",
      live: "https://money-guard-ten.vercel.app",
    
      tech:["HTML","CSS","JS", "React", "Redux"],
    },
   
   
       {
      key: "portfolio",
      course: "Bootcamp Team Project",
      title: "Team project 'Portfolio' ",
      teaser: "Web application 'Portfolio' ",
      thumb: "./assets/portfolio.jpg",
      repo: "https://github.com/Nadiia-balitska/portfolio-web",
      live: "https://nestertsovv.github.io/dream-team-project-js/",
    
      tech:["HTML","CSS","JS"],
    } ,
   
      {
      key: "cars for rent",
      course: "Bootcamp Project",
      title: "Renting the car ",
      teaser: "Web application for renting the car",
      thumb: "./assets/car_rent.jpg",
      repo: "https://github.com/Nadiia-balitska/cars-for-rent",
      live: "https://cars-for-rent-five.vercel.app",
    
      tech:["HTML","CSS","JS", "React", "Redux"],
    } ,
    
    
  ]
};

// ------------ Router ------------
const view = document.getElementById('view');
const navLinks = Array.from(document.querySelectorAll('[data-route]'));
const setActive = (hash) => navLinks.forEach(a=> a.setAttribute('aria-current', a.getAttribute('href')===hash? 'page': 'false'));

const routes = {
  '/home': () => tplHome(),
  '/about': () => tplAbout(),
  '/projects': () => tplProjects(),
  '/docs': () => tplDocs(),
  '/contact': () => tplContact(),
  '/imprint': () => tplImprint(),
  '/privacy': () => tplPrivacy()
};

function router(){
  const hash = location.hash.replace('#','') || '/home';
  setActive('#'+hash);
  const html = (routes[hash]||routes['/home'])();
  view.innerHTML = html;
  focusMain();
  bindDynamic();
}

function focusMain(){
  const h = view.querySelector('h1,h2,h3');
  if(h){ h.setAttribute('tabindex','-1'); h.focus(); }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('githubLink').href = CONFIG.owner.github;
  document.getElementById('yr').textContent = new Date().getFullYear();
  const saved = localStorage.getItem('theme');
  if(saved){ document.documentElement.setAttribute('data-theme', saved); }
  document.getElementById('theme').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    const pressed = next !== 'dark';
    document.getElementById('theme').setAttribute('aria-pressed', String(pressed));
  });
  if(!location.hash) location.hash = '#/home';
  router();
});

// ------------ Templates ------------
function tplHome(){
return `
<section class="hero">
<div class="card pad pad-1">
<h1 class="title">Hi, I'm ${CONFIG.owner.name}</h1>
<p class="muted">${CONFIG.owner.title} · ${CONFIG.owner.location}</p>
<p>Welcome to my portfolio. Here I would like to introduce myself and share a selection of my work. I build end‑to‑end web applications with a focus on clean architecture, accessibility, and measurable performance. Please feel free to explore and reach out if something resonates.</p>
<div class="flex" style="margin-top:10px">
<a class="btn primary" href="#/projects">View Projects</a>
<a class="btn" href="${CONFIG.owner.cvURL}" target="_blank" rel="noopener">CV / Resume</a>
<a class="btn" href="${CONFIG.owner.coverURL}" target="_blank" rel="noopener">Cover Letter</a>
</div>
</div>
<div class="grid">
<div class="card pad">
<h3>Quick Links</h3>
<div class="list">
${CONFIG.projects.map(p => `<a href="#/projects#${p.key}"><span>${p.title}</span><span class="badge">Updated</span></a>`).join('')}
</div>
</div>
</div>
</section>`;
}

function projCard(p){
const tech = p.tech?.map(t=>`<span class="pill" aria-label="Tech">${t}</span>`).join(' ') || '';
const backendBtn = p.back ? `<a class="btn" href="${p.back}" target="_blank" rel="noopener">Backend</a>` : '';
return `
<article class="card project" id="${p.key}" aria-labelledby="h-${p.key}">
<img class="thumb" loading="lazy" src="${p.thumb}" alt="${p.title} thumbnail"/>
<div class="meta">
<div class="flex" style="justify-content:space-between; align-items:center">
<h3 id="h-${p.key}" style="margin:0">${p.title}</h3>
<span class="muted">${p.course ?? ''}</span>
</div>
<p class="muted" style="margin:.2rem 0 1rem">${p.teaser ?? ''}</p>
<div class="flex" style="margin-bottom:10px">${tech}</div>
<div class="flex">
<a class="btn" href="${p.repo}" target="_blank" rel="noopener">GitHub Repo</a>
<a class="btn primary" href="${p.live}" target="_blank" rel="noopener">Live Demo</a>
${backendBtn}
</div>
</div>
</article>`
}

function tplProjects(){
return `
<h2>Projects</h2>
<p class="muted">Three course projects, each updated with at least one improvement.</p>
<div class="grid cols-3">
${CONFIG.projects.map(projCard).join('')}
</div>`;
}

function tplDocs(){
  return `
    <h2>Documentation</h2>
    <div class="grid cols-2">
      <div class="card pad">
        <h3>READMEs</h3>
        <ul>
          <li><a href="${CONFIG.owner.github}" target="_blank" rel="noopener">GitHub Profile README</a> (updated)</li>
          ${CONFIG.projects.map(p=> `<li><a href="${p.repo}" target="_blank" rel="noopener">${p.title} README</a> (updated)</li>`).join('')}
        </ul>
        <p class="muted">Project READMEs follow the template: Overview → Features → Tech → Setup → Live → Screens → Improvements → License.</p>
      </div>
    </div>`
}

function tplAbout(){
return `
<h2>About Me</h2>
<div class="grid cols-2">
<div class="card pad">
<p>I'm <strong>${CONFIG.owner.name}</strong>, a passionate <strong>Full‑stack Developer</strong> based in Oslo, Norway. I enjoy creating clean, accessible, and user‑focused web applications that combine thoughtful design with solid technical architecture.</p>
<p>My educational journey started at <strong>National Transport University (Ukraine)</strong>. I continued at <strong>Noroff School of Technology and Digital Media</strong> and I'm currently pursuing <strong>Information Technology at Oslomet University</strong>.</p>
<p>To strengthen my practical skills, I completed a <strong>6‑month Full‑stack Development Bootcamp</strong>, <strong>SoftServe’s Front‑end Project‑Based Learning</strong>, and <strong>Hillel IT School’s Deep Node.js</strong>. These programs gave me hands‑on experience with modern tools and teamwork in agile environments.</p>
</div>
<div class="card pad">
<h3>Experience</h3>
<p>I have <strong>3 months of freelance experience</strong> building small landing pages end‑to‑end, and a <strong>1‑month internship at Adtelligent (Bidmatic)</strong> where I worked in a full‑stack environment:</p>
<ul>
<li><strong>Backend:</strong> Fastify.js, Prisma, Node.js</li>
<li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Zustand</li>
<li><strong>Databases:</strong> MongoDB, ClickHouse</li>
</ul>
<p>I’m eager to learn new technologies, improve existing solutions, and contribute to scalable, high‑quality products that bring real value to users.</p>
</div>
</div>

<div class="card pad" style="margin-top:18px">
<h3>Technologies</h3>
<div class="grid cols-3">
<div>
<h4>Frontend</h4>
<ul>
<li>HTML5, CSS3 (Responsive, BEM)</li>
<li>JavaScript (ES6+), TypeScript</li>
<li>React</li>
<li> Redux, Zustand</li>
<li>Tailwind CSS</li>
<li>Prebid.js</li>
</ul>
</div>
<div>
<h4>Backend</h4>
<ul>
<li>Node.js</li>
<li>Express.js, Fastify.js</li>
<li>REST APIs, Authentication</li>
<li>Prisma ORM</li>
</ul>
</div>
<div>
<h4>Databases</h4>
<ul>
<li>MongoDB</li>
<li>ClickHouse</li>
</ul>
</div>
</div>
</div>`
}

function tplContact(){
  return `
    <h2>Contact</h2>
    <div class="contact-grid">
      <div class="card pad">
        <h3>Direct contacts</h3>
        <div class="contact-row">
          <div class="contact-card">
            <div class="icon" aria-hidden>📧</div>
            <div>
              <div class="muted">Email</div>
              <a href="mailto:${CONFIG.owner.email}">${CONFIG.owner.email}</a>
            </div>
          </div>
          <div class="contact-card">
            <div class="icon" aria-hidden>💼</div>
            <div>
              <div class="muted">LinkedIn</div>
              <a href="${CONFIG.owner.linkedin}" target="_blank" rel="noopener">${CONFIG.owner.linkedin}</a>
            </div>
          </div>
          <div class="contact-card">
            <div class="icon" aria-hidden>🐙</div>
            <div>
              <div class="muted">GitHub</div>
              <a href="${CONFIG.owner.github}" target="_blank" rel="noopener">${CONFIG.owner.github}</a>
            </div>
          </div>
          <div class="contact-card">
            <div class="icon" aria-hidden>✈️</div>
            <div>
              <div class="muted">Telegram</div>
              <a href="${CONFIG.owner.telegram}" target="_blank" rel="noopener">${CONFIG.owner.telegram}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="card pad">
        <h3>Send a message</h3>
        <form id="contactForm" class="form-wrap" novalidate>
          <div class="field">
            <label for="name">Name</label>
            <div class="input">
              <span class="lead" aria-hidden>👤</span>
              <input id="name" name="name" required minlength="2" placeholder="Your name" aria-required="true">
            </div>
            <div class="help">Introduce yourself so I can address you properly.</div>
          </div>

          <div class="field">
            <label for="email">Email</label>
            <div class="input">
              <span class="lead" aria-hidden>✉️</span>
              <input id="email" type="email" name="email" required placeholder="you@example.com" aria-required="true">
            </div>
          </div>

          <div class="field">
            <label for="message">Message</label>
            <div class="input">
              <span class="lead" aria-hidden>💬</span>
              <textarea id="message" name="message" required minlength="10" rows="4" placeholder="How can I help?" aria-required="true"></textarea>
            </div>
          </div>

          <div class="flex">
            <button id="sendBtn" class="btn primary grad">Send</button>
            <span id="formNote" class="muted" role="status" aria-live="polite"></span>
          </div>
        </form>
      </div>
    </div>`;
}




const dlg = document.getElementById('projDialog');
function bindDynamic(){
  document.querySelectorAll('[data-proj]')?.forEach(btn => btn.addEventListener('click', () => {
    const p = CONFIG.projects.find(x=> x.key === btn.dataset.proj);
    if(!p) return;
    document.getElementById('dlgTitle').textContent = p.title + ' — Evidence';
    const list = document.getElementById('dlgList');
    const links = [
      {label:'GitHub Repository', url:p.repo},
      {label:'Live Demo', url:p.live},
      ...p.improvements.map(i=> ({label:`Improvement: ${i.label}`, url:i.commit}))
    ];
    list.innerHTML = links.map(l => `<a href="${l.url}" target="_blank" rel="noopener"><span>${l.label}</span><span>↗</span></a>`).join('');
    dlg.showModal();
  }));

const form = document.getElementById('contactForm');
if(form){
  const btn = document.getElementById('sendBtn');
  const note = document.getElementById('formNote');
  const ta = form.querySelector('textarea');

  const autosize = () => { ta.style.height = 'auto'; ta.style.height = ta.scrollHeight + 'px'; };
  ta?.addEventListener('input', autosize); autosize();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!form.reportValidity()){
      note.textContent = 'Please fix validation errors.';
      return;
    }
    btn.disabled = true; btn.textContent = 'Sending…';
    const data = Object.fromEntries(new FormData(form).entries());
    const body = encodeURIComponent(data.message + '\n\n— ' + data.name + '\n' + data.email);
    location.href = `mailto:${CONFIG.owner.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(data.name)}&body=${body}`;
    setTimeout(()=>{ btn.disabled=false; btn.textContent='Send'; note.textContent='Thanks! Your message is ready in your email client.'; }, 600);
  });
}



  if(location.hash.includes('#') && location.hash.split('#')[2]){
    const id = location.hash.split('#')[2];
    const el = document.getElementById(id);
    if(el){ el.scrollIntoView({behavior:'smooth', block:'center'}); el.classList.add('highlight'); setTimeout(()=> el.classList.remove('highlight'), 1800) }
  }
}
