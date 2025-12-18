import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Printer, Minus, Plus } from "lucide-react";
import type { EquipmentType } from "@/pages/Index";

export type PrintSelection = {
  equipmentType: EquipmentType;
  quantity: number;
};

interface EquipmentOption {
  id: EquipmentType;
  title: string;
}

interface MultiPrintDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  equipments: EquipmentOption[];
  onPrint: (selections: PrintSelection[]) => void;
}

export function MultiPrintDialog({ open, onOpenChange, equipments, onPrint }: MultiPrintDialogProps) {
  const [selections, setSelections] = useState<Record<EquipmentType, { selected: boolean; quantity: number }>>({} as any);

  // Initialize selections when dialog opens
  useEffect(() => {
    if (open) {
      const initial: Record<EquipmentType, { selected: boolean; quantity: number }> = {} as any;
      equipments.forEach((eq) => {
        initial[eq.id] = { selected: false, quantity: 1 };
      });
      setSelections(initial);
    }
  }, [open, equipments]);

  const handleToggle = (id: EquipmentType) => {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], selected: !prev[id]?.selected },
    }));
  };

  const handleQuantityChange = (id: EquipmentType, value: number) => {
    const qty = Math.max(1, Math.min(50, value));
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: qty },
    }));
  };

  const handleIncrement = (id: EquipmentType) => {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: Math.min(50, (prev[id]?.quantity || 1) + 1) },
    }));
  };

  const handleDecrement = (id: EquipmentType) => {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: Math.max(1, (prev[id]?.quantity || 1) - 1) },
    }));
  };

  const handlePrint = () => {
    const result: PrintSelection[] = [];
    Object.entries(selections).forEach(([id, data]) => {
      if (data.selected && data.quantity > 0) {
        result.push({ equipmentType: id as EquipmentType, quantity: data.quantity });
      }
    });
    if (result.length > 0) {
      onPrint(result);
      onOpenChange(false);
    }
  };

  const totalSelected = Object.values(selections).filter((s) => s.selected).length;
  const totalFichas = Object.values(selections).reduce((sum, s) => (s.selected ? sum + s.quantity : sum), 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-primary" />
            Imprimir Múltiplas Fichas
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 space-y-3 max-h-[400px] overflow-y-auto">
          <p className="text-sm text-muted-foreground mb-4">
            Selecione os equipamentos e a quantidade de cada um:
          </p>

          {equipments.map((eq) => (
            <div
              key={eq.id}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                selections[eq.id]?.selected
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-muted-foreground/50"
              }`}
            >
              <Checkbox
                id={eq.id}
                checked={selections[eq.id]?.selected || false}
                onCheckedChange={() => handleToggle(eq.id)}
              />
              <label
                htmlFor={eq.id}
                className="flex-1 font-medium text-sm cursor-pointer"
              >
                {eq.title}
              </label>

              {selections[eq.id]?.selected && (
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleDecrement(eq.id)}
                    disabled={selections[eq.id]?.quantity <= 1}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <Input
                    type="number"
                    min={1}
                    max={50}
                    value={selections[eq.id]?.quantity || 1}
                    onChange={(e) => handleQuantityChange(eq.id, parseInt(e.target.value) || 1)}
                    className="text-center font-mono text-sm w-14 h-7"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleIncrement(eq.id)}
                    disabled={selections[eq.id]?.quantity >= 50}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <div className="text-sm text-muted-foreground mr-auto">
            {totalSelected > 0 && (
              <span>
                {totalSelected} {totalSelected === 1 ? "tipo" : "tipos"} · {totalFichas}{" "}
                {totalFichas === 1 ? "ficha" : "fichas"}
              </span>
            )}
          </div>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handlePrint} disabled={totalSelected === 0} className="gap-2">
            <Printer className="w-4 h-4" />
            Imprimir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
