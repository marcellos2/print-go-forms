import { useState, useEffect } from "react";
import { ArrowLeft, Save, Building, User, FileText, ToggleLeft, Palette, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface SettingsProps {
  onBack: () => void;
}

interface Setting {
  id: string;
  setting_key: string;
  setting_value: string | null;
  description: string | null;
}

export default function Settings({ onBack }: SettingsProps) {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from("app_settings")
        .select("*");

      if (error) throw error;

      const settingsMap: Record<string, string> = {};
      (data || []).forEach((s: Setting) => {
        settingsMap[s.setting_key] = s.setting_value || "";
      });
      setSettings(settingsMap);
    } catch (error) {
      console.error("Error fetching settings:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as configurações.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      for (const [key, value] of Object.entries(settings)) {
        const { error } = await supabase
          .from("app_settings")
          .update({ setting_value: value, updated_at: new Date().toISOString() })
          .eq("setting_key", key);

        if (error) throw error;
      }

      toast({
        title: "Sucesso",
        description: "Configurações salvas com sucesso!",
      });
    } catch (error) {
      console.error("Error saving settings:", error);
      toast({
        title: "Erro",
        description: "Não foi possível salvar as configurações.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-neutral-50">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-neutral-50">
      {/* Header */}
      <div className="h-14 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors mr-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar</span>
          </button>
          <div className="h-6 w-px bg-neutral-700 mr-4"></div>
          <span className="text-sm font-semibold text-white">Configurações</span>
        </div>
        <Button
          onClick={handleSave}
          disabled={saving}
          className="bg-orange-500 hover:bg-orange-600"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          Salvar
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Company Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-orange-500" />
                Empresa
              </CardTitle>
              <CardDescription>Configurações gerais da empresa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company_name">Nome da Empresa</Label>
                <Input
                  id="company_name"
                  value={settings.company_name || ""}
                  onChange={(e) => updateSetting("company_name", e.target.value)}
                  placeholder="Nome da empresa"
                />
              </div>
            </CardContent>
          </Card>

          {/* Technician Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-500" />
                Técnico
              </CardTitle>
              <CardDescription>Configurações do técnico padrão</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default_technician">Técnico Padrão</Label>
                <Input
                  id="default_technician"
                  value={settings.default_technician || ""}
                  onChange={(e) => updateSetting("default_technician", e.target.value)}
                  placeholder="Nome do técnico padrão"
                />
              </div>
            </CardContent>
          </Card>

          {/* Certificate Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-500" />
                Certificados
              </CardTitle>
              <CardDescription>Configurações de numeração de certificados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="certificate_prefix">Prefixo do Certificado</Label>
                <Input
                  id="certificate_prefix"
                  value={settings.certificate_prefix || ""}
                  onChange={(e) => updateSetting("certificate_prefix", e.target.value)}
                  placeholder="Ex: CERT-"
                />
              </div>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ToggleLeft className="w-5 h-5 text-purple-500" />
                Sistema
              </CardTitle>
              <CardDescription>Configurações do sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto_save">Salvar Automaticamente</Label>
                  <p className="text-sm text-neutral-500">
                    Salvar calibrações automaticamente no histórico
                  </p>
                </div>
                <Switch
                  id="auto_save"
                  checked={settings.auto_save === "true"}
                  onCheckedChange={(checked) =>
                    updateSetting("auto_save", checked ? "true" : "false")
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-pink-500" />
                Aparência
              </CardTitle>
              <CardDescription>Configurações visuais do sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Tema</Label>
                  <p className="text-sm text-neutral-500">
                    Escolha entre tema claro ou escuro
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={settings.theme === "light" ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting("theme", "light")}
                  >
                    Claro
                  </Button>
                  <Button
                    variant={settings.theme === "dark" ? "default" : "outline"}
                    size="sm"
                    onClick={() => updateSetting("theme", "dark")}
                  >
                    Escuro
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardContent className="py-6">
              <div className="text-center">
                <img
                  src="https://sistema.tecnoiso.com/wp-content/uploads/2016/09/tecnoiso_logo_R1.png"
                  alt="Tecnoiso"
                  className="h-8 mx-auto mb-4"
                />
                <p className="text-sm text-neutral-600">
                  Sistema de Coletas v1.0.0
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  © 2025 Tecnoiso - Todos os direitos reservados
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
