---
name: blog-create
description: Create a new English blog post for the portfolio from a BLOG_INFORMATION.md file. Generates HTML, updates index.html, and creates image directory.
argument-hint: (no arguments needed — Claude will ask)
---

# Create Blog Post

You are creating a new English blog post for Pablo Cruz's portfolio website (pablocruz.io).

## Step 1: Check for BLOG_INFORMATION.md

Before doing anything else, check if `BLOG_INFORMATION.md` exists in the project root.

**If it does NOT exist:** Tell the user:

> `BLOG_INFORMATION.md` not found. Before creating a blog post, you need to generate this file first.
>
> 1. Open Claude Code in the target project's repository
> 2. Run `/blog-gather-info`
> 3. Copy the generated `BLOG_INFORMATION.md` into this portfolio repo's root directory
> 4. Then run `/blog-create` again

**Then STOP. Do not continue with the remaining steps.**

**If it exists:** Proceed to Step 2.

## Step 2: Ask the User

Before starting, ask the user for ALL of the following:

1. **Blog post slug** — The filename without extension (e.g., `salsa-candela-admin`). This determines the HTML filename and image folder name.
2. **Project title** — The display title (e.g., "Salsa Candela Administrative System")
3. **Project description** — A 1-2 sentence summary for meta tags and the header
4. **Cover image filename** — Filename for the featured/hero image (will go in `images/{slug}/`)
5. **Project logo path** — Path to logo image, or "none" if no logo
6. **GitHub repo URL** — Link to the project's GitHub repository (or "none")
7. **Live site URL** — Link to the live project (or "none")
8. **Video URL** — Link to a demo video (or "none")

## Step 2: Read Reference Files

Read these files to understand the exact patterns, structure, and conventions:

- `BLOG_INFORMATION.md` — The content source for the new blog post
- `BLOG_POST_TEMPLATE.md` — Detailed HTML template and structure guide
- `codi-api.html` — Reference blog post (use as primary template)
- `index.html` — To find and update the project card
- `assets/css/blog.css` — To understand available CSS classes
- `CLAUDE.md` — For project-wide conventions and rules

## Step 3: Plan Sections

Based on the BLOG_INFORMATION.md content, plan the blog post sections. A typical structure:

1. Header — Title, optional logo, publish date, description
2. Featured Image — Hero image
3. Table of Contents — Nested list of all sections
4. Introduction — 2-3 paragraphs explaining the project
5. Content Sections (5-10 sections based on content):
   - Project Overview / Business Context
   - The Problem / Business Challenge
   - Key Features (with subsections)
   - Design & User Experience
   - Technical Architecture / Technology Stack
   - Challenges & Solutions
   - Results & Impact
   - Future Plans
6. Navigation Section — Back to Portfolio + GitHub/Live site buttons
7. Contact Section — "Get in touch" CTA
8. Footer — Social links

**Present the planned sections to the user for approval before writing HTML.**

## Step 4: Create Image Directory

Create the folder: `images/{blog-slug}/`

Use descriptive placeholder image paths like: `images/{blog-slug}/feature-name.png`

## Step 5: Create the HTML File

Create `{blog-slug}.html` in the project root following the structure in `BLOG_POST_TEMPLATE.md` exactly. Key requirements:

### Head Section
- `<html lang="en">`
- Title: `{Project Title} | Pablo Cruz`
- Favicon: `images/terminal-solid.png`
- Open Graph and Twitter meta tags with absolute URLs (`https://pablocruz.io/...`)
- Stylesheets: `custom.css`, `main.css`, `blog.css`
- Prism.js CSS for syntax highlighting
- Preload hero image
- Hreflang tags for both EN and ES versions
- Google Analytics tag (G-LDNFBEYMLD)

### Body Structure
- Language switcher with EN active, ES linking to `es/{slug}.html`
- "Back to Portfolio" linking to `index.html`
- Blog title container with optional logo, h1, meta dates, description
- Featured image section
- Table of Contents matching all section IDs
- Blog sections with content from BLOG_INFORMATION.md
- Navigation section with relevant buttons (GitHub, Live Site, Video)
- Contact section (copy exactly from template)
- Footer (copy exactly from template)
- Scripts section (copy exactly from template)

### Content Guidelines
- Write in first person ("I built...", "I designed...")
- Professional, clear, results-focused, approachable tone
- Business value and outcomes over raw technical details
- Each section: 2-4 paragraphs + images/lists
- Use `class="blog-link"` for inline links
- Use `target="_blank" rel="noopener noreferrer"` for external links
- Bold label pattern: `<strong>Bold label:</strong> <span>Description</span>`
- Every section MUST end with a "Back to Top" link
- Every section MUST be followed by `<div class="section-separator"></div>`
- Only include code blocks if relevant

### DO NOT
- Include `blog-i18n.js` references
- Use `!important` in CSS
- Add `data-i18n` attributes
- Use `<button>` for language switcher (use `<a>` tags)

## Step 6: Update index.html

Find the project's `<article>` block in `index.html` and add a "Blog" button alongside existing buttons:

```html
<a href="{blog-slug}.html"
   class="button button-margin fade-out"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Read blog post about {Project Title}"
   onclick="gtag('event', 'click', {'event_category': 'Project', 'event_label': '{Project Name} - Blog'});"
   >Blog</a>
```

## Step 7: Validation Checklist

Before finishing, verify:
- [ ] All HTML tags properly closed
- [ ] No `data-i18n` attributes anywhere
- [ ] No `blog-i18n.js` script references
- [ ] Language switcher uses `<a>` tags (not `<button>`)
- [ ] Hreflang tags present
- [ ] Google Analytics tag present
- [ ] All section IDs match Table of Contents links
- [ ] Every section ends with "Back to Top" link
- [ ] Every section followed by section-separator div
- [ ] Contact section and footer are exact copies from template
- [ ] No `!important` in CSS
- [ ] index.html updated with blog link
- [ ] OG and Twitter meta images use absolute URLs

**DO NOT create the Spanish version. That is a separate step.**
