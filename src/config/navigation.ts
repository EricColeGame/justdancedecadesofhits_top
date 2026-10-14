import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}

// 导航配置：Part 3 清空，后续 Part 按新游戏内容重建。
export const NAVIGATION_CONFIG: ReadonlyArray<NavigationItem> = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
