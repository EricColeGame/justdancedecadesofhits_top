import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarDays, Disc3, Gamepad2, MonitorPlay, Music } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// 导航配置：key 是翻译键（src/locales/en.json 的 nav 命名空间），path 是 URL slug。
// 分类 slug 必须与 content/<locale>/ 下的文章子目录一一对应，
// 并与 content.ts 的 GROUP_TITLES / GROUP_ORDER 保持一致。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "songs", path: "/songs", icon: Music, isContentType: true },
  { key: "tracks", path: "/tracks", icon: Disc3, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorPlay, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
