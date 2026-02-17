---
name: blog-images
description: Generate an image requirements file listing all images needed for a blog post, with descriptions, dimensions, and naming conventions.
argument-hint: (no arguments needed — Claude will ask)
---

# Generate Blog Image Requirements

You are creating a detailed image requirements document for a blog post on Pablo Cruz's portfolio website.

## Step 1: Ask the User

Ask the user for:

1. **Blog post slug** — The filename without extension (e.g., `salsa-candela-admin`)

Then verify the English file `{slug}.html` exists before proceeding.

## Step 2: Analyze the Blog Post

Read `{slug}.html` and extract every `<img>` tag. For each image, note:
- The `src` path
- The `alt` text
- The context where it appears (which section, what it illustrates)
- Whether it's a featured image, inline image, side-by-side comparison, etc.

## Step 3: Create the Requirements File

Create `images/{slug}/IMAGE_REQUIREMENTS.md` with the following format:

### For Each Image

```markdown
## {N}. {Descriptive Name}

- **Filename:** `{exact-filename-from-src}.png`
- **Save to:** `images/{slug}/`
- **Used in section:** {Section name}
- **Type:** {Featured image / Inline screenshot / Side-by-side comparison / Logo / etc.}
- **What to capture:** {Detailed description of what the image should show}
- **Suggested dimensions:** {Width x Height recommendation}
- **Alt text used:** "{the alt text from the HTML}"
- **Notes:** {Any additional guidance — e.g., "show mobile view", "crop to just the dashboard header", "include sample data"}
```

### Guidelines for Image Descriptions

- Be very specific about what the screenshot should show
- Mention which page/screen/view to capture
- Note if sample/demo data should be visible
- Specify if it should be desktop, mobile, or both
- For the featured image, suggest a compelling composition
- For side-by-side images, explain what each side should show
- If the project has a live URL, mention it as a capture source

### Summary Section

At the end, include a summary:

```markdown
## Summary

- **Total images needed:** {count}
- **Image directory:** `images/{slug}/`
- **Recommended format:** PNG for screenshots, JPG for photos
- **Featured image:** {filename} (recommended size: 1200x630px for social sharing)
```
