import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeft, Building2, Search, Printer, Gauge, MapPin,
  CheckSquare, Square, ChevronDown, ChevronUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { PrintSelection } from "./MultiPrintDialog";
import type { InstrumentData } from "@/types/instrument";
import { equipments, getEquipmentTitle } from "@/config/equipments";
import type { EquipmentType } from "@/config/equipments";

interface Instrument {
  id: string;
  company_id: string;
  codigo: string | null;
  instrumento: string;
  modelo: string | null;
  faixa: string | null;
  resolucao: string | null;
  erro_admissivel: string | null;
  periodicidade: string | null;
  local_utilizacao: string | null;
  unidade: string | null;
  status: string | null;
}

interface Company {
  id: string;
  name: string;
}

interface CompanyPrintFlowProps {
  company: Company;
  onBack: () => void;
  onPrint: (selections: PrintSelection[]) => void;
}

// Map instrument name keywords to EquipmentType
function guessEquipmentType(instrumento: string): EquipmentType | null {
  const name = instrumento.toLowerCase();
  if (name.includes("balan")) return "balance";
  if (name.includes("manôm") || name.includes("manom") || name.includes("pressão") || name.includes("pressao")) return "manometer";
  if (name.includes("válvula") || name.includes("valvula")) return "valve";
  if (name.includes("multím") || name.includes("multim")) return "multimeter";
  if (name.includes("vazão") || name.includes("vazao") || name.includes("medidor de fluxo")) return "flowmeter";
  if (name.includes("ph") || name.includes("phmetro")) return "ph-meter";
  if (name.includes("condutiv")) return "conductivity-meter";
  if (name.includes("espectro") || name.includes("fotôm") || name.includes("fotom")) return "spectrophotometer";
  if (name.includes("oxím") || name.includes("oxim")) return "oximeter";
  if (name.includes("cape") || name.includes("fluxo laminar")) return "laminar-flow-hood";
  if (name.includes("temp") || name.includes("termô") || name.includes("termo") || name.includes("umid") || name.includes("higrô") || name.includes("higro")) return "temperature-humidity";
  if (name.includes("torque")) return "torque";
  if (name.includes("cronôm") || name.includes("cronom") || name.includes("temporizador") || name.includes("tempo")) return "timer";
  if (name.includes("lux")) return "luxmeter";
  return null;
}

export function CompanyPrintFlow({ company, onBack, onPrint }: CompanyPrintFlowProps) {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expandedInst, setExpandedInst] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchInstruments();
  }, []);

  const fetchInstruments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("company_instruments")
      .select("*")
      .eq("company_id", company.id)
      .order("instrumento");
    if (error) {
      toast({ title: "Erro ao carregar instrumentos", variant: "destructive" });
    } else {
      setInstruments(data || []);
    }
    setLoading(false);
  };

  const filtered = instruments.filter((i) => {
    const t = search.toLowerCase();
    return (
      i.instrumento.toLowerCase().includes(t) ||
      (i.codigo?.toLowerCase().includes(t) ?? false) ||
      (i.local_utilizacao?.toLowerCase().includes(t) ?? false)
    );
  });

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    setSelected(new Set(filtered.map((i) => i.id)));
  };

  const selectNone = () => setSelected(new Set());

  const handlePrint = () => {
    const selectedInstruments = instruments.filter((i) => selected.has(i.id));
    if (selectedInstruments.length === 0) {
      toast({ title: "Selecione pelo menos um instrumento", variant: "destructive" });
      return;
    }

    // Group by equipment type — each instrument becomes its own PrintSelection with data
    const selections: PrintSelection[] = selectedInstruments.map((inst) => {
      const equipType = guessEquipmentType(inst.instrumento) || "manometer";
      const data: InstrumentData = {
        cliente: company.name,
        instrumento: inst.instrumento,
        codigo: inst.codigo || undefined,
        fabricante: inst.modelo ? undefined : undefined,
        modelo: inst.modelo || undefined,
        faixa: inst.faixa || undefined,
        resolucao: inst.resolucao || undefined,
        erro_admissivel: inst.erro_admissivel || undefined,
        periodicidade: inst.periodicidade || undefined,
        local_utilizacao: inst.local_utilizacao || undefined,
        unidade: inst.unidade || undefined,
      };
      return {
        equipmentType: equipType,
        quantity: 1,
        instrumentData: data,
      };
    });

    onPrint(selections);
  };

  const getStatusColor = (status: string | null) => {
    switch (status?.toUpperCase()) {
      case "APROVADO": return "bg-green-100 text-green-700 border-green-200";
      case "VENCIDO": return "bg-red-100 text-red-700 border-red-200";
      case "INATIVO": return "bg-neutral-100 text-neutral-500 border-neutral-200";
      case "COM DEFEITO": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-neutral-50 text-neutral-500 border-neutral-200";
    }
  };

  return (
    <div className="h-screen flex flex-col bg-neutral-50">
      {/* Header */}
      <div className="h-14 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 gap-3 flex-shrink-0">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-neutral-300 hover:text-white hover:bg-neutral-800 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>
        <Building2 className="w-4 h-4 text-orange-400" />
        <span className="text-sm font-semibold text-white">{company.name}</span>
        <span className="text-xs text-neutral-400 ml-2">
          {selected.size > 0 && `${selected.size} selecionado${selected.size > 1 ? "s" : ""}`}
        </span>
        <Button
          onClick={handlePrint}
          disabled={selected.size === 0}
          className="ml-auto gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
        >
          <Printer className="w-4 h-4" />
          Imprimir {selected.size > 0 ? `(${selected.size})` : "Selecionados"}
        </Button>
      </div>

      {/* Toolbar */}
      <div className="bg-white border-b border-neutral-200 px-6 py-3 flex items-center gap-3 flex-shrink-0">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <Input
            placeholder="Buscar instrumento, código ou local..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" size="sm" onClick={selectAll} className="gap-1.5 text-xs">
          <CheckSquare className="w-3.5 h-3.5" />
          Todos
        </Button>
        <Button variant="outline" size="sm" onClick={selectNone} className="gap-1.5 text-xs">
          <Square className="w-3.5 h-3.5" />
          Nenhum
        </Button>
        <span className="text-xs text-neutral-500">{filtered.length} instrumentos</span>
      </div>

      {/* Instrument List */}
      <div className="flex-1 overflow-y-auto p-6">
        {loading ? (
          <div className="text-center py-12 text-neutral-400">Carregando...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-neutral-400">Nenhum instrumento encontrado</div>
        ) : (
          <div className="space-y-2 max-w-4xl mx-auto">
            {filtered.map((inst) => {
              const isSelected = selected.has(inst.id);
              const equipType = guessEquipmentType(inst.instrumento);
              const isExpanded = expandedInst === inst.id;

              return (
                <div
                  key={inst.id}
                  className={`bg-white rounded-xl border-2 transition-all overflow-hidden ${
                    isSelected
                      ? "border-orange-400 shadow-md shadow-orange-100"
                      : "border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <div className="p-3 flex items-center gap-3">
                    <div
                      className="cursor-pointer flex-shrink-0"
                      onClick={() => toggleSelect(inst.id)}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        isSelected ? "border-orange-500 bg-orange-500" : "border-neutral-300"
                      }`}>
                        {isSelected && <span className="text-white text-xs font-bold">✓</span>}
                      </div>
                    </div>

                    <div
                      className="flex-1 min-w-0 cursor-pointer"
                      onClick={() => toggleSelect(inst.id)}
                    >
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-neutral-900">{inst.instrumento}</span>
                        {inst.codigo && (
                          <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full font-mono">
                            {inst.codigo}
                          </span>
                        )}
                        {equipType && (
                          <span className="text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full border border-orange-200">
                            {getEquipmentTitle(equipType)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-0.5 text-xs text-neutral-500">
                        {inst.faixa && <span>{inst.faixa}</span>}
                        {inst.local_utilizacao && inst.local_utilizacao !== "-" && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {inst.local_utilizacao}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {inst.status && (
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${getStatusColor(inst.status)}`}>
                          {inst.status}
                        </span>
                      )}
                      <button
                        onClick={() => setExpandedInst(isExpanded ? null : inst.id)}
                        className="p-1 hover:bg-neutral-100 rounded"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-neutral-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-neutral-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-neutral-100 px-4 py-3 bg-neutral-50">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        {[
                          { label: "Código", value: inst.codigo },
                          { label: "Modelo", value: inst.modelo },
                          { label: "Faixa", value: inst.faixa },
                          { label: "Resolução", value: inst.resolucao },
                          { label: "Erro Admissível", value: inst.erro_admissivel },
                          { label: "Periodicidade", value: inst.periodicidade },
                          { label: "Local", value: inst.local_utilizacao },
                          { label: "Unidade", value: inst.unidade },
                        ].map(({ label, value }) => value && value !== "-" ? (
                          <div key={label}>
                            <span className="text-xs text-neutral-400 block">{label}</span>
                            <span className="font-medium text-neutral-700 text-xs">{value}</span>
                          </div>
                        ) : null)}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
