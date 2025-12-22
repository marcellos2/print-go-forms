export function OximeterCalibrationForm() {
  const measurementRows = Array(6).fill(null);

  const padroes = [
    "Solução de Oxigênio Zero",
    "PR 001 - Proveta Graduada",
    "IP 01 - Microprocessador Portátil",
  ];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Oxímetro
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

      {/* Calibração Sem Ajuste */}
      <div className="border border-black p-2 mb-2">
        <h4 className="font-bold text-center text-[9px] mb-1">Calibração Sem Ajuste ou Antes do Ajuste</h4>
        <div className="grid grid-cols-2 gap-x-3 text-[8px]">
          <div className="space-y-0.5">
            <div className="flex"><span className="w-28">Nº Certificado:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Data de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex gap-2"><span>Temperatura:</span><span className="w-10 border-b border-black"></span><span>°C</span><span>Umidade:</span><span className="w-10 border-b border-black"></span><span>%</span></div>
          </div>
          <div className="space-y-0.5">
            <div className="flex"><span className="w-28">Local de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Técnico de Calibração:</span><span className="flex-1 border-b border-black"></span></div>
            <div className="flex"><span className="w-28">Técnico de Certificados:</span><span className="flex-1 border-b border-black"></span></div>
          </div>
        </div>

        {/* Medições Sem Ajuste */}
        <h5 className="font-bold text-center text-[8px] mt-2 mb-1">Medições</h5>
        <table className="print-table text-[8px] w-full">
          <thead>
            <tr>
              <th>Padrão</th>
              <th>Leitura 1</th>
              <th>Leitura 2</th>
              <th>Leitura 3</th>
            </tr>
          </thead>
          <tbody>
            {measurementRows.map((_, idx) => (
              <tr key={idx}>
                <td className="h-4"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Calibração Após Ajuste */}
      <div className="border border-black p-2 mb-2">
        <h4 className="font-bold text-center text-[9px] mb-1">Calibração Após Ajuste</h4>
        
        {/* Medições Após Ajuste */}
        <table className="print-table text-[8px] w-full">
          <thead>
            <tr>
              <th>Padrão</th>
              <th>Leitura 1</th>
              <th>Leitura 2</th>
              <th>Leitura 3</th>
            </tr>
          </thead>
          <tbody>
            {measurementRows.map((_, idx) => (
              <tr key={idx}>
                <td className="h-4"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Método de Calibração */}
      <div className="mb-1">
        <h4 className="font-bold text-[8px]">Método de Calibração:</h4>
        <p className="text-[8px]">Calibração por comparação indireta conforme procedimento interno.</p>
      </div>

      {/* Padrões Utilizados */}
      <div className="mb-1">
        <h4 className="font-bold text-[8px] mb-0.5">Padrões Utilizados:</h4>
        <div className="grid grid-cols-3 gap-x-2 gap-y-0.5 text-[8px]">
          {padroes.map((padrao) => (
            <label key={padrao} className="flex items-center gap-0.5">
              <span className="w-2.5 h-2.5 border border-black inline-block"></span>
              <span>{padrao}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Observações */}
      <div>
        <h4 className="font-bold text-[8px]">Observações:</h4>
        <div className="border-b border-black h-3 mb-0.5"></div>
        <div className="border-b border-black h-3 mb-0.5"></div>
        <div className="border-b border-black h-3"></div>
      </div>

      {/* Footer */}
      <div className="text-center mt-2 text-[8px] text-muted-foreground">
        Página 1 de 1
      </div>
    </div>
  );
}
