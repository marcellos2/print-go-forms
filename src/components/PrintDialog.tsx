import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer, Minus, Plus } from "lucide-react";

interface PrintDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  equipmentName: string;
  onPrint: (quantity: number) => void;
}

export function PrintDialog({ open, onOpenChange, equipmentName, onPrint }: PrintDialogProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((q) => Math.min(q + 1, 50));
  const handleDecrement = () => setQuantity((q) => Math.max(q - 1, 1));

  const handlePrint = () => {
    onPrint(quantity);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-primary" />
            Imprimir Fichas
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-4">
            Modelo selecionado: <span className="font-semibold text-foreground">{equipmentName}</span>
          </p>
          
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantidade de cópias</Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDecrement}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <Input
                id="quantity"
                type="number"
                min={1}
                max={50}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
                className="text-center font-mono text-lg w-20"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleIncrement}
                disabled={quantity >= 50}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Máximo: 50 cópias</p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            Imprimir {quantity} {quantity === 1 ? 'ficha' : 'fichas'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
