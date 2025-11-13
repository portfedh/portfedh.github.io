# CoDi API - Image Reference Guide

This document lists all images referenced in the CoDi API portfolio project and provides guidance on how to create or obtain them.

## Directory Structure

Create this folder structure in your project:

```
/images/codi-api/
├── codi-api-cover.png          # Thumbnail for portfolio grid (static)
├── codi-api-gif.gif            # Thumbnail for portfolio grid (animated)
├── codi-api-featured.png       # Hero image for blog post
├── docs-index.png              # Documentation landing page screenshot
├── docs-playground.png         # API playground screenshot
├── docs-tools.png              # Development tools screenshot
├── swagger-docs.png            # Swagger API documentation screenshot
├── swagger-qr-endpoint.png     # QR endpoint in Swagger
├── swagger-push-endpoint.png   # Push endpoint in Swagger
├── swagger-all-endpoints.png   # All endpoints view
├── codi-workflow.png           # Workflow diagram (optional)
└── architecture-diagram.png    # Architecture diagram (optional)
```

---

## Required Images

### 1. Portfolio Thumbnail Images

**File:** `images/codi-api-cover.png`
**Dimensions:** ~400-500px width, 4:3 or 16:9 aspect ratio
**Purpose:** Static thumbnail shown in portfolio grid
**Design:** Blue gradient (#0089D1) with:

- "CoDi API" text
- "API RESTful para Pagos Digitales en México" subtitle
- Mexican flag or Banxico reference
- QR code illustration or API icon

**File:** `images/codi-api-gif.gif`
**Dimensions:** Same as cover image
**Purpose:** Animated thumbnail shown on hover
**Design:** Could be:

- Animated gradient effect
- QR code generation animation
- Payment flow animation
- Or simply use the same static image

---

### 2. Hero/Featured Image - Done

**File:** `images/codi-api/codi-api-featured.png`
**Dimensions:** Full width (~1200-1600px wide, 600-800px tall)
**Purpose:** Main hero image at top of blog post
**Source:** Screenshot from https://docs.bite-size.mx/
**Recommendation:**

- Full-width screenshot of the documentation landing page
- Should show the hero section with "API CoDi® para Pagos Digitales en México"
- Include the three value propositions if possible

---

### 3. Documentation Site Screenshots

**File:** `images/codi-api/docs-index.png`
**Purpose:** Show documentation site landing page
**Source:** Screenshot from https://docs.bite-size.mx/
**What to capture:**

- Hero section with tagline
- Three key benefits (Sin Comisiones, Dinero al Instante, Trazabilidad Total)
- Main characteristics section
- "Cómo Funciona" workflow
- Use cases section

**File:** `images/codi-api/docs-playground.png`
**Purpose:** Show interactive API playground
**Source:** Screenshot from playground page
**What to capture:**

- Tab navigation (Generar QR, Push Notification, etc.)
- Form fields for testing
- "Generar Código QR" button
- Blue info boxes

**File:** `images/codi-api/docs-tools.png`
**Purpose:** Show development tools page
**Source:** Screenshot from tools page
**What to capture:**

- "Herramientas de Desarrollo" heading
- Code generator interface
- Language selector (cURL, JavaScript, Python)
- Generated code snippet example

---

### 4. Swagger Documentation Screenshots

**File:** `images/codi-api/swagger-docs.png`
**Purpose:** Show complete Swagger API documentation
**Source:** Screenshot from https://api.bite-size.mx/api-docs
**What to capture:**

- Full Swagger UI interface
- Title and version badges
- All 4 sections visible:
  - CoDi Payments
  - CoDi Information
  - System
  - Operations Webhook
- Green "Authorize" button
- HTTP method badges

**File:** `images/codi-api/swagger-qr-endpoint.png`
**Purpose:** Show QR code endpoint detail
**Source:** Screenshot from Swagger docs with /v2/codi/qr expanded
**What to capture:**

- Endpoint path and description
- Request body schema
- Response examples
- "Try it out" button

**File:** `images/codi-api/swagger-push-endpoint.png`
**Purpose:** Show push notification endpoint detail
**Source:** Screenshot from Swagger docs with /v2/codi/push expanded
**What to capture:**

- Same as QR endpoint but for push notifications

**File:** `images/codi-api/swagger-all-endpoints.png`
**Purpose:** Overview of all API endpoints
**Source:** Screenshot from Swagger docs showing all endpoints collapsed
**What to capture:**

- Clean view of all 5 endpoints
- Organized by category
- HTTP methods color-coded

---

## Optional Images (Can Create Later)

### 5. Diagrams

**File:** `images/codi-api/codi-workflow.png`
**Purpose:** Illustrate 3-step payment process
**How to create:**

- Use a tool like Figma, Canva, or Draw.io
- Show: 1) Generate request → 2) Customer authorizes → 3) Instant confirmation
- Use blue color theme (#0089D1)
- Include simple icons

**File:** `images/codi-api/architecture-diagram.png`
**Purpose:** Show technical architecture
**How to create:**

- Diagram showing flow from Client App → CoDi API → Banxico → Bank
- Include authentication layer, database, webhooks
- Use boxes and arrows
- Blue theme

---

## How to Capture Screenshots

### From Live Sites:

1. **Documentation Site:** https://docs.bite-size.mx/

   - Use browser dev tools to set viewport to ~1400px wide
   - Take full-page screenshots or section-by-section
   - Ensure blue gradient and branding are visible

2. **Swagger Docs:** https://api.bite-size.mx/api-docs
   - Capture with Swagger UI theme intact
   - Show endpoints expanded for detail shots
   - Capture collapsed view for overview

### Screenshot Tools:

- **macOS:** Cmd+Shift+4 (drag to select area)
- **Windows:** Windows+Shift+S (Snipping Tool)
- **Browser Extensions:**
  - Full Page Screen Capture (Chrome)
  - Fireshot (Firefox/Chrome)
- **Design Tools:**
  - Figma (for creating diagrams)
  - Canva (for creating thumbnails)
  - Draw.io (for architecture diagrams)

---

## Placeholder Images Currently Used

The HTML files reference these image paths. Until you add the actual images, you'll see broken image icons. The site will still function, but won't look complete.

### Priority Order:

1. **High Priority** (visible on portfolio):

   - `codi-api-cover.png` - Portfolio thumbnail
   - `codi-api-gif.gif` - Animated thumbnail

2. **Medium Priority** (visible on blog post):

   - `codi-api-featured.png` - Hero image
   - `docs-index.png` - Documentation screenshot
   - `swagger-docs.png` - API documentation

3. **Low Priority** (detail shots):
   - All other specific screenshots
   - Diagrams can be added later

---

## Quick Start Guide

1. Create the `/images/codi-api/` directory in your project
2. Visit https://docs.bite-size.mx/ and take a full-page screenshot → save as `codi-api-featured.png`
3. Crop the hero section → save as `codi-api-cover.png` (resize to ~400px wide)
4. Copy `codi-api-cover.png` → `codi-api-gif.gif` (placeholder until you create animation)
5. Visit https://api.bite-size.mx/api-docs and take screenshot → save as `swagger-docs.png`
6. Capture individual sections as needed for other images

---

## Color Palette Reference

Use these colors when creating custom graphics:

- **Primary Blue:** #0089D1 (bright cyan-blue)
- **Gradient Background:** Light blue to white
- **Text:** Dark gray/black (#1a1a1a)
- **Success/Action:** Green (#22c55e)
- **Code Blocks:** Dark theme (#1e1e1e)

---

## Notes

- All images should be optimized for web (compressed without losing quality)
- Use PNG format for screenshots and graphics
- Use GIF or MP4 for animations
- Recommended tools for optimization:
  - TinyPNG (https://tinypng.com/)
  - ImageOptim (macOS)
  - Squoosh (https://squoosh.app/)

---

## Questions?

If you need help creating any of these images or want suggestions for alternatives, feel free to ask!
