# Exhibit artwork

`public/art/dream-world.jpg` is generated illustration, not an app screenshot. Created with the built-in image generation tool and compressed to JPEG for the homepage. Original project screenshots remain in their existing folders; smaller Comic Dreamer previews are used for parallax layers.

Final generation prompt:

> Create a production website background illustration asset, landscape 3:2. Cinematic dreamlike illustrated midnight blue city rooftops floating above clouds, glowing full moon at upper right, tiny stars and distant mountains, an elegant enormous whale flying across upper left. Rich cobalt, inky navy, pale ice blue highlights. Sophisticated graphic novel painting with crisp elegant shapes and beautiful atmospheric depth. Buildings concentrated in bottom third, spacious sky in middle for separate overlaid UI. Full bleed artwork only, NO text, no letters, no panels, no frames, no UI, no phone, no website mockup. Designed as a backdrop for a Comic Dreamer portfolio parallax exhibit.

Additional generated exhibit backgrounds, intentionally simpler than the Comic Dreamer scene:

> Cart Score: A clean, understated, polished illustrated backdrop in a soft sage green palette: pale celadon and warm cream, one or two simple abstract leaf shapes near the edges, very subtle curved forms suggesting fresh produce and a calm tabletop, gentle natural sunlight, lots of uncluttered open space in the center and right for a phone screenshot overlay. Refined modern editorial illustration with quiet gradients and minimal shapes. Wide landscape. No text, UI, receipt, phone, logo, photo textures, busy details, or frame.

> LucidQuery: A clean, understated backdrop in soft lavender, muted periwinkle and pale warm apricot. A few large translucent abstract paper-like planes and gentle flowing lines imply connected knowledge and information, with quiet dimensional layers and soft ambient light. Refined modern editorial illustration, restrained premium technology aesthetic. Keep the center spacious and low contrast for a web app screenshot. Wide landscape. No text, readable documents, UI, laptop, logo, particles, or frame.

Cart Score screenshots were resized from the user-supplied `CartScore/cart-score-assets marketing site input/screenshots` folder: Receipt Report - Health, Receipt Report - Cost, and History. The app icon was retrieved from Apple's public metadata.

App availability and product descriptions were checked against:
- https://apps.apple.com/us/app/cartscore-receipt-scanner/id6771398455
- https://apps.apple.com/us/app/comic-dreamer-ai-art/id6760437741

The homepage uses native scrolling. Each visible exhibit updates a CSS variable once per animation frame; background artwork, floating objects, and screenshots move at different rates. Only the background is clipped to the exhibit window; selected foreground objects cross its edge. Headlines stay fixed, and there are no expanding frames or scroll-driven scaling. Offscreen exhibits do not schedule animation frames. Reduced-motion preferences disable transforms and smooth scrolling.
