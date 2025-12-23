export function ManometerCalibrationForm() {
  const measurementRows = Array(11).fill(null);

  const padroes = [
    "IP 24 - Manômetro Padrão",
    "IP 37 - Transdutor de Pressão",
    "IP 97 - Multicalibrador",
    "IP 51 - Calibrador de Pressão",
    "IP 102 - Calibrador de Pressão",
  ];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Instrumentos de Pressão
      </h1>

      {/* Main Info Grid */}
      <div className="grid grid-cols-2 gap-x-3 mb-2">
        {/* Left Column */}
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
            <span className="font-semibold w-24">Faixa:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Valor de uma divisão:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>

        {/* Right Column */}
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
            <span className="font-semibold w-28">Local de Utilização:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>
      </div>

      {/* Parâmetros de Calibração */}
      <div className="border border-black p-2 mb-2">
        <h3 className="font-bold text-center mb-2 text-[9px]">Parâmetros de Calibração</h3>
        <div className="grid grid-cols-2 gap-x-3">
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura:</span>
              <span>Mín.:</span>
              <span className="w-8 border-b border-black"></span>
              <span>Máx.:</span>
              <span className="w-8 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Umidade:</span>
              <span>Mín.:</span>
              <span className="w-8 border-b border-black"></span>
              <span>Máx.:</span>
              <span className="w-8 border-b border-black"></span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex">
              <span className="font-semibold w-32">Nº Certificado:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Data de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Local de Calibração:</span>
              <span>( ) Lab. Tecnoiso</span>
              <span>( ) Inst. do Cliente</span>
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

      {/* Acessórios */}
      <div className="mb-2">
        <span className="font-semibold">Acessórios: </span>
        <span>( ) Glicerina ( ) Selo Mecânico ( ) Ponteiro de Arraste ( ) Contato Elétrico Outros: __________</span>
      </div>

      {/* Measurements Tables */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Medições Sem Ajuste */}
        <div>
          <h4 className="font-bold text-center mb-1 text-[9px]">Medições Sem Ajuste</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th rowSpan={2}>Referência (V.I.C)</th>
                <th colSpan={2}>Carrego</th>
                <th colSpan={2}>Pressão Indicada (V.S.P)</th>
              </tr>
              <tr>
                <th>Carrego</th>
                <th>Descarrego</th>
                <th>Carrego</th>
                <th>Descarrego</th>
              </tr>
            </thead>
            <tbody>
              {measurementRows.map((_, idx) => (
                <tr key={idx}>
                  <td className="h-4">{idx + 1}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Medições Após Ajuste */}
        <div>
          <h4 className="font-bold text-center mb-1 text-[9px]">Medições Após Ajuste</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th>Referência (V.I.C)</th>
                <th>Carrego</th>
                <th>Pressão Indicada (V.S.P)</th>
              </tr>
              <tr>
                <th></th>
                <th>Carrego</th>
                <th>Descarrego</th>
              </tr>
            </thead>
            <tbody>
              {measurementRows.map((_, idx) => (
                <tr key={idx}>
                  <td className="h-4">{idx + 1}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legenda */}
      <div className="text-[8px] mb-2">
        <p><strong>Legenda:</strong> V.I.C = Valor Indicado no Instrumento de Medição em Calibração em sua Unidade de Medida.</p>
        <p>V.S.P = Valor Indicado no Sistema de Medição Padrão na Unidade de Medida calibrada.</p>
      </div>

      {/* Método e Modo de Calibração */}
      <div className="mb-1">
        <div className="mb-1">
          <span className="font-semibold">Método de Calibração: </span>
          <span>Calibração conforme procedimento técnico PTPR 01.</span>
        </div>
        <div>
          <span className="font-semibold">Modo da Calibração: </span>
          <span>( ) Acreditada ( ) Rastreável</span>
        </div>
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
       <div className="border border-black p-2 mb-2">
        <div className="font-bold mb-1.5 text-[8.5px]">Observações:</div>
        <div className="min-h-[60px]">
          {/* Espaço para observações */}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-2 text-[8px] text-muted-foreground">
        Página 1 de 1
      </div>
    </div>
  );
}
