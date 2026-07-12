import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Every route here has fully static, synchronously-resolved metadata (no
  // slow async data behind generateMetadata), so there's no real cost to
  // opting out of Next's streaming-metadata path. Doing so also sidesteps a
  // known Next 16 dev/Turbopack bug: MetadataWrapper renders a <div hidden>
  // boundary only on the streaming branch, and that branch is chosen from a
  // User-Agent bot check (`shouldServeStreamingMetadata`) that can disagree
  // between the SSR pass and hydration in dev, producing a spurious
  // "hidden={true} vs hidden={null}" hydration-mismatch warning. Matching
  // every UA here forces the non-streaming branch everywhere, which has no
  // wrapping div at all — the mismatch has no code path left to occur on.
  htmlLimitedBots: /.*/,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
