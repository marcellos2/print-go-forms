export function BalanceCalibrationForm() {
  const measurementRows = [
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
    { padrao: '', vm1: '', vm2: '', vm3: '', ema: '' },
  ];

  const positionRows = [1, 2, 3, 4, 5, 6];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Balança
      </h1>

      {/* Main Info Grid */}
      <div className="grid grid-cols-2 gap-x-3 mb-2">
        {/* Left Column */}
        <div className="space-y-1">
          <div className="flex">
            <span className="font-semibold w-28">Cliente:</span>
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
          <div className="flex gap-2">
            <span className="font-semibold">Escala:</span>
            <span className="flex-1 border-b border-black"></span>
            <span className="font-semibold">e:</span>
            <span className="w-12 border-b border-black"></span>
            <span className="font-semibold">d:</span>
            <span className="w-12 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Unidade de Medida:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Local:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-1">
          <div className="flex">
            <span className="font-semibold w-36">Classe:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-36">Portaria de Aprovação Modelo:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-36">Nº de Série:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-36">Nº do INMETRO:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-36">Nº de Patrimônio:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-36">Nº da OS:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-36">Periodicidade:</span>
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
              <span className="font-semibold w-28">Nº Certificado:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-28">Data de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura:</span>
              <span className="w-10 border-b border-black"></span>
              <span>°C</span>
              <span className="font-semibold ml-2">Umidade:</span>
              <span className="w-10 border-b border-black"></span>
              <span>%</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-28">Local de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-28">Técnico de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-28">Técnico de Certificados:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
        </div>

        {/* Após Ajuste */}
        <div className="border border-black p-2">
          <h3 className="font-bold text-center mb-2 text-[9px]">Calibração Após Ajuste</h3>
          <div className="space-y-1 text-[9px]">
            <div className="flex">
              <span className="font-semibold w-28">Nº Certificado:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-28">Data de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura:</span>
              <span className="w-10 border-b border-black"></span>
              <span>°C</span>
              <span className="font-semibold ml-2">Umidade:</span>
              <span className="w-10 border-b border-black"></span>
              <span>%</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-28">Local de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-28">Técnico de Calibração:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-28">Técnico de Certificados:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Measurements Tables */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <h4 className="font-bold text-center mb-1 text-[9px]">Medições</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th className="w-16">Padrão</th>
                <th className="w-12">VM 1</th>
                <th className="w-12">VM 2</th>
                <th className="w-12">VM 3</th>
                <th className="w-12">EMA</th>
              </tr>
            </thead>
            <tbody>
              {measurementRows.map((_, idx) => (
                <tr key={idx}>
                  <td className="h-4"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="font-bold text-center mb-1 text-[9px]">Medições</h4>
          <table className="print-table text-[8px]">
            <thead>
              <tr>
                <th className="w-16">Padrão</th>
                <th className="w-12">VM 1</th>
                <th className="w-12">VM 2</th>
                <th className="w-12">VM 3</th>
                <th className="w-12">EMA</th>
              </tr>
            </thead>
            <tbody>
              {measurementRows.map((_, idx) => (
                <tr key={idx}>
                  <td className="h-4"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Eccentricity Section */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* Left Eccentricity */}
        <div className="border border-black p-2">
          <h4 className="font-bold mb-2 text-[9px]">Excentricidade:</h4>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1">
              {/* Circle diagram - faithful to original */}
              <div className="flex items-center gap-1">
                <svg width="56" height="56" viewBox="-8 -8 64 64" className="flex-shrink-0" style={{ overflow: 'visible' }}>
                  {/* Outer circle */}
                  <circle cx="24" cy="24" r="18" fill="none" stroke="black" strokeWidth="1"/>
                  {/* Cross lines */}
                  <line x1="24" y1="6" x2="24" y2="42" stroke="black" strokeWidth="0.5"/>
                  <line x1="6" y1="24" x2="42" y2="24" stroke="black" strokeWidth="0.5"/>
                  {/* Corner dots with circles */}
                  <circle cx="24" cy="6" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="42" cy="24" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="24" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="6" cy="24" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  {/* Numbers */}
                  <text x="24" y="-2" textAnchor="middle" fontSize="8" fill="black">1</text>
                  <text x="54" y="27" textAnchor="middle" fontSize="8" fill="black">2</text>
                  <text x="24" y="56" textAnchor="middle" fontSize="8" fill="black">3</text>
                  <text x="-6" y="27" textAnchor="middle" fontSize="8" fill="black">4</text>
                </svg>
                <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              </div>

              {/* Square diagram - faithful to original */}
              <div className="flex items-center gap-1">
                <svg width="56" height="56" viewBox="-8 -8 64 64" className="flex-shrink-0" style={{ overflow: 'visible' }}>
                  {/* Outer square */}
                  <rect x="6" y="6" width="36" height="36" fill="none" stroke="black" strokeWidth="1"/>
                  {/* Diagonal lines */}
                  <line x1="6" y1="6" x2="42" y2="42" stroke="black" strokeWidth="0.5"/>
                  <line x1="42" y1="6" x2="6" y2="42" stroke="black" strokeWidth="0.5"/>
                  {/* Center square */}
                  <rect x="20" y="20" width="8" height="8" fill="none" stroke="black" strokeWidth="0.5"/>
                  {/* Corner circles */}
                  <circle cx="6" cy="6" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="42" cy="6" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="42" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="6" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  {/* Numbers */}
                  <text x="-2" y="2" textAnchor="middle" fontSize="8" fill="black">1</text>
                  <text x="50" y="2" textAnchor="middle" fontSize="8" fill="black">2</text>
                  <text x="50" y="52" textAnchor="middle" fontSize="8" fill="black">3</text>
                  <text x="-2" y="52" textAnchor="middle" fontSize="8" fill="black">4</text>
                </svg>
                <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              </div>

              {/* Triangle diagram - faithful to original */}
              <div className="flex items-center gap-1">
                <svg width="56" height="52" viewBox="-8 -4 64 56" className="flex-shrink-0" style={{ overflow: 'visible' }}>
                  {/* Triangle outline */}
                  <polygon points="24,4 6,42 42,42" fill="none" stroke="black" strokeWidth="1"/>
                  {/* Inner lines from corners to opposite midpoints */}
                  <line x1="24" y1="4" x2="24" y2="42" stroke="black" strokeWidth="0.5"/>
                  <line x1="6" y1="42" x2="33" y2="23" stroke="black" strokeWidth="0.5"/>
                  <line x1="42" y1="42" x2="15" y2="23" stroke="black" strokeWidth="0.5"/>
                  {/* Center small circle */}
                  <circle cx="24" cy="29" r="4" fill="none" stroke="black" strokeWidth="0.5"/>
                  {/* Corner circles */}
                  <circle cx="6" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="42" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  {/* Numbers at bottom */}
                  <text x="-2" y="48" textAnchor="middle" fontSize="8" fill="black">5</text>
                  <text x="50" y="48" textAnchor="middle" fontSize="8" fill="black">6</text>
                </svg>
                <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-[9px]">Peso:</span>
                <span className="flex-1 border-b border-black"></span>
              </div>
              <table className="print-table text-[8px]">
                <thead>
                  <tr>
                    <th>Posição</th>
                    <th>Leitura</th>
                  </tr>
                </thead>
                <tbody>
                  {positionRows.map((pos) => (
                    <tr key={pos}>
                      <td className="text-center">{pos}</td>
                      <td className="h-4"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Eccentricity */}
        <div className="border border-black p-2">
          <h4 className="font-bold mb-2 text-[9px]">Excentricidade:</h4>
          <div className="flex gap-3">
            <div className="flex flex-col items-center gap-1">
              {/* Circle diagram */}
              <div className="flex items-center gap-1">
                <svg width="56" height="56" viewBox="-8 -8 64 64" className="flex-shrink-0" style={{ overflow: 'visible' }}>
                  <circle cx="24" cy="24" r="18" fill="none" stroke="black" strokeWidth="1"/>
                  <line x1="24" y1="6" x2="24" y2="42" stroke="black" strokeWidth="0.5"/>
                  <line x1="6" y1="24" x2="42" y2="24" stroke="black" strokeWidth="0.5"/>
                  <circle cx="24" cy="6" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="42" cy="24" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="24" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="6" cy="24" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <text x="24" y="-2" textAnchor="middle" fontSize="8" fill="black">1</text>
                  <text x="54" y="27" textAnchor="middle" fontSize="8" fill="black">2</text>
                  <text x="24" y="56" textAnchor="middle" fontSize="8" fill="black">3</text>
                  <text x="-6" y="27" textAnchor="middle" fontSize="8" fill="black">4</text>
                </svg>
                <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              </div>

              {/* Square diagram */}
              <div className="flex items-center gap-1">
                <svg width="56" height="56" viewBox="-8 -8 64 64" className="flex-shrink-0" style={{ overflow: 'visible' }}>
                  <rect x="6" y="6" width="36" height="36" fill="none" stroke="black" strokeWidth="1"/>
                  <line x1="6" y1="6" x2="42" y2="42" stroke="black" strokeWidth="0.5"/>
                  <line x1="42" y1="6" x2="6" y2="42" stroke="black" strokeWidth="0.5"/>
                  <rect x="20" y="20" width="8" height="8" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="6" cy="6" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="42" cy="6" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="42" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="6" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <text x="-2" y="2" textAnchor="middle" fontSize="8" fill="black">1</text>
                  <text x="50" y="2" textAnchor="middle" fontSize="8" fill="black">2</text>
                  <text x="50" y="52" textAnchor="middle" fontSize="8" fill="black">3</text>
                  <text x="-2" y="52" textAnchor="middle" fontSize="8" fill="black">4</text>
                </svg>
                <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              </div>

              {/* Triangle diagram */}
              <div className="flex items-center gap-1">
                <svg width="56" height="52" viewBox="-8 -4 64 56" className="flex-shrink-0" style={{ overflow: 'visible' }}>
                  <polygon points="24,4 6,42 42,42" fill="none" stroke="black" strokeWidth="1"/>
                  <line x1="24" y1="4" x2="24" y2="42" stroke="black" strokeWidth="0.5"/>
                  <line x1="6" y1="42" x2="33" y2="23" stroke="black" strokeWidth="0.5"/>
                  <line x1="42" y1="42" x2="15" y2="23" stroke="black" strokeWidth="0.5"/>
                  <circle cx="24" cy="29" r="4" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="6" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <circle cx="42" cy="42" r="3" fill="none" stroke="black" strokeWidth="0.5"/>
                  <text x="-2" y="48" textAnchor="middle" fontSize="8" fill="black">5</text>
                  <text x="50" y="48" textAnchor="middle" fontSize="8" fill="black">6</text>
                </svg>
                <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-[9px]">Peso:</span>
                <span className="flex-1 border-b border-black"></span>
              </div>
              <table className="print-table text-[8px]">
                <thead>
                  <tr>
                    <th>Posição</th>
                    <th>Leitura</th>
                  </tr>
                </thead>
                <tbody>
                  {positionRows.map((pos) => (
                    <tr key={pos}>
                      <td className="text-center">{pos}</td>
                      <td className="h-4"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Calibration Method */}
      <div className="mb-1">
        <h4 className="font-bold text-[8px]">Método de Calibração:</h4>
        <p className="text-[8px]">Calibração por comparação direta conforme procedimento técnico PTMA.</p>
      </div>

      {/* Standards Used */}
      <div className="mb-1">
        <h4 className="font-bold text-[8px] mb-0.5">Padrões Utilizados:</h4>
        <div className="grid grid-cols-4 gap-x-2 gap-y-0.5 text-[8px]">
          {['32', '34', '36', '66', '72', '73', '79', '94'].map((num) => (
            <label key={num} className="flex items-center gap-0.5">
              <span className="w-2.5 h-2.5 border border-black inline-block"></span>
              <span>{num} Jogo pesos padrão</span>
            </label>
          ))}
        </div>
      </div>

      {/* Observations */}
      <div>
        <h4 className="font-bold text-[8px]">Observações:</h4>
        <div className="border-b border-black h-3 mb-0.5"></div>
        <div className="border-b border-black h-3 mb-0.5"></div>
        <div className="border-b border-black h-3"></div>
      </div>
    </div>
  );
}
