export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Just Dance Decades of Hits Wiki",
  shortName: "Just Dance Decades of Hits",
  logoText: "JD",
  tagline: "Complete Guides, Codes, Recipes & Tier Lists",
  description: "Your ultimate guide to My Seafood Stand on Roblox! Explore active working codes, seafood recipes, best upgrades, profit strategies, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://myseafoodstand.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://myseafoodstand.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/my-seafood-stand",
  heroVideoId: "j2gOAliuT34", // Just Dance: Decades of Hits - Official Reveal Trailer (Just Dance / Ubisoft)
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
