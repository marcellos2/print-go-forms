import { Scale, Gauge, Settings2, Zap, Activity, Workflow, Droplets, FlaskConical, Eye, Waves, LucideIcon, Thermometer, Timer, Sun, Ruler, Wrench, Mic, TestTube } from "lucide-react";

export type EquipmentType = 
  | "balance" 
  | "manometer" 
  | "valve" 
  | "multimeter" 
  | "flowmeter" 
  | "flowmeter-bench"
  | "ph-meter"
  | "conductivity-meter"
  | "spectrophotometer-pc03"
  | "spectrophotometer-pc04"
  | "spectrophotometer-pc05"
  | "spectrophotometer-pc06"
  | "oximeter"
  | "laminar-flow-hood"
  | "temperature-humidity"
  | "torque"
  | "timer"
  | "luxmeter"
  | "acustica"
  | "micrometro"
  | "relogio-comparador"
  | "relogio-apalpador"
  | "paquimetro"
  | "comparador-diametro"
  | "capela"
  | "circometro"
  | "cone-imhoff"
  | "contador-metro"
  | "densimetro"
  | "gabarito-pnp"
  | "espessura-magna-mike"
  | "espessura"
  | "nivel-enchimento"
  | "rugosimetro"
  | "regua-graduada"
  | "regua-linearidade"
  | "tracador-altura"
  | "trena"
  | "turbidimetro"
  | "vidrarias"
  | "alicate-amperimetro"
  | "amperimetro-voltimetro"
  | "dinamometro"
  | "dureza"
  | "pesos-padrao"
  | "stress-termico"
  | "megometro"
  | "registro-campo";

export type EquipmentCategory = "mecanico" | "eletrico" | "quimico" | "vazao" | "dimensional" | "outros";

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

// Map equipment type to PDF path. null = React form (balance)
export const pdfMap: Record<EquipmentType, string | null> = {
  "balance": null, // React form
  "manometer": "/modelos/pressao.pdf",
  "valve": "/modelos/valvula.pdf",
  "multimeter": "/modelos/multimetro.pdf",
  "flowmeter": "/modelos/vazao.pdf",
  "flowmeter-bench": "/modelos/vazao-bancada.pdf",
  "ph-meter": "/modelos/ph.pdf",
  "conductivity-meter": "/modelos/condutivimetro.pdf",
  "spectrophotometer-pc03": "/modelos/espectrofotometro-pc03.pdf",
  "spectrophotometer-pc04": "/modelos/espectrofotometro-pc04.pdf",
  "spectrophotometer-pc05": "/modelos/espectrofotometro-pc05.pdf",
  "spectrophotometer-pc06": "/modelos/espectrofotometro-pc06.pdf",
  "oximeter": "/modelos/oximetro.pdf",
  "laminar-flow-hood": "/modelos/capela-fluxo-laminar.pdf",
  "temperature-humidity": "/modelos/temperatura-umidade.pdf",
  "torque": "/modelos/torque.pdf",
  "timer": "/modelos/tempo.pdf",
  "luxmeter": "/modelos/luximetro.pdf",
  "acustica": "/modelos/acustica.pdf",
  "micrometro": "/modelos/micrometro.pdf",
  "relogio-comparador": "/modelos/relogio-comparador.pdf",
  "relogio-apalpador": "/modelos/relogio-apalpador.pdf",
  "paquimetro": "/modelos/paquimetro.pdf",
  "comparador-diametro": "/modelos/comparador-diametro.pdf",
  "capela": "/modelos/capela.pdf",
  "circometro": "/modelos/circometro.pdf",
  "cone-imhoff": "/modelos/cone-imhoff.pdf",
  "contador-metro": "/modelos/contador-metro.pdf",
  "densimetro": "/modelos/densimetro.pdf",
  "gabarito-pnp": "/modelos/gabarito-pnp.pdf",
  "espessura-magna-mike": "/modelos/espessura-magna-mike.pdf",
  "espessura": "/modelos/espessura.pdf",
  "nivel-enchimento": "/modelos/nivel-enchimento.pdf",
  "rugosimetro": "/modelos/rugosimetro.pdf",
  "regua-graduada": "/modelos/regua-graduada.pdf",
  "regua-linearidade": "/modelos/regua-linearidade.pdf",
  "tracador-altura": "/modelos/tracador-altura.pdf",
  "trena": "/modelos/trena.pdf",
  "turbidimetro": "/modelos/turbidimetro.pdf",
  "vidrarias": "/modelos/vidrarias.pdf",
  "alicate-amperimetro": "/modelos/alicate-amperimetro.pdf",
  "amperimetro-voltimetro": "/modelos/amperimetro-voltimetro.pdf",
  "dinamometro": "/modelos/dinamometro.pdf",
  "dureza": "/modelos/dureza.pdf",
  "pesos-padrao": "/modelos/pesos-padrao.pdf",
  "stress-termico": "/modelos/stress-termico.pdf",
  "megometro": "/modelos/megometro.pdf",
  "registro-campo": "/modelos/registro-campo.pdf",
};

export const categories: Category[] = [
  { id: "mecanico", title: "Mecânicos", icon: Settings2 },
  { id: "eletrico", title: "Elétricos", icon: Zap },
  { id: "quimico", title: "Químicos/Analíticos", icon: FlaskConical },
  { id: "dimensional", title: "Dimensional", icon: Ruler },
  { id: "vazao", title: "Vazão", icon: Waves },
  { id: "outros", title: "Outros", icon: Wrench },
];

export const equipments: Equipment[] = [
  // Mecânicos
  { id: "balance", title: "Balança", description: "Registro de calibração de balanças", icon: Scale, category: "mecanico" },
  { id: "manometer", title: "Manômetro / Pressão", description: "Calibração de instrumentos de pressão", icon: Gauge, category: "mecanico" },
  { id: "valve", title: "Válvula de Segurança", description: "Calibração de válvulas de segurança", icon: Settings2, category: "mecanico" },
  { id: "torque", title: "Torque", description: "Calibração de torquímetros", icon: Settings2, category: "mecanico" },
  { id: "timer", title: "Tempo / Cronômetro", description: "Calibração de cronômetros e temporizadores", icon: Timer, category: "mecanico" },
  { id: "dinamometro", title: "Dinamômetro", description: "Calibração de dinamômetros", icon: Settings2, category: "mecanico" },
  { id: "dureza", title: "Dureza", description: "Calibração de durômetros", icon: Settings2, category: "mecanico" },
  { id: "pesos-padrao", title: "Jogo de Pesos Padrão", description: "Calibração de pesos padrão", icon: Scale, category: "mecanico" },
  { id: "rugosimetro", title: "Rugosímetro", description: "Calibração de rugosímetros", icon: Settings2, category: "mecanico" },

  // Elétricos
  { id: "multimeter", title: "Multímetro", description: "Calibração de multímetros", icon: Zap, category: "eletrico" },
  { id: "luxmeter", title: "Luxímetro", description: "Calibração de luxímetros", icon: Sun, category: "eletrico" },
  { id: "alicate-amperimetro", title: "Alicate Amperímetro", description: "Calibração de alicates amperímetros", icon: Zap, category: "eletrico" },
  { id: "amperimetro-voltimetro", title: "Amperímetro e Voltímetro", description: "Calibração de amperímetros e voltímetros", icon: Zap, category: "eletrico" },
  { id: "megometro", title: "Megômetro", description: "Calibração de megômetros", icon: Zap, category: "eletrico" },
  { id: "acustica", title: "Acústica", description: "Calibração de instrumentos de acústica", icon: Mic, category: "eletrico" },

  // Químicos/Analíticos
  { id: "ph-meter", title: "Medidor de pH", description: "Calibração de medidores de pH", icon: Droplets, category: "quimico" },
  { id: "conductivity-meter", title: "Condutivímetro", description: "Calibração de condutivímetros", icon: Activity, category: "quimico" },
  { id: "spectrophotometer-pc03", title: "Espectrofotômetro (PC 03)", description: "Kit PC 03", icon: Eye, category: "quimico" },
  { id: "spectrophotometer-pc04", title: "Espectrofotômetro (PC 04)", description: "Kit PC 04", icon: Eye, category: "quimico" },
  { id: "spectrophotometer-pc05", title: "Espectrofotômetro (PC 05)", description: "Kit PC 05", icon: Eye, category: "quimico" },
  { id: "spectrophotometer-pc06", title: "Espectrofotômetro (PC 06)", description: "Kit PC 06", icon: Eye, category: "quimico" },
  { id: "oximeter", title: "Oxímetro", description: "Calibração de oxímetros", icon: FlaskConical, category: "quimico" },
  { id: "laminar-flow-hood", title: "Capela Fluxo Laminar", description: "Calibração de capelas de fluxo laminar", icon: Activity, category: "quimico" },
  { id: "capela", title: "Capela", description: "Calibração de capelas", icon: Activity, category: "quimico" },
  { id: "temperature-humidity", title: "Temperatura e Umidade", description: "Calibração de termohigrômetros", icon: Thermometer, category: "quimico" },
  { id: "stress-termico", title: "Stress Térmico", description: "Calibração de medidores de stress térmico", icon: Thermometer, category: "quimico" },
  { id: "turbidimetro", title: "Turbidímetro", description: "Calibração de turbidímetros", icon: Eye, category: "quimico" },
  { id: "densimetro", title: "Densímetro", description: "Calibração de densímetros", icon: FlaskConical, category: "quimico" },
  { id: "cone-imhoff", title: "Cone Imhoff", description: "Calibração de cones Imhoff", icon: TestTube, category: "quimico" },
  { id: "vidrarias", title: "Vidrarias", description: "Calibração de vidrarias", icon: TestTube, category: "quimico" },

  // Dimensional
  { id: "micrometro", title: "Micrômetro", description: "Calibração de micrômetros", icon: Ruler, category: "dimensional" },
  { id: "relogio-comparador", title: "Relógio Comparador", description: "Calibração de relógios comparadores", icon: Ruler, category: "dimensional" },
  { id: "relogio-apalpador", title: "Relógio Apalpador", description: "Calibração de relógios apalpadores", icon: Ruler, category: "dimensional" },
  { id: "paquimetro", title: "Paquímetro", description: "Calibração de paquímetros", icon: Ruler, category: "dimensional" },
  { id: "comparador-diametro", title: "Comparador Diâmetro Interno", description: "Calibração de comparadores de diâmetro interno", icon: Ruler, category: "dimensional" },
  { id: "espessura", title: "Medidor de Espessura", description: "Calibração de medidores de espessura", icon: Ruler, category: "dimensional" },
  { id: "espessura-magna-mike", title: "Medidor Espessura (Magna Mike)", description: "Calibração Magna Mike", icon: Ruler, category: "dimensional" },
  { id: "gabarito-pnp", title: "Gabaritos PNP", description: "Calibração de gabaritos PNP", icon: Ruler, category: "dimensional" },
  { id: "nivel-enchimento", title: "Nível de Enchimento", description: "Calibração de nível de enchimento", icon: Ruler, category: "dimensional" },
  { id: "regua-graduada", title: "Régua Graduada", description: "Calibração de réguas graduadas", icon: Ruler, category: "dimensional" },
  { id: "regua-linearidade", title: "Régua de Linearidade", description: "Calibração de réguas de linearidade", icon: Ruler, category: "dimensional" },
  { id: "tracador-altura", title: "Traçador de Altura", description: "Calibração de traçadores de altura", icon: Ruler, category: "dimensional" },
  { id: "trena", title: "Trena", description: "Calibração de trenas", icon: Ruler, category: "dimensional" },
  { id: "circometro", title: "Circômetro", description: "Calibração de circômetros", icon: Ruler, category: "dimensional" },
  { id: "contador-metro", title: "Contador de Metro", description: "Calibração de contadores de metro", icon: Ruler, category: "dimensional" },

  // Vazão
  { id: "flowmeter", title: "Medidor de Vazão", description: "Calibração de medidores de vazão", icon: Waves, category: "vazao" },
  { id: "flowmeter-bench", title: "Vazão (Bancada)", description: "Calibração em bancada de vazão", icon: Workflow, category: "vazao" },

  // Outros
  { id: "registro-campo", title: "Registro de Campo", description: "Registro de campo para calibrações externas", icon: Wrench, category: "outros" },
];

export const getEquipmentsByCategory = (categoryId: EquipmentCategory): Equipment[] => {
  return equipments.filter(eq => eq.category === categoryId);
};

export const getEquipmentTitle = (id: EquipmentType): string => {
  return equipments.find(eq => eq.id === id)?.title || id;
};
