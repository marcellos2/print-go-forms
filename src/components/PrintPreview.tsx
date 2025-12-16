import { useRef } from "react";
import { BalanceCalibrationForm } from "./BalanceCalibrationForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";

interface PrintPreviewProps {
  quantity: number;
  onBack: () => void;
}

export function PrintPreview({ quantity, onBack }: PrintPreviewProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

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
            Pré-visualização: {quantity} {quantity === 1 ? 'ficha' : 'fichas'}
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
              <BalanceCalibrationForm />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
