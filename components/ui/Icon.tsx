import {
  BarChart3,
  CheckCircle2,
  Clock,
  Coins,
  FileText,
  Layers,
  ListChecks,
  Mail,
  Megaphone,
  Mic,
  Newspaper,
  PenTool,
  Phone,
  Quote,
  Search,
  Send,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { IconKey } from "@/content/site";

/** content/site.ts 의 icon 문자열 ↔ 실제 아이콘 매핑 */
export const iconMap: Record<IconKey, LucideIcon> = {
  newspaper: Newspaper,
  share: Share2,
  workflow: Workflow,
  clock: Clock,
  coins: Coins,
  fileText: FileText,
  search: Search,
  target: Target,
  users: Users,
  trendingUp: TrendingUp,
  megaphone: Megaphone,
  penTool: PenTool,
  sparkles: Sparkles,
  barChart: BarChart3,
  mic: Mic,
  layers: Layers,
  quote: Quote,
  listChecks: ListChecks,
  send: Send,
  phone: Phone,
  mail: Mail,
  checkCircle: CheckCircle2,
};

type Props = {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className, strokeWidth = 1.75 }: Props) {
  const Cmp = iconMap[name] ?? Newspaper;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
