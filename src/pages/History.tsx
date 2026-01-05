import { useState, useEffect } from "react";
import { ArrowLeft, Search, Trash2, Eye, Calendar, Filter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

interface CalibrationRecord {
  id: string;
  equipment_type: string;
  equipment_name: string;
  certificate_number: string | null;
  calibration_date: string | null;
  technician_name: string | null;
  status: string | null;
  observations: string | null;
  created_at: string;
}

interface HistoryProps {
  onBack: () => void;
}

export default function History({ onBack }: HistoryProps) {
  const [records, setRecords] = useState<CalibrationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const { data, error } = await supabase
        .from("calibration_history")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRecords(data || []);
    } catch (error) {
      console.error("Error fetching records:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar o histórico.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("calibration_history")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setRecords(records.filter((r) => r.id !== id));
      toast({
        title: "Sucesso",
        description: "Registro excluído com sucesso.",
      });
    } catch (error) {
      console.error("Error deleting record:", error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir o registro.",
        variant: "destructive",
      });
    }
  };

  const filteredRecords = records.filter(
    (r) =>
      r.equipment_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.equipment_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (r.certificate_number?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
  );

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  return (
    <div className="h-screen flex flex-col bg-neutral-50">
      {/* Header */}
      <div className="h-14 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 flex-shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors mr-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Voltar</span>
        </button>
        <div className="h-6 w-px bg-neutral-700 mr-4"></div>
        <span className="text-sm font-semibold text-white">Histórico de Calibrações</span>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {/* Toolbar */}
          <div className="bg-white rounded-lg border border-neutral-200 p-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <Input
                  placeholder="Buscar por equipamento, tipo ou certificado..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="text-sm text-neutral-500">
                {filteredRecords.length} registro(s) encontrado(s)
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-neutral-500">Carregando...</div>
            ) : filteredRecords.length === 0 ? (
              <div className="p-8 text-center text-neutral-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-neutral-300" />
                <p className="text-lg font-medium mb-1">Nenhum registro encontrado</p>
                <p className="text-sm">O histórico de calibrações aparecerá aqui.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Equipamento</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Certificado</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Técnico</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-24">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.equipment_name}</TableCell>
                      <TableCell>{record.equipment_type}</TableCell>
                      <TableCell>{record.certificate_number || "-"}</TableCell>
                      <TableCell>{formatDate(record.calibration_date)}</TableCell>
                      <TableCell>{record.technician_name || "-"}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            record.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {record.status === "completed" ? "Concluído" : record.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                              <AlertDialogDescription>
                                Tem certeza que deseja excluir este registro? Esta ação não pode ser desfeita.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(record.id)}>
                                Excluir
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
