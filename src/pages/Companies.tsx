import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft, Building2, Plus, Search, ChevronRight, Trash2, Package,
  FileText, Printer, ChevronDown, ChevronUp, MapPin, Gauge, Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Company {
  id: string;
  name: string;
  created_at: string;
  instrument_count?: number;
}

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

interface CompaniesProps {
  onBack: () => void;
  onPrintCompany?: (companyId: string, companyName: string) => void;
}

export default function Companies({ onBack, onPrintCompany }: CompaniesProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [instrumentSearch, setInstrumentSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [newCompanyName, setNewCompanyName] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedInstrument, setExpandedInstrument] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => {
    if (selectedCompany) {
      fetchInstruments(selectedCompany.id);
    }
  }, [selectedCompany]);

  const fetchCompanies = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("companies").select("*").order("name");
    if (error) {
      toast({ title: "Erro ao carregar empresas", variant: "destructive" });
      return;
    }

    // Get instrument counts
    const companiesWithCounts = await Promise.all(
      (data || []).map(async (company) => {
        const { count } = await supabase
          .from("company_instruments")
          .select("*", { count: "exact", head: true })
          .eq("company_id", company.id);
        return { ...company, instrument_count: count || 0 };
      })
    );

    setCompanies(companiesWithCounts);
    setLoading(false);
  };

  const fetchInstruments = async (companyId: string) => {
    const { data, error } = await supabase
      .from("company_instruments")
      .select("*")
      .eq("company_id", companyId)
      .order("instrumento");
    if (error) {
      toast({ title: "Erro ao carregar instrumentos", variant: "destructive" });
      return;
    }
    setInstruments(data || []);
  };

  const handleAddCompany = async () => {
    if (!newCompanyName.trim()) return;
    const { error } = await supabase.from("companies").insert({ name: newCompanyName.trim() });
    if (error) {
      toast({ title: "Erro ao adicionar empresa", variant: "destructive" });
      return;
    }
    setNewCompanyName("");
    setShowAddForm(false);
    fetchCompanies();
    toast({ title: "Empresa adicionada!" });
  };

  const handleDeleteCompany = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta empresa e todos os seus instrumentos?")) return;
    const { error } = await supabase.from("companies").delete().eq("id", id);
    if (error) {
      toast({ title: "Erro ao excluir empresa", variant: "destructive" });
      return;
    }
    if (selectedCompany?.id === id) setSelectedCompany(null);
    fetchCompanies();
    toast({ title: "Empresa excluída!" });
  };

  const filteredCompanies = companies.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInstruments = instruments.filter((i) => {
    const term = instrumentSearch.toLowerCase();
    return (
      i.instrumento.toLowerCase().includes(term) ||
      (i.codigo && i.codigo.toLowerCase().includes(term)) ||
      (i.local_utilizacao && i.local_utilizacao.toLowerCase().includes(term))
    );
  });

  const getStatusColor = (status: string | null) => {
    switch (status?.toUpperCase()) {
      case "APROVADO": return "bg-green-100 text-green-700 border-green-200";
      case "VENCIDO": return "bg-red-100 text-red-700 border-red-200";
      case "INATIVO": return "bg-neutral-100 text-neutral-500 border-neutral-200";
      case "COM DEFEITO": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-neutral-50 text-neutral-500 border-neutral-200";
    }
  };

  // Company list view
  if (!selectedCompany) {
    return (
      <div className="h-screen flex flex-col bg-neutral-50">
        <div className="h-14 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 flex-shrink-0">
          <Button variant="ghost" onClick={onBack} className="text-neutral-300 hover:text-white hover:bg-neutral-800 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <div className="ml-4 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-white">Empresas Cadastradas</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-neutral-900">Empresas</h1>
                <p className="text-sm text-neutral-500">{companies.length} empresas cadastradas</p>
              </div>
              <Button onClick={() => setShowAddForm(!showAddForm)} className="gap-2 bg-orange-500 hover:bg-orange-600">
                <Plus className="w-4 h-4" />
                Nova Empresa
              </Button>
            </div>

            {/* Add form */}
            {showAddForm && (
              <div className="bg-white border border-orange-200 rounded-xl p-4 mb-4 flex gap-3">
                <Input
                  placeholder="Nome da empresa..."
                  value={newCompanyName}
                  onChange={(e) => setNewCompanyName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddCompany()}
                  className="flex-1"
                  autoFocus
                />
                <Button onClick={handleAddCompany} className="bg-orange-500 hover:bg-orange-600">Adicionar</Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>Cancelar</Button>
              </div>
            )}

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                placeholder="Buscar empresa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Company list */}
            <div className="space-y-2">
              {loading ? (
                <div className="text-center py-12 text-neutral-400">Carregando...</div>
              ) : filteredCompanies.length === 0 ? (
                <div className="text-center py-12 text-neutral-400">
                  {searchTerm ? "Nenhuma empresa encontrada" : "Nenhuma empresa cadastrada"}
                </div>
              ) : (
                filteredCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="group bg-white border border-neutral-200 hover:border-orange-400 rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-md"
                    onClick={() => setSelectedCompany(company)}
                  >
                    <div className="w-12 h-12 bg-orange-50 group-hover:bg-orange-100 rounded-xl flex items-center justify-center transition-colors">
                      <Building2 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-neutral-900">{company.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-neutral-500 flex items-center gap-1">
                          <Package className="w-3 h-3" />
                          {company.instrument_count} instrumentos
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600 hover:bg-red-50"
                      onClick={(e) => { e.stopPropagation(); handleDeleteCompany(company.id); }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-orange-500 transition-colors" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Instrument list view for selected company
  return (
    <div className="h-screen flex flex-col bg-neutral-50">
      <div className="h-14 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 flex-shrink-0">
        <Button
          variant="ghost"
          onClick={() => { setSelectedCompany(null); setInstruments([]); setInstrumentSearch(""); }}
          className="text-neutral-300 hover:text-white hover:bg-neutral-800 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Empresas
        </Button>
        <div className="ml-4 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-semibold text-white">{selectedCompany.name}</span>
        </div>
        {onPrintCompany && (
          <Button
            onClick={() => onPrintCompany(selectedCompany.id, selectedCompany.name)}
            className="ml-auto gap-2 bg-orange-500 hover:bg-orange-600"
          >
            <Printer className="w-4 h-4" />
            Imprimir Coletas
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">{selectedCompany.name}</h1>
              <p className="text-sm text-neutral-500">{instruments.length} instrumentos cadastrados</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <Input
              placeholder="Buscar instrumento, código ou local..."
              value={instrumentSearch}
              onChange={(e) => setInstrumentSearch(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {["APROVADO", "VENCIDO", "INATIVO", "COM DEFEITO"].map((s) => {
              const count = instruments.filter((i) => i.status?.toUpperCase() === s).length;
              return (
                <div key={s} className={`rounded-xl border p-3 ${getStatusColor(s)}`}>
                  <div className="text-2xl font-bold">{count}</div>
                  <div className="text-xs font-medium">{s}</div>
                </div>
              );
            })}
          </div>

          {/* Instrument list */}
          <div className="space-y-2">
            {filteredInstruments.length === 0 ? (
              <div className="text-center py-12 text-neutral-400">Nenhum instrumento encontrado</div>
            ) : (
              filteredInstruments.map((inst) => (
                <div
                  key={inst.id}
                  className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all hover:shadow-sm"
                >
                  <div
                    className="p-4 flex items-center gap-4 cursor-pointer"
                    onClick={() => setExpandedInstrument(expandedInstrument === inst.id ? null : inst.id)}
                  >
                    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Gauge className="w-5 h-5 text-neutral-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-neutral-900">{inst.instrumento}</span>
                        {inst.codigo && (
                          <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full font-mono">
                            {inst.codigo}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-neutral-500">
                        {inst.faixa && <span>{inst.faixa}</span>}
                        {inst.local_utilizacao && inst.local_utilizacao !== "-" && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {inst.local_utilizacao}
                          </span>
                        )}
                      </div>
                    </div>
                    {inst.status && (
                      <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${getStatusColor(inst.status)}`}>
                        {inst.status}
                      </span>
                    )}
                    {inst.periodicidade && (
                      <span className="text-xs text-neutral-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {inst.periodicidade}
                      </span>
                    )}
                    {expandedInstrument === inst.id ? (
                      <ChevronUp className="w-4 h-4 text-neutral-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400" />
                    )}
                  </div>

                  {expandedInstrument === inst.id && (
                    <div className="border-t border-neutral-100 px-4 py-3 bg-neutral-50">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        <div>
                          <span className="text-xs text-neutral-400 block">Modelo</span>
                          <span className="font-medium text-neutral-700">{inst.modelo || "-"}</span>
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block">Faixa</span>
                          <span className="font-medium text-neutral-700">{inst.faixa || "-"}</span>
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block">Resolução</span>
                          <span className="font-medium text-neutral-700">{inst.resolucao || "-"}</span>
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block">Erro Admissível</span>
                          <span className="font-medium text-neutral-700">{inst.erro_admissivel || "-"}</span>
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block">Periodicidade</span>
                          <span className="font-medium text-neutral-700">{inst.periodicidade || "-"}</span>
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block">Local</span>
                          <span className="font-medium text-neutral-700">{inst.local_utilizacao || "-"}</span>
                        </div>
                        <div>
                          <span className="text-xs text-neutral-400 block">Unidade</span>
                          <span className="font-medium text-neutral-700">{inst.unidade || "-"}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
