export function MultimeterCalibrationForm() {
  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Multímetro
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
            <span className="flex-1 border-b border-black">Multímetro</span>
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
            <span className="font-semibold w-28">Escala: Calibrada</span>
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
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Sem Ajuste */}
        <div className="border border-black p-2">
          <h3 className="font-bold text-center mb-2 text-[9px]">Calibração Sem Ajuste ou Antes do Ajuste</h3>
          <div className="space-y-1 text-[9px]">
            <div className="flex">
              <span className="font-semibold w-32">Nº Certificado:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Data de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura:</span>
              <span className="w-8 border-b border-black"></span>
              <span>°C</span>
              <span className="font-semibold ml-2">Umidade:</span>
              <span className="w-8 border-b border-black"></span>
              <span>%</span>
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
        <div className="border border-black p-2">
          <h3 className="font-bold text-center mb-2 text-[9px]">Calibração Após Ajuste</h3>
          <div className="space-y-1 text-[9px]">
            <div className="flex">
              <span className="font-semibold w-32">Nº Certificado:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-32">Data de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura:</span>
              <span className="w-8 border-b border-black"></span>
              <span>°C</span>
              <span className="font-semibold ml-2">Umidade:</span>
              <span className="w-8 border-b border-black"></span>
              <span>%</span>
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
      <h4 className="font-bold text-center mb-1 text-[9px]">Medições</h4>
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Tensão e Corrente */}
        <div>
          <table className="print-table text-[7px] mb-1">
            <thead>
              <tr>
                <th colSpan={3}>Tensão (mVcc)</th>
                <th colSpan={3}>Corrente (Acc)</th>
              </tr>
              <tr>
                <th>Padrão</th>
                <th>V.V.C</th>
                <th>LIDO</th>
                <th>Padrão</th>
                <th>V.V.C</th>
                <th>LIDO</th>
              </tr>
            </thead>
            <tbody>
              {[0.0, 0.8, 2.0, 10.0, 50.0, 100.0, 150.0, 200.0].map((val, idx) => (
                <tr key={idx}>
                  <td className="h-3">{val}</td>
                  <td></td>
                  <td></td>
                  <td>{[0.0, 2.0, 5.0, 7.0, 9.0][idx] ?? ''}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="print-table text-[7px]">
            <thead>
              <tr>
                <th colSpan={3}>Tensão (Vac)</th>
                <th colSpan={3}>Tensão (Vcc)</th>
              </tr>
              <tr>
                <th>Padrão</th>
                <th>V.V.C</th>
                <th>LIDO</th>
                <th>Padrão</th>
                <th>V.V.C</th>
                <th>LIDO</th>
              </tr>
            </thead>
            <tbody>
              {[110, 220, 380].map((val, idx) => (
                <tr key={idx}>
                  <td className="h-3">{val}</td>
                  <td></td>
                  <td></td>
                  <td>{val}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Resistência */}
        <div>
          <table className="print-table text-[7px] mb-1">
            <thead>
              <tr>
                <th colSpan={3}>Resistência (200 Ohm)</th>
                <th colSpan={3}>Resistência (2 KOhm)</th>
              </tr>
              <tr>
                <th>Padrão</th>
                <th>V.V.C</th>
                <th>LIDO</th>
                <th>Padrão</th>
                <th>V.V.C</th>
                <th>LIDO</th>
              </tr>
            </thead>
            <tbody>
              {[20, 50, 180].map((val, idx) => (
                <tr key={idx}>
                  <td className="h-3">{val}</td>
                  <td></td>
                  <td></td>
                  <td>{[1, 10, 30][idx]}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="print-table text-[7px]">
            <thead>
              <tr>
                <th colSpan={3}>Resistência (2 MOhm)</th>
                <th colSpan={3}>Capacitância (nF)</th>
              </tr>
              <tr>
                <th>Padrão</th>
                <th>V.V.C</th>
                <th>LIDO</th>
                <th>Padrão</th>
                <th>V.V.C</th>
                <th>LIDO</th>
              </tr>
            </thead>
            <tbody>
              {[0.5, 1, 2, 5, 10].map((val, idx) => (
                <tr key={idx}>
                  <td className="h-3">{val}</td>
                  <td></td>
                  <td></td>
                  <td>{[20, 50, 100, '', ''][idx]}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Padrões Utilizados */}
      <div className="border border-black p-2 mb-2">
        <h4 className="font-semibold mb-1">Padrões Utilizados:</h4>
        <div className="grid grid-cols-3 gap-1 text-[8px]">
          <span>• IP 97 - Multicalibrador</span>
          <span>• IP 168 - Multímetro Padrão</span>
          <span>• IP 169 - Década de Resistência</span>
        </div>
      </div>

      {/* Observações */}
      <div className="border border-black p-2">
        <h4 className="font-semibold mb-1">Observações:</h4>
        <div className="min-h-[20px]"></div>
      </div>

      {/* Footer */}
      <div className="text-center mt-2 text-[8px] text-muted-foreground">
        FRCAL 006/REV.01 - Página 1 de 1
      </div>
    </div>
  );
}
