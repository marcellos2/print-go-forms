import { Scale, Gauge, Settings2, Zap, Activity, Workflow, Droplets, FlaskConical, Eye, Waves, LucideIcon, Thermometer, Timer, Sun } from "lucide-react";

export type EquipmentType = 
  | "balance" 
  | "manometer" 
  | "valve" 
  | "multimeter" 
  | "flowmeter" 
  | "flowmeter-bench"
  | "ph-meter"
  | "conductivity-meter"
  | "spectrophotometer"
  | "oximeter"
  | "laminar-flow-hood"
  | "temperature-humidity"
  | "torque"
  | "timer"
  | "luxmeter";

export type EquipmentCategory = "mecanico" | "eletrico" | "quimico" | "vazao";

export interface Equipment {
  id: EquipmentType;
  title: string;
  description: string;
  icon: LucideIcon;
  category: EquipmentCategory;
}

export interface Category {
  id: EquipmentCategory;
  title: string;
  icon: LucideIcon;
}

export const categories: Category[] = [
  { id: "mecanico", title: "Mecânicos", icon: Settings2 },
  { id: "eletrico", title: "Elétricos", icon: Zap },
  { id: "quimico", title: "Químicos/Analíticos", icon: FlaskConical },
  { id: "vazao", title: "Vazão", icon: Waves },
];

export const equipments: Equipment[] = [
  // Mecânicos
  {
    id: "balance",
    title: "Balança",
    description: "Registro de calibração de balanças com medições e excentricidade",
    icon: Scale,
    category: "mecanico",
  },
  {
    id: "manometer",
    title: "Manômetro",
    description: "Ficha de calibração de instrumentos de pressão",
    icon: Gauge,
    category: "mecanico",
  },
  {
    id: "valve",
    title: "Válvula de Segurança",
    description: "Registro de calibração de válvulas de segurança e/ou alívio",
    icon: Settings2,
    category: "mecanico",
  },
  {
    id: "torque",
    title: "Torque",
    description: "Registro de calibração de instrumentos de torque",
    icon: Settings2,
    category: "mecanico",
  },
  {
    id: "timer",
    title: "Tempo / Cronômetro",
    description: "Registro de calibração de cronômetros e temporizadores",
    icon: Timer,
    category: "mecanico",
  },
  
  // Elétricos
  {
    id: "multimeter",
    title: "Multímetro",
    description: "Registro de calibração de multímetros",
    icon: Zap,
    category: "eletrico",
  },
  {
    id: "luxmeter",
    title: "Luxímetro",
    description: "Registro de calibração de luxímetros",
    icon: Sun,
    category: "eletrico",
  },
  
  // Químicos/Analíticos
  {
    id: "ph-meter",
    title: "Medidor de pH",
    description: "Registro de calibração de medidores de pH",
    icon: Droplets,
    category: "quimico",
  },
  {
    id: "conductivity-meter",
    title: "Condutivímetro",
    description: "Registro de calibração de condutivímetros",
    icon: Activity,
    category: "quimico",
  },
  {
    id: "spectrophotometer",
    title: "Espectrofotômetro",
    description: "Registro de calibração de espectrofotômetros",
    icon: Eye,
    category: "quimico",
  },
  {
    id: "oximeter",
    title: "Oxímetro",
    description: "Registro de calibração de oxímetros",
    icon: FlaskConical,
    category: "quimico",
  },
  {
    id: "temperature-humidity",
    title: "Temperatura e Umidade",
    description: "Registro de calibração de termohigrômetros e termômetros",
    icon: Thermometer,
    category: "quimico",
  },
  
  // Vazão
  {
    id: "flowmeter",
    title: "Medidor de Vazão",
    description: "Registro de calibração de medidores de vazão",
    icon: Waves,
    category: "vazao",
  },
  {
    id: "flowmeter-bench",
    title: "Medidor de Vazão (Bancada)",
    description: "Registro de calibração de vazão em bancada",
    icon: Workflow,
    category: "vazao",
  },
  
  // Outros
  {
    id: "laminar-flow-hood",
    title: "Capela de Fluxo Laminar",
    description: "Registro de calibração de capelas de exaustão e/ou fluxo laminar",
    icon: Activity,
    category: "quimico",
  },
];

export const getEquipmentsByCategory = (categoryId: EquipmentCategory): Equipment[] => {
  return equipments.filter(eq => eq.category === categoryId);
};

export const getEquipmentTitle = (id: EquipmentType): string => {
  return equipments.find(eq => eq.id === id)?.title || id;
};
