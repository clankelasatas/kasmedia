# KASMEDIA — Copilot Instructions

## Project Overview
**KASMEDIA** is a client-side news/media platform for Universitas Pandanaran's "Kelas Atas" extracurricular community. It's a vanilla JavaScript + Tailwind CSS site with no build tooling or backend dependencies.

## Architecture & Data Flow

### Core Data Structure (`js/data.js`)
All content lives in three global arrays that feed the UI:
- `articlesData`: Articles with fields: id, title, excerpt, category, date, author, readTime, image, tags, **featured** (bool), body
- `categoriesData`: Category metadata (name, count) used for filter buttons
- `membersData`: Team members for the tentang.html page

**Key constraint**: One article should have `featured: true` for the hero section on index.html.

### Page Architecture
- **index.html**: Main news grid with hero, category filters, infinite scroll
- **artikel.html**: Article detail page (queries id from URL: `?id=1`)
- **tentang.html**: Team & about page (renders membersData)
- **acara.html & kontak.html**: Static content pages
- **admin.html**: Admin panel (unused in production, contains admin.js)

### JavaScript Modules
Each file handles one feature area:
1. **main.js**: Hero population, category filtering, fade-in animations, back-to-top button
2. **infinitescroll.js**: Grid pagination (loads 6 articles initially, then 4 per scroll)
3. **search.js**: Search toggle animation and article filtering (searches title/excerpt/tags)
4. **darkmode.js**: Dark mode toggle with localStorage persistence
5. **admin.js**: Config (unused currently)

## Critical Patterns & Conventions

### DOM Query & Manipulation
Always use specific IDs (they're relied upon across files):
- `#articleGrid`: Article card container
- `#heroArticle`: Featured article display
- `#categoryBar`: Filter button container
- Search: `#searchContainer`, `#searchInput`, `#searchResults`, `#searchToggle`

### Article Card Generation
Use the `createArticleCard(article)` function from main.js. Returns a template string with specific classes:
```javascript
// Pattern: article links point to artikel.html?id=${article.id}
// Card includes: image, category tag, date, title, excerpt (max 2 lines)
```

### Category Filtering
Call `filterByCategory(categoryName)` to:
1. Update active button state
2. Reset infinite scroll with `resetInfiniteScroll(categoryName)`
3. Updates `currentCategory` global variable

### Color Theming
**Only edit CSS variables in [css/style.css](css/style.css#L1-L10)**—NO custom color classes in HTML/Tailwind.
- `--c-primary`: Main accent (currently amber: 245 158 11)
- `--c-primary-hover`, `--c-primary-light`, `--c-primary-soft`, `--c-primary-bg`: Variants
- File includes preset color palettes (Blue, Orange, Indigo, etc.) ready to copy-paste

### Language & Content
All UI text is **Indonesian**. When adding features:
- UI labels: Indonesian
- Variable/function names: English
- Comments: English

## Common Tasks

### Add a New Article
Edit [js/data.js](js/data.js) and add to `articlesData`:
```javascript
{
    id: 99,
    title: "...",
    excerpt: "...",
    category: "Kegiatan",  // Must match a categoriesData entry
    author: "...",
    date: "DD MMM YYYY",
    readTime: "X menit",
    image: "...",
    tags: ["tag1", "tag2"],
    featured: false,  // Set true for hero, but only ONE article should be featured
    body: "<p>HTML content...</p>"
}
```

### Change Primary Color
Copy-paste one of the color presets in [css/style.css](css/style.css#L15-L45) to overwrite `:root`.

### Add a New Category
1. Add entry to `categoriesData` in [js/data.js](js/data.js#L75-L82)
2. Update articles with matching `category` field
3. Filter buttons auto-generate from categoriesData

### Update Article Detail Page
Edit [artikel.html](artikel.html)—uses JavaScript to fetch article data by URL id parameter. Append content inside `.article-content` container.

## Performance Considerations
- **Lazy loading**: Images in grid use `loading="lazy"` attribute
- **Infinite scroll**: Loads 6 articles upfront, then 4 per scroll trigger. Adjust `BATCH_SIZE` and `LOAD_MORE` in [js/infinitescroll.js](js/infinitescroll.js#L7-L8)
- **Intersection Observer**: Used for fade-in animations (threshold: 0.1)

## Responsive Design
Tailwind breakpoints used consistently:
- `hidden md:flex`: Hide on mobile, show on medium+
- `sm:`, `lg:` prefixes for responsive padding/text
- Mobile menu uses fixed sidebar overlaid on viewport

## State Management
Globals tracking UI state (avoid modifying directly except through designated functions):
- `currentCategory`: Current filter state → change via `filterByCategory()`
- Dark mode: Stored in localStorage, managed by darkmode.js
- Infinite scroll state: `loadedCount`, `allLoaded` in infinitescroll.js scope

## Files You'll Likely Edit
1. [js/data.js](js/data.js) — Content/team data (90% of changes)
2. [css/style.css](css/style.css) — Theme colors & custom animations
3. [index.html](index.html) — Main layout changes
4. [artikel.html](artikel.html) — Article detail template adjustments
