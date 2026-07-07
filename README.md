# Bella Vista Restaurant

A premium, luxury-styled restaurant website built with **pure HTML, CSS and JavaScript** — no frameworks, no build step, no backend.

Perfect for a Fiverr portfolio piece or a real restaurant landing site.

---

## ✨ Features

- **Three fully-linked pages** — `index.html`, `menu.html`, `contact.html`
- **Premium hero** with Ken-Burns background & scroll cue
- **Featured dishes** grid with hover zoom
- **Chef intro**, **About**, **Testimonials**, **Gallery**, **Opening hours**, **Map preview**
- **Filterable menu** — 7 categories (Starters, Main Course, Pizza, Pasta, Burgers, Desserts, Drinks)
- **Contact form** with `mailto:` handoff (no backend / API needed)
- **Loading animation**, sticky glass navbar, mobile off-canvas menu
- **Reveal-on-scroll** via IntersectionObserver
- **Fully responsive** — desktop, laptop, tablet, mobile

## 🎨 Design language

- Palette · deep espresso `#0e0b09` · warm ochre gold `#d4a574` · candlelit cream `#f2e9d6` · burgundy accent
- Typography · **Fraunces** (editorial serif) · **Italianno** (script accent) · **Manrope** (body)
- Glassmorphism navbar, soft rounded cards, generous whitespace, subtle grain

## 📁 Folder structure

```
bella-vista-restaurant/
├── index.html          # Home
├── menu.html           # Menu with category filters
├── contact.html        # Contact info + form + map
├── style.css           # All styles (commented sections)
├── script.js           # All interactions (loader, nav, reveal, filter, form)
├── assets/
│   └── images/         # (empty — images use Unsplash URLs)
└── README.md
```

## 🚀 Running locally

Just open `index.html` in any modern browser — that's it.

For a nicer dev loop:

```bash
# Python 3
python -m http.server 8000

# Node (if you have it)
npx serve .
```

Then visit `http://localhost:8000`.

## 🖼 Images

To keep the project lightweight, all images are loaded from **Unsplash**.
Feel free to drop your own images into `assets/images/` and swap the URLs in the HTML.

## 📬 Contact form

The Send button uses a plain `mailto:` link — clicking it opens the user's default email client with the name / email / message pre-filled.

No EmailJS · no Formspree · no backend.

## 🛠 Customising

- Colours & fonts live at the top of `style.css` (`:root` CSS variables)
- Menu items live inside `menu.html` (`<article class="menu-card" data-cat="…">`)
- Category tabs are auto-wired via `data-filter` on the buttons

## 📜 License

Free to use for personal & client projects. Attribution appreciated but not required.

---

Crafted with ❤️ in Roma.
