// Generates a self-hosted Font Awesome subset (only the glyphs this
// site actually uses) instead of shipping the full ~2000-icon CDN set.
// Runs as a prebuild/predev step — see package.json.
import { fontawesomeSubset } from "fontawesome-subset";
import { copyFileSync, mkdirSync } from "node:fs";
import path from "node:path";

// Keep in sync with usage — regenerate via:
//   grep -rhoP '\bfas\s+fa-[a-z0-9-]+\b' --include="*.tsx" . | grep -oP 'fa-[a-z0-9-]+' | sed 's/^fa-//' | sort -u
const SOLID = [
  "arrow-right", "arrow-trend-down", "arrow-trend-up", "arrow-up", "at", "bars", "bolt",
  "briefcase", "bullseye", "calendar", "chart-bar", "chart-line", "chart-pie",
  "check", "chevron-down", "chevron-right", "circle-dot", "circle-play",
  "clapperboard", "code", "cookie-bite", "diagram-project", "envelope",
  "envelope-open-text", "face-frown-open", "faucet-drip", "film", "filter",
  "globe", "house", "lock", "magnifying-glass",
  "magnifying-glass-chart", "map", "message", "palette", "pen-nib",
  "pen-ruler", "photo-film", "plus", "robot", "rocket", "route",
  "share-nodes", "shield-halved", "shop", "sliders", "spinner",
  "table-cells", "tag", "times", "trophy", "users", "video",
  "wand-magic-sparkles", "wave-square", "xmark",
];

const BRANDS = [
  "figma", "google", "hubspot", "instagram", "linkedin",
  "mailchimp", "meta", "salesforce", "shopify", "tiktok", "whatsapp",
  "wordpress", "youtube",
];

const webfontsDir = path.resolve("public/fonts/webfonts");
const cssDir = path.resolve("public/fonts/fa");
mkdirSync(webfontsDir, { recursive: true });
mkdirSync(cssDir, { recursive: true });

await fontawesomeSubset(
  { solid: SOLID, brands: BRANDS },
  webfontsDir,
  { targetFormats: ["woff2"] }
);

// Full glyph->content CSS map + base utility classes (.fa-spin, sizing,
// etc) copied verbatim — its relative `../webfonts/*` font-face urls
// resolve against the subset files generated above, so unused faces
// (e.g. regular-400) are simply never fetched by the browser.
copyFileSync(
  path.resolve("node_modules/@fortawesome/fontawesome-free/css/all.min.css"),
  path.join(cssDir, "all.min.css")
);

console.log(
  `[build-icons] ${SOLID.length} solid + ${BRANDS.length} brand icons subset -> public/fonts/`
);
