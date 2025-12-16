import { LucideIcon } from "lucide-react";

interface EquipmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  available: boolean;
  onClick: () => void;
}

export function EquipmentCard({ title, description, icon: Icon, available, onClick }: EquipmentCardProps) {
  return (
    <div
      className={`equipment-card ${!available ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={available ? onClick : undefined}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {!available && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
              Em breve
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-card-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
