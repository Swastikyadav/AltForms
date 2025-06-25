import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

type IconName = keyof typeof Icons;

function RenderIcon({ name }: { name: IconName }) {
  const LucideComponent = Icons[name] as LucideIcon | undefined;

  return LucideComponent ? <LucideComponent className="w-6 h-6" /> : null;
}

export default RenderIcon;
