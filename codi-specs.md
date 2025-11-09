# CoDi API - Portfolio Project Specification

**Document Version:** 1.0
**Date:** 2025-11-08
**Purpose:** Comprehensive specification for adding CoDi API project to portfolio

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Key Features](#key-features)
4. [Visual Assets & Screenshots](#visual-assets--screenshots)
5. [Portfolio Thumbnail Design Specification](#portfolio-thumbnail-design-specification)
6. [Project Page Layout Specification](#project-page-layout-specification)
7. [Content Sections](#content-sections)
8. [Design System & Style Guidelines](#design-system--style-guidelines)
9. [References & Links](#references--links)

---

## 1. Project Overview

### Project Name

**CoDi API** (Cobro Digital API)

### Tagline

"API RESTful para Pagos Digitales en México" (RESTful API for Digital Payments in Mexico)

### Description

An open-source Node.js/Express production-ready REST API that enables Mexican businesses to generate digital payment requests through Mexico's Central Bank (Banxico) CoDi system. The API supports QR code payments and push notifications to mobile banking apps, providing a secure, commission-free payment solution for e-commerce, point-of-sale systems, services, and marketplaces.

### Project Type

**Backend API** with companion frontend documentation site

### Status

Production-ready, actively maintained

### License

Apache 2.0 (Open Source)

### Primary URL

- **API Endpoint:** https://api.bite-size.mx/
- **Documentation Site:** https://docs.bite-size.mx/
- **API Documentation (Swagger):** https://api.bite-size.mx/api-docs

### Repository

https://github.com/portfedh/codi-api

---

## 2. Tech Stack

### Backend Technologies

- **Runtime:** Node.js 18.x+
- **Framework:** Express.js
- **Language:** JavaScript (ES6+)
- **Database:** Supabase (PostgreSQL)
- **Testing:** Jest with coverage reporting
- **Process Management:** PM2
- **API Documentation:** Swagger/OpenAPI 3.0

### Security & Authentication

- **Digital Signatures:** RSA certificate-based authentication
- **API Key Management:** 128-character hexadecimal keys
- **Security Middleware:** Helmet.js, CORS, Rate Limiting
- **Request Sanitization:** SQL injection and XSS prevention
- **Certificate Validation:** Custom certificate comparison and signature verification

### Frontend Documentation Site

- **Framework:** (Modern responsive web design)
- **Interactive Elements:** API Playground, Code Generator
- **Language:** Spanish (primary interface)
- **Design:** Blue gradient theme, clean modern UI

### Key Integrations

- **Banxico (Bank of Mexico):** Official CoDi payment system integration
- **Supabase:** Database, API key storage, request/response logging
- **QR Code Generation:** Dynamic payment QR codes
- **Push Notifications:** Direct mobile banking integration

### Development & DevOps

- **Version Control:** Git
- **CI/CD:** GitHub Actions (deployment workflow)
- **Environment Management:** dotenv
- **License Compliance:** automated license checking and reporting

---

## 3. Key Features

### Core Functionality

1. **QR Code Payments**

   - Generate dynamic CoDi QR codes for payment requests
   - Amount range: $1 MXN to $12,500 MXN per transaction
   - Instant payment confirmation
   - No transaction fees

2. **Push Notifications**

   - Send payment requests directly to customer's mobile banking app
   - Phone number-based targeting
   - Real-time payment status

3. **Payment Status Queries**

   - Check payment status via `folioCoDi` (payment reference)
   - Track payment history
   - Audit trail

4. **Webhook Integration**
   - Receive real-time payment result callbacks
   - Automatic payment confirmation
   - Configurable callback URLs

### Security Architecture

- Digital signature-based authentication with Banxico
- RSA certificate verification (2048-bit minimum)
- Dual environment support (Beta/Production)
- Certificate serial number validation
- API key validation via Supabase
- Request/response logging for audit trails
- CORS protection with IP whitelisting
- Rate limiting (200 requests per 15 minutes)
- Helmet.js security headers

### Reliability Features

- **Fallback Architecture:** Multiple endpoint support for each operation
- **Automatic Retry Logic:** Switches to backup endpoints on failure
- **Environment Isolation:** Separate Beta and Production configurations
- **Comprehensive Error Handling:** Detailed error messages and logging
- **Health Check Endpoint:** System status monitoring

### Developer Experience

- **Interactive Swagger Documentation:** Full API reference with try-it-out functionality
- **Comprehensive Frontend Docs:** Step-by-step integration guides in Spanish
- **API Playground:** Test endpoints in real-time without writing code
- **Code Generator:** Generate integration code in multiple languages (cURL, JavaScript, Python)
- **Institution Code Lookup:** Financial institution reference tool
- **Service Status Monitor:** Real-time API availability dashboard

### Data Management

- **Supabase Database Schema:** 5 core tables (customers, api_keys, folios_codi, requests, responses)
- **Complete Audit Trail:** All requests and responses logged with timestamps
- **Customer Management:** Multi-customer support with individual API keys
- **Environment Segregation:** Separate keys for development/production

---

## 4. Visual Assets & Screenshots

### Available Assets

#### From Documentation Site (docs.bite-size.mx)

1. **docs-index.png** - Landing Page

   - Hero section with tagline: "API CoDi® para Pagos Digitales en México"
   - Blue gradient background design
   - Three key value propositions:
     - "Sin Comisiones" (No Commissions) - Circle icon
     - "Dinero al Instante" (Instant Money) - Lightning icon
     - "Trazabilidad Total" (Full Traceability) - Mobile phone icon
   - Main characteristics section with 4 features:
     - Pago con Código QR
     - Pago con notificación Push
     - 100% Código Abierto
     - Seguridad Empresarial
   - "Cómo Funciona en 3 Pasos" workflow diagram
   - "¿Quién Usa CoDi® API?" use cases (E-commerce, Puntos de Venta, Servicios, Marketplaces)
   - Open source project info with Apache 2.0 license badge
   - Call-to-action buttons: "Regístrate", "Ver Documentación", "Probar API"

2. **docs-documentation.png** - Documentation Page

   - Clean documentation layout
   - Left sidebar navigation with sections:
     - Primeros Pasos
     - Autenticación
     - Tu Primer Request
     - Próximos Pasos
     - Referencia de API
     - Códigos de Error
   - Code examples in dark theme
   - Step-by-step request examples (JavaScript/Node.js, cURL, Python)
   - Warning boxes for security notes
   - Next steps cards at bottom

3. **docs-playground.png** - Interactive Playground

   - Tab navigation: Generar QR, Push Notification, Consultar Estado, Webhook
   - Form fields for testing API:
     - API Key input (with clear button)
     - Monto (amount) field
     - Concepto (concept/description)
     - Referencia Numérica (numeric reference)
     - Vigencia (expiration)
   - Blue "Generar Código QR" button
   - Blue info box with important note about QR code usage
   - Clean form layout with validation

4. **docs-tools.png** - Development Tools
   - "Herramientas de Desarrollo" heading
   - Tab navigation: Generador de Código, Estado del Servicio, Búsqueda de Instituciones
   - Code generator interface showing:
     - Endpoint selector (Generar QR, Push Notification, Consultar Estado)
     - Language selector (cURL, JavaScript (Fetch), Python (requests))
     - Generated code snippet in dark theme terminal style
     - Copy button for code
   - "Consejos de Uso" (Usage tips) in blue info box
   - Consistent footer across all pages

#### From Swagger Documentation (api.bite-size.mx/api-docs)

5. **swagger-docs.png** - API Documentation
   - Swagger UI interface (dark header with green Swagger logo)
   - Title: "CoDi API" with version badges (2.0.0, OAS 3.0)
   - Organized into 4 sections:
     - **CoDi Payments:** POST /v2/codi/qr, POST /v2/codi/push
     - **CoDi Information:** POST /v2/codi/consulta
     - **System:** GET /v2/health
     - **Operations Webhook:** POST /v2/resultadoOperaciones
   - Server dropdown: "http://localhost:3131 - Local development server"
   - Green "Authorize" button with lock icon
   - Collapsible endpoint sections
   - HTTP method badges (POST in green, GET in blue)
   - Lock icons indicating secured endpoints

### Color Palette (from Documentation Site)

- **Primary Blue:** #0089D1 (bright cyan-blue)
- **Gradient Background:** Light blue to white gradient
- **Accent:** Purple/magenta for certain highlights
- **Text:** Dark gray/black for body text
- **Code Blocks:** Dark theme with syntax highlighting
- **Success/Action Buttons:** Bright blue (#0089D1)
- **Info Boxes:** Light blue backgrounds with blue borders

### Typography & UI Elements

- Clean sans-serif font (similar to Inter or System UI)
- Icon usage: Simple line icons and filled icons for features
- Card-based layouts for features and sections
- Ample white space
- Responsive grid layouts
- Blue-themed gradients for hero sections

---

## 5. Portfolio Thumbnail Design Specification

### Thumbnail Requirements

Based on existing portfolio thumbnails, the design should be:

- **Dimensions:** Approximately 300-400px width (responsive)
- **Aspect Ratio:** 4:3 or 16:9 landscape
- **Format:** Modern card-style with image and text overlay or separate text section

### Suggested Thumbnail Concept

#### Option A: QR Code + Mobile Focus

**Visual Elements:**

- Background: Blue gradient (matching docs site theme)
- Central element: Stylized QR code graphic (not functional, artistic representation)
- Overlay: Smartphone mockup showing payment notification
- Icon badges: Mexico flag icon, Banxico logo reference, or "MX" badge

**Text Elements:**

- Title: "CoDi API"
- Subtitle: "Digital Payments API"
- Tech badges: "Node.js", "Express", "Supabase", "Banxico"
- Bottom tag: "Backend" or "API"

#### Option B: Architecture/Integration Focus

**Visual Elements:**

- Background: Clean white or light blue
- Central diagram: Simplified architecture flow
  - Left: "Your App" box
  - Center: "CoDi API" (highlighted)
  - Right: "Banxico" + bank icons
- Arrows showing data flow
- Lock/security icons

**Text Elements:**

- Title: "CoDi API"
- Subtitle: "Mexican Payment Gateway"
- Tech stack icons at bottom
- "Open Source" badge

#### Option C: Documentation Site Screenshot (Recommended)

**Visual Elements:**

- Cropped screenshot from docs-index.png showing:
  - Top portion with hero "API CoDi® para Pagos Digitales en México"
  - Three feature icons (Sin Comisiones, Dinero al Instante, Trazabilidad Total)
  - Slight overlay or border to match portfolio style

**Text Elements:**

- May not need additional text if screenshot is clear
- Optional overlay tag: "Production API"

### Thumbnail Styling Notes

- Should match portfolio's existing thumbnail style (based on portfolio.png grid)
- Consistent border radius with other project cards
- Subtle shadow or elevation effect
- Hover state: slight scale or shadow increase
- Ensure legibility at small sizes

---

## 6. Project Page Layout Specification

Based on the three example project pages (example-project-1.png, example-project-2.png, example-project-3.png), the CoDi API project page should follow this structure:

### Page Header Section

**Design:**

- Full-width gradient background (blue gradient matching brand colors)
- Large project title: "CoDi API"
- Subtitle: "RESTful API for Digital Payments in Mexico"
- Brief 1-2 sentence description
- Key metadata badges:
  - Status: "Production"
  - Type: "Backend API"
  - License: "Apache 2.0"
- Action buttons:
  - "View Documentation" (link to docs.bite-size.mx)
  - "API Reference" (link to Swagger docs)
  - "View on GitHub" (repository link)
  - "Try Playground" (link to playground)

### Section 1: Project Overview

**Content:**

- Comprehensive description of what CoDi is and why it exists
- Problem statement: Need for commission-free digital payments in Mexico
- Solution: Open-source API integrating with Banxico's official CoDi system
- Target users: E-commerce platforms, point-of-sale systems, service providers, marketplaces

**Visual:**

- Screenshot of docs-index.png (landing page)
- Caption: "CoDi API Documentation Site - Landing Page"

### Section 2: What is CoDi?

**Content:**

- Explanation of CoDi (Cobro Digital) payment system
- Banxico (Bank of Mexico) official digital payment infrastructure
- Two payment methods:
  - QR Code payments (scan to pay)
  - Push notifications (direct to mobile banking app)
- Key benefits:
  - Zero transaction fees
  - Instant money transfer
  - Full traceability
  - Bank-level security

**Visual:**

- Diagram or infographic showing the 3-step process
- Icons representing each payment method

### Section 3: Technical Architecture

**Content:**

- High-level architecture explanation
- Components:
  - Express.js REST API layer
  - RSA digital signature authentication
  - Supabase database for persistence
  - Banxico integration layer with fallback endpoints
  - Webhook system for payment confirmations

**Visual:**

- Architecture diagram showing:
  ```
  Client Application
         ↓
    CoDi API (this project)
    - Authentication Layer
    - Request Validation
    - Digital Signature
    - Fallback Logic
         ↓
    Banxico CoDi System
         ↓
    Customer's Bank
  ```

### Section 4: Key Features

**Content structured as feature cards:**

1. **QR Code Payment Generation**

   - Generate CoDi-compliant QR codes
   - $1 - $12,500 MXN per transaction
   - No commissions
   - Screenshot: Swagger docs showing /v2/codi/qr endpoint

2. **Push Payment Notifications**

   - Send payment requests to phone numbers
   - Direct integration with banking apps
   - Instant delivery
   - Screenshot: Swagger docs showing /v2/codi/push endpoint

3. **Payment Status Queries**

   - Real-time payment verification
   - Transaction history
   - Audit capabilities
   - Screenshot: Swagger docs showing /v2/codi/consulta endpoint

4. **Webhook Integration**

   - Automatic payment confirmations
   - Configurable callbacks
   - Retry logic
   - Screenshot: Code example or docs

5. **Security Architecture**

   - RSA digital signatures
   - Certificate-based authentication
   - API key management
   - Request/response logging
   - Code snippet showing signature verification

6. **Interactive Documentation**
   - Swagger/OpenAPI 3.0
   - Try-it-out functionality
   - Comprehensive guides in Spanish
   - Screenshot: swagger-docs.png

### Section 5: Developer Experience

**Content:**

- Interactive API playground
- Code generators for multiple languages
- Step-by-step integration guides
- Institution code lookup tools
- Service status monitoring

**Visual:**

- Screenshot: docs-playground.png showing the interactive playground
- Screenshot: docs-tools.png showing code generators
- Caption: "Live API playground with code generation tools"

### Section 6: Tech Stack Deep Dive

**Backend:**

```
- Runtime: Node.js 18+
- Framework: Express.js
- Database: Supabase (PostgreSQL)
- Testing: Jest
- Documentation: Swagger/OpenAPI
- Process Management: PM2
```

**Security:**

```
- Authentication: RSA certificates (2048-bit)
- API Keys: 128-char hexadecimal
- Middleware: Helmet.js, CORS, Rate Limiting
- Validation: Custom sanitization layer
- Encryption: Digital signatures for all Banxico requests
```

**Integration:**

```
- Banxico API: Official CoDi endpoints
- Supabase: Database & key management
- QR Code Generation: Custom implementation
- Webhooks: Async payment notifications
```

**Visual:**

- Tech stack icons/logos arranged in groups
- Code snippet showing middleware setup or key functionality

### Section 7: Database Architecture

**Content:**

- Database schema overview
- 5 core tables:
  - `customers`: Client information
  - `api_keys`: Authentication & Banxico integration
  - `folios_codi`: Payment tracking
  - `requests`: Request audit log
  - `responses`: Response audit log

**Visual:**

- Database schema diagram (if available from /database folder)
- Or simple entity relationship diagram

### Section 8: Security Features

**Content:**

- Multi-layer security approach
- Digital signature verification process
- Certificate validation flow
- API key generation and management
- Rate limiting (200 req/15 min)
- Request sanitization
- CORS configuration

**Visual:**

- Code snippet showing signature generation/verification
- Security flow diagram
- Example of digital certificate validation

### Section 9: API Endpoints Reference

**Content:**
Quick reference of all endpoints with descriptions:

| Endpoint                   | Method | Purpose                |
| -------------------------- | ------ | ---------------------- |
| `/v2/health`               | GET    | System health check    |
| `/v2/codi/qr`              | POST   | Generate QR payment    |
| `/v2/codi/push`            | POST   | Send push notification |
| `/v2/codi/consulta`        | POST   | Query payment status   |
| `/v2/resultadoOperaciones` | POST   | Payment webhook        |

**Visual:**

- Screenshot: Full swagger-docs.png showing all endpoints organized
- Or split into multiple screenshots for clarity

### Section 10: Code Examples

**Content:**
Real-world usage examples

**Example 1: Generate QR Payment**

```javascript
const response = await fetch("https://api.bite-size.mx/v2/codi/qr", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY",
  },
  body: JSON.stringify({
    monto: 99.99,
    concepto: "Product purchase",
    referencia: "1234567",
  }),
});

const data = await response.json();
// Returns: { success: true, qrCode: '...', folioCoDi: '...' }
```

**Example 2: Send Push Notification**

```javascript
const response = await fetch("https://api.bite-size.mx/v2/codi/push", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY",
  },
  body: JSON.stringify({
    monto: 99.99,
    concepto: "Service payment",
    referencia: "1234567",
    telefonoCliente: "5551234567",
  }),
});
```

**Example 3: Check Payment Status**

```javascript
const response = await fetch("https://api.bite-size.mx/v2/codi/consulta", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "YOUR_API_KEY",
  },
  body: JSON.stringify({
    folioCoDi: "ABC123DEF456",
  }),
});
```

### Section 11: Testing & Quality Assurance

**Content:**

- Jest test suite with coverage reporting
- 35+ utility functions tested
- Coverage areas:
  - Certificate verification
  - Digital signature generation
  - Request validation
  - Error handling
  - Data formatting
- Test coverage metrics

**Visual:**

- Code snippet showing test examples
- Coverage report screenshot (if available)

### Section 12: Deployment & Production

**Content:**

- Production deployment checklist
- PM2 process management
- Environment variable management
- HTTPS/SSL requirements
- Monitoring and logging
- Performance considerations

**Visual:**

- PM2 command examples
- Architecture diagram showing production setup

### Section 13: Use Cases

**Content:**
Who uses CoDi API:

1. **E-commerce Platforms**

   - Online stores accepting payments
   - Shopping cart integration
   - Order confirmation workflows

2. **Point of Sale Systems**

   - Physical retail locations
   - Restaurant payment systems
   - Service counters

3. **Service Providers**

   - Utility payments
   - Subscription services
   - Professional services

4. **Marketplaces**
   - Multi-vendor platforms
   - Peer-to-peer transactions
   - Commission-based models

### Section 14: Open Source & Community

**Content:**

- Apache 2.0 License explanation
- Contribution guidelines
- GitHub repository stats:
  - Stars, forks, issues
  - Last commit date
  - Code size
- Sponsorship information
- Community resources

**Visual:**

- GitHub badges from README
- License badge
- Contribution workflow diagram

### Section 15: Future Roadmap

**Content:**

- Planned enhancements:
  - Webhook retry mechanism with exponential backoff
  - Enhanced reporting and analytics
  - SDK libraries (JavaScript, Python, PHP)
- Community feature requests

### Section 16: Project Links & Resources

**Content:**
Organized link collection:

**Live Services:**

- API Endpoint: https://api.bite-size.mx/
- Documentation Site: https://docs.bite-size.mx/
- API Playground: https://docs.bite-size.mx/playground
- Swagger Docs: https://api.bite-size.mx/api-docs

**Code & Community:**

- GitHub Repository: https://github.com/portfedh/codi-api
- Issues: https://github.com/portfedh/codi-api/issues
- Discussions: https://github.com/portfedh/codi-api/discussions

**External Resources:**

- Banxico CoDi Official: https://www.banxico.org.mx/codi/
- Supabase Documentation: https://supabase.com/docs
- Express.js: https://expressjs.com/

### Footer Section

**Content:**

- Project metadata summary
- License: Apache 2.0
- Created by: Pablo Cruz Lemini
- GitHub: portfedh
- Contact information
- Sponsor link

---

## 7. Content Sections

### Project Statistics (for display)

- **Lines of Code:** ~3,000+ (estimate based on comprehensive structure)
- **Test Coverage:** High (Jest suite covering utilities, validation, auth)
- **Utility Functions:** 35+ helper functions
- **API Endpoints:** 5 main endpoints
- **Database Tables:** 5 core tables
- **Supported Languages:** Code examples in JavaScript, Python, cURL
- **Environments:** Dual (Beta + Production)
- **License:** Apache 2.0 (Open Source)

### Technical Highlights (bullet points for quick reference)

- Production-ready Express.js REST API
- Digital signature authentication with RSA certificates
- Dual environment support (Beta/Production)
- Fallback architecture for high availability
- Comprehensive Supabase database schema
- Complete request/response audit trail
- Interactive Swagger documentation
- API playground for live testing
- Multi-language code generators
- Security hardened (Helmet, CORS, rate limiting)
- Automated license compliance checking
- Jest test suite with coverage
- PM2 process management ready
- GitHub Actions CI/CD pipeline

### Business Value Proposition

- **Zero Transaction Fees:** No commissions on payments
- **Instant Transfers:** Real-time money movement
- **Bank Integration:** Direct connection to all Mexican banks via Banxico
- **Government Backed:** Official Mexican Central Bank system
- **Secure:** Bank-level security with digital signatures
- **Scalable:** Handles high transaction volumes
- **Reliable:** Fallback endpoints ensure uptime
- **Open Source:** No vendor lock-in, full code access
- **Well Documented:** Comprehensive guides in Spanish
- **Developer Friendly:** Interactive playground and code generators

---

## 8. Design System & Style Guidelines

### Consistency with Existing Portfolio

Based on the three example projects, maintain these design patterns:

#### Layout Structure

- **Header:** Full-width colored/gradient background with title and metadata
- **Content:** Maximum width container (likely 1200px) with ample padding
- **Sections:** Clear visual separation with headings and white space
- **Images:** Full-width or centered with captions
- **Code Blocks:** Dark theme with syntax highlighting
- **Footer:** Minimalist with links and attribution

#### Typography

- **Headings:** Large, bold, high contrast
- **Body Text:** Readable size (16-18px), good line height
- **Code:** Monospace font in dark terminal-style blocks
- **Captions:** Smaller, muted color for image descriptions

#### Color Scheme for CoDi API Page

**Primary Colors:**

- Blue: #0089D1 (from docs site)
- Gradient: Light blue to white for headers
- Dark: #1a1a1a for text and code blocks
- Gray: #6b7280 for secondary text

**Accent Colors:**

- Green: For success states, "Production" badges
- Purple: For special highlights (from docs site)
- Orange/Yellow: For warnings or important notes

#### Component Patterns

1. **Feature Cards:**

   - Icon or image at top
   - Title
   - Description
   - Optional CTA button

2. **Code Blocks:**

   - Language label (top-right corner)
   - Copy button
   - Dark background (#1e1e1e or similar)
   - Syntax highlighting

3. **Screenshots:**

   - Subtle border or shadow
   - Caption below
   - Optional lightbox/zoom on click

4. **Badges:**

   - Rounded pill shape
   - Small text
   - Color-coded by category (tech=blue, status=green, etc.)

5. **Section Dividers:**
   - Generous margin/padding
   - Optional horizontal rule or gradient fade

#### Responsive Behavior

- Mobile-first approach
- Images scale to container width
- Code blocks scrollable on mobile
- Navigation sticky or collapsible
- Touch-friendly buttons and links

#### Accessibility

- High contrast text
- Alt text for all images
- Semantic HTML headings (h1, h2, h3...)
- Keyboard navigation support
- ARIA labels where needed

---

## 9. References & Links

### Project URLs

- **Live API:** https://api.bite-size.mx/
- **Documentation:** https://docs.bite-size.mx/
- **Playground:** https://docs.bite-size.mx/playground (inferred)
- **Swagger Docs:** https://api.bite-size.mx/api-docs
- **GitHub:** https://github.com/portfedh/codi-api

### Asset Locations (for AI reference)

All screenshots are located at:

```
/Users/portfedh/FamilyOffice Dropbox/Pablo Cruz/1. Family Office/Fam CL/Proyectos/Coding/2_Projects/CoDi/100_codi_api/codi-api/
```

Files:

- `portfolio.png` - Portfolio index page
- `example-project-1.png` - Example project page 1
- `example-project-2.png` - Example project page 2
- `example-project-3.png` - Example project page 3
- `swagger-docs.png` - Swagger API documentation
- `docs-index.png` - Documentation site landing page
- `docs-documentation.png` - Documentation page
- `docs-playground.png` - API playground interface
- `docs-tools.png` - Development tools page
- `README.md` - Full project README with all technical details
- `CLAUDE.md` - Project-specific development instructions

### External References

- **CoDi Official:** https://www.codi.org.mx/
- **Banxico:** https://www.banxico.org.mx/codi/
- **Supabase:** https://supabase.com
- **Express.js:** https://expressjs.com
- **OpenAPI/Swagger:** https://swagger.io
- **Apache License 2.0:** https://www.apache.org/licenses/LICENSE-2.0

### Portfolio Context

The portfolio follows a clean, modern design with:

- Personal introduction and photo
- Skills/expertise section with tech stack icons
- GitHub activity visualization
- Project grid with card-based thumbnails
- Individual project pages with detailed case studies

### Key Differentiators for CoDi API Project

This project stands out because:

1. **Production API:** Actually deployed and functional (not just a demo)
2. **Government Integration:** Official Banxico system integration
3. **Open Source:** Apache 2.0 licensed, community-driven
4. **Dual Sites:** Both API and comprehensive documentation site
5. **Financial Technology:** Real-world payment processing
6. **Security Focus:** Certificate-based authentication, digital signatures
7. **Mexican Market:** Specific to Mexico's digital payment infrastructure
8. **Developer Tools:** Playground, code generators, interactive docs
9. **Enterprise Ready:** Production-grade with logging, monitoring, fallbacks
10. **Well Documented:** Extensive English + Spanish documentation

---

## Additional Notes for AI Implementation

### Suggested Workflow for Another AI

1. **Review this entire document** to understand project scope
2. **Examine all referenced screenshots** to understand visual style
3. **Create thumbnail** following Option C (screenshot-based) or Option A (QR-focused)
4. **Structure page** following the 16-section layout outlined above
5. **Maintain consistency** with example project pages in layout and typography
6. **Use actual screenshots** from docs site and Swagger for authenticity
7. **Write compelling copy** that explains technical concepts clearly
8. **Include code examples** that demonstrate real-world usage
9. **Add appropriate badges/metadata** for technologies and status
10. **Ensure all links work** and point to correct URLs

### Content Tone

- **Professional but approachable**
- **Technical but clear** (explain jargon)
- **Focused on value** (what problem does it solve?)
- **Evidence-based** (use screenshots, code, data)
- **Bilingual consideration** (project docs are Spanish, portfolio likely English)

### Priorities

1. **Highlight production readiness** - This is a real, deployed API
2. **Emphasize open source** - Apache 2.0, community-driven
3. **Showcase security** - Digital signatures, certificates, encryption
4. **Demonstrate completeness** - Docs site, playground, Swagger, tests
5. **Explain Mexican context** - Banxico, CoDi system, local relevance

### Technical Depth

- Balance between high-level overview and technical details
- Code examples should be copy-pasteable
- Architecture diagrams should be clear and informative
- Don't assume reader knows Mexican payment systems (explain CoDi)
- Highlight both developer experience AND business value

---

## Revision History

| Version | Date       | Changes                                      |
| ------- | ---------- | -------------------------------------------- |
| 1.0     | 2025-11-08 | Initial comprehensive specification document |

---

**End of Document**

This specification provides all necessary information for another AI to design the CoDi API portfolio thumbnail and create a complete, compelling project page that showcases the technical sophistication, production readiness, and open-source nature of this Mexican digital payment API.
