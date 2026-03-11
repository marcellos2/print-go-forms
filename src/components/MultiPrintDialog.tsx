import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Printer, Minus, Plus, CheckSquare, Square } from "lucide-react";
import type { EquipmentType } from "@/config/equipments";
import type { InstrumentData } from "@/types/instrument";

export type PrintSelection = {
  equipmentType: EquipmentType;
  quantity: number;
  instrumentData?: InstrumentData;
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
      [id]: { ...prev[id], selected: !prev[id].selected },
    }));
  };

  const handleQuantityChange = (id: EquipmentType, value: number) => {
    const clampedValue = Math.min(50, Math.max(1, value));
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: clampedValue },
    }));
  };

  const handleIncrement = (id: EquipmentType) => {
    handleQuantityChange(id, (selections[id]?.quantity || 1) + 1);
  };

  const handleDecrement = (id: EquipmentType) => {
    handleQuantityChange(id, (selections[id]?.quantity || 1) - 1);
  };

  const handlePrint = () => {
    const selected = Object.entries(selections)
      .filter(([_, value]) => value.selected)
      .map(([key, value]) => ({
        equipmentType: key as EquipmentType,
        quantity: value.quantity,
      }));

    if (selected.length > 0) {
      onPrint(selected);
      onOpenChange(false);
    }
  };

  const selectedCount = Object.values(selections).filter((s) => s.selected).length;
  const totalFichas = Object.values(selections)
    .filter((s) => s.selected)
    .reduce((sum, s) => sum + s.quantity, 0);

  const allSelected = equipments.length > 0 && selectedCount === equipments.length;

  const handleSelectAll = () => {
    const newSelections = { ...selections };
    const targetState = !allSelected;
    equipments.forEach((eq) => {
      newSelections[eq.id] = { ...newSelections[eq.id], selected: targetState };
    });
    setSelections(newSelections);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <Printer className="w-5 h-5" />
              Selecionar Fichas para Impressão
            </DialogTitle>
            <Button variant="outline" size="sm" onClick={handleSelectAll} className="gap-1.5 text-xs">
              {allSelected ? <Square className="w-3.5 h-3.5" /> : <CheckSquare className="w-3.5 h-3.5" />}
              {allSelected ? "Desmarcar Todos" : "Selecionar Todos"}
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-2 space-y-2">
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
              <label htmlFor={eq.id} className="flex-1 font-medium text-sm cursor-pointer">
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

        <DialogFooter className="border-t pt-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-muted-foreground">
              {selectedCount} {selectedCount === 1 ? "tipo" : "tipos"} · {totalFichas}{" "}
              {totalFichas === 1 ? "ficha" : "fichas"}
            </span>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button onClick={handlePrint} disabled={selectedCount === 0} className="gap-2">
                <Printer className="w-4 h-4" />
                Visualizar
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
