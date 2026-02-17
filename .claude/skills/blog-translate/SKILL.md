---
name: blog-translate
description: Create the Spanish translation of an existing English blog post for the portfolio.
argument-hint: (no arguments needed — Claude will ask)
---

# Translate Blog Post to Spanish

You are creating the Spanish version of an existing English blog post for Pablo Cruz's portfolio website.

## Step 1: Ask the User

Ask the user for:

1. **Blog post slug** — The filename without extension (e.g., `salsa-candela-admin`)

Then verify the English file `{slug}.html` exists before proceeding.

## Step 2: Read Reference Files

Read these files:

- `{slug}.html` — The English blog post to translate
- `BLOG_POST_TEMPLATE.md` — For Spanish version conventions
- `CLAUDE.md` — For project-wide conventions
- An existing Spanish blog post (e.g., `es/codi-api.html`) — For reference on translation patterns and asset paths

## Step 3: Create the Spanish Version

Create `es/{slug}.html` with these differences from the English version:

### HTML & Meta Tags
- `<html lang="es">`
- All `<title>`, meta descriptions, `og:title`, `og:description`, `twitter:title`, `twitter:description` translated to Spanish

### Language Switcher
- Spanish link has `active` class
- English link points to `../{slug}.html`

### Asset Paths
- ALL asset paths use `../` prefix: `../assets/`, `../images/`
- Navigation "Back to Portfolio" links to `../index.html`

### Content Translation
- All body content translated to natural, professional Spanish
- "Back to Portfolio" becomes "Volver al Portafolio"
- "Back to Top" becomes "Volver arriba"
- "Get in touch!" becomes "Ponte en contacto!"
- "Email me" becomes "Envame un email"
- Contact paragraph translated appropriately
- Navigation buttons translated
- All blog section content translated
- Image captions translated
- Alt text translated
- Table of contents translated

### Keep Unchanged
- Hreflang tags remain the same (absolute URLs)
- Google Analytics tag remains the same
- All image filenames stay the same (only paths get `../` prefix)
- Code blocks stay in English (code is code)
- External URLs stay the same

### DO NOT
- Include `blog-i18n.js` references
- Use `!important` in CSS
- Add `data-i18n` attributes
- Use `<button>` for language switcher (use `<a>` tags)

## Step 4: Validation Checklist

Before finishing, verify:
- [ ] `<html lang="es">`
- [ ] All meta tags translated
- [ ] Language switcher: ES is `active`, EN links to `../{slug}.html`
- [ ] ALL asset paths use `../` prefix
- [ ] ALL navigation links use `../` prefix
- [ ] All body content is translated
- [ ] No `data-i18n` attributes
- [ ] No `blog-i18n.js` references
- [ ] Hreflang tags present and correct
- [ ] Google Analytics tag present
- [ ] All HTML tags properly closed
- [ ] Section IDs match Table of Contents links
- [ ] Every section ends with "Volver arriba" link
- [ ] Contact section and footer properly translated
