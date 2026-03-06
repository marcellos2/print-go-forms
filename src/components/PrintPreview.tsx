import { useRef } from "react";
import { BalanceCalibrationForm } from "./BalanceCalibrationForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, ExternalLink } from "lucide-react";
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

  // Separate React forms from PDF-based ones
  const reactForms = selections.filter(s => pdfMap[s.equipmentType] === null);
  const pdfForms = selections.filter(s => pdfMap[s.equipmentType] !== null);

  // Get unique PDFs to open
  const uniquePdfs = [...new Set(pdfForms.map(s => pdfMap[s.equipmentType]!))];

  const handlePrint = () => {
    // Open each PDF in a new tab for printing
    uniquePdfs.forEach(pdf => {
      window.open(pdf, '_blank');
    });

    // If there are React forms (balance), print the current page
    if (reactForms.length > 0) {
      setTimeout(() => window.print(), 500);
    }
  };

  const handleOpenPdf = (pdf: string) => {
    window.open(pdf, '_blank');
  };

  const totalReact = reactForms.reduce((sum, s) => sum + s.quantity, 0);

  // Build React form list
  const allReactForms: { equipmentType: EquipmentType; index: number; instrumentData?: InstrumentData }[] = [];
  reactForms.forEach((selection) => {
    for (let i = 0; i < selection.quantity; i++) {
      allReactForms.push({
        equipmentType: selection.equipmentType,
        index: i,
        instrumentData: selection.instrumentData,
      });
    }
  });

  return (
    <div className="min-h-screen bg-muted">
      <div className="no-print sticky top-0 z-10 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <div className="text-sm text-muted-foreground">
            {selections.length} {selections.length === 1 ? "ficha" : "fichas"}
          </div>
          <Button onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            Imprimir
          </Button>
        </div>
      </div>

      <div ref={printRef} className="py-4">
        {/* PDF list */}
        {pdfForms.length > 0 && (
          <div className="no-print max-w-2xl mx-auto mb-6 px-4">
            <h3 className="text-sm font-semibold text-neutral-700 mb-3">
              Modelos PDF — clique para abrir e imprimir
            </h3>
            <div className="space-y-2">
              {pdfForms.map((sel, idx) => {
                const pdf = pdfMap[sel.equipmentType]!;
                return (
                  <button
                    key={`${sel.equipmentType}-${idx}`}
                    onClick={() => handleOpenPdf(pdf)}
                    className="w-full flex items-center gap-3 p-3 bg-white border border-neutral-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all text-left group"
                  >
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 text-xs font-bold">PDF</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-neutral-900 block">
                        {getEquipmentTitle(sel.equipmentType)}
                      </span>
                      <span className="text-xs text-neutral-400">{sel.quantity}x</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-orange-500 transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* React forms (only balance) */}
        {allReactForms.map((form, idx) => {
          const isLast = idx === allReactForms.length - 1;
          return (
            <div key={`${form.equipmentType}-${form.index}`} className={!isLast ? "print-break" : ""}>
              <div className="no-print text-center text-xs text-muted-foreground py-2">
                {getEquipmentTitle(form.equipmentType)} - Ficha {form.index + 1}
              </div>
              <div className="print-page bg-white shadow-md mx-auto mb-4" style={{ maxWidth: "210mm" }}>
                <div className="flex justify-end px-8 pt-6 pb-4">
                  <img 
                    src="https://sistema.tecnoiso.com/wp-content/uploads/2016/09/tecnoiso_logo_R1.png" 
                    alt="Tecnoiso"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <BalanceCalibrationForm data={form.instrumentData} />
              </div>
            </div>
          );
        })}

        {/* If only PDFs, show helpful message */}
        {allReactForms.length === 0 && pdfForms.length > 0 && (
          <div className="no-print text-center py-12 text-neutral-400 text-sm">
            Clique nos PDFs acima para abri-los e imprimir, ou use o botão "Imprimir" para abrir todos de uma vez.
          </div>
        )}
      </div>
    </div>
  );
}
