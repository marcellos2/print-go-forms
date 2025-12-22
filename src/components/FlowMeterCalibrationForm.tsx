export function FlowMeterCalibrationForm() {
  const measurementRows = Array(8).fill(null);

  const padroes = [
    "IP 60 - Medidor de Vazão Ultrassônico",
    "IP 151 - Medidor de Vazão Ultrassônico",
    "IP 165 - Medidor de Vazão Vórtex",
    "IP 318 - Medidor de Vazão Eletromagnético",
  ];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Vazão
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
            <span className="font-semibold w-24">Capacidade:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Resolução:</span>
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
            <span className="font-semibold w-28">Local:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
        </div>
      </div>

      {/* Dados de Montagem e Tubulação */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="border border-black p-2">
          <h4 className="font-bold mb-1 text-[9px]">Dados de Montagem</h4>
          <div className="space-y-1">
            <div className="flex">
              <span className="font-semibold w-36">Espaçamento do Transdutor:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-36">Montagem tipo:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
        </div>
        <div className="border border-black p-2">
          <h4 className="font-bold mb-1 text-[9px]">Dados da Tubulação</h4>
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="font-semibold">Material de Construção:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Material de Revestimento:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Espessura:</span>
              <span className="w-12 border-b border-black"></span>
              <span className="font-semibold">ID:</span>
              <span className="w-12 border-b border-black"></span>
              <span className="font-semibold">OD:</span>
              <span className="w-12 border-b border-black"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Dados da Data e Ambiente + Dados do Fluído */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="border border-black p-2">
          <h4 className="font-bold mb-1 text-[9px]">Dados da Data e Ambiente</h4>
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
              <span className="font-semibold">Temperatura:</span>
              <span className="w-12 border-b border-black"></span>
              <span>°C</span>
              <span className="font-semibold ml-2">Umidade:</span>
              <span className="w-12 border-b border-black"></span>
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
        <div className="border border-black p-2">
          <h4 className="font-bold mb-1 text-[9px]">Dados do Fluido</h4>
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="font-semibold">Densidade Início:</span>
              <span className="w-12 border-b border-black"></span>
              <span>g/cm³</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Densidade Meio:</span>
              <span className="w-12 border-b border-black"></span>
              <span>g/cm³</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Densidade Final:</span>
              <span className="w-12 border-b border-black"></span>
              <span>g/cm³</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura Início:</span>
              <span className="w-12 border-b border-black"></span>
              <span>°C</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura Meio:</span>
              <span className="w-12 border-b border-black"></span>
              <span>°C</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura Final:</span>
              <span className="w-12 border-b border-black"></span>
              <span>°C</span>
            </div>
          </div>
        </div>
      </div>

      {/* Medições */}
      <div className="border border-black p-2 mb-2">
        <h4 className="font-bold mb-1 text-[9px]">Medições</h4>
        <div className="flex gap-2 mb-2">
          <span className="font-semibold">Resultados em:</span>
          <span>( ) m³/h</span>
          <span>( ) kg/h</span>
          <span>( ) L/h</span>
          <span>( ) m³</span>
          <span>( ) L</span>
        </div>
        <table className="print-table text-[8px]">
          <thead>
            <tr>
              <th>Pontos de Medição</th>
              <th>Vazão</th>
              <th>Testado 1</th>
              <th>Padrão 1</th>
              <th>Testado 2</th>
              <th>Padrão 2</th>
              <th>Testado 3</th>
              <th>Padrão 3</th>
            </tr>
          </thead>
          <tbody>
            {measurementRows.map((_, idx) => (
              <tr key={idx}>
                <td className="h-5">{idx + 1}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-2 flex">
          <span className="font-semibold w-16">Fator K:</span>
          <span className="flex-1 border-b border-black"></span>
        </div>
      </div>

      {/* Método de Calibração */}
      <div className="mb-1">
        <h4 className="font-bold text-[8px]">Método de Calibração:</h4>
        <p className="text-[8px]">Calibração por comparação direta conforme procedimento técnico PTVA 01.</p>
      </div>

      {/* Padrões Utilizados */}
      <div className="mb-1">
        <h4 className="font-bold text-[8px] mb-0.5">Padrões Utilizados:</h4>
        <div className="grid grid-cols-4 gap-x-2 gap-y-0.5 text-[8px]">
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
        <div className="border-b border-black h-3"></div>
      </div>

      {/* Footer */}
      <div className="text-center mt-2 text-[8px] text-muted-foreground">
        Página 1 de 1
      </div>
    </div>
  );
}
