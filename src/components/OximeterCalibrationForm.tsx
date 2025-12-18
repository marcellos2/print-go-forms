export function OximeterCalibrationForm() {
  const measurementRows = Array(6).fill(null);

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

      {/* Método e Padrões */}
      <div className="border border-black p-2 mb-2">
        <p className="text-[8px]"><strong>Método de Calibração:</strong> Calibração por comparação indireta conforme procedimento interno.</p>
        <p className="text-[8px] mt-1"><strong>Padrões Utilizados:</strong></p>
        <ul className="text-[8px] list-disc list-inside">
          <li>Solução de Oxigênio Zero</li>
          <li>PR 001 - Proveta Graduada</li>
        </ul>
      </div>

      {/* Observações */}
      <div className="border border-black p-2">
        <h4 className="font-semibold text-[8px]">Observações:</h4>
        <div className="min-h-[30px]"></div>
      </div>

      {/* Footer */}
      <div className="text-center mt-2 text-[8px] text-muted-foreground">
        FRCAL XXX/REV.00 — Página 1 de 1
      </div>
    </div>
  );
}
