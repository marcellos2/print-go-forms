import { useRef } from "react";
import { BalanceCalibrationForm } from "./BalanceCalibrationForm";
import { ManometerCalibrationForm } from "./ManometerCalibrationForm";
import { ValveCalibrationForm } from "./ValveCalibrationForm";
import { MultimeterCalibrationForm } from "./MultimeterCalibrationForm";
import { FlowMeterCalibrationForm } from "./FlowMeterCalibrationForm";
import { FlowMeterBenchCalibrationForm } from "./FlowMeterBenchCalibrationForm";
import { PHMeterCalibrationForm } from "./PHMeterCalibrationForm";
import { ConductivityMeterCalibrationForm } from "./ConductivityMeterCalibrationForm";
import { SpectrophotometerCalibrationForm } from "./SpectrophotometerCalibrationForm";
import { OximeterCalibrationForm } from "./OximeterCalibrationForm";
import { LaminarFlowHoodCalibrationForm } from "./LaminarFlowHoodCalibrationForm";
import { TemperatureHumidityCalibrationForm } from "./TemperatureHumidityCalibrationForm";
import { TorqueCalibrationForm } from "./TorqueCalibrationForm";
import { TimerCalibrationForm } from "./TimerCalibrationForm";
import { LuxmeterCalibrationForm } from "./LuxmeterCalibrationForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import type { EquipmentType } from "@/config/equipments";
import { getEquipmentTitle } from "@/config/equipments";
import type { PrintSelection } from "./MultiPrintDialog";
import type { InstrumentData } from "@/types/instrument";

interface PrintPreviewProps {
  selections: PrintSelection[];
  onBack: () => void;
}

type FormComponent = React.ComponentType<{ data?: InstrumentData }>;

const formComponents: Record<EquipmentType, FormComponent> = {
  balance: BalanceCalibrationForm,
  manometer: ManometerCalibrationForm,
  valve: ValveCalibrationForm,
  multimeter: MultimeterCalibrationForm,
  flowmeter: FlowMeterCalibrationForm,
  "flowmeter-bench": FlowMeterBenchCalibrationForm,
  "ph-meter": PHMeterCalibrationForm,
  "conductivity-meter": ConductivityMeterCalibrationForm,
  "spectrophotometer": SpectrophotometerCalibrationForm,
  "oximeter": OximeterCalibrationForm,
  "laminar-flow-hood": LaminarFlowHoodCalibrationForm,
  "temperature-humidity": TemperatureHumidityCalibrationForm,
  "torque": TorqueCalibrationForm,
  "timer": TimerCalibrationForm,
  "luxmeter": LuxmeterCalibrationForm,
};

export function PrintPreview({ selections, onBack }: PrintPreviewProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const totalTypes = selections.length;
  const totalFichas = selections.reduce((sum, s) => sum + s.quantity, 0);

  const allForms: { equipmentType: EquipmentType; index: number; globalIndex: number; instrumentData?: InstrumentData }[] = [];
  let globalIndex = 0;
  selections.forEach((selection) => {
    for (let i = 0; i < selection.quantity; i++) {
      allForms.push({
        equipmentType: selection.equipmentType,
        index: i,
        globalIndex: globalIndex++,
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
            {totalTypes} {totalTypes === 1 ? "tipo" : "tipos"} · {totalFichas}{" "}
            {totalFichas === 1 ? "ficha" : "fichas"}
          </div>
          <Button onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            Imprimir
          </Button>
        </div>
      </div>

      <div ref={printRef} className="print-container py-4">
        {allForms.map((form, idx) => {
          const FormComponent = formComponents[form.equipmentType];
          const isLast = idx === allForms.length - 1;

          return (
            <div key={`${form.equipmentType}-${form.index}`} className={!isLast ? "print-break" : ""}>
              <div className="no-print text-center text-xs text-muted-foreground py-2">
                {getEquipmentTitle(form.equipmentType)} - Ficha {form.index + 1} de{" "}
                {selections.find((s) => s.equipmentType === form.equipmentType)?.quantity} (
                {form.globalIndex + 1}/{totalFichas})
              </div>
              <div className="print-page bg-white shadow-md mx-auto mb-4" style={{ maxWidth: "210mm" }}>
                {/* Logo no topo */}
                <div className="flex justify-end px-8 pt-6 pb-4">
                  <img 
                    src="https://sistema.tecnoiso.com/wp-content/uploads/2016/09/tecnoiso_logo_R1.png" 
                    alt="Tecnoiso"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                {/* Formulário de Calibração */}
                <FormComponent data={form.instrumentData} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
