import { useState } from "react";
import { Printer, FileText, Search, Grid3x3, List, Package, Menu, Home, Settings as SettingsIcon, History as HistoryIcon, Building2 } from "lucide-react";
import { PrintPreview } from "@/components/PrintPreview";
import { MultiPrintDialog, type PrintSelection } from "@/components/MultiPrintDialog";
import { equipments, categories, getEquipmentsByCategory, type EquipmentCategory, type EquipmentType } from "@/config/equipments";
import History from "./History";
import Settings from "./Settings";
import Companies from "./Companies";

type Page = "home" | "history" | "settings" | "companies";

export default function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [printSelections, setPrintSelections] = useState<PrintSelection[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handlePrintSingle = (equipmentId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setPrintSelections([{ equipmentType: equipmentId as EquipmentType, quantity: 1 }]);
  };

  const handlePrint = (selections: PrintSelection[]) => {
    setPrintSelections(selections);
  };

  const handleBack = () => {
    setPrintSelections(null);
  };

  const filteredCategories = selectedCategory
    ? categories.filter((c) => c.id === selectedCategory)
    : categories;

  const getFilteredEquipments = (categoryId: EquipmentCategory) => {
    const categoryEquipments = getEquipmentsByCategory(categoryId);
    if (!searchTerm) return categoryEquipments;
    return categoryEquipments.filter((eq) =>
      eq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      eq.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Render other pages
  if (currentPage === "history") {
    return <History onBack={() => setCurrentPage("home")} />;
  }
  if (currentPage === "settings") {
    return <Settings onBack={() => setCurrentPage("home")} />;
  }
  if (currentPage === "companies") {
    return <Companies onBack={() => setCurrentPage("home")} onPrintCompany={(companyId, companyName) => {
      // Navigate handled inside Companies via CompanyPrintFlow
    }} />;
  }

  if (printSelections !== null) {
    return <PrintPreview selections={printSelections} onBack={handleBack} />;
  }

  return (
    <div className="h-screen flex flex-col bg-neutral-50 overflow-hidden">
      {/* Top Menu Bar - Estilo Software */}
      <div className="h-14 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <img 
            src="https://sistema.tecnoiso.com/wp-content/uploads/2016/09/tecnoiso_logo_R1.png" 
            alt="Tecnoiso"
            className="h-7 w-auto object-contain brightness-0 invert"
          />
          <div className="h-6 w-px bg-neutral-700"></div>
          <span className="text-sm font-semibold text-white">Sistema de Coletas</span>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <button 
            onClick={() => setCurrentPage("help")}
            className="px-3 py-1.5 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 rounded transition-colors flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            MetroBot
          </button>
          <button 
            onClick={() => setCurrentPage("settings")}
            className="px-3 py-1.5 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 rounded transition-colors flex items-center gap-1.5"
          >
            <SettingsIcon className="w-3.5 h-3.5" />
            Configurações
          </button>
          <div className="h-4 w-px bg-neutral-700 mx-2"></div>
          <div className="flex items-center gap-2 px-3 py-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-neutral-400">Online</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Estilo Software */}
        <div className={`bg-white border-r border-neutral-200 flex-shrink-0 transition-all duration-300 ${sidebarCollapsed ? 'w-16' : 'w-64'}`}>
          <div className="h-full flex flex-col">
            {/* Sidebar Header */}
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
              {!sidebarCollapsed && (
                <span className="text-sm font-semibold text-neutral-700">NAVEGAÇÃO</span>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-1.5 hover:bg-neutral-100 rounded transition-colors ml-auto"
              >
                <Menu className="w-4 h-4 text-neutral-600" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-2 space-y-1">
              <button 
                onClick={() => setCurrentPage("home")}
                className="w-full flex items-center gap-3 px-3 py-2.5 bg-orange-50 text-orange-600 rounded-lg font-medium transition-colors"
              >
                <Home className="w-4 h-4 flex-shrink-0" />
                {!sidebarCollapsed && <span className="text-sm">Equipamentos</span>}
              </button>
              
              <button 
                onClick={() => setCurrentPage("history")}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                <HistoryIcon className="w-4 h-4 flex-shrink-0" />
                {!sidebarCollapsed && <span className="text-sm">Histórico</span>}
              </button>

              <button 
                onClick={() => setCurrentPage("companies")}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                <Building2 className="w-4 h-4 flex-shrink-0" />
                {!sidebarCollapsed && <span className="text-sm">Empresas</span>}
              </button>

              {!sidebarCollapsed && (
                <>
                  <div className="pt-4 pb-2 px-3">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">CATEGORIAS</span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === null 
                        ? 'bg-neutral-100 text-neutral-900 font-medium' 
                        : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    <Package className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">Todos</span>
                    <span className="ml-auto text-xs bg-neutral-200 text-neutral-600 px-2 py-0.5 rounded-full font-medium">
                      {equipments.length}
                    </span>
                  </button>

                  {categories.map((cat) => {
                    const count = getEquipmentsByCategory(cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === cat.id 
                            ? 'bg-orange-50 text-orange-600 font-medium' 
                            : 'text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        <cat.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm truncate">{cat.title}</span>
                        <span className="ml-auto text-xs bg-neutral-200 text-neutral-600 px-2 py-0.5 rounded-full font-medium">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </>
              )}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-neutral-200">
              {!sidebarCollapsed ? (
                <div className="p-3 bg-orange-50 rounded-lg ">
                  <div className="flex items-start gap-3 mb-2">

                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Toolbar - Compacta */}
          <div className="bg-white border-b border-neutral-200 px-6 py-3 flex items-center gap-4 flex-shrink-0">
            <div className="flex-1 flex items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Buscar equipamentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:border-orange-500 focus:outline-none transition-all text-sm"
                />
              </div>

              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-xs font-medium text-neutral-600">
                  {filteredCategories.reduce((acc, cat) => acc + getFilteredEquipments(cat.id).length, 0)} equipamentos
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-white shadow-sm text-orange-600' 
                      : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded transition-all ${
                    viewMode === 'list' 
                      ? 'bg-white shadow-sm text-orange-600' 
                      : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleOpenDialog}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-orange-500/25"
                title="Imprimir múltiplos equipamentos"
              >
                <Printer className="w-4 h-4" />
                Imprimir Vários
              </button>
            </div>
          </div>

          {/* Content Area with Scroll */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-8">
              {filteredCategories.map((category) => {
                const categoryEquipments = getFilteredEquipments(category.id);
                if (categoryEquipments.length === 0) return null;

                return (
                  <div key={category.id}>
                    {/* Category Header - Compacta */}
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-neutral-200">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <category.icon className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-lg font-bold text-neutral-900">{category.title}</h2>
                      <span className="text-sm text-neutral-500">({categoryEquipments.length})</span>
                    </div>

                    {/* Equipment Grid/List - Compacta */}
                    {viewMode === 'grid' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {categoryEquipments.map((eq) => (
                          <button
                            key={eq.id}
                            onClick={(e) => handlePrintSingle(eq.id, e)}
                            className="group bg-white border border-neutral-200 hover:border-orange-500 rounded-xl p-4 text-left transition-all hover:shadow-lg"
                            title={`Clique para imprimir: ${eq.title}`}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-10 h-10 bg-neutral-100 group-hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all flex-shrink-0">
                                <eq.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-orange-600 transition-colors mb-1">
                                  {eq.title}
                                </h3>
                                <p className="text-xs text-neutral-600 line-clamp-2">
                                  {eq.description}
                                </p>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                              <span className="text-xs text-neutral-500">{category.title}</span>
                              <div className="flex items-center gap-1.5 text-orange-600 font-semibold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                <Printer className="w-3.5 h-3.5" />
                                Imprimir
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {categoryEquipments.map((eq) => (
                          <button
                            key={eq.id}
                            onClick={(e) => handlePrintSingle(eq.id, e)}
                            className="group w-full bg-white border border-neutral-200 hover:border-orange-500 rounded-lg p-4 text-left transition-all hover:shadow-md flex items-center gap-4"
                            title={`Clique para imprimir: ${eq.title}`}
                          >
                            <div className="w-10 h-10 bg-neutral-100 group-hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all flex-shrink-0">
                              <eq.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-bold text-neutral-900 mb-0.5 group-hover:text-orange-600 transition-colors">
                                {eq.title}
                              </h3>
                              <p className="text-xs text-neutral-600 truncate">
                                {eq.description}
                              </p>
                            </div>

                            <div className="flex items-center gap-3 flex-shrink-0">
                              <span className="text-xs text-neutral-500 px-2 py-1 bg-neutral-50 rounded">
                                {category.title}
                              </span>
                              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-orange-50 text-orange-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                                <Printer className="w-3.5 h-3.5" />
                                <span className="text-xs font-semibold">Imprimir</span>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-neutral-900 border-t border-neutral-800 px-6 py-2 flex items-center justify-between text-xs text-neutral-400 flex-shrink-0">
            <div className="flex items-center gap-4">
              <span>© 2025 Tecnoiso</span>
              <div className="w-px h-3 bg-neutral-700"></div>
              <span>v1.0.0</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Certificados</span>
              <div className="w-px h-3 bg-neutral-700"></div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Sistema Operacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi Print Dialog */}
      <MultiPrintDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        equipments={equipments.map((e) => ({ id: e.id, title: e.title }))}
        onPrint={handlePrint}
      />
    </div>
  );
}