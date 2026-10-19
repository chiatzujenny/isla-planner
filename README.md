# Isla · Puerto Rico travel planner

A bilingual travel planner for a Dec 20–25, 2026 trip for two. Includes editable morning/afternoon/evening itineraries, maps, saved places, restaurant and hotel discovery, offline planning suggestions, and itinerary/accommodation comparisons.

## Website

https://chiatzujenny.github.io/isla-planner/?lang=en&option=C#compare

The full planner is hosted on GitHub Pages and does not depend on an owner's computer or a local server. Language controls show Traditional Chinese or English separately. The exported comparison still includes both languages.

## Itinerary options

- A (previously B): mainland itinerary with a Dec 20 Laguna Grande bio-bay tour.
- B (previously C): Culebra day trip, without a bio-bay tour.
- C (previously D): both Dec 20 bio bay and Dec 23 Culebra, plus Old San Juan, north coast and El Yunque/Luquillo. This is the default initial itinerary; existing saved browser trips are preserved.

Arrival is provisionally Dec 20 afternoon and departure Dec 25 afternoon. Confirm flight timing, tour check-in, return ferry availability and holiday access before booking. Moonlight around the Dec 23 full moon can reduce glow visibility. Dec 20 is relatively less illuminated, not an ideal dark night or a guarantee of better viewing at every tour time.

## Run and publish

Requires Node.js 22+, with no package installation needed.

- npm start: local server at http://127.0.0.1:4173
- npm test: automated tests
- npm run build: generate the static full app in dist
- npm run preview:pages: inspect the built app at http://127.0.0.1:4175/isla-planner/

Push to main to run tests, build the allowlisted public assets, and deploy through .github/workflows/pages.yml. GitHub Pages uses GitHub Actions as its publishing source. dist, environment files, artifacts and local verification notes are excluded from source control. Only browser assets are deployed; the Node server and credentials are never published to Pages.

## Hosting modes

The Pages build runs curated offline suggestions directly in the browser, with no API key or paid model calls. Local server mode can optionally connect a server-side AI provider using OPENAI_API_KEY and OPENAI_MODEL; these values must never be put in browser files. A paid live request has not been performed without credentials.

Hosted place search uses Photon/OpenStreetMap, only when a user submits a search. Requests are serialized and cached for one hour. The public demo provider permits reasonable use but does not guarantee availability; for a larger audience, provide a dedicated Photon endpoint. See https://github.com/komoot/photon and https://github.com/komoot/photon/blob/master/docs/api-v1.md. Local server mode retains the existing server-side search. Confirm current policy before expanding use of public search services.

## Accommodation evidence

The lodging cap is USD450 total for two people for five nights, including mandatory accommodation fees, excluding transport, tours and meals. Private rooms and one shared double bed are acceptable. Shared bathrooms remain an option; private bathroom candidates are clearly marked.

Rates are transcribed from user screenshots, not verified live availability or checkout totals. Seven properties and 20 combinations are included. Sleep Relax 1 is excluded by appearance preference. Duplicate Oasis entries are grouped.

- Las Palomas Residences: TWD10,286 includes TWD810 cleaning; add TWD853 tax = TWD11,139. Reference conversion approximately USD341.79 for five nights. Private bathroom, one double bed, 40m²; free private on-site parking listed. Free cancellation before Dec 13, exclusive.
- San Juan Apartments: TWD10,326 includes TWD2,430 cleaning; add environmental fee TWD3,159 and tax TWD711 = itemized TWD14,196, approximately USD435.59. City tax is mentioned without an independently identifiable amount; confirm whether another charge applies. Private65m² apartment; non-refundable. Kept as a backup.
- Oasis: USD281 plus9% = USD306.29 for five nights, shared bathroom.
- Comfortable: USD238 already includes USD35 cleaning; plus9% = USD259.42 for three nights, non-refundable.

TWD reference conversion is TWD32.59 per USD, Bank of Taiwan spot selling, Oct 19, 2026 14:40 Taiwan time: https://rate.bot.com.tw/xrt?Lang=en-US. This is not a guaranteed card or Booking conversion. Unquoted two-night metro stays use the five-night average times two nights with a20% buffer on that portion only; the result is an estimate, not a quoted price or ceiling. No cleaning fee is added twice. Airbnb candidates have unknown dated totals; budget targets are not prices.

## Data and practical limits

Trips and calculator values are stored in each visitor's own browser; they are not synced between friends. Export/import JSON for exchanging edits. Public price evidence is common to everyone. A query link can select language, option and stay strategy without overwriting an existing saved trip.

Map coordinates and straight-line links are approximate, not driving routes or ferry schedules. Optimization only reorders stops within their existing time slots. OpenStreetMap street maps and navigation links need internet. Public search does not verify opening hours, rates or reservations. Photos from Unsplash are mood illustrations, not verified property photography. Fonts, photos and map providers are external requests. No bookings or payments are made by this app.

## Source layout

- public/app.mjs: UI, editor, local storage and exports
- public/comparison*.mjs: itinerary and lodging comparisons
- public/hotel-quotes.mjs: screenshot fees and price combinations
- public/offline.mjs: shared offline suggestion rules
- public/runtime.mjs and public/place-search.mjs: browser/server adapters
- scripts/build-pages.mjs: explicit static asset allowlist
- server.mjs: optional local backend
- tests/: pricing, itinerary, hosting, search, fallback and API checks


## Latest shared itinerary — Oct 19, 2026

Option C is now the mainland itinerary. The friend arrives at SJU on Dec21 between3–5PM; the original traveler remains provisionally due Dec20. Culebra and Ceiba ferry stops have been removed. Dec22 remains the north coast, Dec23 is El Yunque/Luquillo, and Old San Juan moves to Dec24. Dec21 Laguna Grande is explicitly OPTIONAL / NOT BOOKED, conditional on flight timing, late-tour availability and visibility. The roughly94% moon illumination is not ideal. Operator winter late check-in is listed at8PM with20min early arrival; the actual Dec21 booking is not verified. Keep one San Juan base provisionally Dec20–25; five-night screenshot evidence has not been repriced to four nights. A/B are labeled archived proposals and cannot be applied from the comparison screen.

Untouched browser-saved versions of the old generated C itinerary migrate to the latest C. Custom edits remain intact; Preview & apply provides an explicit update with Undo. Published asset URLs carry a content fingerprint so an updated page loads current modules.
