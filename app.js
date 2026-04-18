"use strict";

const navItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];

const painPoints = [
  {
    tag: "Caos multicanal",
    title: "Los pedidos por chat y las ventas del local no hablan entre si.",
    copy:
      "Cuando cada canal se atiende por separado, el stock deja de ser una fuente confiable para vender con seguridad.",
  },
  {
    tag: "Control manual",
    title: "El inventario depende del ojo, del cuaderno o de la memoria.",
    copy:
      "Eso vuelve lenta la operacion y hace que los descuadres aparezcan justo cuando mas necesitas claridad.",
  },
  {
    tag: "Caja desordenada",
    title: "Efectivo, pagos digitales y vouchers se mezclan sin una vista clara.",
    copy:
      "El cierre se vuelve pesado, la conciliacion tarda y los errores quedan ocultos hasta el final del turno.",
  },
];

const features = [
  {
    title: "Pedidos por WhatsApp",
    copy:
      "Organiza la atencion del canal mas usado por tus clientes sin depender del celular todo el dia.",
    icon: "chat",
  },
  {
    title: "Inventario en tiempo real",
    copy:
      "Consulta disponibilidad actualizada para vender con mas criterio y reponer antes de llegar al quiebre.",
    icon: "boxes",
  },
  {
    title: "Validacion con balanza IoT",
    copy:
      "Contrasta el stock digital con el peso real y reduce la incertidumbre en productos de alta rotacion.",
    icon: "scale",
  },
  {
    title: "Control financiero y conciliacion",
    copy:
      "Separa efectivo y pagos electronicos para cerrar caja con una lectura mas clara y ordenada.",
    icon: "wallet",
  },
];

const steps = [
  {
    title: "Organizas tu base",
    copy: "Registras productos y puntos clave de tu operacion en un flujo guiado.",
  },
  {
    title: "Conectas tus canales",
    copy: "WhatsApp y tienda dejan de trabajar por separado y empiezan a compartir contexto.",
  },
  {
    title: "Validas el stock",
    copy: "La balanza inteligente ayuda a contrastar lo registrado con lo que realmente hay.",
  },
  {
    title: "Cobras con mas control",
    copy: "Los ingresos se ordenan mejor y el cierre del dia se vuelve mas claro.",
  },
];

const benefits = [
  {
    title: "Menos errores manuales",
    copy: "Menos dependencia de apuntes sueltos, memoria o revisiones tardias.",
  },
  {
    title: "Menos perdida por perecibles",
    copy: "Mayor visibilidad para detectar faltantes, exceso de rotacion o mermas.",
  },
  {
    title: "Mas control diario",
    copy: "Una lectura mas clara de inventario, pedidos y cobros desde el mismo ecosistema.",
  },
  {
    title: "Mas rapidez operativa",
    copy: "Decisiones mas rapidas para vender, responder, reponer y cerrar caja.",
  },
];

const trustPoints = [
  {
    title: "Stock validado",
    copy: "Menos riesgo de prometer productos que ya no estan disponibles.",
  },
  {
    title: "Pagos confirmados",
    copy: "Mayor claridad para compras hechas por medios digitales.",
  },
  {
    title: "Atencion mas rapida",
    copy: "Un flujo conversacional mejor organizado mejora la percepcion del negocio.",
  },
];

const comparisonRows = [
  {
    criterion: "Pedidos por WhatsApp",
    manual: "Se atienden entre chats y notas sueltas.",
    generic: "No siempre quedan dentro del mismo flujo.",
    entreprenly: "Se conectan con pedido, stock y seguimiento.",
  },
  {
    criterion: "Stock confiable",
    manual: "Depende del conteo visual y revisiones tardias.",
    generic: "Hay registro digital, pero no validacion fisica continua.",
    entreprenly: "Se valida con balanza y alertas en tiempo real.",
  },
  {
    criterion: "Adopcion del equipo",
    manual: "Genera errores repetidos y mucho retrabajo.",
    generic: "Suele sentirse pesada para equipos pequenos.",
    entreprenly: "Prioriza una operacion simple, visual y clara.",
  },
  {
    criterion: "Enfoque operativo",
    manual: "Se trabaja reaccionando cuando el problema ya ocurrio.",
    generic: "Suele ser amplio, pero poco aterrizado al comercio pequeno.",
    entreprenly: "Se enfoca en perecibles, rotacion, pedidos y caja diaria.",
  },
];

const comparisonColumns = [
  { key: "manual", label: "Gestion manual" },
  { key: "generic", label: "Sistemas genericos" },
  { key: "entreprenly", label: "Entreprenly", featured: true },
];

const plans = [
  {
    name: "Plan Free",
    title: "Inventario basico para empezar sin costo",
    description: "Para comercios que quieren dejar el cuaderno y ordenar lo esencial antes de digitalizar ventas y pedidos.",
    monthly: "S/ 0",
    annualMonthly: "S/ 0",
    monthlyNote: "Siempre gratis",
    annualNote: "Siempre gratis",
    items: [
      "Hasta 40 productos y 20 lotes activos.",
      "1 usuario con acceso al dashboard.",
      "Gestion basica de productos, lotes, busqueda y alertas de inventario.",
      "Consulta manual de stock y control web simple.",
      "Sin chatbot de WhatsApp ni automatizaciones avanzadas.",
    ],
    cta: "Registrarse",
    featured: false,
  },
  {
    name: "Plan Control",
    title: "Todo lo necesario para operar con mas orden cada dia",
    description: "Une inventario, ventas, pedidos y caja en un solo flujo para comercios que ya necesitan trabajar con mas control.",
    monthly: "S/ 89",
    annualMonthly: "S/ 79",
    monthlyNote: "Facturacion mensual",
    annualNote: "Compromiso anual, facturado mes a mes",
    items: [
      "Productos y lotes ilimitados.",
      "Hasta 5 usuarios con acceso al dashboard y roles simples.",
      "Chatbot de WhatsApp para catalogo, pedidos y validacion de stock.",
      "Modulo de ventas con resumen diario de caja por medios de pago.",
      "Alertas operativas, trazabilidad y reportes mas completos.",
    ],
    cta: "Registrarse",
    featured: true,
  },
];


const faqs = [
  {
    question: "Necesito saber de tecnologia para usar Entreprenly?",
    answer:
      "No. La propuesta esta pensada para comerciantes que necesitan una herramienta simple, clara y aplicable desde el primer dia.",
  },
  {
    question: "Puedo empezar sin integrar todo desde el inicio?",
    answer:
      "Si. La estructura comercial de la landing plantea una adopcion por etapas para que el negocio avance segun su ritmo y necesidad.",
  },
  {
    question: "La balanza inteligente es obligatoria desde el primer momento?",
    answer:
      "No necesariamente. La propuesta puede crecer hacia una validacion fisica mas avanzada conforme el negocio lo requiera.",
  },
  {
    question: "Sirve si ya vendo por WhatsApp todos los dias?",
    answer:
      "Precisamente ahi esta una parte fuerte del valor: ordenar ese canal, reducir errores y conectarlo mejor con tu operacion diaria.",
  },
];

const socialLinks = [
  { label: "Instagram", href: "#top", icon: "instagram" },
  { label: "Facebook", href: "#top", icon: "facebook" },
  { label: "WhatsApp", href: "#top", icon: "whatsapp" },
];

const root = document.getElementById("app");

const state = {
  menuOpen: false,
  billingCycle: "monthly",
};


function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[char]));
}

function icon(name, className = "") {
  const cls = className ? ` class="${className}"` : "";
  const common = `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"${cls} aria-hidden="true"`;
  const bold = `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"${cls} aria-hidden="true"`;

  const icons = {
    chat: `<svg ${common}><path d="M7 18l-3 2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7z"></path><path d="M8 9h8M8 13h5"></path></svg>`,
    boxes: `<svg ${common}><path d="M3 7l9-4 9 4-9 4-9-4z"></path><path d="M3 7v10l9 4 9-4V7M12 11v10"></path></svg>`,
    scale: `<svg ${common}><path d="M12 4v16M7 7h10M5 20h14"></path><path d="M7 7l-3 6h6L7 7zM17 7l-3 6h6l-3-6z"></path></svg>`,
    wallet: `<svg ${common}><path d="M4 7a2 2 0 0 1 2-2h11l3 3v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z"></path><path d="M15 12h5M17 12a1 1 0 1 1 0 .01"></path></svg>`,
    check: `<svg ${bold}><path d="M5 13l4 4L19 7"></path></svg>`,
    user: `<svg ${common}><circle cx="12" cy="8" r="4"></circle><path d="M4 20a8 8 0 0 1 16 0"></path></svg>`,
    instagram: `<svg ${common}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"></circle></svg>`,
    facebook: `<svg ${common}><path d="M13.5 20v-6h2.8l.4-3h-3.2V9.1c0-.9.3-1.6 1.8-1.6H17V4.8c-.3 0-.9-.1-2-.1-2.6 0-4.2 1.5-4.2 4.4V11H8v3h2.8v6"></path></svg>`,
    whatsapp: `<svg ${common}><path d="M20 11.5a8.5 8.5 0 0 1-12.4 7.5L4 20l1.1-3.2A8.5 8.5 0 1 1 20 11.5z"></path><path d="M9.2 8.7c.2-.5.5-.5.7-.5h.6c.2 0 .5 0 .7.5l.4 1.1c.1.3.1.5-.1.8l-.5.7c-.1.2-.2.3 0 .6.3.5.8 1.1 1.4 1.5.7.5 1.2.7 1.4.8.2.1.4.1.6-.1l.7-.8c.2-.2.4-.3.7-.2l1 .5c.3.1.5.3.4.7l-.3 1c-.1.3-.3.5-.6.6-.5.1-1.3.2-2.4-.2-1-.4-2.1-1.1-3.2-2.1-.8-.8-1.4-1.7-1.8-2.6-.4-.9-.3-1.7-.2-2.1z"></path></svg>`,
    arrowLeft: `<svg ${common}><path d="M19 12H5"></path><path d="M11 18l-6-6 6-6"></path></svg>`,
    mail: `<svg ${common}><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M4 7l8 6 8-6"></path></svg>`,
    lock: `<svg ${common}><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V8a4 4 0 1 1 8 0v3"></path></svg>`,
    google: `<svg ${common}><path d="M20 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h4.5a4.5 4.5 0 0 1-1.9 3l2.9 2.3c1.7-1.6 2.5-3.9 2.5-7z"></path><path d="M12 20.3c2.3 0 4.2-.8 5.6-2.1l-2.9-2.3c-.8.5-1.7.8-2.7.8-2.1 0-3.9-1.4-4.5-3.4l-3 .2v2.4a8.4 8.4 0 0 0 7.5 4.4z"></path><path d="M7.5 13.3a5.1 5.1 0 0 1 0-2.7V8.2l-3-.2A8.4 8.4 0 0 0 3.7 12c0 1.3.3 2.6.8 3.7l3-.2z"></path><path d="M12 7.3c1.2 0 2.3.4 3.1 1.2l2.4-2.4A8.1 8.1 0 0 0 12 3.7 8.4 8.4 0 0 0 4.5 8l3 2.4c.6-2 2.4-3.1 4.5-3.1z"></path></svg>`,
    dashboard: `<svg ${common}><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="4" rx="1.5"></rect><rect x="14" y="10" width="7" height="11" rx="1.5"></rect><rect x="3" y="13" width="7" height="8" rx="1.5"></rect></svg>`,
    receipt: `<svg ${common}><path d="M7 3h10v18l-2-1.5L12 21l-3-1.5L7 21V3z"></path><path d="M9.5 8h5M9.5 12h5M9.5 16h3.5"></path></svg>`,
    bell: `<svg ${common}><path d="M6 17h12"></path><path d="M8 17V11a4 4 0 1 1 8 0v6"></path><path d="M10 19a2 2 0 0 0 4 0"></path></svg>`,
    alert: `<svg ${common}><path d="M12 4l8 14H4L12 4z"></path><path d="M12 9v4"></path><circle cx="12" cy="16.5" r="0.7" fill="currentColor" stroke="none"></circle></svg>`,
    logout: `<svg ${common}><path d="M14 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"></path><path d="M10 12h10"></path><path d="M17 8l4 4-4 4"></path></svg>`,
  };

  return icons[name] || "";
}

function render(options = {}) {
  root.innerHTML = renderLanding();

  if (options.scrollTo) {
    window.setTimeout(() => {
      document.getElementById(options.scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }
}

function renderPreserveScroll() {
  const x = window.scrollX;
  const y = window.scrollY;
  render();
  window.scrollTo(x, y);
}

function navLinks(mobile = false) {
  const baseClass = mobile
    ? "rounded-2xl px-4 py-3 text-sm font-semibold text-brand-brownEarth transition hover:bg-brand-yellow"
    : "rounded-full px-1 py-1 text-sm font-semibold text-brand-brownEarth transition hover:text-brand-orange";

  return navItems
    .map((item) => `<a href="${item.href}" class="${baseClass}" data-nav-link>${escapeHtml(item.label)}</a>`)
    .join("");
}

function sectionShell(content, options = {}) {
  const background = options.toned
    ? "bg-[linear-gradient(180deg,rgba(255,247,225,0.42),rgba(246,244,244,0))]"
    : options.accent
      ? "bg-[linear-gradient(180deg,rgba(252,224,212,0.52),rgba(255,255,255,0)),#F6F4F4]"
      : "";
  const id = options.id ? ` id="${options.id}"` : "";

  return `<section${id} class="px-4 py-20 ${background}"><div class="mx-auto max-w-7xl">${content}</div></section>`;
}

function sectionHeading({ eyebrow, title, copy }) {
  return `
    <div class="max-w-3xl">
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h2 class="text-balance text-4xl font-extrabold leading-tight tracking-[-0.06em] text-brand-black md:text-5xl">${escapeHtml(title)}</h2>
      ${copy ? `<p class="mt-4 text-lg leading-8 text-brand-gray">${escapeHtml(copy)}</p>` : ""}
    </div>
  `;
}

function renderLanding() {
  const currentYear = new Date().getFullYear();

  return `
    <div class="min-h-screen bg-brand-white text-brand-black">
      <div class="bg-grid-overlay pointer-events-none fixed inset-0"></div>

      <header class="sticky top-0 z-50 px-4 pt-4">
        <div class="relative mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-brand-brownDeep/10 bg-white/80 px-5 py-4 shadow-card backdrop-blur-xl">
          <a href="#top" class="shrink-0">
            <img src="./assets/brand-logo-light-transparent.png" alt="Entreprenly" class="h-12 w-auto sm:h-13" />
          </a>

          <nav class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
            ${navLinks(false)}
          </nav>

          <div class="hidden items-center gap-2 lg:flex">
            <a href="./login.html" class="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-brand-brownDeep/12 bg-white/80 px-5 py-3 text-sm font-bold text-brand-brownDeep backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-brownDeep/25">
              ${icon("user", "h-4 w-4")}
              Iniciar sesion
            </a>
            <a href="./register.html" class="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-brownDeep px-5 py-3 text-sm font-bold text-brand-white transition hover:-translate-y-0.5 hover:bg-brand-brownEarth">
              Registrarse
            </a>
          </div>

          <button type="button" class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-brownDeep/10 bg-brand-yellow text-brand-brownDeep lg:hidden" aria-expanded="${state.menuOpen}" aria-label="Abrir menu" data-action="toggle-menu">
            <span class="sr-only">Abrir menu</span>
            <div class="flex flex-col gap-1.5">
              <span class="h-0.5 w-5 rounded-full bg-current"></span>
              <span class="h-0.5 w-5 rounded-full bg-current"></span>
              <span class="h-0.5 w-5 rounded-full bg-current"></span>
            </div>
          </button>
        </div>

        ${state.menuOpen ? `
          <div class="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-brand-brownDeep/10 bg-white/95 p-4 shadow-card backdrop-blur-xl lg:hidden" data-mobile-menu>
            <nav class="flex flex-col gap-3">${navLinks(true)}</nav>
            <div class="mt-4 flex flex-col gap-2">
              <a href="./login.html" class="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-brand-brownDeep/12 bg-white/80 px-5 py-3 text-sm font-bold text-brand-brownDeep backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-brownDeep/25">
                ${icon("user", "h-4 w-4")}
                Iniciar sesion
              </a>
              <a href="./register.html" class="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-brand-brownDeep px-5 py-3 text-sm font-bold text-brand-white transition hover:-translate-y-0.5 hover:bg-brand-brownEarth">
                Registrarse
              </a>
            </div>
          </div>
        ` : ""}
      </header>

      <main id="top">
        <section class="relative -mt-32 overflow-hidden px-4 pb-14 pt-44 sm:-mt-36 sm:pt-48">
          <div class="hero-ambience absolute inset-0"></div>

          <div class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p class="eyebrow">Smart Retail para el comercio real</p>
              <h1 class="max-w-[11ch] text-balance text-5xl font-extrabold leading-[0.92] tracking-[-0.07em] sm:text-6xl lg:text-[5.4rem]">
                Controla inventario, pedidos y cobros sin volver tu negocio mas complicado.
              </h1>
              <p class="mt-6 max-w-2xl text-lg leading-8 text-brand-gray">
                Entreprenly conecta tus ventas por WhatsApp, la atencion en tienda y la validacion de
                stock con balanza inteligente para que trabajes con mas orden, menos merma y mas
                confianza desde el primer dia.
              </p>

              <div class="mt-8 flex flex-wrap gap-3">
                <a href="#planes" class="cta-primary">Ver planes</a>
              </div>

              <ul class="mt-8 flex flex-wrap gap-3">
                ${[
                  "WhatsApp + tienda en un mismo flujo",
                  "Stock validado en tiempo real",
                  "Caja mas clara al cierre",
                ].map((item) => `
                  <li class="rounded-full border border-brand-brownDeep/10 bg-white/85 px-4 py-3 text-sm font-semibold text-brand-brownDeep shadow-sm backdrop-blur">${escapeHtml(item)}</li>
                `).join("")}
              </ul>
            </div>

            ${heroVisual()}
          </div>
        </section>

        ${sectionShell(`
          ${sectionHeading({
            eyebrow: "El problema",
            title: "Tu negocio no pierde solo por vender menos. Tambien pierde por operar a ciegas.",
            copy: "Entre el cuaderno, la memoria, el WhatsApp y la caja, el dia a dia se llena de errores pequenos que terminan costando tiempo, productos y confianza.",
          })}
          <div class="grid gap-5 lg:grid-cols-3">
            ${painPoints.map((item) => `
              <article class="soft-card bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(252,224,212,0.55))]">
                <span class="pill-tag">${escapeHtml(item.tag)}</span>
                <h3 class="mt-4 text-2xl font-bold tracking-[-0.04em] text-brand-black">${escapeHtml(item.title)}</h3>
                <p class="mt-4 leading-8 text-brand-gray">${escapeHtml(item.copy)}</p>
              </article>
            `).join("")}
          </div>
        `)}

        ${sectionShell(`
          <div class="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            ${sectionHeading({
              eyebrow: "Funcionalidades principales",
              title: "Cuatro piezas clave para ordenar una operacion que hoy esta dispersa.",
            })}
            <p class="text-lg leading-8 text-brand-gray">
              La landing explica el valor del producto sin parecer un dashboard: tecnologia clara,
              visuales simples y beneficios concretos para comerciantes no tecnicos.
            </p>
          </div>

          <div class="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
            ${features.map((feature) => `
              <article class="soft-card flex min-h-65 flex-col bg-white/90">
                <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#F38313,#C79D08)] text-brand-white shadow-[0_14px_28px_rgba(243,131,19,0.22)]">
                  ${icon(feature.icon, "h-6 w-6")}
                </div>
                <h3 class="mt-5 text-2xl font-bold tracking-[-0.04em]">${escapeHtml(feature.title)}</h3>
                <p class="mt-4 leading-8 text-brand-gray">${escapeHtml(feature.copy)}</p>
              </article>
            `).join("")}
          </div>
        `, { toned: true })}

        ${sectionShell(`
          ${sectionHeading({
            eyebrow: "Como funciona",
            title: "Una adopcion pensada para negocios que no tienen tiempo para sistemas complicados.",
          })}
          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            ${steps.map((step, index) => `
              <article class="soft-card bg-white/90">
                <div class="inline-grid h-11 w-11 place-items-center rounded-full bg-brand-yellow text-lg font-extrabold text-brand-brownDeep">${index + 1}</div>
                <h3 class="mt-4 text-2xl font-bold tracking-[-0.04em]">${escapeHtml(step.title)}</h3>
                <p class="mt-4 leading-8 text-brand-gray">${escapeHtml(step.copy)}</p>
              </article>
            `).join("")}
          </div>
        `, { id: "como-funciona" })}

        ${sectionShell(`
          ${sectionHeading({
            eyebrow: "Beneficios para el comerciante",
            title: "Menos errores. Menos merma. Mas control.",
            copy: "Entreprenly esta pensado para microcomercios que necesitan orden operativo sin sumar friccion ni aprendizaje pesado.",
          })}

          <div class="mt-8 grid gap-8 lg:grid-cols-[1.14fr_0.86fr]">
            <div class="grid gap-4">
              ${benefits.map((item) => `
                <article class="soft-card bg-white/92">
                  <h3 class="text-2xl font-bold tracking-[-0.04em]">${escapeHtml(item.title)}</h3>
                  <p class="mt-3 leading-8 text-brand-gray">${escapeHtml(item.copy)}</p>
                </article>
              `).join("")}
            </div>

            <aside class="flex h-full w-full flex-col rounded-[1.35rem] border border-brand-brownDeep/10 bg-[radial-gradient(circle_at_top_right,rgba(243,131,19,0.16),transparent_30%),linear-gradient(160deg,#FFF7E1,#FCE0D4)] px-5 py-5 shadow-soft">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <span class="mini-tag">Resumen visual</span>
                <span class="rounded-full bg-white/75 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-brownDeep/70">Operacion simple</span>
              </div>

              <p class="mt-4 text-sm leading-6 text-brand-gray">Una vista rapida de lo que gana el comerciante cuando trabaja con una operacion mas ordenada.</p>

              <ul class="mt-5 space-y-3">
                ${[
                  "Interfaz clara para tareas del dia a dia.",
                  "Flujos agiles para vender, reponer y cobrar.",
                  "Stock mas visible para evitar faltantes y mermas.",
                  "Adopcion rapida sin capacitacion pesada.",
                ].map((item) => `
                  <li class="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/72 px-3.5 py-3 text-brand-brownDeep shadow-[0_8px_20px_rgba(81,30,0,0.05)]">
                    ${icon("check", "mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-orange")}
                    <span class="text-sm font-semibold leading-6">${escapeHtml(item)}</span>
                  </li>
                `).join("")}
              </ul>
            </aside>
          </div>
        `, { accent: true, id: "beneficios" })}

        ${sectionShell(`
          <div class="grid gap-8 lg:grid-cols-2">
            ${sectionHeading({
              eyebrow: "Confianza para el cliente final",
              title: "Si el stock es real, comprar por chat tambien se vuelve mas confiable.",
              copy: "El comerciante gana orden operativo, pero el cliente tambien gana respuestas mas rapidas, menos incertidumbre y confirmaciones mas claras.",
            })}

            <div class="grid gap-4">
              ${trustPoints.map((item) => `
                <article class="soft-card bg-white/90">
                  <h3 class="text-2xl font-bold tracking-[-0.04em]">${escapeHtml(item.title)}</h3>
                  <p class="mt-3 leading-8 text-brand-gray">${escapeHtml(item.copy)}</p>
                </article>
              `).join("")}
            </div>
          </div>
        `)}

        ${sectionShell(`
          ${sectionHeading({
            eyebrow: "Comparativa breve",
            title: "Entreprenly no busca parecerse a un ERP. Busca resolver el trabajo real del comercio pequeno.",
            copy: "La diferencia no esta solo en digitalizar tareas, sino en conectar pedidos, stock y caja con una logica mas aterrizada al ritmo del negocio.",
          })}
          <div class="mt-10 overflow-hidden rounded-[1.8rem] border border-brand-brownDeep/10 bg-white/86 shadow-card">
            <div class="overflow-x-auto">
              <div class="min-w-230">
                <div class="grid grid-cols-[1.08fr_repeat(3,minmax(0,1fr))]">
                  <div class="bg-brand-black px-5 py-4 text-center text-[11px] font-extrabold uppercase tracking-[0.16em] text-brand-white">Criterio</div>
                  ${comparisonColumns.map((column) => `
                    <div class="border-l px-5 py-4 ${column.featured ? "border-brand-orange/15 bg-[linear-gradient(180deg,rgba(255,247,225,0.96),rgba(252,224,212,0.62))] text-brand-brownDeep" : "border-brand-brownDeep/10 bg-[#F6F4F4]/84 text-brand-brownDeep"}">
                      <div class="flex items-center justify-center gap-2 text-center">
                        ${column.featured ? icon("check", "h-4 w-4 shrink-0 text-brand-orange") : ""}
                        <p class="text-[11px] font-extrabold uppercase tracking-[0.16em]">${escapeHtml(column.label)}</p>
                      </div>
                    </div>
                  `).join("")}
                  ${comparisonRows.map((row, index) => `
                    <div class="contents">
                      <div class="flex items-center justify-center border-t border-brand-brownDeep/10 px-5 py-5 ${index % 2 === 0 ? "bg-white" : "bg-[#F6F4F4]/72"}">
                        <p class="text-center text-base font-bold leading-6 text-brand-black">${escapeHtml(row.criterion)}</p>
                      </div>
                      ${comparisonColumns.map((column) => `
                        <div class="border-l border-t px-5 py-5 ${column.featured ? "border-brand-orange/15 bg-brand-yellow/18" : `border-brand-brownDeep/10 ${index % 2 === 0 ? "bg-white" : "bg-[#F6F4F4]/72"}`}">
                          <p class="text-sm leading-7 ${column.featured ? "font-semibold text-brand-brownDeep" : "text-brand-brownEarth"}">${escapeHtml(row[column.key])}</p>
                        </div>
                      `).join("")}
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>
        `, { toned: true })}

        ${sectionShell(`
          ${sectionHeading({
            eyebrow: "Planes",
            title: "Empieza gratis y escala cuando tu operacion necesite mas control.",
            copy: "Plan Free para ordenar el inventario basico y Plan Control para integrar ventas, pedidos, caja y trazabilidad en un solo flujo.",
          })}
          <div class="mt-8 flex justify-center">
            <div class="inline-flex flex-col rounded-full border border-brand-brownDeep/10 bg-white/90 p-1 shadow-sm sm:flex-row">
              ${[
                { id: "monthly", label: "Mensual" },
                { id: "annual", label: "Anual facturado mensual" },
              ].map((option) => `
                <button type="button" data-action="set-landing-billing" data-cycle="${option.id}" class="rounded-full px-5 py-3 text-sm font-bold transition ${state.billingCycle === option.id ? "bg-brand-yellow text-brand-brownDeep shadow-[0_10px_22px_rgba(243,131,19,0.18)]" : "text-brand-brownEarth hover:text-brand-brownDeep"}">${escapeHtml(option.label)}</button>
              `).join("")}
            </div>
          </div>

          <p class="mt-4 text-center text-sm leading-6 text-brand-gray">El plan anual reduce el costo mensual con compromiso de 12 meses y cobro mes a mes.</p>

          <div class="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
            ${plans.map((plan) => `
              <article class="soft-card flex flex-col ${plan.featured ? "border-brand-orange/30 bg-[radial-gradient(circle_at_top_right,rgba(243,131,19,0.16),transparent_30%),linear-gradient(180deg,rgba(255,247,225,0.92),rgba(255,255,255,0.92))] lg:-translate-y-3" : "bg-white/90"}">
                <div class="flex items-start justify-between gap-4">
                  <span class="mini-tag">${escapeHtml(plan.name)}</span>
                  ${plan.featured ? `<span class="rounded-full border border-brand-orange/20 bg-brand-yellow/40 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-orange">Recomendado</span>` : ""}
                </div>
                <h3 class="mt-5 text-3xl font-bold tracking-[-0.05em]">${escapeHtml(plan.title)}</h3>
                <p class="mt-3 leading-7 text-brand-gray">${escapeHtml(plan.description)}</p>

                <div class="mt-6 rounded-[1.35rem] border border-brand-brownDeep/10 bg-white/75 p-4">
                  <div class="flex items-end justify-between gap-4">
                    <div>
                      <p class="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-brownDeep/45">${state.billingCycle === "monthly" ? "Mensual" : "Anual"}</p>
                      <p class="mt-1 text-3xl font-extrabold tracking-[-0.06em] text-brand-brownDeep">${state.billingCycle === "monthly" ? plan.monthly : plan.annualMonthly}</p>
                      <p class="text-sm font-semibold text-brand-gray">por mes</p>
                    </div>
                    <div class="text-right">
                      <p class="text-xs font-semibold text-brand-orange">${state.billingCycle === "monthly" ? plan.monthlyNote : plan.annualNote}</p>
                    </div>
                  </div>
                </div>

                <ul class="mt-6 space-y-4">
                  ${plan.items.map((item) => `
                    <li class="flex items-start gap-3 text-brand-gray">
                      ${icon("check", "mt-1 h-4 w-4 shrink-0 text-brand-orange")}
                      <span class="leading-5">${escapeHtml(item)}</span>
                    </li>
                  `).join("")}
                </ul>
                <a href="./register.html" class="${plan.featured ? "cta-primary" : "cta-secondary"} mt-8 justify-center">${escapeHtml(plan.cta)}</a>
              </article>
            `).join("")}
          </div>
        `, { id: "planes" })}

        ${sectionShell(`
          <div class="grid gap-8 lg:grid-cols-2">
            ${sectionHeading({
              eyebrow: "FAQ",
              title: "Preguntas comunes antes de dar el siguiente paso.",
              copy: "La landing despeja dudas basicas rapido, sin sobrecargar de detalles tecnicos a un usuario no especializado.",
            })}
            <div class="grid gap-4">
              ${faqs.map((faq) => `
                <details class="faq-item soft-card group bg-white/92 open:bg-brand-yellow/35">
                  <summary class="relative cursor-pointer list-none pr-12 text-lg font-bold tracking-[-0.02em] text-brand-black marker:hidden">
                    <span>${escapeHtml(faq.question)}</span>
                    <span aria-hidden="true" class="faq-plus">+</span>
                  </summary>
                  <p class="mt-4 leading-8 text-brand-gray">${escapeHtml(faq.answer)}</p>
                </details>
              `).join("")}
            </div>
          </div>
        `, { id: "faq" })}

        <section id="cta" class="px-4 pb-16 pt-6">
          <div class="mx-auto grid max-w-7xl gap-8 rounded-4xl bg-[radial-gradient(circle_at_top_right,rgba(255,247,225,0.18),transparent_24%),linear-gradient(135deg,#511E00,#473723)] px-6 py-10 shadow-soft md:px-10 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p class="eyebrow text-brand-white before:bg-[linear-gradient(90deg,#F38313,#FFD678)]">Da el siguiente paso</p>
              <h2 class="text-4xl font-extrabold leading-tight tracking-[-0.06em] text-brand-white md:text-5xl">Haz que tu negocio venda con mas orden y menos incertidumbre.</h2>
              <p class="mt-4 max-w-2xl text-lg leading-8 text-brand-white/80">
                Entreprenly esta pensado para ayudarte a controlar lo importante sin convertir tu
                operacion en algo mas dificil de manejar.
              </p>
            </div>
            <div class="flex flex-wrap gap-3">
              <a href="#planes" class="cta-secondary border-white/15 bg-white/10 text-brand-white">Ver planes</a>
            </div>
          </div>
        </section>
      </main>

      <footer class="px-4 pb-10">
        <div class="mx-auto max-w-7xl rounded-[1.85rem] border border-brand-brownDeep/10 bg-white/88 px-6 py-8 shadow-card md:px-8">
          <div class="grid gap-8 lg:grid-cols-[1.35fr_0.85fr_0.85fr]">
            <div>
              <img src="./assets/brand-logo-light-transparent.png" alt="Entreprenly" class="h-12 w-auto sm:h-13" />
              <p class="mt-4 max-w-md leading-8 text-brand-gray">Smart Retail para pequenos comercios que necesitan ordenar inventario, pedidos y caja sin sumar complejidad operativa.</p>
              <div class="mt-5 flex items-center gap-3">
                ${socialLinks.map((social) => `
                  <a href="${social.href}" aria-label="${escapeHtml(social.label)}" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-brownDeep/10 bg-[#F6F4F4] text-brand-brownEarth transition hover:border-brand-orange/25 hover:text-brand-orange">
                    ${icon(social.icon, "h-4.5 w-4.5")}
                  </a>
                `).join("")}
              </div>
            </div>

            ${footerColumn("Explorar", ["Como funciona", "Beneficios", "Planes", "FAQ"], ["#como-funciona", "#beneficios", "#planes", "#faq"])}
            ${footerColumn("Siguiente paso", ["Registrarse", "Comparar planes", "Resolver dudas", "Volver arriba"], ["./register.html", "#planes", "#faq", "#top"])}
          </div>

          <div class="mt-8 flex flex-col gap-3 border-t border-brand-brownDeep/10 pt-5 text-sm text-brand-gray sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; ${currentYear} Entreprenly by Kauflink. Todos los derechos reservados.</p>
            <p>Disenado para negocios pequenos que necesitan mas control y menos friccion.</p>
          </div>
        </div>
      </footer>
    </div>
  `;
}

function heroVisual() {
  return `
    <div class="relative min-h-155">
      <div class="absolute left-10 top-28 h-28 w-28 rounded-full bg-brand-orange/15 blur-3xl"></div>
      <div class="absolute right-12 top-24 h-24 w-24 rounded-full bg-brand-yellow/90 blur-3xl"></div>
      <div class="absolute left-14 top-20 hidden rounded-full border border-brand-brownDeep/10 bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-brownDeep/65 backdrop-blur sm:inline-flex">Operacion conectada</div>

      <div class="absolute left-0 top-8 w-[88%] rounded-[1.7rem] border border-brand-brownDeep/10 bg-white/95 p-5 shadow-card backdrop-blur sm:w-90">
        <span class="mini-tag">Pedidos por WhatsApp</span>
        <div class="mt-4 max-w-[88%] rounded-[1.2rem] bg-brand-peach px-4 py-4 text-sm leading-6 text-brand-brownDeep">Hola, necesito 2 kg de naranjas y 1 bolsa de manzanas.</div>
        <div class="ml-auto mt-3 max-w-[88%] rounded-[1.2rem] border border-brand-brownDeep/10 bg-[#fffaf4] px-4 py-4 text-sm leading-6 text-brand-black">Stock verificado. Pedido listo para confirmar.</div>
      </div>

      <div class="absolute right-0 top-52 w-[80%] rounded-[1.7rem] border border-brand-brownDeep/10 bg-brand-yellow/95 p-5 shadow-card backdrop-blur sm:w-[20rem]">
        <div class="flex items-center justify-between gap-3">
          <span class="mini-tag">Inventario en tiempo real</span>
          <strong class="text-brand-brownDeep">Stock validado</strong>
        </div>
        <div class="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">
          ${metricRing("86%")}
          <p class="max-w-60 text-sm leading-7 text-brand-brownDeep/85">Lectura conectada con balanza inteligente para vender con mas criterio.</p>
        </div>
      </div>

      <div class="absolute bottom-6 left-6 right-6 rounded-[1.7rem] border border-brand-brownDeep/10 bg-white/95 p-5 shadow-card backdrop-blur sm:left-16 sm:right-auto sm:w-91">
        <div class="flex items-center justify-between gap-3">
          <span class="mini-tag">Control financiero</span>
          <strong class="text-brand-brownDeep">Caja mas clara</strong>
        </div>
        <p class="mt-3 text-sm leading-6 text-brand-gray">Separa cobros en efectivo y digitales para cerrar el dia con menos dudas.</p>
        <div class="mt-4 flex flex-wrap gap-2">
          ${["Efectivo ordenado", "Pagos digitales separados", "Cierre mas confiable"].map((item) => `
            <span class="inline-flex rounded-full border border-brand-brownDeep/10 bg-brand-peach px-3 py-2 text-xs font-bold text-brand-brownDeep">${escapeHtml(item)}</span>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function metricRing(value) {
  return `
    <div class="relative h-32 w-32 shrink-0">
      <div class="absolute inset-0 rounded-full bg-[conic-gradient(#F38313_0_310deg,rgba(81,30,0,0.12)_310deg_360deg)] shadow-[0_10px_22px_rgba(81,30,0,0.1)]"></div>
      <div class="absolute inset-2.5 rounded-full bg-white/95 shadow-[inset_0_1px_10px_rgba(81,30,0,0.06)]"></div>
      <div class="absolute inset-5.5 flex flex-col items-center justify-center rounded-full bg-brand-yellow/90 text-center">
        <span class="block text-3xl font-extrabold text-brand-brownDeep">${escapeHtml(value)}</span>
        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-brown/75">verificado</span>
      </div>
    </div>
  `;
}

function footerColumn(title, items, links) {
  return `
    <div>
      <h3 class="text-base font-bold text-brand-black">${escapeHtml(title)}</h3>
      <ul class="mt-4 space-y-3 text-brand-gray">
        ${items.map((item, index) => `
          <li class="leading-6">${links[index] ? `<a href="${links[index]}">${escapeHtml(item)}</a>` : escapeHtml(item)}</li>
        `).join("")}
      </ul>
    </div>
  `;
}

root.addEventListener("click", (event) => {
  const navLink = event.target.closest("[data-nav-link]");
  if (navLink && state.menuOpen) {
    state.menuOpen = false;
    document.querySelector("[data-mobile-menu]")?.remove();
  }

  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) {
    return;
  }

  event.preventDefault();

  const action = actionElement.dataset.action;

  if (action === "toggle-menu") {
    state.menuOpen = !state.menuOpen;
    renderPreserveScroll();
    return;
  }

  if (action === "set-landing-billing") {
    state.billingCycle = actionElement.dataset.cycle;
    renderPreserveScroll();
    return;
  }
});


render();