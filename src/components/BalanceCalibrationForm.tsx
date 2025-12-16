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
    <div className="print-form p-4 max-w-[210mm] mx-auto text-[10px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-sm mb-4 uppercase tracking-wide">
        Registro de Calibração de Balança
      </h1>

      {/* Main Info Grid */}
      <div className="grid grid-cols-2 gap-x-4 mb-4">
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
      <div className="grid grid-cols-2 gap-4 mb-4">
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
      <div className="grid grid-cols-2 gap-4 mb-4">
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
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Left Eccentricity */}
        <div className="border border-black p-2">
          <h4 className="font-bold mb-2 text-[9px]">Excentricidade:</h4>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              {/* Circle diagram */}
              <div className="w-12 h-12 border border-black rounded-full relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px]">1</span>
                <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-[7px]">2</span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[7px]">3</span>
                <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-[7px]">4</span>
              </div>
              {/* Square diagram */}
              <div className="w-12 h-12 border border-black relative">
                <span className="absolute -top-2 -left-1 text-[7px]">1</span>
                <span className="absolute -top-2 -right-1 text-[7px]">2</span>
                <span className="absolute -bottom-2 -right-1 text-[7px]">3</span>
                <span className="absolute -bottom-2 -left-1 text-[7px]">4</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-black"></div>
              </div>
              {/* Triangle diagram */}
              <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[40px] border-l-transparent border-r-transparent border-b-black relative">
                <span className="absolute top-8 -left-8 text-[7px]">5</span>
                <span className="absolute top-8 left-4 text-[7px]">6</span>
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
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-2">
              {/* Circle diagram */}
              <div className="w-12 h-12 border border-black rounded-full relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px]">1</span>
                <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-[7px]">2</span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[7px]">3</span>
                <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-[7px]">4</span>
              </div>
              {/* Square diagram */}
              <div className="w-12 h-12 border border-black relative">
                <span className="absolute -top-2 -left-1 text-[7px]">1</span>
                <span className="absolute -top-2 -right-1 text-[7px]">2</span>
                <span className="absolute -bottom-2 -right-1 text-[7px]">3</span>
                <span className="absolute -bottom-2 -left-1 text-[7px]">4</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-black"></div>
              </div>
              {/* Triangle diagram */}
              <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[40px] border-l-transparent border-r-transparent border-b-black relative">
                <span className="absolute top-8 -left-8 text-[7px]">5</span>
                <span className="absolute top-8 left-4 text-[7px]">6</span>
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
      <div className="mb-3">
        <h4 className="font-bold text-[9px]">Método de Calibração:</h4>
        <p className="text-[9px]">Calibração por comparação direta conforme procedimento técnico PTMA.</p>
      </div>

      {/* Standards Used */}
      <div className="mb-3">
        <h4 className="font-bold text-[9px] mb-1">Padrões Utilizados:</h4>
        <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-[9px]">
          {['32', '34', '36', '66', '72', '73', '79', '94'].map((num) => (
            <label key={num} className="flex items-center gap-1">
              <span className="w-3 h-3 border border-black inline-block"></span>
              <span>{num} Jogo pesos padrão</span>
            </label>
          ))}
        </div>
      </div>

      {/* Observations */}
      <div>
        <h4 className="font-bold text-[9px]">Observações:</h4>
        <div className="border-b border-black h-4 mb-1"></div>
        <div className="border-b border-black h-4 mb-1"></div>
        <div className="border-b border-black h-4"></div>
      </div>
    </div>
  );
}
