export function LaminarFlowHoodCalibrationForm() {
  const airFlowRows = ['100%', '50%', '25%'];
  const lightRows = [{ pos: '' }];
  const soundRows = ['Exaustão Ligada', 'Exaustão Desligada'];
  const particleRows = [{ pos: '' }];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração Capela de Exaustão e/ou Fluxo Laminar
      </h1>

      {/* Main Info Grid */}
      <div className="grid grid-cols-2 gap-x-3 mb-2">
        {/* Left Column */}
        <div className="space-y-1">
          <div className="flex">
            <span className="font-semibold w-28">Fabricante:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Proprietário:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Instrumento:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Código:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Fabricante:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Modelo:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Tipo:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-1">
          <div className="flex">
            <span className="font-semibold w-32">Nº de Série:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">Nº de Patrimônio:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">Nº da OS:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">Periodicidade:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">Local de Utilização:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>
      </div>

      {/* Parâmetros da Calibração */}
      <div className="border border-black p-2 mb-2">
        <h3 className="font-bold text-center mb-2 text-[9px]">Parâmetros da Calibração</h3>
        <div className="grid grid-cols-2 gap-x-3">
          <div className="space-y-1">
            <div className="flex">
              <span className="font-semibold w-32">Nº Certificado:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Data de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Local da Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Técnico de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura:</span>
              <span>Mín.:</span>
              <span className="w-10 border-b border-black"></span>
              <span>°C</span>
              <span>Máx.:</span>
              <span className="w-10 border-b border-black"></span>
              <span>°C</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Umidade:</span>
              <span>Mín.:</span>
              <span className="w-10 border-b border-black"></span>
              <span>%UR</span>
              <span>Máx.:</span>
              <span className="w-10 border-b border-black"></span>
              <span>%UR</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-36">Técnico de Certificados:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Inspeção Visual */}
      <div className="border border-black p-2 mb-2">
        <h3 className="font-bold text-center mb-2 text-[9px]">Inspeção Visual</h3>
        <div className="grid grid-cols-2 gap-x-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold w-36">Funcionamento Geral:</span>
              <span className="flex gap-3 text-[8px]">
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Boa
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Regular
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Ruim
                </label>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold w-36">Aspectos Físicos:</span>
              <span className="flex gap-3 text-[8px]">
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Boa
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Regular
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Ruim
                </label>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold w-36">Exaustor:</span>
              <span className="flex gap-3 text-[8px]">
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Boa
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Regular
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Ruim
                </label>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold w-36">Janela Frontal Móvel:</span>
              <span className="flex gap-3 text-[8px]">
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Boa
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Regular
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Ruim
                </label>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold w-36">Sucção de Fumaça Externa:</span>
              <span className="flex gap-3 text-[8px]">
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Boa
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Regular
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Ruim
                </label>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold w-36">Sucção de Fumaça Interna:</span>
              <span className="flex gap-3 text-[8px]">
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Boa
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Regular
                </label>
                <label className="flex items-center gap-1">
                  <span className="w-3 h-3 border border-black inline-block"></span> Ruim
                </label>
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex">
              <span className="font-semibold w-36">Área de Abertura (l x h):</span>
              <span className="flex-1 border-b border-black"></span>
              <span className="ml-1">m³</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-36">Altura (h):</span>
              <span className="flex-1 border-b border-black"></span>
              <span className="ml-1">m</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-36">Largura (l):</span>
              <span className="flex-1 border-b border-black"></span>
              <span className="ml-1">m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Medições Grid */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Velocidade do Fluxo do Ar */}
        <div className="border border-black p-2">
          <h4 className="font-bold text-center mb-1 text-[9px]">Velocidade do Fluxo do Ar [m/s]</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th>Posição</th>
                <th>V Máx.</th>
                <th>V Mín.</th>
                <th>V Méd.</th>
              </tr>
            </thead>
            <tbody>
              {airFlowRows.map((pos) => (
                <tr key={pos}>
                  <td className="text-center">{pos}</td>
                  <td className="h-4"></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Luminância Fluorescente */}
        <div className="border border-black p-2">
          <h4 className="font-bold text-center mb-1 text-[9px]">Luminância Fluorescente [lux]</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Esquerda</th>
                <th>Centro</th>
                <th>Direita</th>
              </tr>
            </thead>
            <tbody>
              {lightRows.map((_, idx) => (
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
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Luminância Ultravioleta */}
        <div className="border border-black p-2">
          <h4 className="font-bold text-center mb-1 text-[9px]">Luminância Ultravioleta [lux]</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Esquerda</th>
                <th>Centro</th>
                <th>Direita</th>
              </tr>
            </thead>
            <tbody>
              {lightRows.map((_, idx) => (
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

        {/* Nível Sonoro */}
        <div className="border border-black p-2">
          <h4 className="font-bold text-center mb-1 text-[9px]">Nível Sonoro [dB]</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Máx.</th>
                <th>Mín.</th>
                <th>Méd.</th>
              </tr>
            </thead>
            <tbody>
              {soundRows.map((pos) => (
                <tr key={pos}>
                  <td className="text-center text-[7px]">{pos}</td>
                  <td className="h-4"></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contagem Eletrônica de Partículas */}
      <div className="border border-black p-2 mb-2">
        <h4 className="font-bold text-center mb-1 text-[9px]">Contagem Eletrônica de Partículas</h4>
        <table className="print-table text-[8px]">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Esquerda</th>
              <th>Centro</th>
              <th>Direita</th>
            </tr>
          </thead>
          <tbody>
            {particleRows.map((_, idx) => (
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

      {/* Modo da Calibração e Método */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="border border-black p-2">
          <h4 className="font-bold mb-1 text-[9px]">Modo da Calibração:</h4>
          <div className="flex items-center gap-2 text-[8px]">
            <span className="w-3 h-3 border border-black inline-block"></span>
            <span>Qualificação</span>
          </div>
        </div>
        <div className="border border-black p-2">
          <h4 className="font-bold mb-1 text-[9px]">Método de Calibração:</h4>
          <p className="text-[8px]">Calibração conforme procedimento técnico.</p>
        </div>
      </div>

      {/* Padrões Utilizados */}
      <div className="border border-black p-2 mb-2">
        <h4 className="font-bold mb-2 text-[9px]">Padrões Utilizados:</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[8px]">
              <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              <span>IP 77 - Luxímetro Digital</span>
            </div>
            <div className="flex items-center gap-2 text-[8px]">
              <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              <span>IP 138 - Decibelímetro Digital</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[8px]">
              <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              <span>IP 166 - Contador de Partículas</span>
            </div>
            <div className="flex items-center gap-2 text-[8px]">
              <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              <span>IP 164 - Anemômetro Digital</span>
            </div>
          </div>
        </div>
      </div>

      {/* Observações */}
      <div className="border border-black p-2 mb-2">
        <h4 className="font-bold mb-1 text-[9px]">Observações:</h4>
        <div className="border-b border-black h-3 mb-1"></div>
        <div className="border-b border-black h-3 mb-1"></div>
        <div className="border-b border-black h-3"></div>
      </div>

      {/* Footer */}
      <div className="text-center text-[8px] text-gray-600">
        Página 1 de 1
      </div>
    </div>
  );
}
