import { useState, useEffect } from "react";
import { ArrowLeft, Save, Loader2, Moon, Sun, Monitor, Bell, BellOff, Layout, LayoutGrid, Globe } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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

type Theme = "light" | "dark" | "system";
type ViewMode = "grid" | "list";

export default function Settings({ onBack }: SettingsProps) {
  const [settings, setSettings] = useState<Record<string, string>>({
    theme: "light",
    default_view: "list",
    sidebar_collapsed: "false",
    notifications_enabled: "true",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSettings();
  }, []);

  // Apply theme when settings change
  useEffect(() => {
    applyTheme(settings.theme as Theme);
  }, [settings.theme]);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      // System preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  };

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from("app_settings")
        .select("*");

      if (error) throw error;

      const settingsMap: Record<string, string> = { ...settings };
      (data || []).forEach((s: Setting) => {
        if (s.setting_value) {
          settingsMap[s.setting_key] = s.setting_value;
        }
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

  const updateSetting = async (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    
    // Auto-save setting
    try {
      const { error } = await supabase
        .from("app_settings")
        .upsert({ 
          setting_key: key,
          setting_value: value, 
          updated_at: new Date().toISOString() 
        }, { 
          onConflict: 'setting_key'
        });

      if (error) throw error;
    } catch (error) {
      console.error("Error saving setting:", error);
    }
  };

  const handleSaveAll = async () => {
    setSaving(true);
    try {
      for (const [key, value] of Object.entries(settings)) {
        const { error } = await supabase
          .from("app_settings")
          .upsert({ 
            setting_key: key,
            setting_value: value, 
            updated_at: new Date().toISOString() 
          }, { 
            onConflict: 'setting_key'
          });

        if (error) throw error;
      }

      toast({
        title: "Configurações salvas",
        description: "Suas preferências foram atualizadas com sucesso.",
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
      <div className="h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  const themeOptions: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Claro", icon: <Sun className="w-4 h-4" /> },
    { value: "dark", label: "Escuro", icon: <Moon className="w-4 h-4" /> },
    { value: "system", label: "Sistema", icon: <Monitor className="w-4 h-4" /> },
  ];

  const viewOptions: { value: ViewMode; label: string; icon: React.ReactNode }[] = [
    { value: "list", label: "Lista", icon: <Layout className="w-4 h-4" /> },
    { value: "grid", label: "Grade", icon: <LayoutGrid className="w-4 h-4" /> },
  ];

  return (
    <div className="h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <div className="h-14 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Voltar</span>
          </button>
          <div className="h-5 w-px bg-neutral-700" />
          <h1 className="text-sm font-semibold text-white">Configurações</h1>
        </div>
        <Button
          onClick={handleSaveAll}
          disabled={saving}
          size="sm"
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          Salvar Alterações
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto py-8 px-6">
          {/* Theme Section */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Sun className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Aparência</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Personalize a aparência do sistema</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">Tema</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Escolha o tema de cores do sistema</p>
                </div>
                <div className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateSetting("theme", option.value)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        settings.theme === option.value
                          ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-white shadow-sm"
                          : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Layout Section */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Layout</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Configure a exibição dos equipamentos</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 divide-y divide-neutral-200 dark:divide-neutral-700">
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">Visualização Padrão</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Como os equipamentos são exibidos inicialmente</p>
                </div>
                <div className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                  {viewOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateSetting("default_view", option.value)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        settings.default_view === option.value
                          ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-white shadow-sm"
                          : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                      }`}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">Barra Lateral Recolhida</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Iniciar com a navegação minimizada</p>
                </div>
                <Switch
                  checked={settings.sidebar_collapsed === "true"}
                  onCheckedChange={(checked) => updateSetting("sidebar_collapsed", checked ? "true" : "false")}
                />
              </div>
            </div>
          </section>

          {/* Notifications Section */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Bell className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Notificações</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Gerencie alertas e avisos do sistema</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {settings.notifications_enabled === "true" ? (
                    <Bell className="w-5 h-5 text-green-500" />
                  ) : (
                    <BellOff className="w-5 h-5 text-neutral-400" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">Notificações do Sistema</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Exibir alertas de sucesso e erro</p>
                  </div>
                </div>
                <Switch
                  checked={settings.notifications_enabled === "true"}
                  onCheckedChange={(checked) => updateSetting("notifications_enabled", checked ? "true" : "false")}
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white">Sobre</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Informações do sistema</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-6">
              <div className="text-center">
                <img
                  src="https://sistema.tecnoiso.com/wp-content/uploads/2016/09/tecnoiso_logo_R1.png"
                  alt="Tecnoiso"
                  className="h-8 mx-auto mb-4 dark:invert"
                />
                <p className="text-sm font-medium text-neutral-900 dark:text-white">Sistema de Coletas</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Versão 1.0.0</p>
                <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    © 2025 Tecnoiso - Todos os direitos reservados
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
