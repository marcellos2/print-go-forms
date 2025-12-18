import { useRef } from "react";
import { BalanceCalibrationForm } from "./BalanceCalibrationForm";
import { ManometerCalibrationForm } from "./ManometerCalibrationForm";
import { ValveCalibrationForm } from "./ValveCalibrationForm";
import { MultimeterCalibrationForm } from "./MultimeterCalibrationForm";
import { FlowMeterCalibrationForm } from "./FlowMeterCalibrationForm";
import { FlowMeterBenchCalibrationForm } from "./FlowMeterBenchCalibrationForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import type { EquipmentType } from "@/pages/Index";
import type { PrintSelection } from "./MultiPrintDialog";

interface PrintPreviewProps {
  selections: PrintSelection[];
  onBack: () => void;
}

const formComponents: Record<EquipmentType, React.ComponentType> = {
  balance: BalanceCalibrationForm,
  manometer: ManometerCalibrationForm,
  valve: ValveCalibrationForm,
  multimeter: MultimeterCalibrationForm,
  flowmeter: FlowMeterCalibrationForm,
  "flowmeter-bench": FlowMeterBenchCalibrationForm,
};

const equipmentTitles: Record<EquipmentType, string> = {
  balance: "Balança",
  manometer: "Manômetro",
  valve: "Válvula de Segurança",
  multimeter: "Multímetro",
  flowmeter: "Medidor de Vazão",
  "flowmeter-bench": "Medidor de Vazão (Bancada)",
};

export function PrintPreview({ selections, onBack }: PrintPreviewProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  // Calculate totals for header
  const totalTypes = selections.length;
  const totalFichas = selections.reduce((sum, s) => sum + s.quantity, 0);

  // Generate all forms to render
  const allForms: { equipmentType: EquipmentType; index: number; globalIndex: number }[] = [];
  let globalIndex = 0;
  selections.forEach((selection) => {
    for (let i = 0; i < selection.quantity; i++) {
      allForms.push({
        equipmentType: selection.equipmentType,
        index: i,
        globalIndex: globalIndex++,
      });
    }
  });

  return (
    <div className="min-h-screen bg-muted">
      {/* Header - Hidden on print */}
      <div className="no-print sticky top-0 z-10 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <div className="text-sm text-muted-foreground">
            {totalTypes} {totalTypes === 1 ? "tipo" : "tipos"} · {totalFichas}{" "}
            {totalFichas === 1 ? "ficha" : "fichas"}
          </div>
          <Button onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            Imprimir
          </Button>
        </div>
      </div>

      {/* Print Content */}
      <div ref={printRef} className="py-4">
        {allForms.map((form, idx) => {
          const FormComponent = formComponents[form.equipmentType];
          const isLast = idx === allForms.length - 1;

          return (
            <div key={`${form.equipmentType}-${form.index}`} className={!isLast ? "print-break" : ""}>
              <div className="no-print text-center text-xs text-muted-foreground py-2">
                {equipmentTitles[form.equipmentType]} - Ficha {form.index + 1} de{" "}
                {selections.find((s) => s.equipmentType === form.equipmentType)?.quantity} (
                {form.globalIndex + 1}/{totalFichas})
              </div>
              <div className="bg-white shadow-md mx-auto mb-4" style={{ maxWidth: "210mm" }}>
                <FormComponent />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
