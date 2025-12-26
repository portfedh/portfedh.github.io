# CLAUDE.md

*Last updated: December 25, 2025*

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static portfolio website** for Pablo Cruz, a full-stack developer. The site is hosted on GitHub Pages and accessible at pablocruz.io. It's a professional portfolio showcasing projects, skills, and experience in web development, financial systems, and IoT automation. The site includes a main portfolio page and detailed blog posts about selected projects.

**Multilingual Support**: The site is available in English (default) and Spanish. Spanish pages are located in the `/es/` directory. Each page includes hreflang tags for SEO and language switcher links for navigation between languages.

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (no frameworks)
- **Styling**: SCSS (compiled to CSS), FontAwesome icons via CDN with local webfont backup
- **Blog Features**: Prism.js for syntax highlighting (via CDN)
- **Hosting**: GitHub Pages (static site)
- **Domain**: Custom domain (pablocruz.io) via CNAME file

## Project Structure

### Key Files

**English Pages:**
- `index.html` - Main portfolio page (single-page application)
- `codi-api.html` - Blog post about CoDi API integration
- `financial-report-pdf.html` - Blog post about creating financial reports with Python
- `water-level-monitor.html` - Blog post about IoT water level monitoring
- `extras.html` - Style guide and component reference

**Spanish Pages (`/es/` directory):**
- `es/index.html` - Spanish portfolio page
- `es/codi-api.html` - CoDi API blog (Spanish)
- `es/financial-report-pdf.html` - Financial reports blog (Spanish)
- `es/water-level-monitor.html` - Water monitoring blog (Spanish)

**Assets & Configuration:**
- `assets/sass/main.scss` - Main stylesheet source
- `assets/css/` - Compiled CSS and custom styles
- `assets/js/main.js` - Primary JavaScript functionality
- `assets/js/blog.js` - Blog-specific functionality (code copying, back-to-top navigation)
- `CNAME` - GitHub Pages custom domain configuration
- `robots.txt` - SEO configuration
- `Pablo_Cruz_Resume_Portfolio_2024.pdf` / `Pablo_Cruz_Resume_Portfolio_2025.pdf` - Resume files
- `PORTFOLIO_IMPROVEMENT_SUGGESTIONS.md` - Project planning and improvement ideas
- `.claude/` - Claude Code configuration directory

### Directory Structure

```
/
├── index.html                        # Main portfolio page (English)
├── codi-api.html                     # Blog: CoDi API (English)
├── financial-report-pdf.html         # Blog: Financial reports (English)
├── water-level-monitor.html          # Blog: Water monitoring (English)
├── extras.html                       # Component reference
├── Pablo_Cruz_Resume_Portfolio_2024.pdf
├── Pablo_Cruz_Resume_Portfolio_2025.pdf
├── PORTFOLIO_IMPROVEMENT_SUGGESTIONS.md
├── CNAME                             # Custom domain configuration
├── robots.txt                        # SEO configuration
├── .claude/                          # Claude Code configuration
│   └── settings.local.json
├── es/                               # Spanish language pages
│   ├── index.html                    # Portfolio (Spanish)
│   ├── codi-api.html                 # Blog: CoDi API (Spanish)
│   ├── financial-report-pdf.html     # Blog: Financial reports (Spanish)
│   └── water-level-monitor.html      # Blog: Water monitoring (Spanish)
├── assets/
│   ├── css/
│   │   ├── main.css                  # Compiled SCSS
│   │   ├── custom.css                # Custom overrides
│   │   ├── blog.css                  # Blog-specific styles
│   │   ├── noscript.css              # No JavaScript fallback
│   │   └── images/                   # CSS overlay images
│   ├── js/
│   │   ├── main.js                   # Primary JavaScript (vanilla JS)
│   │   ├── blog.js                   # Blog functionality (code copy, back-to-top)
│   │   └── particles.js              # Particle effects
│   ├── sass/
│   │   ├── main.scss                 # Main SCSS entry point
│   │   ├── noscript.scss             # No JavaScript styles
│   │   └── libs/                     # SCSS partials and mixins
│   │       ├── _breakpoints.scss
│   │       ├── _functions.scss
│   │       ├── _html-grid.scss
│   │       ├── _mixins.scss
│   │       ├── _vars.scss
│   │       └── _vendor.scss
│   └── webfonts/                     # FontAwesome fonts (local backup)
├── images/                           # All project and personal images
├── temp/                             # Cached HTML files
└── tests/                            # Testing directory
```

## Architecture & Design Patterns

### Single-Page Application with Blog Posts

- Main portfolio is contained in `index.html` as a single-page application
- Sections are divided into semantic HTML5 elements with specific IDs
- Navigation uses smooth scrolling via vanilla JavaScript scrollIntoView API
- Separate HTML pages for detailed blog posts (`codi-api.html`, `financial-report-pdf.html`, `water-level-monitor.html`)
- Blog posts include table of contents, code snippets with syntax highlighting, and back-to-top navigation

### Multilingual Structure

- **Directory-based language separation**: English pages in root (`/`), Spanish pages in `/es/` directory
- **Language switcher**: Simple navigation links (not JavaScript-based) for switching between languages
- **Hreflang tags**: All pages include hreflang tags for SEO:
  ```html
  <link rel="alternate" hreflang="en" href="https://pablocruz.io/page.html" />
  <link rel="alternate" hreflang="es" href="https://pablocruz.io/es/page.html" />
  <link rel="alternate" hreflang="x-default" href="https://pablocruz.io/page.html" />
  ```
- **Relative asset paths**: Spanish pages use `../assets/` and `../images/` for shared resources
- **Language consistency**: Internal navigation maintains language (Spanish blog links to Spanish portfolio, etc.)

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
- Variables and mixins defined in `assets/sass/libs/` directory
- Custom CSS overrides in `assets/css/custom.css`
- Blog-specific styles in `assets/css/blog.css`
- No-JavaScript fallback styles in `assets/css/noscript.css`
- FontAwesome icons loaded via CDN with local webfont backup in `assets/webfonts/`

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

### Blog Post Structure

Blog posts (`financial-report-pdf.html`, `water-level-monitor.html`) include:

1. **Header** - Blog title, publication/update dates, and description
2. **Featured Image** - Hero image for the blog post
3. **Table of Contents** - Navigable section links with nested structure
4. **Blog Content** - Detailed sections with:
   - Text content and explanations
   - Images with captions
   - Code blocks with syntax highlighting (Prism.js)
   - Copy-to-clipboard functionality for code
   - Back-to-top navigation links
5. **Navigation Section** - Links to portfolio and GitHub repositories
6. **Contact Section** - Call-to-action for getting in touch
7. **Footer** - Social links and copyright

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
- **Hreflang tags** for multilingual SEO (English and Spanish versions)
- FontAwesome loaded via CDN kit (1450436a40)

## Google Analytics Implementation

The portfolio uses **Google Analytics 4 (GA4)** with measurement ID `G-LDNFBEYMLD`.

### Setup & Configuration

The tracking code is placed in the `<head>` section of all HTML pages:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LDNFBEYMLD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", "G-LDNFBEYMLD");
</script>
```

**Pages with tracking:**
- `index.html` - Main portfolio page (English)
- `codi-api.html` - Blog post (English)
- `financial-report-pdf.html` - Blog post (English)
- `water-level-monitor.html` - Blog post (English)
- `es/index.html` - Main portfolio page (Spanish)
- `es/codi-api.html` - Blog post (Spanish)
- `es/financial-report-pdf.html` - Blog post (Spanish)
- `es/water-level-monitor.html` - Blog post (Spanish)

### What's Tracked

#### Automatic Tracking:
- Page views
- User sessions
- Traffic sources
- Geographic location
- Device/browser information
- Bounce rate and engagement

#### Custom Event Tracking:

All custom events on `index.html` use this format:
```javascript
gtag('event', 'click', {
  'event_category': 'Category Name',
  'event_label': 'Specific Action'
})
```

**Event Categories:**
- `Header` - Top navigation actions (Resume button at `index.html:112`)
- `About Me` - About section interactions (Intro video at `index.html:161`)
- `Project` - All project-related clicks:
  - CoDi API: Blog, Docs, GitHub (`index.html:407,416,425`)
  - Salsa-Candela Admin: Visit, Video (`index.html:470,480`)
  - Salsa-Candela Business: Visit, GitHub (`index.html:527,536`)
  - Salsa-Candela Bar: Visit, Video (`index.html:581,590`)
  - Portfolio Dashboard: Video, GitHub (`index.html:637,647`)
  - IoT Energy Monitor: Blog, GitHub (`index.html:695,704`)
  - Financial Report PDF: Blog, GitHub (`index.html:752,761`)
  - Water Monitoring System: Blog, GitHub (`index.html:810,819`)
- `Contact` - Contact form/email interactions (Email button at `index.html:852`)

**Note:** Blog posts only track page views, not custom events.

### Viewing Analytics Data

To view this data in Google Analytics:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select the property with ID `G-LDNFBEYMLD`
3. Navigate to different reports:
   - **Reports > Engagement > Events** - View all custom click events
   - **Reports > Engagement > Pages and screens** - See page views and most visited pages
   - **Reports > Acquisition > Traffic acquisition** - See where visitors come from
   - **Reports > User attributes > Overview** - View demographics and device data
   - **Explore** - Create custom reports filtering by event categories and labels

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The custom domain (pablocruz.io) is configured via the CNAME file.

## Animation and Interactions

### Custom CSS Animations

- Fade-in animations on scroll using CSS `animation-timeline: view()`
- Hover effects on project images (brightness and float animations)
- GIF animations on hover for project demonstrations
- Scroll-based fade-out effects

### JavaScript Features

**Main.js:**
- Vanilla JavaScript smooth scrolling using scrollIntoView API
- Skeleton loading for images with lazy loading support
- Page load animation management with preload class removal

**Blog.js:**
- Copy-to-clipboard functionality for code blocks
- Back-to-top navigation buttons
- Prism.js integration for syntax highlighting

## Important Notes

- **No Build Process**: This is intentionally a simple static site
- **Direct File Editing**: Make changes directly to HTML, CSS, and JS files
- **Image Optimization**: Ensure images are web-optimized before adding
- **Mobile-First**: Always test responsive design on mobile devices
- **SEO Friendly**: Maintain semantic HTML and meta tags when making changes
- **Multilingual Pages**:
  - English pages are in the root directory (`/`)
  - Spanish pages are in the `/es/` directory
  - All pages share the same assets (CSS, JS, images) using relative paths
  - When updating content, update BOTH English and Spanish versions
  - Maintain hreflang tags on all pages for SEO
  - Language switcher uses simple navigation links (not JavaScript)
- **CSS Best Practices**:
  - Never use !important in CSS. If you see it in any CSS file, remove it
  - For CSS changes, never write in the main.css file, always use custom.css or blog.css for specificity
  - Compile SCSS to main.css when making changes to .scss files
- **Blog Posts**:
  - Use blog.css for blog-specific styling
  - Include Prism.js for syntax highlighting in code blocks
  - Maintain consistent structure with table of contents and back-to-top navigation
  - Optimize images specifically for blog content
  - Ensure "back to portfolio" links point to correct language version
- **FontAwesome**: Icons are loaded via CDN with local webfont backup for reliability
- **Git Commits**: Do not add "Generated with Claude Code", "Co-Authored-By: Claude", or similar attribution lines to commit messages
