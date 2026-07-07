/* ================================================================
   Bella Vista Restaurant — script.js
   Handles:
     · Loader fade-out on window load
     · Sticky navbar shadow on scroll
     · Mobile navigation toggle
     · Reveal-on-scroll (IntersectionObserver)
     · Menu category filtering (menu.html)
     · Contact form → mailto: handoff (contact.html)
     · Auto year in footer
   ================================================================ */

/* --------- 1. Loader fade-out ---------------------------------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    // Give a moment for the first paint, then hide.
    setTimeout(() => loader.classList.add("hide"), 500);
  }
});

/* --------- 2. Navbar scroll state ------------------------------ */
const navbar = document.getElementById("navbar");
const onScroll = () => {
  if (!navbar) return;
  if (window.scrollY > 40) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* --------- 3. Mobile nav toggle -------------------------------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  // Close menu when a nav link is clicked (mobile).
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

/* --------- 4. Reveal-on-scroll --------------------------------- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small stagger for grouped items
          setTimeout(() => entry.target.classList.add("in"), i * 40);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  // Fallback: just show everything.
  revealEls.forEach((el) => el.classList.add("in"));
}

/* --------- 5. Menu category filtering -------------------------- */
const filterBtns = document.querySelectorAll(".filter-btn");
const menuGrid = document.getElementById("menuGrid");
const emptyState = document.getElementById("emptyState");

if (filterBtns.length && menuGrid) {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Active state
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const cards = menuGrid.querySelectorAll(".menu-card");
      let visible = 0;

      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.cat === filter;
        if (match) {
          card.style.display = "";
          // Re-trigger a gentle fade
          card.classList.remove("in");
          requestAnimationFrame(() =>
            requestAnimationFrame(() => card.classList.add("in"))
          );
          visible++;
        } else {
          card.style.display = "none";
        }
      });

      if (emptyState) emptyState.hidden = visible > 0;
    });
  });
}

/* --------- 6. Contact form → mailto ---------------------------- */
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = encodeURIComponent(contactForm.name.value.trim());
    const email = encodeURIComponent(contactForm.email.value.trim());
    const message = encodeURIComponent(contactForm.message.value.trim());

    const subject = `New enquiry from ${decodeURIComponent(name)}`;
    const body = `Hi Bella Vista team,%0D%0A%0D%0A${message}%0D%0A%0D%0A— ${name}%0D%0A${email}`;

    // Open user's default email client with pre-filled data.
    window.location.href = `mailto:hello@bellavista.it?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.hidden = false;
      setTimeout(() => (formNote.hidden = true), 6000);
    }
  });
}

/* --------- 7. Auto-year in footer ------------------------------ */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
