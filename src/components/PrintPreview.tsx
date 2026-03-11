import { useRef } from "react";
import { BalanceCalibrationForm } from "./BalanceCalibrationForm";
import { PdfPageRenderer } from "./PdfPageRenderer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import type { EquipmentType } from "@/config/equipments";
import { getEquipmentTitle, pdfMap } from "@/config/equipments";
import type { PrintSelection } from "./MultiPrintDialog";
import type { InstrumentData } from "@/types/instrument";

interface PrintPreviewProps {
  selections: PrintSelection[];
  onBack: () => void;
}

export function PrintPreview({ selections, onBack }: PrintPreviewProps) {
  const printRef = useRef<HTMLDivElement>(null);

  // Build all forms/pages in order
  const allPages: { equipmentType: EquipmentType; index: number; instrumentData?: InstrumentData; pdf: string | null }[] = [];
  selections.forEach((selection) => {
    const pdf = pdfMap[selection.equipmentType];
    for (let i = 0; i < selection.quantity; i++) {
      allPages.push({
        equipmentType: selection.equipmentType,
        index: i,
        instrumentData: selection.instrumentData,
        pdf,
      });
    }
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-muted">
      <div className="no-print sticky top-0 z-10 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <div className="text-sm text-muted-foreground">
            {allPages.length} {allPages.length === 1 ? "ficha" : "fichas"}
          </div>
          <Button onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            Imprimir
          </Button>
        </div>
      </div>

      <div ref={printRef} className="py-4">
        {allPages.map((page, idx) => {
          const isLast = idx === allPages.length - 1;
          return (
            <div key={`${page.equipmentType}-${page.index}-${idx}`} className={!isLast ? "print-break" : ""}>
              <div className="no-print text-center text-xs text-muted-foreground py-2">
                {getEquipmentTitle(page.equipmentType)} - Ficha {page.index + 1}
              </div>
              {page.pdf ? (
                <div className="print-page bg-white shadow-md mx-auto mb-4" style={{ maxWidth: "210mm" }}>
                  <PdfPageRenderer src={page.pdf} />
                </div>
              ) : (
                <div className="print-page bg-white shadow-md mx-auto mb-4" style={{ maxWidth: "210mm" }}>
                  <div className="flex justify-end px-8 pt-6 pb-4">
                    <img 
                      src="https://sistema.tecnoiso.com/wp-content/uploads/2016/09/tecnoiso_logo_R1.png" 
                      alt="Tecnoiso"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <BalanceCalibrationForm data={page.instrumentData} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
