# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static portfolio website** for Pablo Cruz, a full-stack developer. The site is hosted on GitHub Pages and accessible at pablocruz.io. It's a professional portfolio showcasing projects, skills, and experience in web development, financial systems, and IoT automation.

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (no frameworks)
- **Styling**: SCSS (compiled to CSS), FontAwesome icons
- **Hosting**: GitHub Pages (static site)
- **Domain**: Custom domain (pablocruz.io) via CNAME file

## Project Structure

### Key Files

- `index.html` - Main portfolio page (single-page application)
- `extras.html` - Style guide and component reference
- `assets/sass/main.scss` - Main stylesheet source
- `assets/css/` - Compiled CSS and custom styles
- `assets/js/main.js` - JavaScript functionality
- `CNAME` - GitHub Pages custom domain configuration
- `robots.txt` - SEO configuration
- `Pablo_Cruz_Resume_Portfolio_2024.pdf` / `Pablo_Cruz_Resume_Portfolio_2025.pdf` - Resume files

### Directory Structure

```
/
├── index.html                 # Main portfolio page
├── extras.html               # Component reference
├── assets/
│   ├── css/
│   │   ├── main.css          # Compiled SCSS
│   │   ├── custom.css        # Custom overrides
│   │   └── fontawesome-all.min.css
│   ├── js/
│   │   ├── main.js           # Primary JavaScript
│   │   └── [jQuery libraries]
│   ├── sass/
│   │   ├── main.scss         # Main SCSS entry point
│   │   └── libs/             # SCSS partials and mixins
│   └── webfonts/             # FontAwesome fonts
├── images/                   # All project and personal images
└── CNAME                     # Custom domain configuration
```

## Architecture & Design Patterns

### Single-Page Application

- The portfolio is contained entirely in `index.html`
- Sections are divided into semantic HTML5 elements with specific IDs
- Navigation uses smooth scrolling via jQuery scrolly plugin

### Responsive Design

- Mobile-first approach with SCSS breakpoints
- Breakpoints defined in `assets/sass/libs/_breakpoints.scss`:
  - xxsmall: ≤320px
  - xsmall: 321px-480px
  - small: 481px-736px
  - medium: 737px-980px
  - large: 981px-1140px
  - xlarge: 1141px-1680px

### Image Management

- Static images in `/images/` directory
- Animated GIFs with hover states for project demonstrations
- Responsive image sizing with lazy loading
- Background images for hero sections

### CSS Architecture

- SCSS with modular approach using `@import`
- Variables and mixins defined in `libs/` directory
- Custom CSS overrides in `assets/css/custom.css`
- FontAwesome icons integrated throughout

## Development Commands

**Note**: This is a static site with no build process. Changes are made directly to source files.

### SCSS Compilation

If you need to modify SCSS files, you'll need to compile them manually:

```bash
# Install SCSS compiler if not available
npm install -g sass

# Compile SCSS to CSS
sass assets/sass/main.scss assets/css/main.css
```

### Local Development

Since this is a static site, you can serve it locally with any HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# Then visit http://localhost:8000
```

## Content Structure

### Main Sections (index.html)

1. **Header** (`#header`) - Hero section with name, title, and CTA buttons
2. **About Me** (`#one`) - Personal introduction and video introduction
3. **Skills** (`#two`) - Technical skills in three columns
4. **Projects** (`#projects-section`) - Portfolio project showcase with hover animations
5. **Contact** (`#contact-section`) - Contact information and email CTA
6. **Footer** (`#footer`) - Social links and copyright

### Project Showcase Format

Each project includes:

- Static and animated (GIF) images with hover states
- Project title and description
- Technology stack used
- Links to live demo, GitHub repo, or video demonstration

## SEO and Meta Configuration

- Open Graph tags for social media sharing
- Twitter Card meta tags
- Google Analytics integration (G-LDNFBEYMLD)
- Custom favicon (terminal icon)
- Structured meta descriptions and titles

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The custom domain (pablocruz.io) is configured via the CNAME file.

## Animation and Interactions

### Custom CSS Animations

- Fade-in animations on scroll using CSS `animation-timeline: view()`
- Hover effects on project images (brightness and float animations)
- GIF animations on hover for project demonstrations
- Scroll-based fade-out effects

### JavaScript Features

- jQuery-based smooth scrolling
- Responsive breakpoint handling
- Page load animation management

## Important Notes

- **No Build Process**: This is intentionally a simple static site
- **Direct File Editing**: Make changes directly to HTML, CSS, and JS files
- **Image Optimization**: Ensure images are web-optimized before adding
- **Mobile-First**: Always test responsive design on mobile devices
- **SEO Friendly**: Maintain semantic HTML and meta tags when making changes
- Never use !important in CSS