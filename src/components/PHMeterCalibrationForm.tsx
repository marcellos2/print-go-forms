export function PHMeterCalibrationForm() {
  const phRows = [
    { vrp: "0.00", ref: "414.10" },
    { vrp: "2.00", ref: "295.80" },
    { vrp: "4.00", ref: "177.50" },
    { vrp: "6.00", ref: "59.20" },
    { vrp: "8.00", ref: "-59.20" },
    { vrp: "10.00", ref: "-177.50" },
    { vrp: "12.00", ref: "-295.80" },
    { vrp: "14.00", ref: "-414.10" },
  ];

  const mvRows = [
    { vrp: "-500.00" },
    { vrp: "-300.00" },
    { vrp: "-100.00" },
    { vrp: "0.00" },
    { vrp: "100.00" },
    { vrp: "300.00" },
    { vrp: "500.00" },
  ];

  const solutionRows = [
    { vrp: "2.00" },
    { vrp: "4.00" },
    { vrp: "7.00" },
    { vrp: "10.00" },
    { vrp: "12.00" },
  ];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Medidor de pH
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
          <div className="flex gap-2">
            <span className="font-semibold">Escala pH:</span>
            <span className="w-16 border-b border-black"></span>
            <span className="font-semibold">Resolução pH:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Escala mV:</span>
            <span className="w-16 border-b border-black"></span>
            <span className="font-semibold">Resolução mV:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex">
            <span className="font-semibold w-28">Tipo:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Nº de Patrimônio:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Nº de Série:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Local:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Periodicidade:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">EMA:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>
      </div>

      {/* Calibration Data Sections */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Sem Ajuste */}
        <div className="border border-black p-1">
          <h4 className="font-bold text-center text-[8px] mb-1">Calibração Sem Ajuste ou Antes do Ajuste</h4>
          <div className="space-y-0.5 text-[8px]">
            <div className="flex"><span className="w-28">Nº Certificado:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Data de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex gap-2"><span>Temp. Amb:</span><span className="w-8 border-b border-black"></span><span>°C</span><span>Umidade:</span><span className="w-8 border-b border-black"></span><span>%</span></div>
            <div className="flex"><span className="w-28">Temp. da Solução:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Local de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Técnico de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Técnico de Certificados:</span><span className="flex-1 border-b border-black"></span></div>
          </div>
        </div>
        {/* Após Ajuste */}
        <div className="border border-black p-1">
          <h4 className="font-bold text-center text-[8px] mb-1">Calibração Após Ajuste</h4>
          <div className="space-y-0.5 text-[8px]">
            <div className="flex"><span className="w-28">Nº Certificado:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Data de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex gap-2"><span>Temp.:</span><span className="w-8 border-b border-black"></span><span>°C</span><span>Umidade:</span><span className="w-8 border-b border-black"></span><span>%</span></div>
            <div className="flex"><span className="w-28">Temp. da Solução:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Local de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Técnico de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Técnico de Certificados:</span><span className="flex-1 border-b border-black"></span></div>
          </div>
        </div>
      </div>

      {/* Medições Header */}
      <h3 className="font-bold text-center mb-1">Medições</h3>

      {/* pH Scale Table */}
      <div className="mb-2">
        <h4 className="font-semibold text-[8px] mb-1">Calibração Elétrica (Medidor de pH) - Escala em pH</h4>
        <table className="print-table text-[8px]">
          <thead>
            <tr>
              <th>(VRP) pH</th>
              <th>Leit 1 (pH)</th>
              <th>Leit 2 (pH)</th>
              <th>Leit 3 (pH)</th>
              <th>Ref. (mV)</th>
            </tr>
          </thead>
          <tbody>
            {phRows.map((row, idx) => (
              <tr key={idx}>
                <td className="h-3">{row.vrp}</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{row.ref}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mV Scale and Solution Tables side by side */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <h4 className="font-semibold text-[8px] mb-1">Calibração Elétrica - Escala em mV</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th>(VRP) mV</th>
                <th>Leit 1 (mV)</th>
                <th>Leit 2 (mV)</th>
                <th>Leit 3 (mV)</th>
              </tr>
            </thead>
            <tbody>
              {mvRows.map((row, idx) => (
                <tr key={idx}>
                  <td className="h-3">{row.vrp}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="font-semibold text-[8px] mb-1">Calibração com Soluções - Escala em pH</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th>(VRP) pH</th>
                <th>Leit 1 (pH)</th>
                <th>Leit 2 (pH)</th>
                <th>Leit 3 (pH)</th>
              </tr>
            </thead>
            <tbody>
              {solutionRows.map((row, idx) => (
                <tr key={idx}>
                  <td className="h-3">{row.vrp}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} className="text-right">Slope (%):</td>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Método e Padrões */}
      <div className="border border-black p-1 mb-2">
        <p className="text-[8px]"><strong>Método de Calibração:</strong> Calibração por comparação indireta conforme procedimento técnico PTFQ 01.</p>
        <p className="text-[8px] mt-1"><strong>Padrões Utilizados:</strong> IP 01 - Microprocessador Portátil, pH 2,0 / 4,0 / 7,0 / 10,0 / 12,0 Solução Buffer</p>
      </div>

      {/* Observações */}
      <div className="border border-black p-1">
        <h4 className="font-semibold text-[8px]">Observações:</h4>
        <p className="text-[7px]">* VRP - Valor de Referência Padrão.</p>
        <div className="min-h-[15px]"></div>
      </div>

      {/* Footer */}
      <div className="text-center mt-1 text-[8px] text-muted-foreground">
        FRCAL 004/REV.01 — Página 1 de 1
      </div>
    </div>
  );
}
