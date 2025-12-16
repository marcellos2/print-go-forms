import { useState } from "react";
import { Scale, Gauge, Settings2, FileText } from "lucide-react";
import { EquipmentCard } from "@/components/EquipmentCard";
import { PrintDialog } from "@/components/PrintDialog";
import { PrintPreview } from "@/components/PrintPreview";

type Equipment = {
  id: string;
  title: string;
  description: string;
  icon: typeof Scale;
  available: boolean;
};

const equipments: Equipment[] = [
  {
    id: "balance",
    title: "Balança",
    description: "Registro de calibração de balanças com medições e excentricidade",
    icon: Scale,
    available: true,
  },
  {
    id: "manometer",
    title: "Manômetro",
    description: "Ficha de calibração de manômetros e instrumentos de pressão",
    icon: Gauge,
    available: false,
  },
  {
    id: "valve",
    title: "Válvulas",
    description: "Registro de verificação e calibração de válvulas",
    icon: Settings2,
    available: false,
  },
];

export default function Index() {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [printQuantity, setPrintQuantity] = useState<number | null>(null);

  const handleEquipmentClick = (equipment: Equipment) => {
    setSelectedEquipment(equipment);
    setDialogOpen(true);
  };

  const handlePrint = (quantity: number) => {
    setPrintQuantity(quantity);
  };

  const handleBack = () => {
    setPrintQuantity(null);
    setSelectedEquipment(null);
  };

  // Show print preview
  if (printQuantity !== null) {
    return <PrintPreview quantity={printQuantity} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Sistema de Coletas</h1>
              <p className="text-sm text-muted-foreground">Impressão de fichas de calibração</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Selecione o Equipamento
          </h2>
          <p className="text-muted-foreground">
            Escolha o tipo de equipamento para imprimir a ficha de coleta correspondente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((equipment) => (
            <EquipmentCard
              key={equipment.id}
              title={equipment.title}
              description={equipment.description}
              icon={equipment.icon}
              available={equipment.available}
              onClick={() => handleEquipmentClick(equipment)}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border">
          <h3 className="font-semibold text-foreground mb-2">Como usar</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Selecione o tipo de equipamento que deseja calibrar</li>
            <li>Escolha a quantidade de fichas que deseja imprimir</li>
            <li>Visualize a pré-impressão e confirme</li>
            <li>Preencha os dados durante o processo de calibração</li>
          </ol>
        </div>
      </main>

      {/* Print Dialog */}
      <PrintDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        equipmentName={selectedEquipment?.title || ""}
        onPrint={handlePrint}
      />
    </div>
  );
}
