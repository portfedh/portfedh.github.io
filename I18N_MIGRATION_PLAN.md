# I18n Migration Plan: JavaScript to Static HTML Files

**Date**: December 25, 2025
**Objective**: Migrate from JavaScript-based internationalization to SEO-friendly separate HTML files

---

## Overview

Convert the current single-page JavaScript i18n implementation to a directory-based approach with separate HTML files for each language. This will improve SEO, make content crawlable by search engines, and eliminate dependency on JavaScript for language switching.

## Pages to Migrate

1. **index.html** - Main portfolio page
2. **codi-api.html** - CoDi API blog post
3. **financial-report-pdf.html** - Financial Report blog post
4. **water-level-monitor.html** - Water Level Monitor blog post

**Note**: `extras.html` is a style guide and does not need translation.

## Final URL Structure

```
English (Default):
/index.html
/codi-api.html
/financial-report-pdf.html
/water-level-monitor.html

Spanish:
/es/index.html
/es/codi-api.html
/es/financial-report-pdf.html
/es/water-level-monitor.html
```

---

## Migration Stages

### Stage 1: Project Setup & Directory Structure
**Estimated complexity**: Low
**Objective**: Create the foundation for Spanish pages

**Tasks**:
- [ ] Create `/es/` directory
- [ ] Create `/es/assets/` symbolic link or copy structure decision
- [ ] Update `.gitignore` if needed
- [ ] Document the new structure

**Testing**:
- [ ] Verify directory structure is correct
- [ ] Test asset accessibility from `/es/` directory

**Commit checkpoint**: "Create Spanish directory structure for i18n migration"

---

### Stage 2: Main Portfolio Page (index.html)
**Estimated complexity**: High
**Objective**: Convert the main portfolio page to separate English/Spanish versions

**Tasks**:
- [ ] Create `/es/index.html` by copying `/index.html`
- [ ] Remove `data-i18n` and `data-i18n-html` attributes from English version
- [ ] Replace all `data-i18n` content in Spanish version with translations from `/translations/es.json`
- [ ] Update language switcher to use links instead of JavaScript:
  - English version: Link to `/es/index.html`
  - Spanish version: Link to `/index.html`
- [ ] Add hreflang tags to both versions:
  ```html
  <link rel="alternate" hreflang="en" href="https://pablocruz.io/" />
  <link rel="alternate" hreflang="es" href="https://pablocruz.io/es/" />
  <link rel="alternate" hreflang="x-default" href="https://pablocruz.io/" />
  ```
- [ ] Update meta tags with correct language content (hardcoded, not JS-based)
- [ ] Set correct `lang` attribute in `<html>` tag (`en` vs `es`)
- [ ] Remove `<script src="assets/js/i18n.js"></script>` from both files
- [ ] Update resume PDF links if there are separate language versions

**Testing**:
- [ ] Verify all text is properly translated in Spanish version
- [ ] Check that language switcher works (navigates between pages)
- [ ] Confirm no `data-i18n` attributes remain
- [ ] Test all links and buttons function correctly
- [ ] Verify meta tags are correct for each language
- [ ] Check Google Analytics still works on both pages

**Commit checkpoint**: "Convert index.html to separate English and Spanish files"

---

### Stage 3: CoDi API Blog Post
**Estimated complexity**: Medium
**Objective**: Convert CoDi API blog post to separate language versions

**Tasks**:
- [ ] Create `/es/codi-api.html` by copying `/codi-api.html`
- [ ] Remove `data-i18n` attributes from English version
- [ ] Replace all content in Spanish version with translations from `/translations/blog/codi-api-es.json`
- [ ] Update language switcher links:
  - English version: Link to `/es/codi-api.html`
  - Spanish version: Link to `/codi-api.html`
- [ ] Add hreflang tags:
  ```html
  <link rel="alternate" hreflang="en" href="https://pablocruz.io/codi-api.html" />
  <link rel="alternate" hreflang="es" href="https://pablocruz.io/es/codi-api.html" />
  <link rel="alternate" hreflang="x-default" href="https://pablocruz.io/codi-api.html" />
  ```
- [ ] Update meta tags with language-specific content
- [ ] Set correct `lang` attribute in `<html>` tag
- [ ] Remove blog-i18n.js script reference
- [ ] Update navigation links (back to portfolio) to point to correct language version

**Testing**:
- [ ] Verify all blog content is translated correctly
- [ ] Check code blocks still have syntax highlighting
- [ ] Test copy-to-clipboard functionality
- [ ] Verify table of contents navigation works
- [ ] Test back-to-top buttons
- [ ] Confirm language switcher navigates correctly
- [ ] Check all images load properly

**Commit checkpoint**: "Convert codi-api.html to separate language files"

---

### Stage 4: Financial Report PDF Blog Post
**Estimated complexity**: Medium
**Objective**: Convert Financial Report blog post to separate language versions

**Tasks**:
- [ ] Create `/es/financial-report-pdf.html` by copying `/financial-report-pdf.html`
- [ ] Remove `data-i18n` attributes from English version
- [ ] Replace all content in Spanish version with translations from `/translations/blog/financial-report-pdf-es.json`
- [ ] Update language switcher links
- [ ] Add hreflang tags
- [ ] Update meta tags
- [ ] Set correct `lang` attribute
- [ ] Remove blog-i18n.js script reference
- [ ] Update navigation links

**Testing**:
- [ ] Verify translations
- [ ] Test code blocks and syntax highlighting
- [ ] Check navigation elements
- [ ] Verify images and media

**Commit checkpoint**: "Convert financial-report-pdf.html to separate language files"

---

### Stage 5: Water Level Monitor Blog Post
**Estimated complexity**: Medium
**Objective**: Convert Water Level Monitor blog post to separate language versions

**Tasks**:
- [ ] Create `/es/water-level-monitor.html` by copying `/water-level-monitor.html`
- [ ] Remove `data-i18n` attributes from English version
- [ ] Replace all content in Spanish version with translations from `/translations/blog/water-level-monitor-es.json`
- [ ] Update language switcher links
- [ ] Add hreflang tags
- [ ] Update meta tags
- [ ] Set correct `lang` attribute
- [ ] Remove blog-i18n.js script reference
- [ ] Update navigation links

**Testing**:
- [ ] Verify translations
- [ ] Test code blocks and syntax highlighting
- [ ] Check navigation elements
- [ ] Verify images and media

**Commit checkpoint**: "Convert water-level-monitor.html to separate language files"

---

### Stage 6: Cross-Page Navigation Updates
**Estimated complexity**: Medium
**Objective**: Ensure all internal links point to correct language versions

**Tasks**:
- [ ] Update project links in Spanish portfolio to point to Spanish blog posts
- [ ] Update "Back to Portfolio" links in Spanish blogs to point to Spanish portfolio
- [ ] Verify Resume button points to correct resume file (if language-specific)
- [ ] Check all footer links maintain language consistency
- [ ] Update any hardcoded URLs to be language-aware

**Testing**:
- [ ] Navigate entire site in English, verify no Spanish pages appear
- [ ] Navigate entire site in Spanish, verify no English pages appear
- [ ] Test all cross-page navigation flows
- [ ] Verify external links work from both language versions

**Commit checkpoint**: "Update cross-page navigation for language consistency"

---

### Stage 7: Remove i18n JavaScript Infrastructure
**Estimated complexity**: Low
**Objective**: Clean up old i18n system files

**Tasks**:
- [ ] Delete `/assets/js/i18n.js`
- [ ] Delete `/assets/js/blog-i18n.js`
- [ ] Delete `/translations/` directory and all JSON files
- [ ] Remove any CSS related to language switcher active states (if not needed)
- [ ] Update CLAUDE.md to reflect new structure

**Testing**:
- [ ] Verify all pages still load correctly
- [ ] Check browser console for any missing file errors
- [ ] Confirm no broken script references

**Commit checkpoint**: "Remove deprecated i18n JavaScript infrastructure"

---

### Stage 8: SEO Enhancements
**Estimated complexity**: Low
**Objective**: Improve search engine optimization for multilingual content

**Tasks**:
- [ ] Create/update `sitemap.xml` with all language versions
- [ ] Add proper canonical tags to each page
- [ ] Verify `robots.txt` allows indexing of `/es/` directory
- [ ] Add structured data markup (if applicable) to both language versions
- [ ] Update `CNAME` file if needed (should remain the same)

**Sitemap structure**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://pablocruz.io/</loc>
    <xhtml:link rel="alternate" hreflang="es" href="https://pablocruz.io/es/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://pablocruz.io/"/>
  </url>
  <url>
    <loc>https://pablocruz.io/es/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://pablocruz.io/"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://pablocruz.io/es/"/>
  </url>
  <!-- Repeat for all pages -->
</urlset>
```

**Testing**:
- [ ] Validate sitemap.xml using online validator
- [ ] Test robots.txt using Google Search Console
- [ ] Verify hreflang tags using hreflang testing tools

**Commit checkpoint**: "Add SEO enhancements for multilingual site"

---

### Stage 9: Final Testing & Quality Assurance
**Estimated complexity**: Medium
**Objective**: Comprehensive testing before deployment

**Tasks**:
- [ ] Test all pages in different browsers (Chrome, Firefox, Safari)
- [ ] Test responsive design on mobile devices for both languages
- [ ] Verify Google Analytics tracking on all pages
- [ ] Check all external links are working
- [ ] Verify all images load correctly from both directory levels
- [ ] Test 404 behavior for incorrect URLs
- [ ] Lighthouse SEO audit for both language versions
- [ ] Check page load performance
- [ ] Verify FontAwesome icons load correctly
- [ ] Test with JavaScript disabled (should work as static site)

**Testing checklist**:
- [ ] English index page works fully
- [ ] Spanish index page works fully
- [ ] All 3 English blog posts work
- [ ] All 3 Spanish blog posts work
- [ ] Language switcher navigates correctly on all pages
- [ ] No console errors on any page
- [ ] All meta tags are correct
- [ ] SEO best practices verified via Lighthouse

**Commit checkpoint**: "Final QA updates and fixes"

---

### Stage 10: Deployment & Monitoring
**Estimated complexity**: Low
**Objective**: Deploy to production and monitor

**Tasks**:
- [ ] Deploy to GitHub Pages
- [ ] Verify deployment was successful
- [ ] Test live site URLs work correctly
- [ ] Submit updated sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor Google Analytics for any issues
- [ ] Check Google Search Console for crawl errors
- [ ] Verify hreflang tags are recognized by search engines (may take days)

**Post-deployment monitoring** (first 7 days):
- [ ] Day 1: Check server logs, Analytics, Search Console
- [ ] Day 3: Verify both language versions are being indexed
- [ ] Day 7: Review traffic patterns, check for 404s or broken links

**Commit checkpoint**: "Update documentation with deployment notes"

---

## Asset Handling Strategy

**Decision needed**: How to handle `/assets/` folder for Spanish pages?

### Option A: Symbolic Link (Recommended)
```bash
cd es/
ln -s ../assets assets
```
**Pros**: No file duplication, easier maintenance
**Cons**: May not work on all systems, Windows compatibility

### Option B: Relative Paths
Use `../assets/` in Spanish HTML files
**Pros**: Works everywhere, simple
**Cons**: Need to update all asset references

### Option C: Copy Assets
Duplicate assets folder in `/es/`
**Pros**: Clean separation
**Cons**: Doubles storage, maintenance burden

**Recommendation**: Use **Option B (Relative Paths)** for GitHub Pages compatibility

---

## Translation Reference Files

All translations are already prepared in:
- `/translations/en.json` - Main portfolio English
- `/translations/es.json` - Main portfolio Spanish
- `/translations/blog/codi-api-en.json`
- `/translations/blog/codi-api-es.json`
- `/translations/blog/financial-report-pdf-en.json`
- `/translations/blog/financial-report-pdf-es.json`
- `/translations/blog/water-level-monitor-en.json`
- `/translations/blog/water-level-monitor-es.json`

---

## Rollback Plan

If issues arise during migration:

1. **Stage 1-6**: Simply delete `/es/` directory and restore any modified English files from git
2. **Stage 7**: Restore deleted files from git history: `git checkout HEAD~1 -- assets/js/i18n.js`
3. **Stage 8-10**: Revert commits: `git revert <commit-hash>`

**Important**: Commit after each stage to enable easy rollback!

---

## Success Criteria

Migration is successful when:
- ✅ All 4 pages exist in both English and Spanish versions
- ✅ No JavaScript required for language switching
- ✅ Search engines can crawl both language versions
- ✅ Hreflang tags properly implemented
- ✅ All internal navigation maintains language consistency
- ✅ Google Analytics tracking works on all pages
- ✅ Lighthouse SEO score is green for both languages
- ✅ No console errors on any page
- ✅ Both languages indexed by Google (verify in Search Console after 1-2 weeks)

---

## Resources

- [Google Multilingual/Multi-regional Guide](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)
- [Hreflang Tag Guide](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)

---

## Notes

- This migration removes client-side i18n completely
- All content will be server-side (static HTML)
- Better for SEO, accessibility, and performance
- Users can bookmark language-specific URLs
- Search engines will show correct language in search results
- Browser language detection will be handled by search engines ranking appropriate version
