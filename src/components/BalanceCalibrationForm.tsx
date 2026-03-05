import type { InstrumentData } from "@/types/instrument";

interface Props { data?: InstrumentData; }

export function BalanceCalibrationForm({ data }: Props) {
  const F = ({ v }: { v?: string | null }) => (
    <span className="flex-1 border-b border-black min-w-0 px-0.5">{v || ""}</span>
  );
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

  const positionRows = ['A', 'B', 'C', 'D', 'CENTRO 1', 'CENTRO 2'];

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
            <F v={data?.cliente} />
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Proprietário:</span>
            <F v={data?.proprietario} />
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Instrumento:</span>
            <F v={data?.instrumento} />
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Código:</span>
            <F v={data?.codigo} />
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Fabricante:</span>
            <F v={data?.fabricante} />
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Modelo:</span>
            <F v={data?.modelo} />
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Escala:</span>
            <F v={data?.faixa} />
            <span className="font-semibold">e:</span>
            <span className="w-12 border-b border-black"></span>
            <span className="font-semibold">d:</span>
            <span className="w-12 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Unidade de Medida:</span>
            <F v={data?.unidade} />
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Local:</span>
            <F v={data?.local_utilizacao} />
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
            <F v={data?.periodicidade} />
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
              {/* Rectangle diagram with A, B, C, D */}
              <div className="flex items-center gap-1">
                <svg width="70" height="50" viewBox="0 0 70 50" className="flex-shrink-0">
                  {/* Outer rectangle */}
                  <rect x="5" y="5" width="60" height="40" rx="6" ry="6" fill="none" stroke="#333" strokeWidth="1"/>
                  {/* Diagonal lines */}
                  <line x1="10" y1="10" x2="60" y2="40" stroke="#333" strokeWidth="0.5"/>
                  <line x1="60" y1="10" x2="10" y2="40" stroke="#333" strokeWidth="0.5"/>
                  {/* Center text */}
                  <text x="35" y="28" textAnchor="middle" fontSize="8" fill="#666">Centro</text>
                  {/* Corner circles with letters */}
                  <circle cx="10" cy="10" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="10" y="13" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">B</text>
                  <circle cx="60" cy="10" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="60" y="13" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">D</text>
                  <circle cx="10" cy="40" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="10" y="43" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">A</text>
                  <circle cx="60" cy="40" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="60" y="43" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">C</text>
                </svg>
                <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              </div>

              {/* Ellipse diagram with A, B, C, D */}
              <div className="flex items-center gap-1">
                <svg width="70" height="50" viewBox="0 0 70 50" className="flex-shrink-0">
                  {/* Outer ellipse */}
                  <ellipse cx="35" cy="25" rx="30" ry="20" fill="none" stroke="#333" strokeWidth="1"/>
                  {/* Diagonal lines */}
                  <line x1="10" y1="10" x2="60" y2="40" stroke="#333" strokeWidth="0.5"/>
                  <line x1="60" y1="10" x2="10" y2="40" stroke="#333" strokeWidth="0.5"/>
                  {/* Center text */}
                  <text x="35" y="28" textAnchor="middle" fontSize="8" fill="#666">Centro</text>
                  {/* Corner circles with letters */}
                  <circle cx="10" cy="10" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="10" y="13" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">B</text>
                  <circle cx="60" cy="10" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="60" y="13" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">D</text>
                  <circle cx="10" cy="40" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="10" y="43" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">A</text>
                  <circle cx="60" cy="40" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="60" y="43" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">C</text>
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
              {/* Rectangle diagram with A, B, C, D */}
              <div className="flex items-center gap-1">
                <svg width="70" height="50" viewBox="0 0 70 50" className="flex-shrink-0">
                  {/* Outer rectangle */}
                  <rect x="5" y="5" width="60" height="40" rx="6" ry="6" fill="none" stroke="#333" strokeWidth="1"/>
                  {/* Diagonal lines */}
                  <line x1="10" y1="10" x2="60" y2="40" stroke="#333" strokeWidth="0.5"/>
                  <line x1="60" y1="10" x2="10" y2="40" stroke="#333" strokeWidth="0.5"/>
                  {/* Center text */}
                  <text x="35" y="28" textAnchor="middle" fontSize="8" fill="#666">Centro</text>
                  {/* Corner circles with letters */}
                  <circle cx="10" cy="10" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="10" y="13" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">B</text>
                  <circle cx="60" cy="10" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="60" y="13" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">D</text>
                  <circle cx="10" cy="40" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="10" y="43" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">A</text>
                  <circle cx="60" cy="40" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="60" y="43" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">C</text>
                </svg>
                <span className="w-3 h-3 border border-black inline-block flex-shrink-0"></span>
              </div>

              {/* Ellipse diagram with A, B, C, D */}
              <div className="flex items-center gap-1">
                <svg width="70" height="50" viewBox="0 0 70 50" className="flex-shrink-0">
                  {/* Outer ellipse */}
                  <ellipse cx="35" cy="25" rx="30" ry="20" fill="none" stroke="#333" strokeWidth="1"/>
                  {/* Diagonal lines */}
                  <line x1="10" y1="10" x2="60" y2="40" stroke="#333" strokeWidth="0.5"/>
                  <line x1="60" y1="10" x2="10" y2="40" stroke="#333" strokeWidth="0.5"/>
                  {/* Center text */}
                  <text x="35" y="28" textAnchor="middle" fontSize="8" fill="#666">Centro</text>
                  {/* Corner circles with letters */}
                  <circle cx="10" cy="10" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="10" y="13" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">B</text>
                  <circle cx="60" cy="10" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="60" y="13" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">D</text>
                  <circle cx="10" cy="40" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="10" y="43" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">A</text>
                  <circle cx="60" cy="40" r="7" fill="#4DB6AC" stroke="#4DB6AC" strokeWidth="1"/>
                  <text x="60" y="43" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">C</text>
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
          {['32', '261', '94', '288', '79', '152', '73', '94'].map((num) => (
            <label key={num} className="flex items-center gap-0.5">
              <span className="w-2.5 h-2.5 border border-black inline-block"></span>
              <span>{num} Jogo pesos padrão</span>
            </label>
          ))}
        </div>
      </div>

      {/* Observations */}
     <div className="border border-black p-2 mb-2">
        <div className="font-bold mb-1.5 text-[8.5px]">Observações:</div>
        <div className="min-h-[60px]">
          {/* Espaço para observações */}
        </div>
      </div>
    </div>
  );
}
