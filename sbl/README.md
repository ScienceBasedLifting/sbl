# Science-Based Lifting Directory

Static multi-page directory built from the research brief and supplied creator images.

## Files

- `index.html` is the home/category-first landing page.
- `directory.html` contains creator profiles grouped by category.
- `categories.html` lets visitors choose a learning goal before browsing creators.
- `debates.html` explains major debates in the optimal lifting community.
- `submit.html` explains how to add creators, socials, or missing images.
- `styles.css` contains the responsive layout, fixed navigation, profile cards, and visual styling.
- `assets/images/` contains the supplied visual assets. The rendered cards now use the renamed image files such as `jeffnippard.avif`, `ryanjewers.jpg`, and `scientificsnitch.jpeg`.

## Updating Profiles

Edit the repeated `<article class="creator-card">` blocks in `directory.html`.

Recommended fields:

- Name
- Credentials
- Specialty
- Short bio
- Highlights
- Official links
- TikTok, Instagram, YouTube, or website links
- Optimized real image, or an initials placeholder until an image is supplied

Before publishing, verify credentials, follower counts, current roles, and active links.

The directory intentionally includes more lifters than the current image set. Add new images later by copying them into `assets/images/`, replacing the placeholder block with a `<figure class="portrait">`, and updating the alt text.
