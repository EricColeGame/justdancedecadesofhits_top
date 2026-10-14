import { defineRouting } from "next-intl/routing";

// 唯一真相源：全站支持的语言集合。
// 必须与 src/i18n/request.ts 的 messagesMap、language-switcher.tsx 的 localeLabels
// 以及 src/locales/*.json 的文件名保持一致。
export const locales = ["en", "es", "fr", "de"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});
