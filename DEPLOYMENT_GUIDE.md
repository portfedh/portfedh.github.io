# Deployment Guide - Multilingual Site Migration

**Date**: December 25, 2025
**Migration**: JavaScript i18n to Static HTML Files

---

## Pre-Deployment Checklist

✅ All 8 HTML pages created (4 English + 4 Spanish)
✅ All `data-i18n` attributes removed
✅ Hreflang tags added to all pages
✅ Google Analytics tracking verified
✅ Cross-page navigation tested
✅ Asset paths verified
✅ Old i18n infrastructure removed
✅ sitemap.xml created
✅ robots.txt updated
✅ QA testing completed
✅ All changes committed

---

## Deployment Steps

### Step 1: Push to GitHub

Your site is configured for GitHub Pages deployment from the `main` branch.

```bash
# Push all commits to GitHub
git push origin main
```

**Expected behavior**:
- GitHub Pages will automatically rebuild the site
- Changes will be live within 1-10 minutes
- Site URL: https://pablocruz.io

### Step 2: Verify Deployment

After pushing, verify the deployment was successful:

1. **Check GitHub Pages deployment**:
   - Go to: https://github.com/portfedh/portfedh.github.io/settings/pages
   - Verify "Your site is live at https://pablocruz.io"

2. **Test live URLs**:
   - English: https://pablocruz.io/
   - Spanish: https://pablocruz.io/es/
   - English blogs:
     - https://pablocruz.io/codi-api.html
     - https://pablocruz.io/financial-report-pdf.html
     - https://pablocruz.io/water-level-monitor.html
   - Spanish blogs:
     - https://pablocruz.io/es/codi-api.html
     - https://pablocruz.io/es/financial-report-pdf.html
     - https://pablocruz.io/es/water-level-monitor.html

3. **Test language switcher**:
   - Click EN/ES buttons on each page
   - Verify navigation between language versions

4. **Test cross-page links**:
   - Click blog links from portfolio
   - Click "Back to Portfolio" from blogs
   - Verify language consistency maintained

5. **Check browser console**:
   - Open DevTools (F12)
   - Look for 404 errors or missing files
   - Verify no JavaScript errors

---

## Post-Deployment: SEO Configuration

### Submit Sitemap to Search Engines

#### Google Search Console

1. Go to: https://search.google.com/search-console
2. Select property: `pablocruz.io`
3. Navigate to: **Indexing > Sitemaps**
4. Submit sitemap URL: `https://pablocruz.io/sitemap.xml`
5. Click "Submit"

**Expected result**: "Success" message, sitemap will be processed within hours/days

#### Bing Webmaster Tools

1. Go to: https://www.bing.com/webmasters
2. Add/verify site: `pablocruz.io`
3. Navigate to: **Sitemaps**
4. Submit sitemap URL: `https://pablocruz.io/sitemap.xml`
5. Click "Submit"

---

## Monitoring Schedule

### Day 1: Immediate Verification

**Tasks**:
- [ ] Verify all 8 pages load correctly
- [ ] Test language switcher on all pages
- [ ] Check Google Analytics (Real-Time view)
- [ ] Verify no 404 errors in browser console
- [ ] Test on mobile device
- [ ] Test in different browsers (Chrome, Firefox, Safari)

**Google Analytics - Real-Time**:
1. Go to: https://analytics.google.com
2. Select property: G-LDNFBEYMLD
3. Navigate to: **Reports > Realtime**
4. Visit your site and verify events are tracked

**Google Search Console**:
1. Go to: https://search.google.com/search-console
2. Navigate to: **Overview**
3. Check for crawl errors or issues

---

### Day 3: Initial Indexing Check

**Tasks**:
- [ ] Check if Spanish pages are being crawled
- [ ] Verify sitemap was processed by Google
- [ ] Review Google Analytics traffic patterns
- [ ] Check for any 404 errors

**Google Search Console**:
1. Navigate to: **Indexing > Pages**
2. Verify Spanish pages (`/es/*`) are being discovered
3. Check for any errors or warnings

**Sitemap Status**:
1. Navigate to: **Indexing > Sitemaps**
2. Check status: Should show "Success" with discovered URLs
3. Verify all 8 pages were discovered

---

### Day 7: Full Analysis

**Tasks**:
- [ ] Analyze traffic by language (English vs Spanish)
- [ ] Review search query data (if available)
- [ ] Check hreflang tag recognition
- [ ] Verify both language versions are indexed
- [ ] Review any crawl errors

**Google Analytics**:
1. Navigate to: **Reports > Engagement > Pages and screens**
2. Look for traffic to `/es/` pages
3. Compare English vs Spanish page views

**Search Console - Coverage**:
1. Navigate to: **Indexing > Pages**
2. Filter by: "Valid" pages
3. Verify all 8 pages are indexed

**Hreflang Validation**:
1. Use tool: https://technicalseo.com/tools/hreflang/
2. Enter: `https://pablocruz.io/`
3. Verify hreflang tags are correctly implemented
4. Check for errors or warnings

---

### Week 2-4: Ongoing Monitoring

**Weekly tasks**:
- [ ] Review Google Analytics traffic
- [ ] Check Search Console for new issues
- [ ] Monitor page performance (Core Web Vitals)
- [ ] Verify both languages receiving organic traffic

**Search Query Analysis** (if data available):
1. Navigate to: **Performance > Search results**
2. Add filter: "Page" contains "/es/"
3. Compare Spanish vs English search impressions/clicks

---

## Validation Tools

### SEO & Hreflang

**Hreflang Checker**:
- https://technicalseo.com/tools/hreflang/
- Validates hreflang implementation
- Shows language/region targeting

**Google Rich Results Test**:
- https://search.google.com/test/rich-results
- Validates structured data (if applicable)

### Performance

**Google Lighthouse**:
```bash
# Test English homepage
npx lighthouse https://pablocruz.io/ --view

# Test Spanish homepage
npx lighthouse https://pablocruz.io/es/ --view
```

**Expected scores**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**PageSpeed Insights**:
- https://pagespeed.web.dev/
- Test both English and Spanish versions
- Check Core Web Vitals

### Sitemap Validation

**XML Sitemap Validator**:
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Enter: `https://pablocruz.io/sitemap.xml`
- Verify no errors

---

## Expected Timeline

| Timeframe | Expected Behavior |
|-----------|------------------|
| 0-10 minutes | Site deployed to GitHub Pages |
| 1-24 hours | Google starts crawling new pages |
| 1-3 days | Spanish pages begin appearing in Search Console |
| 3-7 days | Both language versions indexed |
| 1-2 weeks | Hreflang tags recognized by Google |
| 2-4 weeks | Spanish pages start appearing in Spanish search results |

---

## Troubleshooting

### Issue: 404 Errors on Spanish Pages

**Symptoms**: `/es/` pages return 404

**Solution**:
1. Verify `/es/` directory was pushed to GitHub
2. Check GitHub repository file structure
3. Wait 5-10 minutes for GitHub Pages rebuild
4. Clear browser cache and retry

### Issue: Assets Not Loading on Spanish Pages

**Symptoms**: CSS/images broken on Spanish pages

**Solution**:
1. Verify asset paths use `../` prefix
2. Check browser DevTools Network tab
3. Verify assets exist in repository

### Issue: Language Switcher Not Working

**Symptoms**: Clicking EN/ES doesn't navigate

**Solution**:
1. Check links are `<a>` tags, not buttons
2. Verify href attributes are correct
3. Check browser console for JavaScript errors

### Issue: Sitemap Not Found

**Symptoms**: `sitemap.xml` returns 404

**Solution**:
1. Verify `sitemap.xml` is in root directory
2. Check it was pushed to GitHub
3. Wait for GitHub Pages rebuild

### Issue: Google Not Indexing Spanish Pages

**Symptoms**: Only English pages in Search Console

**Solution**:
1. Wait 3-7 days (crawling takes time)
2. Verify robots.txt allows `/es/` directory
3. Submit sitemap again in Search Console
4. Request indexing manually for key Spanish pages

---

## Success Metrics

After 30 days, you should see:

✅ **Indexing**:
- All 8 pages indexed in Google Search Console
- Both English and Spanish versions appearing in search results

✅ **Traffic**:
- Spanish pages receiving organic traffic
- Language-appropriate traffic (Spanish results for Spanish pages)

✅ **SEO**:
- Lighthouse SEO score: 100
- No hreflang errors
- Both languages in sitemap

✅ **Analytics**:
- Page views on both language versions
- No 404 errors
- All external links working

---

## Contact & Support

**Google Search Console**:
- https://search.google.com/search-console

**Google Analytics**:
- https://analytics.google.com
- Property ID: G-LDNFBEYMLD

**GitHub Pages Documentation**:
- https://docs.github.com/en/pages

**Hreflang Guide**:
- https://developers.google.com/search/docs/specialty/international/localized-versions

---

## Migration Complete! 🎉

Your portfolio is now:
- ✅ SEO-friendly with separate HTML files
- ✅ Fully crawlable by search engines
- ✅ Multilingual (English + Spanish)
- ✅ Properly tagged with hreflang
- ✅ No JavaScript dependency for language switching
- ✅ Ready for international audiences

**Next Step**: Push to GitHub and monitor!
