import { useState } from "react";
import { Scale, Gauge, Settings2, FileText, Zap, Activity, Workflow, Printer } from "lucide-react";
import { EquipmentCard } from "@/components/EquipmentCard";
import { PrintPreview } from "@/components/PrintPreview";
import { MultiPrintDialog, type PrintSelection } from "@/components/MultiPrintDialog";
import { Button } from "@/components/ui/button";

export type EquipmentType = "balance" | "manometer" | "valve" | "multimeter" | "flowmeter" | "flowmeter-bench";

type Equipment = {
  id: EquipmentType;
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
    description: "Ficha de calibração de instrumentos de pressão",
    icon: Gauge,
    available: true,
  },
  {
    id: "valve",
    title: "Válvula de Segurança",
    description: "Registro de calibração de válvulas de segurança e/ou alívio",
    icon: Settings2,
    available: true,
  },
  {
    id: "multimeter",
    title: "Multímetro",
    description: "Registro de calibração de multímetros",
    icon: Zap,
    available: true,
  },
  {
    id: "flowmeter",
    title: "Medidor de Vazão",
    description: "Registro de calibração de medidores de vazão",
    icon: Activity,
    available: true,
  },
  {
    id: "flowmeter-bench",
    title: "Medidor de Vazão (Bancada)",
    description: "Registro de calibração de vazão em bancada",
    icon: Workflow,
    available: true,
  },
];

export default function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [printSelections, setPrintSelections] = useState<PrintSelection[] | null>(null);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handlePrint = (selections: PrintSelection[]) => {
    setPrintSelections(selections);
  };

  const handleBack = () => {
    setPrintSelections(null);
  };

  // Show print preview
  if (printSelections !== null) {
    return <PrintPreview selections={printSelections} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Sistema de Coletas</h1>
                <p className="text-sm text-muted-foreground">Impressão de fichas de calibração</p>
              </div>
            </div>
            <Button onClick={handleOpenDialog} size="lg" className="gap-2">
              <Printer className="w-5 h-5" />
              Imprimir Fichas
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Equipamentos Disponíveis
          </h2>
          <p className="text-muted-foreground">
            Clique no botão "Imprimir Fichas" para selecionar múltiplos equipamentos e suas quantidades
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
              onClick={handleOpenDialog}
            />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border">
          <h3 className="font-semibold text-foreground mb-2">Como usar</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Clique em "Imprimir Fichas" ou em qualquer equipamento</li>
            <li>Selecione os equipamentos desejados marcando as caixas</li>
            <li>Escolha a quantidade de fichas para cada tipo</li>
            <li>Visualize a pré-impressão e imprima todas de uma vez</li>
          </ol>
        </div>
      </main>

      {/* Multi Print Dialog */}
      <MultiPrintDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        equipments={equipments.filter((e) => e.available).map((e) => ({ id: e.id, title: e.title }))}
        onPrint={handlePrint}
      />
    </div>
  );
}
