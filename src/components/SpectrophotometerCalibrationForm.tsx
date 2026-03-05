import type { InstrumentData } from "@/types/instrument";
interface Props { data?: InstrumentData; }
export function SpectrophotometerCalibrationForm({ data }: Props) {
  const leftRows = [
    { wave: "380nm", std1: "0,717", filter1: "F2-1135", std2: "0,302", filter2: "F3-1135" },
    { wave: "420nm", std1: "0,699", filter1: "F3-1135", std2: "1,067", filter2: "F4-1135" },
    { wave: "440nm", std1: "0,672", filter1: "F3-1135", std2: "1,023", filter2: "F4-1135" },
    { wave: "520nm", std1: "0,587", filter1: "F3-1135", std2: "0,905", filter2: "F4-1135" },
    { wave: "560nm", std1: "0,562", filter1: "F3-1135", std2: "0,859", filter2: "F4-1135" },
    { wave: "590nm", std1: "0,612", filter1: "F3-1135", std2: "0,928", filter2: "F4-1135" },
    { wave: "610nm", std1: "0,617", filter1: "F3-1135", std2: "", filter2: "" },
  ];

  const rightRows = [
    { wave: "635nm", std1: "0,602", filter1: "F3-1135", std2: "0,825", filter2: "F3-1135" },
    { wave: "690nm", std1: "0,602", filter1: "F3-1135", std2: "0,825", filter2: "F4-1135" },
    { wave: "720nm", std1: "0,559", filter1: "F3-1135", std2: "0,770", filter2: "F4-1135" },
    { wave: "800nm", std1: "0,769", filter1: "F3-1135", std2: "0,894", filter2: "F4-1135" },
    { wave: "850nm", std1: "0,858", filter1: "F3-1135", std2: "0,971", filter2: "F4-1135" },
    { wave: "900nm", std1: "0,926", filter1: "F3-1135", std2: "1,032", filter2: "F4-1135" },
  ];

  const padroes = [
    "PC 05 - Filtro de Vidro Neutro",
    "F2-1135 - Filtro Padrão",
    "F3-1135 - Filtro Padrão",
    "F4-1135 - Filtro Padrão",
  ];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Espectrofotômetro
      </h1>

      {/* Main Info Grid */}
      <div className="grid grid-cols-2 gap-x-3 mb-2">
        <div className="space-y-1">
          <div className="flex">
            <span className="font-semibold w-24">Cliente:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Proprietário:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Instrumento:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Código:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Fabricante:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Modelo:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Tipo:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Escala:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Resolução:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex">
            <span className="font-semibold w-28">Nº de Série:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Nº de Patrimônio:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Nº da OS:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Erro Admissível:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Periodicidade:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Local:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>
      </div>

      {/* Dados de Calibração */}
      <div className="border border-black p-2 mb-2">
        <div className="flex items-center gap-4 mb-1">
          <span className="font-bold text-[9px]">Dados de Calibração</span>
          <span className="text-[8px]">( ) Sem Ajuste ou Antes do Ajuste</span>
          <span className="text-[8px]">( ) Após Ajuste</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 text-[8px]">
          <div className="space-y-0.5">
            <div className="flex"><span className="w-28">Nº Certificado:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Data de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Local de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
          </div>
          <div className="space-y-0.5">
            <div className="flex gap-2"><span>Temperatura:</span><span className="w-12 border-b border-black"></span><span>°C</span></div>
            <div className="flex gap-2"><span>Umidade:</span><span className="w-12 border-b border-black"></span><span>%</span></div>
            <div className="flex"><span className="w-28">Técnico de Certificados:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Técnico de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
          </div>
        </div>
      </div>

      {/* Medições */}
      <h3 className="font-bold text-center mb-1">Medições</h3>
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Left Table */}
        <div>
          <h4 className="font-semibold text-[7px] mb-1">Filtros para ABS na Região Vis / Filtros de Vidro Neutro</h4>
          <table className="print-table text-[7px]">
            <thead>
              <tr>
                <th>Comp. Onda</th>
                <th>Padrão</th>
                <th>Leit. 1</th>
                <th>Leit. 2</th>
                <th>Filtro</th>
              </tr>
            </thead>
            <tbody>
              {leftRows.map((row, idx) => (
                <>
                  <tr key={`${idx}-1`}>
                    <td rowSpan={2} className="h-3">{row.wave}</td>
                    <td>{row.std1}</td>
                    <td></td>
                    <td></td>
                    <td>{row.filter1}</td>
                  </tr>
                  <tr key={`${idx}-2`}>
                    <td>{row.std2}</td>
                    <td></td>
                    <td></td>
                    <td>{row.filter2}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Table */}
        <div>
          <h4 className="font-semibold text-[7px] mb-1">Filtros para ABS na Região Vis / Filtros de Vidro Neutro</h4>
          <table className="print-table text-[7px]">
            <thead>
              <tr>
                <th>Comp. Onda</th>
                <th>Padrão</th>
                <th>Leit. 1</th>
                <th>Leit. 2</th>
                <th>Filtro</th>
              </tr>
            </thead>
            <tbody>
              {rightRows.map((row, idx) => (
                <>
                  <tr key={`${idx}-1`}>
                    <td rowSpan={2} className="h-3">{row.wave}</td>
                    <td>{row.std1}</td>
                    <td></td>
                    <td></td>
                    <td>{row.filter1}</td>
                  </tr>
                  <tr key={`${idx}-2`}>
                    <td>{row.std2}</td>
                    <td></td>
                    <td></td>
                    <td>{row.filter2}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Método de Calibração */}
      <div className="mb-1">
        <h4 className="font-bold text-[8px]">Método de Calibração:</h4>
        <p className="text-[8px]">Calibração por comparação indireta conforme procedimento interno.</p>
      </div>

      {/* Padrões Utilizados */}
      <div className="mb-1">
        <h4 className="font-bold text-[8px] mb-0.5">Padrões Utilizados:</h4>
        <div className="grid grid-cols-4 gap-x-2 gap-y-0.5 text-[8px]">
          {padroes.map((padrao) => (
            <label key={padrao} className="flex items-center gap-0.5">
              <span className="w-2.5 h-2.5 border border-black inline-block"></span>
              <span>{padrao}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Observações */}
       <div className="border border-black p-2 mb-2">
        <div className="font-bold mb-1.5 text-[8.5px]">Observações:</div>
        <div className="min-h-[60px]">
          {/* Espaço para observações */}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-1 text-[8px] text-muted-foreground">
        Página 1 de 1
      </div>
    </div>
  );
}
