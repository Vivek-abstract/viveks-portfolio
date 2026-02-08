# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js (App Router) and Contentful CMS for blog content. Statically exported and deployed on Netlify.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Build static export to /out
```

## Architecture

### Routing (Next.js App Router, file-based)
- `/` - HomePage (HeroSection + Experience timeline)
- `/about` - About page
- `/blog` - Blog listing (async Server Component fetches from Contentful)
- `/blog/[id]` - Individual blog post (uses generateStaticParams)
- `not-found.js` - 404 page

### File Structure
```
app/
  layout.js              # Root layout: NavBar + children + Footer
  page.js                # HomePage
  globals.css            # CSS variables, theme, base styles
  about/page.js
  blog/page.js
  blog/[id]/page.js
  blog/[id]/renderOptions.js
  not-found.js
components/
  NavBar/NavBar.js + .module.css
  HeroSection/HeroSection.js + .module.css
  Experience/Experience.js + .module.css
  ExperienceCard/ExperienceCard.js + .module.css
  BlogDetails/BlogDetails.js + .module.css
  Footer/Footer.js + .module.css
  ThemeToggle/ThemeToggle.js + .module.css
lib/
  contentful.js          # Shared Contentful client
  experience-data.js     # Static experience entries
  utils.js               # getYearsOfExperience()
```

### Contentful Integration
- Blog posts fetched via Contentful Delivery API at build time (server-side)
- Content types: `blogPost`, `codeBlock`, `videoEmbed`
- Rich text rendered with `@contentful/rich-text-react-renderer`
- Custom render options in `app/blog/[id]/renderOptions.js`

### Environment Variables
Required in `.env` (no NEXT_PUBLIC_ prefix — fetched at build time server-side):
```
CONTENTFUL_SPACE=<space_id>
CONTENTFUL_READ_API_KEY=<read_api_key>
```

## Key Patterns

- Next.js App Router with static export (`output: 'export'`)
- CSS Modules for scoped component styles
- Bootstrap 5.3 imported via npm (not CDN)
- FontAwesome for icons
- Dark/light theme via CSS custom properties and `data-theme` attribute
- `'use client'` directive only on components needing hooks (NavBar, ThemeToggle)
- `netlify.toml` configures build; no `_redirects` needed (pre-rendered HTML)
