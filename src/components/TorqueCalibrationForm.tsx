import type { InstrumentData } from "@/types/instrument";

interface Props {
  data?: InstrumentData;
}

export function TorqueCalibrationForm({ data }: Props) {
  const F = ({ v }: { v?: string | null }) => (
    <span className="flex-1 border-b border-black min-w-0 px-0.5">{v || ""}</span>
  );
  const rows5 = Array(5).fill(null);
  const rows3 = Array(3).fill(null);

  return (
    <div className="print-form p-4 max-w-[210mm] mx-auto text-[9px] leading-tight">
      <h1 className="text-center font-bold text-xs mb-2 uppercase tracking-wide">
        Registro de Calibração de Torque
      </h1>

      <div className="space-y-0.5 mb-2">
        <div className="flex gap-1"><span className="font-semibold w-24 flex-shrink-0">Cliente:</span><F v={data?.cliente} /></div>
        <div className="flex gap-1"><span className="font-semibold w-24 flex-shrink-0">Proprietário:</span><F v={data?.proprietario} /></div>
        <div className="flex gap-1"><span className="font-semibold w-24 flex-shrink-0">Instrumento:</span><F v={data?.instrumento} /></div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex gap-1"><span className="font-semibold w-16 flex-shrink-0">Código:</span><F v={data?.codigo} /></div>
          <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Nº de Série:</span><span className="flex-1 border-b border-black"></span></div>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex gap-1"><span className="font-semibold w-16 flex-shrink-0">Fabricante:</span><F v={data?.fabricante} /></div>
          <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Nº de Patrimônio:</span><span className="flex-1 border-b border-black"></span></div>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex gap-1"><span className="font-semibold w-16 flex-shrink-0">Modelo:</span><F v={data?.modelo} /></div>
          <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Nº da OS:</span><span className="flex-1 border-b border-black"></span></div>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex gap-1"><span className="font-semibold w-16 flex-shrink-0">Tipo:</span><span className="flex-1 border-b border-black"></span></div>
          <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Erro Admissível:</span><F v={data?.erro_admissivel} /></div>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex gap-1"><span className="font-semibold w-16 flex-shrink-0">Escala:</span><F v={data?.faixa} /></div>
          <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Periodicidade:</span><F v={data?.periodicidade} /></div>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex gap-1"><span className="font-semibold w-16 flex-shrink-0">Resolução:</span><F v={data?.resolucao} /></div>
          <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Local:</span><F v={data?.local_utilizacao} /></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        {["Calibração Sem Ajuste ou Antes do Ajuste", "Calibração Após Ajuste"].map((title) => (
          <div key={title} className="border border-black p-1.5">
            <h3 className="font-bold text-center text-[8px] mb-1">{title}</h3>
            <div className="space-y-0.5 text-[8px]">
              <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Nº Certificado:</span><span className="flex-1 border-b border-black"></span></div>
              <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Data Calibração:</span><span className="flex-1 border-b border-black"></span></div>
              <div className="flex gap-2">
                <span className="font-semibold">Temp.:</span><span className="w-8 border-b border-black"></span><span>°C Umid.:</span><span className="w-8 border-b border-black"></span><span>%</span>
              </div>
              <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Local Calib.:</span><span className="flex-1 border-b border-black"></span></div>
              <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Técnico Calib.:</span><span className="flex-1 border-b border-black"></span></div>
              <div className="flex gap-1"><span className="font-semibold w-20 flex-shrink-0">Técnico Cert.:</span><span className="flex-1 border-b border-black"></span></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-2">
        <h4 className="font-bold text-[8px] mb-1">Medições</h4>
        
        <p className="text-[8px] font-semibold mb-0.5">Sentido Horário – Sem Ajuste</p>
        <table className="print-table text-[7px] w-full mb-1">
          <thead>
            <tr>
              <th>( ) Testado</th><th>( ) Padrão</th><th>Leitura 1</th><th>Leitura 2</th><th>Leitura 3</th><th>Leitura 4</th><th>Leitura 5</th>
            </tr>
          </thead>
          <tbody>
            {rows5.map((_, i) => <tr key={i}><td className="h-4"></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>)}
          </tbody>
        </table>

        <p className="text-[8px] font-semibold mb-0.5">Sentido Anti-Horário – Sem Ajuste</p>
        <table className="print-table text-[7px] w-full mb-1">
          <thead>
            <tr>
              <th>( ) Testado</th><th>( ) Padrão</th><th>Leitura 1</th><th>Leitura 2</th><th>Leitura 3</th>
            </tr>
          </thead>
          <tbody>
            {rows3.map((_, i) => <tr key={i}><td className="h-4"></td><td></td><td></td><td></td><td></td></tr>)}
          </tbody>
        </table>

        <p className="text-[8px] font-semibold mb-0.5">Após Ajuste</p>
        <table className="print-table text-[7px] w-full">
          <thead>
            <tr><th>Leitura 1</th><th>Leitura 2</th><th>Leitura 3</th></tr>
          </thead>
          <tbody>
            {rows3.map((_, i) => <tr key={i}><td className="h-4"></td><td></td><td></td></tr>)}
          </tbody>
        </table>
      </div>

      <div className="mb-1">
        <span className="font-semibold text-[8px]">Método de Calibração: </span>
        <span className="text-[8px]">Calibração por comparação direta conforme procedimento técnico.</span>
      </div>

      <div className="mb-1">
        <h4 className="font-bold text-[8px] mb-0.5">Padrões Utilizados:</h4>
        <div className="grid grid-cols-3 gap-x-2 text-[7px]">
          {["IP 32 - Jogo de Pesos - Padrão","IP 36 - Jogo de Pesos - Padrão","IP 66 - Jogo de Pesos - Padrão","IP 72 - Jogo de Pesos - Padrão","IP 79 - Jogo de Pesos - Padrão","IP 94 - Jogo de Pesos - Padrão"].map(p => (
            <label key={p} className="flex items-center gap-0.5">
              <span className="w-2.5 h-2.5 border border-black inline-block flex-shrink-0"></span>
              <span>{p}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border border-black p-1.5 mt-1">
        <div className="font-bold text-[8px] mb-1">Observações:</div>
        <div className="min-h-[50px]"></div>
      </div>

      <div className="text-center mt-2 text-[7px] text-muted-foreground">
        Página 1 de 1
      </div>
    </div>
  );
}
