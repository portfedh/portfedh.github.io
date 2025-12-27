# IoT Energy Monitor Blog Post Migration Plan

**Project:** Migrate IoT Energy Monitor blog post from blog.pablocruz.io to pablocruz.io
**Date Created:** December 26, 2025
**Status:** Planning Phase

## Overview

This plan outlines the process of creating a new blog post page for the IoT Energy Monitor project, migrating content from the existing blog at https://blog.pablocruz.io/iot-energy-monitor/ to match the format and structure of other blog posts on pablocruz.io.

## Objectives

1. Create a new blog post page (iot-energy-monitor.html) that follows the existing blog post template structure
2. Maintain consistency with existing blog posts (water-level-monitor.html and financial-report-pdf.html)
3. Implement both English and Spanish versions
4. Update portfolio index pages to link to the new local blog page instead of the external blog
5. Ensure all images, code snippets, and formatting are preserved

## Source Information

**Existing Blog Post:**
- URL: https://blog.pablocruz.io/iot-energy-monitor/
- Title: "How to make an IoT energy monitor"
- Published: August 29, 2022
- Last Updated: August 20, 2024
- Description: "This post explains how I made an IoT energy monitor using a raspberry pi, an ESP32 and some SCT-013 current sensors."
- Featured Image: energy_monitor_finished.png (1868 x 862 pixels)

**Reference Templates:**
- water-level-monitor.html (English) - Best reference, has clean structure without i18n scripts
- es/water-level-monitor.html (Spanish)
- financial-report-pdf.html (English) - Note: has leftover i18n scripts that should NOT be copied

## File Structure

```
/myPortfolio/
├── iot-energy-monitor.html (NEW - English version)
├── es/
│   └── iot-energy-monitor.html (NEW - Spanish version)
├── images/
│   └── iot-energy-monitor/ (NEW directory for images)
│       ├── energy_monitor_finished.png (featured image)
│       └── (additional images from blog)
├── index.html (UPDATE - change blog link from external to local)
└── es/index.html (UPDATE - change blog link from external to local)
```

## Implementation Stages

### Stage 1: Content Extraction and Asset Collection ✅ COMPLETED
**Status:** ✅ Completed
**Deliverables:**
- [x] Fetch complete content from existing blog post
- [x] Identify all images and assets needed
- [x] Analyze existing blog post templates
- [x] Document content structure

**Notes:**
- Content fetched successfully from blog.pablocruz.io
- Template analysis completed
- Reference structure identified

---

### Stage 2: Image and Asset Migration
**Status:** ✅ Completed (December 26, 2025)
**Actual Duration:** 1 hour
**Deliverables:**
- [x] Create images/iot-energy-monitor/ directory
- [x] Download and save all images from the blog post:
  - [x] energy_monitor_finished.png (featured image - 2.5 MB)
  - [x] All diagram images (2 images)
  - [x] Component images (3 images)
  - [x] Setup/installation images (8 images)
  - [x] Code screenshot images (4 images)
  - [x] Calibration GIF (1 image - 4.8 MB)
- [x] Create IMAGE_INVENTORY.md documentation
- [x] Verify image quality and dimensions

**Results:**
- **Total Images Downloaded:** 20
- **Total Size:** ~8.4 MB
- **File Formats:** 7 PNG, 12 JPG, 1 GIF
- **All images web-optimized and ready for use**

**Commands run:**
```bash
mkdir -p "images/iot-energy-monitor"
# Downloaded all 20 images from blog.pablocruz.io using curl
```

**Review Checkpoint:**
- ✅ All 20 images downloaded correctly
- ✅ Image file sizes are appropriate for web
- ✅ Committed changes: "Add images for IoT Energy Monitor blog post"
- **Commit:** df30ead

---

### Stage 3: Create English Blog Post Page
**Status:** ✅ Completed (December 26, 2025)
**Actual Duration:** 2 hours
**Deliverables:**
- [x] Create iot-energy-monitor.html using water-level-monitor.html as template
- [ ] Update HTML structure:
  - [ ] Meta tags (title, description, Open Graph, Twitter cards)
  - [ ] Language switcher links
  - [ ] Featured image section
  - [ ] Table of contents structure
  - [ ] Blog content sections
  - [ ] Code blocks with Prism.js syntax highlighting
  - [ ] Navigation section (Back to Portfolio + GitHub link)
  - [ ] Contact section
  - [ ] Footer
- [ ] Add Google Analytics tracking
- [ ] Add hreflang tags for SEO
- [ ] Ensure all links are correct
- [ ] Remove any i18n script references

**Key Content Sections to Include:**
Based on the existing blog structure:
1. Why make an energy monitor
2. How the energy monitor works
3. Components needed
4. Hardware setup
5. Software configuration
6. Reading sensor data
7. Saving data to database
8. Visualizing the data
9. Code examples
10. Resources and links

**Review Checkpoint:**
- Verify HTML structure matches template
- Test all internal anchor links
- Verify code blocks have proper syntax highlighting
- Check responsive design on mobile
- Commit changes: "Add English version of IoT Energy Monitor blog post"

---

### Stage 4: Create Spanish Blog Post Page
**Status:** ⏳ Pending
**Estimated Duration:** 2-3 hours
**Deliverables:**
- [ ] Create es/iot-energy-monitor.html based on English version
- [ ] Translate all content to Spanish:
  - [ ] Meta tags
  - [ ] Page title and description
  - [ ] All headings and section titles
  - [ ] Body content
  - [ ] Image captions
  - [ ] Button text
  - [ ] Code comments (if applicable)
- [ ] Update asset paths to use ../ prefix
- [ ] Update language switcher (Spanish active)
- [ ] Update hreflang tags
- [ ] Ensure "Back to Portfolio" links to es/index.html

**Review Checkpoint:**
- Verify all content is properly translated
- Check asset paths are correct (../assets/, ../images/)
- Test language switcher between EN and ES versions
- Verify Spanish portfolio link works
- Commit changes: "Add Spanish version of IoT Energy Monitor blog post"

---

### Stage 5: Update Portfolio Index Pages
**Status:** ⏳ Pending
**Estimated Duration:** 30 minutes
**Deliverables:**
- [ ] Update index.html (line ~666):
  - Change from: `https://blog.pablocruz.io/iot-energy-monitor/`
  - Change to: `iot-energy-monitor.html`
- [ ] Update es/index.html (equivalent line):
  - Change from: `https://blog.pablocruz.io/iot-energy-monitor/`
  - Change to: `iot-energy-monitor.html`
- [ ] Verify Google Analytics events are still firing correctly

**Review Checkpoint:**
- Test blog link from English portfolio page
- Test blog link from Spanish portfolio page
- Verify links open correctly (no 404 errors)
- Test back-to-portfolio links work both ways
- Commit changes: "Update portfolio links to local IoT Energy Monitor blog"

---

### Stage 6: Quality Assurance and Testing
**Status:** ⏳ Pending
**Estimated Duration:** 1-2 hours
**Deliverables:**
- [ ] Test all pages in multiple browsers (Chrome, Firefox, Safari)
- [ ] Test responsive design on mobile devices
- [ ] Verify all images load correctly
- [ ] Test all internal and external links
- [ ] Check code block copy functionality
- [ ] Test back-to-top navigation buttons
- [ ] Verify language switcher works in both directions
- [ ] Check Google Analytics tracking
- [ ] Validate HTML (W3C validator)
- [ ] Test social media sharing (Open Graph and Twitter cards)
- [ ] Verify hreflang tags are correct for SEO

**Testing Checklist:**
- [ ] English blog post (iot-energy-monitor.html)
  - [ ] All images display correctly
  - [ ] All links work (internal and external)
  - [ ] Code blocks have syntax highlighting
  - [ ] Copy button works on code blocks
  - [ ] Back to top navigation works
  - [ ] Language switcher to Spanish works
  - [ ] Back to Portfolio link works
  - [ ] GitHub link works
- [ ] Spanish blog post (es/iot-energy-monitor.html)
  - [ ] All images display correctly (with ../ paths)
  - [ ] All links work (internal and external)
  - [ ] Code blocks have syntax highlighting
  - [ ] Copy button works on code blocks
  - [ ] Back to top navigation works
  - [ ] Language switcher to English works
  - [ ] Back to Portfolio link works (to Spanish portfolio)
  - [ ] GitHub link works
- [ ] Portfolio pages
  - [ ] English portfolio IoT Energy Monitor link works
  - [ ] Spanish portfolio IoT Energy Monitor link works
  - [ ] Google Analytics events fire correctly

**Review Checkpoint:**
- All tests pass
- No broken links
- No console errors
- Responsive design works on all screen sizes
- Ready for final commit

---

### Stage 7: Final Review and Deployment
**Status:** ⏳ Pending
**Estimated Duration:** 30 minutes
**Deliverables:**
- [ ] Final code review
- [ ] Clean up any temporary files
- [ ] Update CLAUDE.md if needed with new blog post information
- [ ] Create final commit with all changes
- [ ] Push to GitHub
- [ ] Verify deployment on GitHub Pages
- [ ] Test live site at pablocruz.io

**Final Commit Message:**
```
Add IoT Energy Monitor blog post with multilingual support

- Create iot-energy-monitor.html (English version)
- Create es/iot-energy-monitor.html (Spanish version)
- Add all blog post images to images/iot-energy-monitor/
- Update portfolio links to point to local blog instead of external blog
- Include hreflang tags for SEO
- Add Google Analytics tracking
- Maintain consistency with existing blog post structure
```

**Post-Deployment Verification:**
- [ ] Visit https://pablocruz.io/iot-energy-monitor.html
- [ ] Visit https://pablocruz.io/es/iot-energy-monitor.html
- [ ] Test from portfolio page links
- [ ] Verify in Google Search Console (hreflang tags)
- [ ] Check Google Analytics for tracking

---

## Technical Requirements

### HTML Structure
- Use water-level-monitor.html as the primary template (clean structure)
- Include all required meta tags (Open Graph, Twitter, SEO)
- Add hreflang tags for English and Spanish versions
- Include Google Analytics tracking code
- Use Prism.js for code syntax highlighting
- Implement language switcher with simple links (no JavaScript)

### CSS/Styling
- Use existing stylesheets (custom.css, main.css, blog.css)
- Maintain consistent styling with other blog posts
- Ensure responsive design works on all breakpoints

### JavaScript
- Include main.js for core functionality
- Include blog.js for blog-specific features (copy code, back-to-top)
- Load Prism.js for syntax highlighting
- Load FontAwesome icons
- NO i18n scripts (content is pre-translated)

### SEO and Metadata
```html
<!-- English version -->
<title>How to make an IoT energy monitor | Pablo Cruz</title>
<meta property="og:title" content="How to make an IoT energy monitor" />
<meta property="og:description" content="This post explains how I made an IoT energy monitor using a raspberry pi, an ESP32 and some SCT-013 current sensors." />
<meta property="og:image" content="https://pablocruz.io/images/iot-energy-monitor/energy_monitor_finished.png" />
<meta property="og:url" content="https://pablocruz.io/iot-energy-monitor.html" />

<!-- Hreflang tags -->
<link rel="alternate" hreflang="en" href="https://pablocruz.io/iot-energy-monitor.html" />
<link rel="alternate" hreflang="es" href="https://pablocruz.io/es/iot-energy-monitor.html" />
<link rel="alternate" hreflang="x-default" href="https://pablocruz.io/iot-energy-monitor.html" />
```

### GitHub Repository Link
- English: https://github.com/portfedh/CurrentSensorsMQTT
- Spanish: https://github.com/portfedh/CurrentSensorsMQTT (same)

## Common Issues to Avoid

Based on CLAUDE.md guidance for multilingual pages:

1. ❌ **Missing closing tags** - Double-check all HTML tags are properly closed
2. ❌ **Incorrect closing tags** - Don't close `<a>` tags with `</div>` or `</li>`
3. ❌ **Using buttons for language switcher** - Use `<a>` links instead
4. ❌ **Leftover i18n scripts** - Remove all data-i18n attributes and blog-i18n.js references
5. ❌ **Incorrect asset paths in Spanish version** - Use `../assets/` and `../images/`
6. ❌ **Wrong language switcher links** - Ensure they point to the correct page and directory
7. ❌ **Missing hreflang tags** - Include on both English and Spanish versions
8. ❌ **Broken "Back to Portfolio" links** - Spanish blog should link to Spanish portfolio

## Success Criteria

- ✅ Both English and Spanish blog pages display correctly
- ✅ All images load properly
- ✅ All links work (internal navigation, external links, language switcher)
- ✅ Code blocks have syntax highlighting and copy functionality
- ✅ Responsive design works on all screen sizes
- ✅ No HTML validation errors
- ✅ Google Analytics tracking works
- ✅ SEO tags are correct (Open Graph, Twitter Cards, hreflang)
- ✅ Portfolio links updated to point to new local blog pages
- ✅ No broken links anywhere in the site
- ✅ Page loads quickly (images optimized)

## Resources

**Template Files:**
- `/Users/portfedh/FamilyOffice Dropbox/Pablo Cruz/1. Family Office/Fam CL/Proyectos/Coding/2_Projects/myPortfolio/water-level-monitor.html`
- `/Users/portfedh/FamilyOffice Dropbox/Pablo Cruz/1. Family Office/Fam CL/Proyectos/Coding/2_Projects/myPortfolio/es/water-level-monitor.html`

**Source Content:**
- https://blog.pablocruz.io/iot-energy-monitor/

**GitHub Repository:**
- https://github.com/portfedh/CurrentSensorsMQTT

**Portfolio Project Section:**
- index.html (lines ~630-685)
- es/index.html (equivalent section)

## Notes and Considerations

1. **Content Extraction:** Will need to manually extract all content from the blog.pablocruz.io site since it's a different CMS
2. **Image Quality:** Ensure featured image maintains quality at 1868x862 pixels
3. **Code Snippets:** Preserve all code formatting and ensure Prism.js language detection works
4. **Translation:** Spanish translation will require careful attention to technical terms
5. **Testing:** Test on multiple devices and browsers before final deployment
6. **Analytics:** Verify Google Analytics events for the new blog links

## Progress Tracking

- [x] Stage 1: Content Extraction and Asset Collection ✅ Completed
- [x] Stage 2: Image and Asset Migration ✅ Completed (Commit: df30ead)
- [x] Stage 3: Create English Blog Post Page ✅ Completed (Commit: 9f38cea)
- [ ] Stage 4: Create Spanish Blog Post Page
- [ ] Stage 5: Update Portfolio Index Pages
- [ ] Stage 6: Quality Assurance and Testing
- [ ] Stage 7: Final Review and Deployment

---

**Last Updated:** December 26, 2025 - 18:16
**Current Stage:** Stage 3 Complete - English blog post created!
**Next Steps:** Stage 4 (Spanish version), Stage 5 (Update portfolio links), Stage 6 (Testing)
**Completed Files:** iot-energy-monitor.html (1356 lines, 53KB)
