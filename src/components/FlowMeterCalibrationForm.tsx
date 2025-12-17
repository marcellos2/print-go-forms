export function FlowMeterCalibrationForm() {
  const measurementRows = Array(3).fill(null);

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
          <h4 className="font-bold mb-1 text-[9px]">Dados do Fluído</h4>
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
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2 flex">
          <span className="font-semibold w-16">Fator K:</span>
          <span className="flex-1 border-b border-black"></span>
        </div>
      </div>

      {/* Método de Calibração */}
      <div className="border border-black p-2 mb-2">
        <div className="mb-1">
          <span className="font-semibold">Método de Calibração: </span>
          <span>Calibração por comparação direta conforme procedimento técnico PTVA 01.</span>
        </div>
      </div>

      {/* Padrões Utilizados */}
      <div className="border border-black p-2 mb-2">
        <h4 className="font-semibold mb-1">Padrões Utilizados:</h4>
        <div className="grid grid-cols-2 gap-1 text-[8px]">
          <span>• IP 60 - Medidor de Vazão Ultrassônico</span>
          <span>• IP 151 - Medidor de Vazão Ultrassônico</span>
        </div>
      </div>

      {/* Observações */}
      <div className="border border-black p-2">
        <h4 className="font-semibold mb-1">Observações:</h4>
        <div className="min-h-[20px]"></div>
      </div>

      {/* Footer */}
      <div className="text-center mt-2 text-[8px] text-muted-foreground">
        FRCAL 002/REV.01 - Página 1 de 1
      </div>
    </div>
  );
}
