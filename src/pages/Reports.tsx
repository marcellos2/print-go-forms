import { useState, useEffect } from "react";
import { ArrowLeft, BarChart3, PieChart, TrendingUp, Download, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReportsProps {
  onBack: () => void;
}

interface Stats {
  total: number;
  thisMonth: number;
  byType: Record<string, number>;
  byTechnician: Record<string, number>;
}

export default function Reports({ onBack }: ReportsProps) {
  const [stats, setStats] = useState<Stats>({
    total: 0,
    thisMonth: 0,
    byType: {},
    byTechnician: {},
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from("calibration_history")
        .select("*");

      if (error) throw error;

      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

      const thisMonthRecords = (data || []).filter(
        (r) => new Date(r.created_at) >= startOfMonth
      );

      const byType: Record<string, number> = {};
      const byTechnician: Record<string, number> = {};

      (data || []).forEach((r) => {
        byType[r.equipment_type] = (byType[r.equipment_type] || 0) + 1;
        if (r.technician_name) {
          byTechnician[r.technician_name] = (byTechnician[r.technician_name] || 0) + 1;
        }
      });

      setStats({
        total: data?.length || 0,
        thisMonth: thisMonthRecords.length,
        byType,
        byTechnician,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const getTopItems = (obj: Record<string, number>, limit = 5) => {
    return Object.entries(obj)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit);
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
        <span className="text-sm font-semibold text-white">Relatórios</span>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-12 text-neutral-500">Carregando estatísticas...</div>
          ) : (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-600">
                      Total de Calibrações
                    </CardTitle>
                    <BarChart3 className="w-4 h-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-neutral-900">{stats.total}</div>
                    <p className="text-xs text-neutral-500 mt-1">Registros no sistema</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-600">
                      Este Mês
                    </CardTitle>
                    <Calendar className="w-4 h-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-neutral-900">{stats.thisMonth}</div>
                    <p className="text-xs text-neutral-500 mt-1">Calibrações realizadas</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-neutral-600">
                      Tipos de Equipamentos
                    </CardTitle>
                    <PieChart className="w-4 h-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-neutral-900">
                      {Object.keys(stats.byType).length}
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">Categorias diferentes</p>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Reports */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* By Equipment Type */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-orange-500" />
                      Por Tipo de Equipamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {Object.keys(stats.byType).length === 0 ? (
                      <p className="text-neutral-500 text-sm">Nenhum dado disponível</p>
                    ) : (
                      <div className="space-y-3">
                        {getTopItems(stats.byType).map(([type, count]) => (
                          <div key={type} className="flex items-center justify-between">
                            <span className="text-sm text-neutral-700 capitalize">
                              {type.replace(/-/g, " ")}
                            </span>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-neutral-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-orange-500 rounded-full"
                                  style={{
                                    width: `${(count / stats.total) * 100}%`,
                                  }}
                                />
                              </div>
                              <span className="text-sm font-medium text-neutral-900 w-8 text-right">
                                {count}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* By Technician */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-500" />
                      Por Técnico
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {Object.keys(stats.byTechnician).length === 0 ? (
                      <p className="text-neutral-500 text-sm">Nenhum dado disponível</p>
                    ) : (
                      <div className="space-y-3">
                        {getTopItems(stats.byTechnician).map(([tech, count]) => (
                          <div key={tech} className="flex items-center justify-between">
                            <span className="text-sm text-neutral-700">{tech}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-neutral-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blue-500 rounded-full"
                                  style={{
                                    width: `${(count / stats.total) * 100}%`,
                                  }}
                                />
                              </div>
                              <span className="text-sm font-medium text-neutral-900 w-8 text-right">
                                {count}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Export Section */}
              <div className="mt-6">
                <Card>
                  <CardContent className="py-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-neutral-900">Exportar Dados</h3>
                        <p className="text-sm text-neutral-500 mt-1">
                          Baixe o histórico completo de calibrações em formato CSV
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => {
                          // TODO: Implement export functionality
                          alert("Funcionalidade de exportação em desenvolvimento");
                        }}
                      >
                        <Download className="w-4 h-4" />
                        Exportar CSV
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
