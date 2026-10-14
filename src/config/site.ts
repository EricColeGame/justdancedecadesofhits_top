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
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Just Dance Decades of Hits Wiki",
  shortName: "Just Dance Decades of Hits",
  logoText: "JD",
  tagline: "Song Lists, Dance Guides, Editions & Tips Across Every Decade",
  description: "A fan knowledge hub for Just Dance Decades of Hits featuring song lists, dance routines, gameplay guides, editions, and tips for players exploring iconic music across multiple generations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://justdancedecadesofhits.top",
  supportEmail: "support@justdancedecadesofhits.top",
  gameUrl: "https://www.justdancegame.com/",
  heroVideoId: "j2gOAliuT34", // Just Dance: Decades of Hits - Official Reveal Trailer (Just Dance / Ubisoft)
  social: {
    discord: "https://www.reddit.com/r/JustDance/",
    youtube: "https://www.youtube.com/@Ubisoft",
  },
  locales: ["en", "es", "fr", "de"],
  defaultLocale: "en",
};
