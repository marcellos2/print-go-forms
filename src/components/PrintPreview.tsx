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

interface PrintPreviewProps {
  quantity: number;
  equipmentType: EquipmentType;
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

export function PrintPreview({ quantity, equipmentType, onBack }: PrintPreviewProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const FormComponent = formComponents[equipmentType];

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
            {equipmentTitles[equipmentType]} - {quantity} {quantity === 1 ? 'ficha' : 'fichas'}
          </div>
          <Button onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            Imprimir
          </Button>
        </div>
      </div>

      {/* Print Content */}
      <div ref={printRef} className="py-4">
        {Array.from({ length: quantity }).map((_, index) => (
          <div key={index} className={index < quantity - 1 ? 'print-break' : ''}>
            <div className="no-print text-center text-xs text-muted-foreground py-2">
              Ficha {index + 1} de {quantity}
            </div>
            <div className="bg-white shadow-md mx-auto mb-4" style={{ maxWidth: '210mm' }}>
              <FormComponent />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
