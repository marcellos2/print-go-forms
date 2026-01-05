export function PHMeterCalibrationForm() {
  const phRowsBefore = [
    { vrp: "0,00", ref: "414,10" },
    { vrp: "2,00", ref: "295,80" },
    { vrp: "4,00", ref: "177,50" },
    { vrp: "6,00", ref: "59,20" },
    { vrp: "8,00", ref: "-59,20" },
    { vrp: "10,00", ref: "-177,50" },
    { vrp: "12,00", ref: "-295,80" },
    { vrp: "14,00", ref: "-414,10" },
  ];

  const mvRows = [
    "-500,00",
    "-300,00",
    "-100,00",
    "0,00",
    "100,00",
    "300,00",
    "500,00",
  ];

  const solutionRowsBefore = ["2,00", "4,00", "7,00", "10,00", "12,00"];

  const padroes = [
    { label: "IP 01 - Microprocessador Portátil" },
    { label: "IP 61 - Microprocessador Portátil" },
    { label: "pH 2,0 - Solução Buffer" },
    { label: "pH 4,0 - Solução Buffer" },
    { label: "pH 7,0 - Solução Buffer" },
    { label: "pH 10,0 - Solução Buffer" },
    { label: "pH 12,0 - Solução Buffer" },
  ];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[8px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-[10px] mb-1 uppercase tracking-wide">
        Registro de Calibração de Medidor de pH
      </h1>

      {/* Main Info Grid */}
      <div className="grid grid-cols-2 gap-x-4 mb-0.5">
        <div className="space-y-1">
          <div className="flex">
            <span className="font-semibold w-20">Cliente:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-20">Proprietário:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-20">Instrumento:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-20">Código:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-20">Fabricante:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-20">Modelo:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-20">Escala pH:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-20">Escala mV:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex">
            <span className="font-semibold w-28">Tipo:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">N° de Patrimônio:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">N° de Série:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">EMA:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Resolução pH:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Resolução mV:</span>
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

      {/* Calibration Sections */}
      <div className="grid grid-cols-2 gap-2 mb-0.5">
        {/* Sem Ajuste */}
        <div className="border border-black p-1">
          <h3 className="font-bold text-center text-[8px] mb-1">
            Calibração Sem Ajuste ou Antes do Ajuste
          </h3>
          <div className="space-y-1 text-[8px]">
            <div className="flex">
              <span className="font-semibold w-32">Nº Certificado:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Data de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-1">
              <span className="font-semibold">Temperatura Amb:</span>
              <span className="w-10 border-b border-black"></span>
              <span>°C</span>
              <span className="font-semibold ml-2">Umidade:</span>
              <span className="w-10 border-b border-black"></span>
              <span>%</span>
            </div>
            <div className="flex gap-1">
              <span className="font-semibold">Temperatura da Solução:</span>
              <span className="flex-1 border-b border-black"></span>
              <span>°C</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Local de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Técnico de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Técnico de Certificados:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
        </div>

        {/* Após Ajuste */}
        <div className="border border-black p-1">
          <h3 className="font-bold text-center text-[8px] mb-1">
            Calibração Após Ajuste
          </h3>
          <div className="space-y-1 text-[8px]">
            <div className="flex">
              <span className="font-semibold w-32">Nº Certificado:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Data de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-1">
              <span className="font-semibold">Temperatura Amb:</span>
              <span className="w-10 border-b border-black"></span>
              <span>°C</span>
              <span className="font-semibold ml-2">Umidade:</span>
              <span className="w-10 border-b border-black"></span>
              <span>%</span>
            </div>
            <div className="flex gap-1">
              <span className="font-semibold">Temperatura da Solução:</span>
              <span className="flex-1 border-b border-black"></span>
              <span>°C</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Local de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Técnico de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Técnico de Certificados:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Medições */}
      <h3 className="font-bold text-center text-[9px] mb-0.5">Medições</h3>

      {/* Two Column Layout for Measurements */}
      <div className="grid grid-cols-2 gap-2 mb-0.5">
        {/* LEFT COLUMN - Before Adjustment */}
        <div>
          {/* pH Scale */}
          <h4 className="font-semibold text-[8px] text-center mb-0">
            Calibração Elétrica (Medidor de pH) - Escala em pH
          </h4>
          <table className="print-table text-[7px] mb-0.5">
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
              {phRowsBefore.map((row, idx) => (
                <tr key={idx}>
                  <td className="h-2">{row.vrp}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{row.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* mV Scale */}
          <h4 className="font-semibold text-[8px] text-center mb-0">
            Calibração Elétrica (Medidor de pH) - Escala em mV
          </h4>
          <table className="print-table text-[7px] mb-0.5">
            <thead>
              <tr>
                <th>(VRP) mV</th>
                <th>Leit 1 (mV)</th>
                <th>Leit 2 (mV)</th>
                <th>Leit 3 (mV)</th>
              </tr>
            </thead>
            <tbody>
              {mvRows.map((val, idx) => (
                <tr key={idx}>
                  <td className="h-2">{val}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Solution Calibration */}
          <h4 className="font-semibold text-[8px] text-center mb-0">
            Calibração com Soluções (Medidor de pH e eletrodo) - Escala em pH
          </h4>
          <table className="print-table text-[7px]">
            <thead>
              <tr>
                <th>(VRP) pH</th>
                <th>Leit 1 (pH)</th>
                <th>Leit 2 (pH)</th>
                <th>Leit 3 (pH)</th>
              </tr>
            </thead>
            <tbody>
              {solutionRowsBefore.map((val, idx) => (
                <tr key={idx}>
                  <td className="h-2">{val}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
              <tr>
                <td className="text-right font-semibold" colSpan={2}>Slope (%):</td>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* RIGHT COLUMN - After Adjustment */}
        <div>
          {/* pH Scale */}
          <h4 className="font-semibold text-[8px] text-center mb-0">
            Calibração Elétrica (Medidor de pH) - Escala em pH
          </h4>
          <table className="print-table text-[7px] mb-0.5">
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
              {phRowsBefore.map((row, idx) => (
                <tr key={idx}>
                  <td className="h-2">{row.vrp}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{row.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* mV Scale */}
          <h4 className="font-semibold text-[8px] text-center mb-0">
            Calibração Elétrica (Medidor de pH) - Escala em mV
          </h4>
          <table className="print-table text-[7px] mb-0.5">
            <thead>
              <tr>
                <th>(VRP) mV</th>
                <th>Leit 1 (mV)</th>
                <th>Leit 2 (mV)</th>
                <th>Leit 3 (mV)</th>
              </tr>
            </thead>
            <tbody>
              {mvRows.map((val, idx) => (
                <tr key={idx}>
                  <td className="h-2">{val}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Solution Calibration */}
          <h4 className="font-semibold text-[8px] text-center mb-0">
            Calibração com Soluções (Medidor de pH e eletrodo) - Escala em pH
          </h4>
          <table className="print-table text-[7px]">
            <thead>
              <tr>
                <th>(VRP) pH</th>
                <th>Leit 1 (pH)</th>
                <th>Leit 2 (pH)</th>
                <th>Leit 3 (pH)</th>
              </tr>
            </thead>
            <tbody>
              {solutionRowsBefore.map((val, idx) => (
                <tr key={idx}>
                  <td className="h-2">{val}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
              <tr>
                <td className="text-right font-semibold" colSpan={2}>Slope (%):</td>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Método de Calibração */}
      <div className="mb-0.5">
        <h4 className="font-bold text-[8px]">Método de Calibração:</h4>
        <p className="text-[8px]">
          Calibração por comparação indireta conforme procedimento técnico PTFQ 01.
        </p>
      </div>

      {/* Padrões Utilizados */}
      <div className="mb-0.5">
        <h4 className="font-bold text-[8px] mb-0">Padrões Utilizados:</h4>
        <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[8px]">
          {padroes.map((padrao, idx) => (
            <label key={idx} className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 border border-black inline-block flex-shrink-0"></span>
              <span>{padrao.label}</span>
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
      <div className="text-center text-[8px] text-gray-600">
        Página 1 de 1
      </div>

      <style>{`
        .print-table {
          width: 100%;
          border-collapse: collapse;
        }
        .print-table th,
        .print-table td {
          border: 1px solid black;
          padding: 1px 2px;
          text-align: center;
        }
        .print-table th {
          background-color: #f3f4f6;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}