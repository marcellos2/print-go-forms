import { useState, useEffect } from "react";
import { ArrowLeft, Loader2, Moon, Sun, Monitor, Bell, BellOff, Layout, LayoutGrid, Globe, Printer, Calendar, Building, User, FileText, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
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
type DateFormat = "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";

export default function Settings({ onBack }: SettingsProps) {
  const [settings, setSettings] = useState<Record<string, string>>({
    theme: "light",
    default_view: "list",
    sidebar_collapsed: "false",
    notifications_enabled: "true",
    auto_print_preview: "true",
    date_format: "DD/MM/YYYY",
    company_name: "Tecnoiso",
    default_technician: "",
    certificate_prefix: "CERT",
  });
  const [loading, setLoading] = useState(true);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchSettings();
  }, []);

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
        if (s.setting_value !== null) {
          settingsMap[s.setting_key] = s.setting_value;
        }
      });
      setSettings(settingsMap);
    } catch (error) {
      console.error("Error fetching settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key: string, value: string) => {
    const oldValue = settings[key];
    setSettings((prev) => ({ ...prev, [key]: value }));
    setSavingKey(key);
    
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
      
      // Show brief success indicator
      setTimeout(() => setSavingKey(null), 800);
    } catch (error) {
      console.error("Error saving setting:", error);
      setSettings((prev) => ({ ...prev, [key]: oldValue }));
      setSavingKey(null);
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar a configuração.",
        variant: "destructive",
      });
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

  const dateFormatOptions: { value: DateFormat; label: string }[] = [
    { value: "DD/MM/YYYY", label: "DD/MM/AAAA" },
    { value: "MM/DD/YYYY", label: "MM/DD/AAAA" },
    { value: "YYYY-MM-DD", label: "AAAA-MM-DD" },
  ];

  const SettingRow = ({ 
    label, 
    description, 
    settingKey, 
    children 
  }: { 
    label: string; 
    description: string; 
    settingKey: string;
    children: React.ReactNode;
  }) => (
    <div className="p-4 flex items-center justify-between">
      <div className="flex-1 mr-4">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">{label}</p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        {children}
        {savingKey === settingKey && (
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center animate-scale-in">
            <Check className="w-3 h-3 text-white" />
          </div>
        )}
      </div>
    </div>
  );

  const ToggleButtons = ({ 
    options, 
    currentValue, 
    settingKey 
  }: { 
    options: { value: string; label: string; icon?: React.ReactNode }[];
    currentValue: string;
    settingKey: string;
  }) => (
    <div className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => updateSetting(settingKey, option.value)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
            currentValue === option.value
              ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-white shadow-sm"
              : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
          }`}
        >
          {option.icon}
          {option.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <div className="h-14 bg-neutral-900 border-b border-neutral-800 flex items-center px-6 flex-shrink-0">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Voltar</span>
        </button>
        <div className="h-5 w-px bg-neutral-700 mx-4" />
        <h1 className="text-sm font-semibold text-white">Configurações</h1>
        <span className="ml-2 text-xs text-neutral-500">Salvamento automático</span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto py-8 px-6 space-y-6">
          
          {/* Appearance Section */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Sun className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Aparência</h2>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <SettingRow label="Tema" description="Escolha o tema de cores" settingKey="theme">
                <ToggleButtons options={themeOptions} currentValue={settings.theme} settingKey="theme" />
              </SettingRow>
            </div>
          </section>

          {/* Layout Section */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Layout className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Layout</h2>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 divide-y divide-neutral-200 dark:divide-neutral-700">
              <SettingRow label="Visualização Padrão" description="Como os equipamentos são exibidos" settingKey="default_view">
                <ToggleButtons options={viewOptions} currentValue={settings.default_view} settingKey="default_view" />
              </SettingRow>
              
              <SettingRow label="Barra Lateral Recolhida" description="Iniciar com navegação minimizada" settingKey="sidebar_collapsed">
                <Switch
                  checked={settings.sidebar_collapsed === "true"}
                  onCheckedChange={(checked) => updateSetting("sidebar_collapsed", checked ? "true" : "false")}
                />
              </SettingRow>
            </div>
          </section>

          {/* Printing Section */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Printer className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Impressão</h2>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 divide-y divide-neutral-200 dark:divide-neutral-700">
              <SettingRow label="Pré-visualização Automática" description="Mostrar preview antes de imprimir" settingKey="auto_print_preview">
                <Switch
                  checked={settings.auto_print_preview === "true"}
                  onCheckedChange={(checked) => updateSetting("auto_print_preview", checked ? "true" : "false")}
                />
              </SettingRow>

              <SettingRow label="Prefixo do Certificado" description="Prefixo para números de certificado" settingKey="certificate_prefix">
                <Input
                  value={settings.certificate_prefix}
                  onChange={(e) => updateSetting("certificate_prefix", e.target.value)}
                  className="w-24 h-8 text-sm text-center"
                  placeholder="CERT"
                />
              </SettingRow>
            </div>
          </section>

          {/* Data Section */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Dados</h2>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 divide-y divide-neutral-200 dark:divide-neutral-700">
              <SettingRow label="Formato de Data" description="Padrão para exibição de datas" settingKey="date_format">
                <ToggleButtons options={dateFormatOptions} currentValue={settings.date_format} settingKey="date_format" />
              </SettingRow>
              
              <SettingRow label="Técnico Padrão" description="Nome preenchido automaticamente" settingKey="default_technician">
                <Input
                  value={settings.default_technician}
                  onChange={(e) => updateSetting("default_technician", e.target.value)}
                  className="w-40 h-8 text-sm"
                  placeholder="Nome do técnico"
                />
              </SettingRow>
            </div>
          </section>

          {/* Notifications Section */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Bell className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Notificações</h2>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <SettingRow label="Notificações do Sistema" description="Exibir alertas de sucesso e erro" settingKey="notifications_enabled">
                <Switch
                  checked={settings.notifications_enabled === "true"}
                  onCheckedChange={(checked) => updateSetting("notifications_enabled", checked ? "true" : "false")}
                />
              </SettingRow>
            </div>
          </section>

          {/* Company Section */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                <Building className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Empresa</h2>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <SettingRow label="Nome da Empresa" description="Exibido nos certificados" settingKey="company_name">
                <Input
                  value={settings.company_name}
                  onChange={(e) => updateSetting("company_name", e.target.value)}
                  className="w-40 h-8 text-sm"
                  placeholder="Nome da empresa"
                />
              </SettingRow>
            </div>
          </section>

          {/* About Section */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </div>
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">Sobre</h2>
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