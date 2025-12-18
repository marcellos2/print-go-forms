import { useState } from "react";
import { Printer } from "lucide-react";
import { PrintPreview } from "@/components/PrintPreview";
import { MultiPrintDialog, type PrintSelection } from "@/components/MultiPrintDialog";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { equipments, categories, getEquipmentsByCategory } from "@/config/equipments";

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

  if (printSelections !== null) {
    return <PrintPreview selections={printSelections} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://sistema.tecnoiso.com/wp-content/uploads/2016/09/tecnoiso_logo_R1.png" 
                alt="Tecnoiso"
                className="h-12 w-auto object-contain"
              />
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

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Equipamentos Disponíveis ({equipments.length})
          </h2>
        </div>

        <Accordion type="multiple" defaultValue={categories.map(c => c.id)} className="space-y-2">
          {categories.map((category) => {
            const categoryEquipments = getEquipmentsByCategory(category.id);
            return (
              <AccordionItem key={category.id} value={category.id} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <category.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{category.title}</span>
                    <span className="text-sm text-muted-foreground">({categoryEquipments.length})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-2">
                    {categoryEquipments.map((eq) => (
                      <button
                        key={eq.id}
                        onClick={handleOpenDialog}
                        className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors text-left"
                      >
                        <eq.icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{eq.title}</p>
                          <p className="text-xs text-muted-foreground">{eq.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
          <h3 className="font-semibold text-foreground mb-2">Como usar</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
            <li>Clique em "Imprimir Fichas" ou em qualquer equipamento</li>
            <li>Selecione os equipamentos e quantidades desejadas</li>
            <li>Visualize e imprima todas as fichas de uma vez</li>
          </ol>
        </div>
      </main>

      <MultiPrintDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        equipments={equipments.map((e) => ({ id: e.id, title: e.title }))}
        onPrint={handlePrint}
      />
    </div>
  );
}