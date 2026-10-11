# Nadiia Balitska — Portfolio (refresh)

Refreshed static portfolio built with **HTML, CSS, and vanilla JavaScript**. No build step or framework required.

## Run locally

Open `index.html` in a browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`.

## Files

- `index.html` — semantic document structure
- `styles.css` — responsive styles and light/dark theme
- `main.js` — portfolio views, routing, filters, and copy-link interaction
- `project-data.js` — project data extracted from your earlier code

## Bring your existing files

Your original image files were **not provided**, so copy your existing images into `assets/`. The supplied CV and cover letter are already included in `docs/`. Images will not appear until those files are present. Optimize each project screenshot to **200 KB or less** before submission.

## Important TODOs before Noroff Portfolio 2 submission

1. Confirm which exact three repositories correspond to **CSS Frameworks**, **JavaScript Frameworks** and **Semester Project 2**; the homepage currently highlights ActiveUnity, Social Media and AuctionLite based on the available project data, **not a verified course mapping**.
2. Write a real detailed project article for each of these three projects. The current articles contain an explicit editorial placeholder in “Process & improvements”.
3. Recheck links. Several links in the provided source contained an inserted course/institution name; those are deliberately omitted instead of being fabricated. Update the correct URLs in `project-data.js`.
4. Implement and commit a real improvement in **each** required project, then include links to those exact commits in your separate reflection PDF.
5. Check all public demo/repository links in a private browser window.
6. Deploy and verify deep linking; hash routes (e.g. `#/project/auctionlite`) work on basic static hosting.

## Improvements in this portfolio refresh

- Modern, cohesive responsive layout
- Better visual hierarchy, spacing and mobile navigation
- Updated technology presentation
- Real project-detail routes for every project
- Share/copy link on each detail page
- Project listing with quick filters
- Accessible focus states, semantic sections, light/dark toggle
- No fake “Updated” badge or claim that project improvements have already been made

## Updated project links

The 13 project repository and live URLs in `project-data.js` and `projects.json` were synchronized with the owner's latest supplied list. Links were preserved as supplied; their availability has not been externally verified.

## This update

Retains the first modern redesign (hero, project filters, article pages, typography, palette) and the latest project URLs. The About page now uses the user-approved friendly wording, with no internship company name and no bootcamp mention. The skills section was aligned with the CV and cover letter. External URLs were not independently verified.

## Project listing refresh
Project cards now have concise titles and descriptions. Their original slugs and all provided repository/live links are retained. No filter controls are displayed. Project origins appear only as the category above a card, not in the article description. ActiveUnity is labelled National Transport University Project.
