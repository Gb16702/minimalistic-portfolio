import { ReactNode } from "react";

interface SkillProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Skill({ icon, title, description }: SkillProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
        <h3 className="text-base font-medium relative -top-[0.5px]">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
