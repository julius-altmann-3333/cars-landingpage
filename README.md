# AutoHaus Car Sales Landing Page

Open `index.html` in a browser.

## Included
- Bootstrap 5 responsive layout
- Namespaced standalone sections using `cs-` IDs/classes
- Responsive image gallery with clickable thumbnails, arrows and autoplay
- Statistics/features cards
- Video section
- Horizontal overflow-x:auto similar-car slider
- Google Maps dealership embed
- Social section with Instagram preview tiles
- Validated vehicle-sales contact form
- Scroll-to-top button
- EN/DE language switch
- Separate standalone JavaScript files

## Contact form
The supplied form is functional without a backend: it validates the fields and opens the visitor's configured email client with a pre-filled enquiry. For production, change `dealershipEmail` in `js/contact-form.js` or replace that handler with your CRM/form endpoint.

## Instagram
The preview is intentionally static and linkable. A truly live Instagram feed requires an approved Instagram API/widget integration.

## Video
The page currently uses a responsive YouTube embed placeholder. Replace its `iframe` source with your dealership's video URL.

## Images
Images use remote Unsplash URLs for demo purposes. Replace them with your own optimized dealership images for production.
