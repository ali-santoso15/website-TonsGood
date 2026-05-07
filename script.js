const spaceData = {
  indoor: {
    tag: "Indoor Focus",
    title: "Nyaman untuk kerja, meeting, dan me-time.",
    copy:
      "Area ber-AC dengan pencahayaan hangat, akses colokan di banyak titik, dan suasana akustik yang lebih tenang.",
    features: [
      "AC sejuk dengan kapasitas duduk paling besar",
      "Ideal untuk laptop session dan kerja kelompok",
      "Pencahayaan fokus untuk ambience yang tenang",
    ],
    artClass: "space-showcase__art--indoor",
  },
  outdoor: {
    tag: "Outdoor Sunset",
    title: "Ruang santai untuk ngobrol, konten, dan menikmati senja.",
    copy:
      "Area semi-terbuka dengan tanaman hijau, sirkulasi udara natural, dan golden-hour lighting yang kuat untuk nongkrong sore.",
    features: [
      "Vibe senja yang fotogenik untuk konten dan hangout",
      "Sirkulasi udara terbuka dengan kombinasi besi dan greenery",
      "Cocok untuk grup kecil yang ingin suasana lebih hidup",
    ],
    artClass: "space-showcase__art--outdoor",
  },
  smoking: {
    tag: "Smoking Lounge",
    title: "Area khusus yang tetap estetik dan tidak mengganggu area lain.",
    copy:
      "Zona smoking dibuat terpisah dengan identitas visual tetap kuat, material tahan pakai, dan ambience yang lebih bold.",
    features: [
      "Area terpisah agar kenyamanan ruang lain tetap terjaga",
      "Material industrial dengan layout santai dan lega",
      "Pas untuk tamu yang ingin ngobrol lebih lama",
    ],
    artClass: "space-showcase__art--smoking",
  },
};

const menuCatalog = [
  {
    title: "Espresso Based",
    theme: "espresso",
    items: [
      { name: "Americano Ice / Hot", price: "18K" },
      { name: "Shaken Americano Basic", price: "19K" },
      { name: "Shaken Americano Sparkling", price: "25K" },
      { name: "Cappucino", price: "24K" },
      { name: "Latte Ice / Hot", price: "26K" },
      { name: "Dirty Latte", price: "30K" },
      { name: "Montblanc", price: "29K" },
      { name: "Mochacino Ice / Hot", price: "Pending" },
    ],
  },
  {
    title: "Kopsu",
    theme: "kopsu",
    items: [
      { name: "Coffee Tonsgood", price: "18K" },
      { name: "Strawberry Coffee", price: "24K" },
      { name: "Sweet Coffee", price: "28K" },
      { name: "Brown Sugar Coffee", price: "29K" },
      { name: "Salted Caramel", price: "32K" },
      { name: "Cereal Coffee", price: "29K" },
      { name: "Pop Corn Coffee", price: "34K" },
    ],
  },
  {
    title: "Snack",
    theme: "snack",
    items: [
      { name: "Cireng Salju", price: "17K" },
      { name: "Crispy Mushroom", price: "19K" },
      { name: "Stuffed Fried Tofu", price: "19K" },
      { name: "Basreng", price: "17K" },
      { name: "Mix Platter", price: "28K" },
      { name: "Chicken Popcorn", price: "24K" },
      { name: "Curly Fries", price: "24K" },
      { name: "French Fries", price: "18K" },
      { name: "Wings Gochujang", price: "30K" },
      { name: "Corn Ribs", price: "22K" },
    ],
  },
  {
    title: "Maincourse",
    theme: "maincourse",
    items: [
      { name: "Barbeque Chicken Steak", price: "39K" },
      { name: "Rice Bowl Chicken Sweet Mayo", price: "33K" },
      { name: "Rice Bowl Honey Korean Chicken", price: "33K" },
      { name: "Rice Bowl Chicken Blackpepper Sauce", price: "33K" },
      { name: "Mie Goreng Original", price: "15K" },
      { name: "Nasi Goreng Tonsgood", price: "27.5K" },
      { name: "Ayam Geprek", price: "29K" },
      { name: "Pasta Bolognese", price: "30K" },
      { name: "Pasta Carbonara", price: "30K" },
      { name: "Beef Niku Udon", price: "35K" },
      { name: "Chicken Yakitori", price: "24K" },
      { name: "Cuanki", price: "22K" },
      { name: "Mie Dog-Dog", price: "23K" },
    ],
  },
  {
    title: "Non Coffee",
    theme: "noncoffee",
    items: [
      { name: "Ceremonial Matcha", price: "38K" },
      { name: "Matcha Cheese", price: "29K" },
      { name: "Biscoff Lattee", price: "30K" },
      { name: "Chocolate Hot / Ice", price: "29K" },
      { name: "Red Velvet", price: "26K" },
    ],
  },
  {
    title: "Refreshment",
    theme: "refreshment",
    items: [
      { name: "Ice Tea", price: "12K" },
      { name: "Lychee Tea", price: "23K" },
      { name: "Biancablanc", price: "26K" },
      { name: "Marlott", price: "30K" },
      { name: "Zenbloom", price: "26K" },
      { name: "Mineral Water 600ml", price: "8K" },
    ],
  },
  {
    title: "Dessert",
    theme: "dessert",
    items: [
      { name: "Strawberry Toast", price: "22K" },
      { name: "Nutella Toast", price: "24K" },
      { name: "Monte Cristo", price: "33K" },
      { name: "Cheese Cake", price: "38K" },
      { name: "Tiramisu", price: "27K" },
    ],
  },
  {
    title: "Signature",
    theme: "signature",
    items: [
      { name: "Butterscotch Tons", price: "30K" },
      { name: "Sea Salt Tons", price: "30K" },
      { name: "Spanish Tons", price: "30K" },
    ],
  },
  {
    title: "Pastry",
    theme: "pastry",
    items: [{ name: "Ask To Barista", price: "" }],
  },
  {
    title: "Add On",
    theme: "addon",
    items: [
      { name: "Nasi Putih", price: "5K" },
      { name: "Tenkasu", price: "4K" },
      { name: "BBQ Sauce", price: "8K" },
      { name: "Ajitamago", price: "5K" },
      { name: "Telur", price: "5K" },
      { name: "Mayo", price: "8K" },
      { name: "Beef Sukiyaki", price: "25K" },
      { name: "Sambal Geprek", price: "5K" },
      { name: "Sambal Colo-Colo", price: "4K" },
      { name: "Kerupuk", price: "5K" },
    ],
  },
];

const revealElements = document.querySelectorAll(".reveal");
const parallaxCards = document.querySelectorAll("[data-parallax]");
const tabs = document.querySelectorAll(".space-tab");
const showcaseArt = document.querySelector(".space-showcase__art");
const tag = document.getElementById("space-tag");
const title = document.getElementById("space-title");
const copy = document.getElementById("space-copy");
const featureList = document.getElementById("space-features");
const photoSlides = document.querySelectorAll(".space-photo-slide");
const photoDots = document.querySelectorAll(".space-photo-dot");
const menuBoard = document.getElementById("menu-board");
let currentSlide = 0;
let slideTimer;

const menuThemeStyles = {
  espresso: ["#5f3d22", "#20130d", "#b8773d"],
  kopsu: ["#6b5230", "#17120e", "#e0b27a"],
  signature: ["#775e8d", "#17131d", "#d6b7ff"],
  refreshment: ["#3a6b61", "#0f1715", "#8ee0d0"],
  noncoffee: ["#627847", "#141810", "#d0f1a2"],
  snack: ["#8a4d2c", "#1e130d", "#f5bf78"],
  dessert: ["#87506b", "#1f1118", "#ffc0dc"],
  maincourse: ["#5c5b48", "#15150f", "#e8db94"],
  pastry: ["#7b6848", "#1b160f", "#edd0a1"],
  addon: ["#4f6270", "#12171b", "#a9d4ef"],
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.04,
    rootMargin: "0px 0px -10% 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const updateParallax = () => {
  const viewportHeight = window.innerHeight;

  parallaxCards.forEach((card) => {
    const speed = Number(card.dataset.parallax) || 0;
    const rect = card.getBoundingClientRect();
    const offset = (rect.top - viewportHeight / 2) * speed;
    card.style.setProperty("--parallax-offset", `${offset}px`);
  });
};

const renderMenu = () => {
  if (!menuBoard) return;

  menuBoard.innerHTML = menuCatalog
    .map((category) => {
      const [toneA, toneB, toneC] = menuThemeStyles[category.theme] || [
        "#6f6f6f",
        "#181818",
        "#d0d0d0",
      ];

      const items = category.items
        .map((item, index) => {
          const angle = 135 + (index % 4) * 12;
          const shineX = 18 + ((index * 17) % 60);
          const shineY = 20 + ((index * 13) % 56);
          const priceMarkup = item.price
            ? `<span class="menu-item__price">${item.price}</span>`
            : "";
          return `
            <article class="menu-item">
              <div class="menu-item__art" style="--tile-a:${toneA}; --tile-b:${toneB}; --tile-c:${toneC}; --tile-angle:${angle}deg; --tile-x:${shineX}%; --tile-y:${shineY}%"></div>
              <div class="menu-item__body">
                <h3 class="menu-item__name">${item.name}</h3>
                ${priceMarkup}
              </div>
            </article>
          `;
        })
        .join("");

      return `
        <section class="menu-category menu-category--${category.theme}">
          <header class="menu-category__head">
            <p class="eyebrow">${category.title}</p>
          </header>
          <div class="menu-category__list">
            ${items}
          </div>
        </section>
      `;
    })
    .join("");
};

const updateSlides = (index) => {
  currentSlide = index;

  photoSlides.forEach((slide, slideIndex) => {
    const isCurrent = slideIndex === index;
    slide.classList.toggle("is-active", isCurrent);
    slide.setAttribute("aria-hidden", String(!isCurrent));
  });

  photoDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === index);
  });
};

const startSlideRotation = () => {
  if (!photoSlides.length) return;

  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => {
    const nextSlide = (currentSlide + 1) % photoSlides.length;
    updateSlides(nextSlide);
  }, 2600);
};

const updateSpace = (spaceKey) => {
  const selected = spaceData[spaceKey];
  if (!selected) return;

  tabs.forEach((tab) => {
    const isCurrent = tab.dataset.space === spaceKey;
    tab.classList.toggle("is-active", isCurrent);
    tab.setAttribute("aria-selected", String(isCurrent));
  });

  showcaseArt.className = `space-showcase__art ${selected.artClass}`;
  tag.textContent = selected.tag;
  title.textContent = selected.title;
  copy.textContent = selected.copy;
  featureList.innerHTML = selected.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");
  updateSlides(0);
  startSlideRotation();
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => updateSpace(tab.dataset.space));
});

window.addEventListener("scroll", updateParallax, { passive: true });
window.addEventListener("resize", updateParallax);

renderMenu();
updateParallax();
updateSlides(0);
startSlideRotation();
