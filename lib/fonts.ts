import { Inter } from "next/font/google";

// Matches the CDN request the site used before:
// family=Inter:wght@400;500;600;700;800&display=swap
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});
