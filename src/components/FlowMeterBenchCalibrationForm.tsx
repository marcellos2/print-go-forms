import type { InstrumentData } from "@/types/instrument";
interface Props { data?: InstrumentData; }
export function FlowMeterBenchCalibrationForm({ data }: Props) {
  const testRows = Array(6).fill(null);

  const padroes = [
    "IP 165 - Medidor de Vazão Vórtex (3,5 a 35 m³/h)",
    "IP 318 - Medidor de Vazão Eletromagnético (0,5 a 40 m³/h)",
    "IP 319 - Medidor de Vazão Mássico (100 a 6500 kg/h)",
    "IP 320 - Medidor de Vazão Mássico (1000 a 18000 kg/h)",
  ];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Vazão (Bancada)
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

      {/* Verificações */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="border border-black p-2">
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Verificação de Corrente:</span>
            <span>( ) Aplicável</span>
            <span>( ) Não Aplicável</span>
          </div>
          <h4 className="font-bold mb-1 text-[9px]">Valores Obtidos:</h4>
          <div className="flex gap-4">
            <div className="flex">
              <span className="font-semibold">4mA:</span>
              <span className="w-12 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold">12mA:</span>
              <span className="w-12 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold">20mA:</span>
              <span className="w-12 border-b border-black"></span>
            </div>
          </div>
          <p className="text-[7px] mt-1">*Realizar correção caso seja identificada diferença significante.</p>
        </div>
        <div className="border border-black p-2">
          <div className="flex gap-2 mb-1">
            <span className="font-semibold">Verificação do Core Processor:</span>
            <span>( ) Aplicável</span>
            <span>( ) Não Aplicável</span>
          </div>
          <h4 className="font-bold mb-1 text-[9px]">Valores Obtidos:</h4>
          <div className="flex gap-4">
            <div className="flex">
              <span className="font-semibold">Entre 3 e 4:</span>
              <span className="w-12 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold">2 e 3:</span>
              <span className="w-12 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold">2 e 4:</span>
              <span className="w-12 border-b border-black"></span>
            </div>
          </div>
          <p className="text-[7px] mt-1">*Core sem defeitos, deverá apresentar de 40 ~ 50 kOhm entre 3 e 4.</p>
        </div>
      </div>

      {/* Dados da Data e Ambiente + Dados Complementares */}
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
          <h4 className="font-bold mb-1 text-[9px]">Dados Complementares</h4>
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="font-semibold">Densidade do Fluido:</span>
              <span className="w-12 border-b border-black"></span>
              <span>g/cm³</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura do Fluido:</span>
              <span className="w-12 border-b border-black"></span>
              <span>°C</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-36">Alimentação do Medidor:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-36">Diâmetro Nominal:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Resultados em:</span>
              <span>( ) m³/h</span>
              <span>( ) kg/h</span>
              <span>( ) L/h</span>
              <span>( ) m³</span>
              <span>( ) L</span>
            </div>
            <div className="flex">
              <span className="font-semibold w-36">Fator Original/Anterior:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Testes */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="border border-black p-2">
          <h4 className="font-bold mb-1 text-[9px]">Medições Sem/Antes do Ajuste</h4>
          <table className="print-table text-[7px]">
            <thead>
              <tr>
                <th>Testado 1</th>
                <th>Padrão 1</th>
                <th>Testado 2</th>
                <th>Padrão 2</th>
                <th>Testado 3</th>
                <th>Padrão 3</th>
                <th>Desvio Médio (%)</th>
              </tr>
            </thead>
            <tbody>
              {testRows.map((_, idx) => (
                <tr key={idx}>
                  <td className="h-4"></td>
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
        </div>
        <div className="border border-black p-2">
          <h4 className="font-bold mb-1 text-[9px]">Medições Após Ajuste</h4>
          <div className="flex mb-1">
            <span className="font-semibold">Novo Fator:</span>
            <span className="flex-1 border-b border-black ml-2"></span>
          </div>
          <table className="print-table text-[7px]">
            <thead>
              <tr>
                <th>Testado 1</th>
                <th>Padrão 1</th>
                <th>Testado 2</th>
                <th>Padrão 2</th>
                <th>Testado 3</th>
                <th>Padrão 3</th>
                <th>Desvio Médio (%)</th>
              </tr>
            </thead>
            <tbody>
              {testRows.map((_, idx) => (
                <tr key={idx}>
                  <td className="h-4"></td>
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
        <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 text-[8px]">
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
