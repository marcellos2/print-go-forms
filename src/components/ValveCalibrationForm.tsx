import type { InstrumentData } from "@/types/instrument";
interface Props { data?: InstrumentData; }
export function ValveCalibrationForm({ data }: Props) {
  const analysisRows = Array(4).fill(null);

  const padroes = [
    "IP 24 - Manômetro Padrão",
    "IP 37 - Transdutor de Pressão",
    "IP 51 - Calibrador de Pressão",
    "IP 97 - Calibrador de Pressão",
    "IP 102 - Calibrador de Pressão",
  ];

  return (
    <div className="print-form p-2 max-w-[210mm] mx-auto text-[9px] leading-tight">
      {/* Header */}
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Válvula de Segurança e/ou Alívio
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
            <span className="font-semibold w-24">Pressão Nominal:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24">Unidade de Medida:</span>
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
            <span className="font-semibold w-28">Periodicidade:</span>
            <span className="flex-1 border-b border-black"></span>
          </div>
          <div className="flex">
            <span className="font-semibold w-28">Local de Utilização:</span>
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
              <span className="font-semibold w-32">Resolução adotada:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Local da Calibração:</span>
              <span>( ) Laboratório Tecnoiso</span>
              <span>( ) Cliente</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="font-semibold">Temperatura:</span>
              <span>Mín.:</span>
              <span className="w-8 border-b border-black"></span>
              <span>°C</span>
              <span>Máx.:</span>
              <span className="w-8 border-b border-black"></span>
              <span>°C</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Umidade:</span>
              <span>Mín.:</span>
              <span className="w-8 border-b border-black"></span>
              <span>%UR</span>
              <span>Máx.:</span>
              <span className="w-8 border-b border-black"></span>
              <span>%UR</span>
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

      {/* Fluido e Pressões */}
      <div className="border border-black p-2 mb-2">
        <div className="grid grid-cols-2 gap-x-3">
          <div className="space-y-1">
            <div className="flex">
              <span className="font-semibold w-32">Fluido Tipo:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
            <div className="flex">
              <span className="font-semibold w-48">Pressão de Abertura no Recebimento:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex">
              <span className="font-semibold w-48">Pressão de Abertura Após Ajuste:</span>
              <span className="flex-1 border-b border-black"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Inspeção Visual */}
      <div className="border border-black p-2 mb-2">
        <h4 className="font-bold mb-2 text-[9px]">Inspeção Visual</h4>
        <div className="grid grid-cols-2 gap-x-3">
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="font-semibold">Condições do Corpo:</span>
              <span>( ) Boa</span>
              <span>( ) Regular</span>
              <span>( ) Ruim</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Condições da Conexão:</span>
              <span>( ) Boa</span>
              <span>( ) Regular</span>
              <span>( ) Ruim</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="font-semibold">Condições da Mola:</span>
              <span>( ) Boa</span>
              <span>( ) Regular</span>
              <span>( ) Ruim</span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Vazamento na Sede:</span>
              <span>( ) Sim</span>
              <span>( ) Não</span>
            </div>
          </div>
        </div>
      </div>

      {/* Análises */}
      <div className="mb-2">
        <h4 className="font-bold text-center mb-1 text-[9px]">Análises</h4>
        <table className="print-table text-[8px]">
          <thead>
            <tr>
              <th>Nominal</th>
              <th>Leitura 1</th>
              <th>Leitura 2</th>
              <th>Leitura 3</th>
              <th>Leitura 4</th>
            </tr>
          </thead>
          <tbody>
            {analysisRows.map((_, idx) => (
              <tr key={idx}>
                <td className="h-5"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Método de Calibração */}
      <div className="mb-1">
        <div className="mb-1">
          <span className="font-semibold">Método de Calibração: </span>
          <span>Calibração conforme procedimento técnico PTPR.</span>
        </div>
        <div>
          <span className="font-semibold">Modo da Calibração: </span>
          <span>Calibração Rastreável.</span>
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
