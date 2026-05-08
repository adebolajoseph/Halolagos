const halo = {
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About Us", href: "about.html" },
    { label: "Menu", href: "menu.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Contact", href: "contact.html" }
  ],
  menu: [
    {
      name: "Halo Jollof Feast",
      price: "₦18,500",
      image: "images/halorice.webp",
      tag: "Signature tray",
      desc: "Party-style jollof rice with wings, spring rolls, skewers, and golden bites made for sharing."
    },
    {
      name: "Prawn Spaghetti",
      price: "₦16,000",
      image: "images/halospagandegg.webp",
      tag: "Crowd favorite",
      desc: "Saucy spaghetti tossed with juicy prawns, herbs, spice, and toasted bread."
    },
    {
      name: "Grilled Chicken Plate",
      price: "₦14,500",
      image: "images/hallchicken.webp",
      tag: "Fire grill",
      desc: "Char-grilled chicken finished with a glossy pepper glaze and fresh herbs."
    },
    {
      name: "Spicy Seafood Plate",
      price: "₦19,000",
      image: "images/haloplate.webp",
      tag: "Bold flavors",
      desc: "A colorful plated seafood experience with peppers, citrus, and Halo spice."
    },
    {
      name: "Premium Picnic Tray",
      price: "₦42,000",
      image: "images/haloplatetray.webp",
      tag: "Best for groups",
      desc: "A generous food and drink tray layered with grilled bites, small chops, snacks, and sips."
    },
    {
      name: "Halo Burger Stack",
      price: "₦12,000",
      image: "images/haloburger.jpg",
      tag: "Fast-casual",
      desc: "A juicy casual classic with Halo's playful street-luxe attitude."
    }
  ],
  gallery: [
    { src: "images/halonight.webp", alt: "Halo Lagos night bar with neon lights" },
    { src: "images/halohall3.webp", alt: "Warm yellow dining space at Halo Lagos" },
    { src: "images/halohall2.webp", alt: "Colorful lounge seating at Halo Lagos" },
    { src: "images/halobar.webp", alt: "Halo Lagos bar with glowing signage" },
    { src: "images/halodining.webp", alt: "Dining area with plants and pendant lights" },
    { src: "images/halobulbs.webp", alt: "Decorative pendant bulbs" },
    { src: "images/halogent.webp", alt: "Artful Halo Lagos restroom interior" },
    { src: "images/halohall.webp", alt: "Halo Lagos hall and bar seating" },
    { src: "images/halofreen.webp", alt: "Halo dining area with mustard chairs" },
    { src: "images/halochairs.webp", alt: "Halo Lagos interior seating" },
    { src: "images/halooutside.webp", alt: "Halo Lagos exterior facade" }
  ],
  reviews: [
    {
      name: "Tomi A.",
      quote: "The food lands with real Lagos flavor, and the room feels made for pictures, laughter, and long conversations."
    },
    {
      name: "Kemi O.",
      quote: "Halo has that sweet spot between premium and playful. The jollof tray was generous, spicy, and beautifully served."
    },
    {
      name: "Dare F.",
      quote: "The staff, the music, the lights, the plates. Everything felt intentional without feeling stiff."
    }
  ]
};

const currentPage = () => {
  const file = window.location.pathname.split("/").pop();
  return file || "index.html";
};

const icon = (name, label) => `<i data-lucide="${name}" aria-hidden="true"></i><span class="sr-only">${label}</span>`;

function renderNav() {
  const mount = document.querySelector("[data-nav]");
  if (!mount) return;

  const active = currentPage();
  mount.innerHTML = `
    <nav id="siteNav" class="fixed inset-x-0 top-0 z-50 transition-all duration-300" aria-label="Main navigation">
      <div class="container-halo flex h-20 items-center justify-between">
        <a href="index.html" class="flex items-center gap-3" aria-label="Halo Lagos home">
          <img src="images/halologo.png" alt="Halo Lagos" class="h-11 w-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]" />
        </a>
        <div class="hidden items-center gap-8 lg:flex">
          ${halo.nav.map(item => `
            <a class="nav-link" href="${item.href}" ${item.href === active ? 'aria-current="page"' : ""}>${item.label}</a>
          `).join("")}
        </div>
        <button id="menuToggle" class="grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur lg:hidden" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobilePanel">
          ${icon("menu", "Open menu")}
        </button>
      </div>
    </nav>
    <div id="mobilePanel" class="mobile-panel fixed inset-y-0 right-0 z-[60] w-full max-w-sm bg-[#17110b] p-6 text-white shadow-2xl lg:hidden" data-open="false">
      <div class="flex items-center justify-between">
        <img src="images/halologo.png" alt="Halo Lagos" class="h-10 w-auto" />
        <button id="menuClose" class="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10" type="button" aria-label="Close menu">
          ${icon("x", "Close menu")}
        </button>
      </div>
      <div class="mt-10 grid gap-2">
        ${halo.nav.map(item => `
          <a href="${item.href}" class="rounded-2xl px-4 py-3 text-lg font-black transition hover:bg-white/10" ${item.href === active ? 'aria-current="page"' : ""}>${item.label}</a>
        `).join("")}
      </div>
    </div>
  `;
}

function renderFooter() {
  const mount = document.querySelector("[data-footer]");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="bg-[#17110b] py-8 text-white">
      <div class="container-halo flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <img src="images/halologo.png" alt="Halo Lagos" class="h-12 w-auto" loading="lazy" />
        <p class="text-xs font-semibold text-white/56">&copy; <span data-year></span> Halo Lagos. All rights reserved.</p>
      </div>
    </footer>
  `;
}

function renderFeaturedMenu(limit = 3) {
  const mount = document.querySelector("[data-featured-menu]");
  if (!mount) return;
  mount.innerHTML = halo.menu.slice(0, limit).map(menuCard).join("");
}

function renderFullMenu() {
  const mount = document.querySelector("[data-full-menu]");
  if (!mount) return;
  mount.innerHTML = halo.menu.map(menuCard).join("");
}

function menuCard(item) {
  return `
    <article class="menu-card reveal">
      <img src="${item.image}" alt="${item.name}" loading="lazy" />
      <div class="p-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-black uppercase tracking-[0.14em] text-[#d45d00]">${item.tag}</p>
            <h3 class="mt-2 text-xl font-black">${item.name}</h3>
          </div>
          <p class="rounded-full bg-[#17110b] px-3 py-2 text-sm font-black text-white">${item.price}</p>
        </div>
        <p class="mt-4 text-sm leading-7 text-[#6f6254]">${item.desc}</p>
      </div>
    </article>
  `;
}

function renderGallery(limit) {
  const mount = document.querySelector("[data-gallery-grid]");
  if (!mount) return;
  const items = Number.isFinite(limit) ? halo.gallery.slice(0, limit) : halo.gallery;
  mount.innerHTML = items.map((item, index) => `
    <figure class="gallery-item reveal">
      <img src="${item.src}" alt="${item.alt}" loading="${index < 4 ? "eager" : "lazy"}" />
    </figure>
  `).join("");
}

function renderReviews() {
  const mount = document.querySelector("[data-reviews]");
  if (!mount) return;
  mount.innerHTML = halo.reviews.map(review => `
    <article class="review-card reveal p-6">
      <div class="flex gap-1 text-[#ff8a00]" aria-label="5 star rating">
        ${Array.from({ length: 5 }, () => '<i data-lucide="star" class="h-4 w-4 fill-current"></i>').join("")}
      </div>
      <p class="mt-5 text-lg font-bold leading-8">“${review.quote}”</p>
      <div class="mt-6">
        <p class="font-black">${review.name}</p>
      </div>
    </article>
  `).join("");
}

function setNavInteractions() {
  const nav = document.getElementById("siteNav");
  const panel = document.getElementById("mobilePanel");
  const toggle = document.getElementById("menuToggle");
  const close = document.getElementById("menuClose");

  const updateNav = () => {
    if (!nav) return;
    nav.classList.toggle("nav-scrolled", window.scrollY > 12);
  };

  const setOpen = isOpen => {
    if (!panel || !toggle) return;
    panel.dataset.open = String(isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  };

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });
  toggle?.addEventListener("click", () => setOpen(true));
  close?.addEventListener("click", () => setOpen(false));
  panel?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setOpen(false)));
  window.addEventListener("keydown", event => {
    if (event.key === "Escape") setOpen(false);
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const status = form.querySelector("[data-form-status]");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Halo Lagos booking request from ${data.get("name") || "Guest"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nDate: ${data.get("date")}\nGuests: ${data.get("guests")}\nMessage: ${data.get("message")}`
    );
    status.textContent = "Opening your email app with the booking details.";
    window.location.href = `mailto:hello@halolagos.com?subject=${subject}&body=${body}`;
  });
}

function initRevealFallback() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  items.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(24px)";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "opacity 700ms ease, transform 700ms ease";
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  items.forEach(item => observer.observe(item));
}

async function initMotion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    initRevealFallback();
    return;
  }

  try {
    const motion = await import("https://esm.sh/framer-motion@12.23.24/dom");
    const { animate, inView, stagger } = motion;

    animate(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .hero-stats", {
      opacity: [0, 1],
      y: [24, 0]
    }, {
      duration: 0.9,
      delay: stagger(0.1),
      easing: [0.16, 1, 0.3, 1]
    });

    inView(".reveal", element => {
      animate(element, { opacity: [0, 1], y: [28, 0] }, { duration: 0.75, easing: [0.16, 1, 0.3, 1] });
    }, { margin: "0px 0px -12% 0px" });

    inView(".image-frame", element => {
      animate(element, { scale: [0.96, 1], opacity: [0, 1] }, { duration: 0.8, easing: [0.16, 1, 0.3, 1] });
    });
  } catch (error) {
    initRevealFallback();
  }
}

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "stroke-width": 2.2 } });
  }
}

function initSite() {
  renderNav();
  renderFooter();
  renderFeaturedMenu(3);
  renderFullMenu();
  renderGallery(document.querySelector("[data-gallery-grid]")?.dataset.galleryLimit ? Number(document.querySelector("[data-gallery-grid]").dataset.galleryLimit) : undefined);
  renderReviews();
  document.querySelectorAll("[data-year]").forEach(item => {
    item.textContent = new Date().getFullYear();
  });
  setNavInteractions();
  initContactForm();
  initIcons();
  initMotion();
}

document.addEventListener("DOMContentLoaded", initSite);
