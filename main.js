
'use strict';

// ==========================================
// CONFIGURATION
// ==========================================

const owner = {
  name: 'Nadiia Balitska',
  title: 'Frontend & Full-Stack Developer',
  location: 'Oslo, Norway',
  email: 'balitskanadia2@gmail.com',
  github: 'https://github.com/Nadiia-balitska',
  linkedin: 'https://www.linkedin.com/in/nadiia-balitska/',
  telegram: 'https://t.me/nadiia_balitska',
  cv: './docs/Nadia_cv.pdf'
};

const projects = window.PORTFOLIO_PROJECTS || [];
const featured = projects.slice(0, 3);
const view = document.getElementById('view');

// ==========================================
// HELPERS
// ==========================================

const escapeHTML = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);

const validUrl = (value) => {
  try {
    const url = new URL(value);

    return (
      ['http:', 'https:'].includes(url.protocol) &&
      !value.includes(' ')
    );
  } catch {
    return false;
  }
};

const tags = (items) => {
  return `
    <div class="tags">
      ${(items || [])
        .slice(0, 5)
        .map((item) => `
          <span class="tag">${escapeHTML(item)}</span>
        `)
        .join('')}
    </div>
  `;
};

const photo = (project, className = 'project-image') => {
  return `
    <img
      class="${className}"
      src="${escapeHTML(project.thumb)}"
      alt="Screenshot of ${escapeHTML(project.title)}"
      loading="lazy"
      onerror="this.style.visibility='hidden'"
    />
  `;
};

// ==========================================
// PROJECT CARDS
// ==========================================

const projectCard = (project) => {
  return `
    <article class="project-card">
      <a
        href="#/project/${encodeURIComponent(project.slug)}"
        aria-label="Read more about ${escapeHTML(project.title)}"
      >
        ${photo(project)}
      </a>

      <div class="project-content">
        <span class="project-meta">
          ${escapeHTML(project.course)}
        </span>

        <h3>${escapeHTML(project.title)}</h3>

        <p>${escapeHTML(project.teaser)}</p>

        ${tags(project.tech)}

        <a
          class="project-bottom"
          href="#/project/${encodeURIComponent(project.slug)}"
        >
          Read case study
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  `;
};

// ==========================================
// TECHNICAL STACK
// ==========================================

const stack = [
  [
    'Frontend',
    [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML & CSS',
      'Tailwind CSS',
      'Bootstrap',
      'Redux Toolkit',
      'Zustand'
    ]
  ],
  [
    'Backend',
    [
      'Node.js',
      'Express',
      'Fastify',
      'REST APIs',
      'Authentication',
      'Prisma ORM'
    ]
  ],
  [
    'Data & tools',
    [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'ClickHouse',
      'Cloudinary',
      'Git & GitHub',
      'Docker',
      'CI/CD'
    ]
  ],
  [
    'Also working with',
    [
      'Python',
      'Java',
      'Playwright',
      'Vitest',
      'Prebid.js',
      'Figma',
      'LLM tools'
    ]
  ]
];

const stacks = () => {
  return `
    <div class="stack-grid">
      ${stack
        .map(([name, items]) => `
          <section class="panel">
            <h3>${name}</h3>

            <div class="stack-list">
              ${items
                .map((item) => `<span>${item}</span>`)
                .join('')}
            </div>
          </section>
        `)
        .join('')}
    </div>
  `;
};

// ==========================================
// HOME PAGE
// ==========================================

function home() {
  return `
    <section class="hero">
      <div>
        <span class="eyebrow">
          Full-stack developer · Oslo, Norway
        </span>

        <h1>
          Building thoughtful
          <span class="gradient-text">
            digital experiences.
          </span>
        </h1>

        <p class="lead">
          Hi, I'm Nadiia. I build accessible, responsive web
          applications — from polished React interfaces to APIs
          and full-stack products with TypeScript and Node.js.
        </p>

        <div class="actions">
          <a class="btn btn-primary" href="#/projects">
            Explore my projects ↗
          </a>

          <a class="btn btn-outline" href="#/contact">
            Get in touch
          </a>

          <a
            class="btn btn-outline"
            href="./docs/Nadia_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My CV ↗
          </a>

          <a
            class="btn btn-outline"
            href="./docs/cover_letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cover Letter ↗
          </a>
        </div>

        <p class="availability" style="margin-top: 24px">
          <span class="dot"></span>
          Open to frontend and full-stack opportunities
        </p>
      </div>

    
<div class="hero-panel" aria-label="Technology summary">
  <div class="panel-top">
    nadiia / developer-profile.js
  </div>

  <pre class="hero-code"><code><span class="code-violet">const</span> developer = {
  name: <span class="code-accent">'Nadiia'</span>,
  focus: [
    <span class="code-accent">'JavaScript'</span>, <span class="code-accent">'TypeScript'</span>,
    <span class="code-accent">'React'</span>, <span class="code-accent">'Next.js'</span>,
    <span class="code-accent">'Node.js'</span>, <span class="code-accent">'Java'</span>
  ],
  approach: <span class="code-accent">'build & improve'</span>,
  location: <span class="code-accent">'Oslo'</span>
};</code></pre>
</div>

    </section>
  `;
}

// ==========================================
// PROJECTS PAGE
// ==========================================

function listing() {
  return `
    <section class="page-top">
      <span class="eyebrow">Portfolio</span>

      <h1 class="page-heading">
        Projects
      </h1>

      <p class="muted">
        A collection of web applications, team projects
        and full-stack work. Select a project to learn more.
      </p>
    </section>

    <div class="project-grid">
      ${projects.map(projectCard).join('')}
    </div>
  `;
}

// ==========================================
// ABOUT PAGE
// ==========================================

function about() {
  return `
    <section class="page-top">
      <span class="eyebrow">Who I am</span>

      <h1 class="page-heading">
        About me
      </h1>

      <p class="lead">
        A bit about the person behind the code.
      </p>
    </section>

    <div class="about-grid">
      <section class="panel">
        <h2>My background</h2>

        <p>
          I'm <strong>Nadiia Balitska</strong>, a full-stack
          developer based in Oslo, Norway. I have a Bachelor's
          degree in Computer Science from National Transport
          University, studied Front-end Development at Noroff,
          and have also taken Information Technology courses
          at OsloMet.
        </p>

        <p>
          I work with both frontend and backend development,
          and I like being involved in the whole process —
          from the first idea to a working application.
          I've gained hands-on experience through real
          projects, teamwork, and a full-stack internship.
          I'm always up for a new challenge, especially
          when it involves figuring out how things work
          (or why they suddenly don't).
        </p>

        <p>
          Right now, I'm looking for opportunities to grow
          as a developer, work with a great team, and build
          something genuinely useful.

          <strong>
            Have a project in mind or think we'd make a
            good team? Feel free to reach out — I'd love
            to chat!
          </strong>
        </p>
      </section>

      <section class="panel">
        <h2>Let's connect</h2>

        <p>
          Curious about my work? Explore the projects or
          drop me a message. I'm always happy to talk about
          web development and potential collaborations.
        </p>

        <div class="actions">
          <a class="btn btn-outline" href="#/projects">
            See my projects ↗
          </a>

          <a class="btn btn-outline" href="#/contact">
            Contact me ↗
          </a>
        </div>
      </section>
    </div>

    <section class="section">
      <div class="section-head">
        <div>
          <h2>Technical stack</h2>

          <p class="muted">
            Tools I use across frontend, backend, and delivery.
          </p>
        </div>
      </div>

      ${stacks()}
    </section>
  `;
}

// ==========================================
// CONTACT PAGE
// ==========================================

function contact() {
  const socials = [
    [
      'Email',
      owner.email,
      `mailto:${owner.email}`
    ],
    [
      'GitHub',
      'github.com/Nadiia-balitska',
      owner.github
    ],
    [
      'LinkedIn',
      'linkedin.com/in/nadiia-balitska',
      owner.linkedin
    ],
    [
      'Telegram',
      '@nadiia_balitska',
      owner.telegram
    ]
  ];

  return `
    <section class="page-top">
      <span class="eyebrow">Contact</span>

      <h1 class="page-heading">
        Let's get in touch.
      </h1>

      <p class="lead">
        Interested in working together or want to talk
        about an opportunity? Send me a message.
      </p>

      <div class="actions">
        <a
          class="btn btn-primary"
          href="mailto:${owner.email}"
        >
          Send an email ↗
        </a>
      </div>
    </section>

    <div class="contact-links">
      ${socials
        .map(([name, label, url]) => `
          <a
            class="contact-link"
            href="${url}"
            ${
              url.startsWith('http')
                ? 'target="_blank" rel="noopener noreferrer"'
                : ''
            }
          >
            <span>${name}</span>
            <strong>${escapeHTML(label)} ↗</strong>
          </a>
        `)
        .join('')}
    </div>
  `;
}

// ==========================================
// PROJECT ARTICLE
// ==========================================

function linkButton(url, label, primary = false) {
  if (!validUrl(url)) {
    return '';
  }

  return `
    <a
      class="btn ${primary ? 'btn-primary' : 'btn-outline'}"
      href="${escapeHTML(url)}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${label} ↗
    </a>
  `;
}

function article(slug) {
  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return notFound();
  }

  return `
    <article class="article-shell">
      <a class="back" href="#/projects">
        ← Back to projects
      </a>

      <div
        class="eyebrow"
        style="margin-top: 25px"
      >
        Project case study
      </div>

      <h1>${escapeHTML(project.title)}</h1>

      <p class="lead">
        ${escapeHTML(project.teaser)}
      </p>

      ${tags(project.tech)}

      <div class="article-actions">
        ${linkButton(project.live, 'Live site', true)}
        ${linkButton(project.repo, 'GitHub / README')}
        ${linkButton(project.back, 'Backend repository')}

        <button
          class="btn btn-outline"
          id="copyLink"
          type="button"
        >
          Copy project link ↗
        </button>
      </div>

      <div
        role="status"
        id="copyStatus"
        class="copy-status"
        aria-live="polite"
      ></div>

      <figure class="article-figure">
        <img
          src="${escapeHTML(project.thumb)}"
          alt="Screenshot of ${escapeHTML(project.title)}"
          onerror="this.style.display='none'"
        />

        <figcaption>
          ${escapeHTML(project.title)} — project screenshot.
        </figcaption>
      </figure>

      <div class="article-body">
        <h2>Overview</h2>

        <p>${escapeHTML(project.teaser)}</p>

        <h2>Technology</h2>

        <p>
          ${escapeHTML(project.tech.join(' · '))}
        </p>

        <h2>Source code & demo</h2>

        <p>
          Use the links above to explore the repository,
          README and live application where available.
        </p>

        <h2>Explore the project</h2>

        <p>
          For implementation details and updates, see
          the source repository and its README linked above.
        </p>
      </div>
    </article>
  `;
}

// ==========================================
// NOT FOUND
// ==========================================

const notFound = () => {
  return `
    <section class="page-top">
      <h1>Page not found</h1>

      <p class="muted">
        This page doesn't exist.
      </p>

      <a class="btn btn-primary" href="#/home">
        Return home
      </a>
    </section>
  `;
};

// ==========================================
// ROUTER
// ==========================================

function router() {
  const pathname = decodeURIComponent(
    (location.hash || '#/home').slice(1)
  ).replace(/\/+$/, '') || '/home';

  let title = 'Portfolio';

  if (pathname === '/home') {
    view.innerHTML = home();
    title = 'Home';

  } else if (pathname === '/projects') {
    view.innerHTML = listing();
    title = 'Projects';

  } else if (pathname === '/about') {
    view.innerHTML = about();
    title = 'About';

  } else if (pathname === '/contact') {
    view.innerHTML = contact();
    title = 'Contact';

  } else if (pathname.startsWith('/project/')) {
    const slug = pathname.slice('/project/'.length);

    view.innerHTML = article(slug);

    title = projects.find(
      (project) => project.slug === slug
    )?.title || 'Project';

  } else {
    view.innerHTML = notFound();
    title = 'Not found';
  }

  document.title = `${title} | ${owner.name}`;

  document.querySelectorAll('[data-route]').forEach((link) => {
    if (link.getAttribute('href') === '#' + pathname) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  routerBind();

  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });

  document.getElementById('main').focus({
    preventScroll: true
  });
}

// ==========================================
// DYNAMIC EVENTS
// ==========================================

function routerBind() {
  const copyButton = view.querySelector('#copyLink');

  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const status = view.querySelector('#copyStatus');

      try {
        await navigator.clipboard.writeText(location.href);

        status.textContent = 'Project link copied.';
      } catch {
        status.textContent =
          'Copy is unavailable here. Please use the browser address bar.';
      }
    });
  }
}

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
  document.getElementById('yr').textContent =
    new Date().getFullYear();

  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    document.documentElement.dataset.theme = savedTheme;
  }

  const toggle = document.getElementById('theme');

  const updateThemeButton = () => {
    const isLight =
      document.documentElement.dataset.theme === 'light';

    toggle.textContent = isLight ? '☾' : '☼';

    toggle.setAttribute(
      'aria-label',
      isLight ? 'Switch to dark theme' : 'Switch to light theme'
    );

    toggle.setAttribute(
      'aria-pressed',
      String(isLight)
    );
  };

  toggle.addEventListener('click', () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === 'light'
        ? 'dark'
        : 'light';

    localStorage.setItem(
      'portfolio-theme',
      document.documentElement.dataset.theme
    );

    updateThemeButton();
  });

  updateThemeButton();
  router();
}

// ==========================================
// EVENT LISTENERS
// ==========================================

window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', init);
