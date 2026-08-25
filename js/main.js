/* =========================================================
   RAKSHA DOERGA — PORTFOLIO
   main.js — shared across every page: i18n, nav, reveal animations
   ========================================================= */

/* ---------------------------------------------------------
   1) TRANSLATION DICTIONARY
   Every translatable string lives here, keyed by data-i18n
   attributes placed on elements throughout the HTML.
   --------------------------------------------------------- */
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.menu": "Menu",

    "footer.tagline": "Sketching ideas into software.",
    "footer.nav": "Navigate",
    "footer.contact": "Contact",
    "footer.location": "Wanica District, Suriname",
    "footer.rights": "All rights reserved.",
    "footer.made": "Handcrafted with HTML, CSS &amp; JavaScript.",

    "home.eyebrow": "Portfolio \u2014 ICT student",
    "home.hello": "Hello, I'm",
    "home.role": "ICT student &amp; aspiring developer",
    "home.intro": "I'm a motivated student with a strong interest in technology and software development. I'm driven by problem-solving and innovation, and I'm always looking to sharpen my technical skills on real, practice-focused projects.",
    "home.cta.work": "See my work",
    "home.cta.contact": "Get in touch",
    "home.scroll": "scroll",

    "home.roles.eyebrow": "Currently",
    "home.roles.title": "What I'm doing right now",
    "home.role1.title": "ICT Student",
    "home.role1.sub": "University of Applied Sciences and Technology \u2014 School of ICT",
    "home.role1.desc": "Studying since 2024, building a foundation in software development and problem-solving.",
    "home.role2.title": "Chat Support Agent",
    "home.role2.sub": "ETB \u2014 Telecom",
    "home.role2.desc": "Helping customers of an international telecom company through chat, since 2026.",

    "home.experience.eyebrow": "Recent",
    "home.experience.title": "Work experience",
    "home.exp1.role": "Chat Support Agent",
    "home.exp1.company": "ETB",
    "home.exp1.period": "2026 \u2014 present",
    "home.exp1.desc": "Handling incoming customer chats for an international telecom provider: answering questions, processing requests and offering solution-focused support.",
    "home.exp2.role": "Call Center Agent",
    "home.exp2.company": "Wengage",
    "home.exp2.period": "2024 \u2014 2026",
    "home.exp2.desc": "Handled inbound and outbound calls for an international telecom company: scheduling appointments, processing orders, adjusting services and running sales conversations.",
    "home.exp.more": "Read my full background \u2192",

    "home.skills.eyebrow": "Toolkit",
    "home.skills.title": "Skills",
    "home.skill1.title": "HTML",
    "home.skill1.desc": "Structuring clean, semantic pages that hold up on any device.",
    "home.skill2.title": "CSS",
    "home.skill2.desc": "Styling and layout, from tidy grids to small handcrafted details.",
    "home.skill3.title": "JavaScript",
    "home.skill3.desc": "Adding logic and interactivity to bring a page to life.",
    "home.skill4.title": "Customer-friendly",
    "home.skill4.desc": "Years of direct customer contact taught me patience and a friendly tone under pressure.",
    "home.skill5.title": "Collaboration",
    "home.skill5.desc": "Comfortable working with others toward one shared result.",
    "home.skill6.title": "Solution-oriented",
    "home.skill6.desc": "I look for the practical fix, not just the explanation for what went wrong.",

    "home.band.quote": "Curious by design, solution-driven by nature.",

    "home.projects.eyebrow": "A peek",
    "home.projects.title": "Recent projects",
    "home.projects.desc": "My software projects are still in the oven \u2014 this portfolio itself is the first one out of the kitchen. Full case studies are on their way.",
    "home.projects.cta": "Visit the work page \u2192",

    "about.eyebrow": "About me",
    "about.title": "The story behind the screen",
    "about.intro": "I'm a motivated student with a strong interest in technology and software development. I'm driven by problem-solving and innovation, and my ambition is to keep sharpening my technical skills and apply them to practice-focused projects.",
    "about.intro2": "Outside of coursework, I enjoy figuring out how things work under the hood \u2014 whether that's a piece of software, a customer's problem, or a new tool I haven't touched before.",

    "about.education.eyebrow": "Education",
    "about.education.title": "Education",
    "about.edu1.period": "2021 \u2014 2024",
    "about.edu1.title": "Mr. Dr. J.C. de Miranda Lyceum",
    "about.edu1.desc": "VWO diploma, science stream (S-richting).",
    "about.edu2.period": "2024 \u2014 present",
    "about.edu2.title": "University of Applied Sciences and Technology",
    "about.edu2.desc": "School of ICT.",
    "about.edu3.period": "Certificate",
    "about.edu3.title": "Noordhoff \u2014 Hogeschooltaal",
    "about.edu3.desc": "Dutch Language Proficiency, Level 3F.",

    "about.skills.eyebrow": "Toolkit",
    "about.skills.title": "Skills",
    "about.skill1.title": "HTML",
    "about.skill1.desc": "Structuring clean, semantic pages that hold up on any device.",
    "about.skill2.title": "CSS",
    "about.skill2.desc": "Styling and layout, from tidy grids to small handcrafted details.",
    "about.skill3.title": "JavaScript",
    "about.skill3.desc": "Adding logic and interactivity to bring a page to life.",
    "about.skill4.title": "Customer-friendly",
    "about.skill4.desc": "Years of direct customer contact taught me patience and a friendly tone under pressure.",
    "about.skill5.title": "Collaboration",
    "about.skill5.desc": "Comfortable working with others toward one shared result.",
    "about.skill6.title": "Solution-oriented",
    "about.skill6.desc": "I look for the practical fix, not just the explanation for what went wrong.",

    "about.work.eyebrow": "Background",
    "about.work.title": "Work experience",
    "about.work1.role": "Chat Support Agent",
    "about.work1.company": "ETB \u2014 Telecom",
    "about.work1.period": "2026 \u2014 present",
    "about.work1.desc": "Supporting customers of an international telecom company over chat: answering questions, processing requests and offering solution-focused support \u2014 the chat-based counterpart to my earlier call center work.",
    "about.work2.role": "Call Center Agent",
    "about.work2.company": "Wengage \u2014 Telecom",
    "about.work2.period": "2024 \u2014 2026",
    "about.work2.desc": "Handled inbound and outbound calls for an international telecom company. Tasks included scheduling appointments, processing orders, adjusting services, running sales conversations, and giving solution-focused support for a wide range of customer questions.",
    "about.work3.role": "Sales Assistant",
    "about.work3.company": "Lucky Store",
    "about.work3.period": "2023",
    "about.work3.desc": "Responsible for advising and guiding customers through purchase decisions in the appliances department. Tasks included handling warranty and delivery arrangements, placing orders for stock shortages, and keeping the department organized.",

    "about.band.quote": "Every problem is just a project that hasn't been solved yet.",

    "about.cta.title": "Want the short version?",
    "about.cta.desc": "See what I'm building and where I'm headed.",
    "about.cta.button": "Get in touch \u2192",

    "work.eyebrow": "Portfolio",
    "work.title": "Work in progress",
    "work.intro": "I'm early in my journey as a developer, and my project shelf is still filling up. Here's what's coming \u2014 real projects, with real write-ups, soon.",
    "work.filter.all": "All",
    "work.filter.soon": "Coming soon",

    "work.project1.status": "In development",
    "work.project1.title": "Studie4SU",
    "work.project1.desc": "Studie4SU is a platform built by a team of Software Engineering students to help students and school-seekers in Suriname find the right study and school. The mission is simple: make choosing a study easier and faster. The long-term goal is to become the central platform for everyone in Suriname exploring their study and school options.",
    "work.project1.link": "View on GitHub",
    "work.project2.status": "Soon to come",
    "work.project2.title": "Project two",
    "work.project2.desc": "Another project is being sketched out. Check back soon for the title, tech stack and a link.",
    "work.project2.tech": "To be announced",
    "work.card.link": "Link coming soon",

    "work.this.eyebrow": "Meanwhile",
    "work.this.title": "You're already looking at project zero",
    "work.this.desc": "This portfolio \u2014 hand-built with plain HTML, CSS and JavaScript, no frameworks \u2014 is the first project on the shelf. Everything here, from the language toggle to the pencil cursor, is code I wrote myself.",

    "work.band.quote": "First project: prove I can ship. This one just did.",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.intro": "Question, opportunity, or just want to say hello \u2014 my inbox is open. I usually reply within a day or two.",

    "contact.details.eyebrow": "Reach me directly",
    "contact.email.label": "Email",
    "contact.email.copy": "Copy",
    "contact.email.copied": "Copied!",
    "contact.phone.label": "Phone",
    "contact.phone.copy": "Copy",
    "contact.phone.copied": "Copied!",
    "contact.location.label": "Location",
    "contact.location.value": "Wanica District, Suriname",

    "contact.form.eyebrow": "Send a message",
    "contact.form.title": "Drop me a line",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",
    "contact.form.sending": "Opening your mail app\u2026",
    "contact.form.note": "This opens your email app with the message pre-filled, addressed to me \u2014 nothing is sent from this page.",

    "contact.band.quote": "Every good project starts with a short message.",

    "404.title": "Not every page has a link yet",
  },
  nl: {
    "nav.home": "Home",
    "nav.about": "Over mij",
    "nav.work": "Portfolio",
    "nav.contact": "Contact",
    "nav.menu": "Menu",

    "footer.tagline": "Ideeën schetsen tot software.",
    "footer.nav": "Navigatie",
    "footer.contact": "Contact",
    "footer.location": "Wanica District, Suriname",
    "footer.rights": "Alle rechten voorbehouden.",
    "footer.made": "Handmatig gemaakt met HTML, CSS &amp; JavaScript.",

    "home.eyebrow": "Portfolio \u2014 ICT-student",
    "home.hello": "Hallo, ik ben",
    "home.role": "ICT-student &amp; aspirant developer",
    "home.intro": "Ik ben een gemotiveerde student met een sterke interesse in technologie en softwareontwikkeling. Gedreven door probleemoplossend denken en innovatie, wil ik mijn technische vaardigheden voortdurend verbeteren en toepassen in praktijkgerichte projecten.",
    "home.cta.work": "Bekijk mijn werk",
    "home.cta.contact": "Neem contact op",
    "home.scroll": "scroll",

    "home.roles.eyebrow": "Op dit moment",
    "home.roles.title": "Waar ik nu mee bezig ben",
    "home.role1.title": "ICT-student",
    "home.role1.sub": "University of Applied Sciences and Technology \u2014 School of ICT",
    "home.role1.desc": "Sinds 2024 bezig met een stevige basis in softwareontwikkeling en probleemoplossend denken.",
    "home.role2.title": "Chat Support Agent",
    "home.role2.sub": "ETB \u2014 Telecom",
    "home.role2.desc": "Sinds 2026 help ik klanten van een internationaal telecombedrijf via chat.",

    "home.experience.eyebrow": "Recent",
    "home.experience.title": "Werkervaring",
    "home.exp1.role": "Chat Support Agent",
    "home.exp1.company": "ETB",
    "home.exp1.period": "2026 \u2014 heden",
    "home.exp1.desc": "Afhandelen van inkomende klantchats voor een internationaal telecombedrijf: vragen beantwoorden, verzoeken verwerken en oplossingsgerichte ondersteuning bieden.",
    "home.exp2.role": "Callcenter Agent",
    "home.exp2.company": "Wengage",
    "home.exp2.period": "2024 \u2014 2026",
    "home.exp2.desc": "Inkomende en uitgaande telefoongesprekken afgehandeld voor een internationaal telecombedrijf: afspraken plannen, bestellingen verwerken, diensten aanpassen en verkoopgesprekken voeren.",
    "home.exp.more": "Lees mijn volledige achtergrond \u2192",

    "home.skills.eyebrow": "Toolkit",
    "home.skills.title": "Vaardigheden",
    "home.skill1.title": "HTML",
    "home.skill1.desc": "Nette, semantische pagina's bouwen die op elk apparaat overeind blijven.",
    "home.skill2.title": "CSS",
    "home.skill2.desc": "Vormgeving en layout, van strakke grids tot kleine handgemaakte details.",
    "home.skill3.title": "JavaScript",
    "home.skill3.desc": "Logica en interactie toevoegen om een pagina tot leven te brengen.",
    "home.skill4.title": "Klantvriendelijk",
    "home.skill4.desc": "Jaren direct klantcontact leerden me geduld en een vriendelijke toon, ook onder druk.",
    "home.skill5.title": "Samenwerken",
    "home.skill5.desc": "Prettig samenwerken met anderen richting één gedeeld resultaat.",
    "home.skill6.title": "Oplossingsgericht",
    "home.skill6.desc": "Ik zoek de praktische oplossing, niet alleen de verklaring voor wat er misging.",

    "home.band.quote": "Van nature nieuwsgierig, oplossingsgericht in alles.",

    "home.projects.eyebrow": "Alvast een kijkje",
    "home.projects.title": "Recente projecten",
    "home.projects.desc": "Mijn softwareprojecten staan nog in de oven \u2014 deze portfolio is zelf het eerste dat eruit komt. Volledige projecten volgen binnenkort.",
    "home.projects.cta": "Bekijk de portfolio-pagina \u2192",

    "about.eyebrow": "Over mij",
    "about.title": "Het verhaal achter het scherm",
    "about.intro": "Ik ben een gemotiveerde student met een sterke interesse in technologie en softwareontwikkeling. Gedreven door probleemoplossend denken en innovatie, met de ambitie om mijn technische vaardigheden voortdurend te verbeteren en toe te passen in praktijkgerichte projecten.",
    "about.intro2": "Naast mijn studie vind ik het leuk om uit te zoeken hoe dingen écht werken \u2014 of dat nu software is, een klantprobleem, of een nieuwe tool die ik nog niet eerder heb aangeraakt.",

    "about.education.eyebrow": "Opleiding",
    "about.education.title": "Onderwijs",
    "about.edu1.period": "2021 \u2014 2024",
    "about.edu1.title": "Mr. Dr. J.C. de Miranda Lyceum",
    "about.edu1.desc": "Vwo-diploma, S-richting.",
    "about.edu2.period": "2024 \u2014 heden",
    "about.edu2.title": "University of Applied Sciences and Technology",
    "about.edu2.desc": "School of ICT.",
    "about.edu3.period": "Certificaat",
    "about.edu3.title": "Noordhoff \u2014 Hogeschooltaal",
    "about.edu3.desc": "Nederlandse taalvaardigheid, niveau 3F.",

    "about.skills.eyebrow": "Toolkit",
    "about.skills.title": "Vaardigheden",
    "about.skill1.title": "HTML",
    "about.skill1.desc": "Nette, semantische pagina's bouwen die op elk apparaat overeind blijven.",
    "about.skill2.title": "CSS",
    "about.skill2.desc": "Vormgeving en layout, van strakke grids tot kleine handgemaakte details.",
    "about.skill3.title": "JavaScript",
    "about.skill3.desc": "Logica en interactie toevoegen om een pagina tot leven te brengen.",
    "about.skill4.title": "Klantvriendelijk",
    "about.skill4.desc": "Jaren direct klantcontact leerden me geduld en een vriendelijke toon, ook onder druk.",
    "about.skill5.title": "Samenwerken",
    "about.skill5.desc": "Prettig samenwerken met anderen richting één gedeeld resultaat.",
    "about.skill6.title": "Oplossingsgericht",
    "about.skill6.desc": "Ik zoek de praktische oplossing, niet alleen de verklaring voor wat er misging.",

    "about.work.eyebrow": "Achtergrond",
    "about.work.title": "Werkervaring",
    "about.work1.role": "Chat Support Agent",
    "about.work1.company": "ETB \u2014 Telecom",
    "about.work1.period": "2026 \u2014 heden",
    "about.work1.desc": "Ondersteuning van klanten van een internationaal telecombedrijf via chat: vragen beantwoorden, verzoeken verwerken en oplossingsgerichte hulp bieden \u2014 de chat-variant van mijn eerdere callcenterwerk.",
    "about.work2.role": "Callcenter Agent",
    "about.work2.company": "Wengage \u2014 Telecom",
    "about.work2.period": "2024 \u2014 2026",
    "about.work2.desc": "Verantwoordelijk voor het professioneel afhandelen van inkomende en uitgaande telefoongesprekken van klanten bij een internationaal telecombedrijf. Taken omvatten het plannen van afspraken, verwerken van bestellingen, aanpassen van diensten, uitvoeren van verkoopgesprekken en het bieden van oplossingsgerichte ondersteuning bij uiteenlopende klantvragen.",
    "about.work3.role": "Verkoopmedewerker",
    "about.work3.company": "Lucky Store",
    "about.work3.period": "2023",
    "about.work3.desc": "Verantwoordelijk voor het adviseren en begeleiden van klanten bij aankoopbeslissingen op de witgoedafdeling. Taken omvatten onder andere het afhandelen van garantie- en leveringsregelingen, het plaatsen van bestellingen bij tekorten en het onderhouden en overzichtelijk houden van de afdeling.",

    "about.band.quote": "Elk probleem is gewoon een project dat nog niet is opgelost.",

    "about.cta.title": "Liever de korte versie?",
    "about.cta.desc": "Bekijk waar ik nu aan werk en waar ik naartoe ga.",
    "about.cta.button": "Neem contact op \u2192",

    "work.eyebrow": "Portfolio",
    "work.title": "Werk in uitvoering",
    "work.intro": "Ik sta nog aan het begin van mijn ontwikkelaarsreis en mijn projectenplank vult zich nog. Dit komt eraan \u2014 echte projecten, met echte toelichting, binnenkort.",
    "work.filter.all": "Alles",
    "work.filter.soon": "Binnenkort",

    "work.project1.status": "In ontwikkeling",
    "work.project1.title": "Studie4SU",
    "work.project1.desc": "Studie4SU is een platform, gebouwd door een team van Software Engineering-studenten, dat studenten en schoolzoekenden in Suriname helpt bij het vinden van de juiste studie en school. De missie: studiekeuze makkelijker en sneller maken. Het doel op lange termijn: hét centrale platform worden voor alle schoolzoekenden in Suriname.",
    "work.project1.link": "Bekijk op GitHub",
    "work.project2.status": "Binnenkort",
    "work.project2.title": "Project twee",
    "work.project2.desc": "Nog een project wordt uitgewerkt. Kom snel terug voor de titel, techstack en link.",
    "work.project2.tech": "Nog bekend te maken",
    "work.card.link": "Link volgt binnenkort",

    "work.this.eyebrow": "Ondertussen",
    "work.this.title": "Je kijkt al naar project nul",
    "work.this.desc": "Deze portfolio \u2014 met de hand gebouwd in HTML, CSS en JavaScript, zonder frameworks \u2014 is het eerste project op de plank. Alles hier, van de taalknop tot de potloodcursor, is code die ik zelf heb geschreven.",

    "work.band.quote": "Eerste project: bewijzen dat ik iets kan opleveren. Dit is het bewijs.",

    "contact.eyebrow": "Contact",
    "contact.title": "Laten we praten",
    "contact.intro": "Vraag, kans, of gewoon even hallo zeggen \u2014 mijn inbox staat open. Ik reageer meestal binnen een paar dagen.",

    "contact.details.eyebrow": "Bereik me direct",
    "contact.email.label": "E-mail",
    "contact.email.copy": "Kopiëren",
    "contact.email.copied": "Gekopieerd!",
    "contact.phone.label": "Telefoon",
    "contact.phone.copy": "Kopiëren",
    "contact.phone.copied": "Gekopieerd!",
    "contact.location.label": "Locatie",
    "contact.location.value": "Wanica District, Suriname",

    "contact.form.eyebrow": "Stuur een bericht",
    "contact.form.title": "Stuur me een berichtje",
    "contact.form.name": "Naam",
    "contact.form.email": "E-mail",
    "contact.form.message": "Bericht",
    "contact.form.send": "Verstuur bericht",
    "contact.form.sending": "Mailprogramma wordt geopend\u2026",
    "contact.form.note": "Dit opent je e-mailprogramma met het bericht vooraf ingevuld, geadresseerd aan mij \u2014 er wordt niets verzonden vanaf deze pagina.",

    "contact.band.quote": "Elk goed project begint met een kort berichtje.",

    "404.title": "Niet elke pagina heeft al een link",
  }
};

/* Exposed so page-specific scripts (e.g. contact.js) can look up a
   translated string for the current language without duplicating the
   dictionary. */
window.t = function t(key){
  const dict = translations[getLang()] || translations.en;
  return dict[key] || key;
};

const LANG_KEY = "raksha-portfolio-lang";

function getLang(){
  return localStorage.getItem(LANG_KEY) || "en";
}

function setLang(lang){
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function applyLang(lang){
  const dict = translations[lang] || translations.en;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined){
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined){
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

/* ---------------------------------------------------------
   2) MOBILE NAV TOGGLE
   --------------------------------------------------------- */
function initNavToggle(){
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------
   3) SCROLL REVEAL + DOODLE DRAW-IN
   --------------------------------------------------------- */
function initScrollReveal(){
  const targets = document.querySelectorAll(".reveal, .doodle");
  if (!("IntersectionObserver" in window) || targets.length === 0){
    targets.forEach((t) => t.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  targets.forEach((t) => observer.observe(t));
}

/* ---------------------------------------------------------
   4) FOOTER YEAR
   --------------------------------------------------------- */
function setFooterYear(){
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   5) COPY TO CLIPBOARD (used by contact page buttons)
   --------------------------------------------------------- */
function initCopyButtons(){
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.getAttribute("data-copy");
      const labelEl = btn.querySelector("[data-copy-label]");
      const dict = translations[getLang()] || translations.en;
      try{
        await navigator.clipboard.writeText(value);
      }catch(err){
        const temp = document.createElement("textarea");
        temp.value = value;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      if (labelEl){
        const copiedKey = btn.getAttribute("data-copy-key-copied");
        const original = labelEl.textContent;
        labelEl.textContent = dict[copiedKey] || "Copied!";
        btn.classList.add("copied");
        setTimeout(() => {
          labelEl.textContent = original;
          btn.classList.remove("copied");
        }, 1800);
      }
    });
  });
}

/* ---------------------------------------------------------
   6) ACTIVE NAV LINK BASED ON CURRENT FILE
   --------------------------------------------------------- */
function markActiveNav(){
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href").replace("./", "");
    if (href === path || (path === "" && href === "index.html")){
      link.setAttribute("aria-current", "page");
    }
  });
}

/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  applyLang(getLang());
  initNavToggle();
  initScrollReveal();
  setFooterYear();
  initCopyButtons();
  markActiveNav();

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });
});
