export function LaminarFlowHoodCalibrationForm() {
  return (
    <div className="p-4 max-w-[210mm] mx-auto text-[9px] leading-tight bg-white">
      <style>{`
        .form-table {
          width: 100%;
          border-collapse: collapse;
        }
        .form-table th,
        .form-table td {
          border: 1px solid black;
          padding: 4px 4px;
          text-align: center;
          vertical-align: middle;
          font-size: 8px;
        }
        .form-table th {
          font-weight: 600;
          background-color: #f5f5f5;
        }
        .text-left-cell {
          text-align: left !important;
          padding-left: 6px !important;
        }
        .checkbox {
          display: inline-block;
          width: 11px;
          height: 11px;
          border: 1px solid black;
          margin-right: 3px;
          vertical-align: middle;
        }
        .gray-area {
          background-color: #d3d3d3;
        }
        @media print {
          body { margin: 0; padding: 0; }
        }
      `}</style>

      {/* TÍTULO */}
      <div className="text-center font-bold text-[10px] mb-3 uppercase tracking-wide">
        REGISTRO DE CALIBRAÇÃO CAPELA DE EXAUSTÃO E/OU FLUXO LAMINAR
      </div>

      {/* SEÇÃO 1: INFORMAÇÕES PRINCIPAIS */}
      <div className="grid grid-cols-2 gap-6 mb-2 text-[8.5px]">
        {/* Coluna Esquerda */}
        <div>
          <div className="mb-0.5">
            <span className="font-semibold">Fabricante:</span>
            <span className="border-b border-black inline-block w-[calc(100%-75px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Proprietário:</span>
            <span className="border-b border-black inline-block w-[calc(100%-80px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Instrumento:</span>
            <span className="border-b border-black inline-block w-[calc(100%-80px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Código:</span>
            <span className="border-b border-black inline-block w-[calc(100%-55px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Fabricante:</span>
            <span className="border-b border-black inline-block w-[calc(100%-75px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Modelo:</span>
            <span className="border-b border-black inline-block w-[calc(100%-55px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Tipo:</span>
            <span className="border-b border-black inline-block w-[calc(100%-40px)] ml-1"></span>
          </div>
        </div>

        {/* Coluna Direita */}
        <div>
          <div className="mb-0.5">
            <span className="font-semibold">Nº de Série:</span>
            <span className="border-b border-black inline-block w-[calc(100%-80px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Nº de Patrimônio:</span>
            <span className="border-b border-black inline-block w-[calc(100%-115px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Nº da OS:</span>
            <span className="border-b border-black inline-block w-[calc(100%-65px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Periodicidade:</span>
            <span className="border-b border-black inline-block w-[calc(100%-95px)] ml-1"></span>
          </div>
          <div className="mb-0.5">
            <span className="font-semibold">Local de Utilização:</span>
            <span className="border-b border-black inline-block w-[calc(100%-125px)] ml-1"></span>
          </div>
        </div>
      </div>

      {/* SEÇÃO 2: PARÂMETROS DA CALIBRAÇÃO */}
      <div className="border border-black p-2 mb-2">
        <div className="text-center font-bold mb-1.5 text-[8.5px]">Parâmetros da Calibração</div>
        <div className="grid grid-cols-2 gap-6 text-[8.5px]">
          {/* Coluna Esquerda */}
          <div>
            <div className="mb-0.5">
              <span className="font-semibold">Nº Certificado:</span>
              <span className="border-b border-black inline-block w-[calc(100%-100px)] ml-1"></span>
            </div>
            <div className="mb-0.5">
              <span className="font-semibold">Data de Calibração:</span>
              <span className="border-b border-black inline-block w-[calc(100%-130px)] ml-1"></span>
            </div>
            <div className="mb-0.5">
              <span className="font-semibold">Local da Calibração:</span>
              <span className="border-b border-black inline-block w-[calc(100%-135px)] ml-1"></span>
            </div>
            <div className="mb-0.5">
              <span className="font-semibold">Técnico de Calibração:</span>
              <span className="border-b border-black inline-block w-[calc(100%-145px)] ml-1"></span>
            </div>
          </div>

          {/* Coluna Direita */}
          <div>
            <div className="mb-0.5 text-[8px]">
              <span className="font-semibold">Temperatura:</span>
              <span className="ml-1">Mín.:</span>
              <span className="border-b border-black inline-block w-10 mx-1"></span>
              <span>°C</span>
              <span className="ml-1">Máx.:</span>
              <span className="border-b border-black inline-block w-10 mx-1"></span>
              <span>°C</span>
            </div>
            <div className="mb-0.5 text-[8px]">
              <span className="font-semibold">Umidade:</span>
              <span className="ml-1">Mín.:</span>
              <span className="border-b border-black inline-block w-10 mx-1"></span>
              <span>%UR</span>
              <span className="ml-1">Máx.:</span>
              <span className="border-b border-black inline-block w-10 mx-1"></span>
              <span>%UR</span>
            </div>
            <div className="mb-0.5 mt-1">
              <span className="font-semibold">Técnico de Certificados:</span>
              <span className="border-b border-black inline-block w-[calc(100%-155px)] ml-1"></span>
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO 3: INSPEÇÃO VISUAL */}
      <div className="border border-black p-2 mb-2">
        <div className="grid grid-cols-2 gap-6 text-[8.5px]">
          {/* Coluna Esquerda */}
          <div>
            <div className="font-bold mb-1.5 text-[8.5px]">Inspeção Visual</div>
            <div className="mb-0.5 flex items-center">
              <span className="font-semibold inline-block w-48">Funcionamento Geral:</span>
              <span className="text-[7.5px] whitespace-nowrap">
                <span className="checkbox"></span>Boa
                <span className="checkbox ml-1.5"></span>Regular
                <span className="checkbox ml-1.5"></span>Ruim
              </span>
            </div>
            <div className="mb-0.5 flex items-center">
              <span className="font-semibold inline-block w-48">Aspectos Físicos:</span>
              <span className="text-[7.5px] whitespace-nowrap">
                <span className="checkbox"></span>Boa
                <span className="checkbox ml-1.5"></span>Regular
                <span className="checkbox ml-1.5"></span>Ruim
              </span>
            </div>
            <div className="mb-0.5 flex items-center">
              <span className="font-semibold inline-block w-48">Exaustor:</span>
              <span className="text-[7.5px] whitespace-nowrap">
                <span className="checkbox"></span>Boa
                <span className="checkbox ml-1.5"></span>Regular
                <span className="checkbox ml-1.5"></span>Ruim
              </span>
            </div>
            <div className="mb-0.5 flex items-center">
              <span className="font-semibold inline-block w-48">Janela Frontal Móvel:</span>
              <span className="text-[7.5px] whitespace-nowrap">
                <span className="checkbox"></span>Boa
                <span className="checkbox ml-1.5"></span>Regular
                <span className="checkbox ml-1.5"></span>Ruim
              </span>
            </div>
            <div className="mb-0.5 flex items-center">
              <span className="font-semibold inline-block w-48">Sucção de Fumaça Externa:</span>
              <span className="text-[7.5px] whitespace-nowrap">
                <span className="checkbox"></span>Boa
                <span className="checkbox ml-1.5"></span>Regular
                <span className="checkbox ml-1.5"></span>Ruim
              </span>
            </div>
            <div className="mb-0.5 flex items-center">
              <span className="font-semibold inline-block w-48">Sucção de Fumaça Interno:</span>
              <span className="text-[7.5px] whitespace-nowrap">
                <span className="checkbox"></span>Boa
                <span className="checkbox ml-1.5"></span>Regular
                <span className="checkbox ml-1.5"></span>Ruim
              </span>
            </div>
          </div>

          {/* Coluna Direita */}
          <div>
            <div className="font-bold mb-1.5 text-[8.5px]">Dados da Janela totalmente fechada</div>
            <div className="mb-0.5">
              <span className="font-semibold">Área de Abertura (l x h):</span>
              <span className="border-b border-black inline-block w-16 mx-1"></span>
              <span>m³</span>
            </div>
            <div className="mb-0.5">
              <span className="font-semibold">Altura (h):</span>
              <span className="border-b border-black inline-block w-28 mx-1"></span>
              <span>m</span>
            </div>
            <div className="mb-0.5">
              <span className="font-semibold">Largura (l):</span>
              <span className="border-b border-black inline-block w-28 mx-1"></span>
              <span>m</span>
            </div>
          </div>
        </div>
      </div>

      {/* TABELA PRINCIPAL UNIFICADA */}
      <div className="mb-2">
        <table className="form-table">
          <tbody>
            {/* Linha 1: Títulos */}
            <tr>
              <th colSpan="4" className="font-bold text-[8.5px]">Velocidade do Fluxo do Ar [m/s]</th>
              <th colSpan="4" className="font-bold text-[8.5px]">Luminância Fluorescente [lux]</th>
            </tr>
            
            {/* Linha 2: Headers */}
            <tr>
              <th className="w-16">Posição</th>
              <th className="w-16">V Máx.</th>
              <th className="w-16">V Mín.</th>
              <th className="w-16">V Méd.</th>
              <th className="w-24 italic">Esquerda</th>
              <th className="w-24"></th>
              <th className="w-24"></th>
              <th className="w-24"></th>
            </tr>
            
            {/* Linha 3: 100% */}
            <tr>
              <td>100%</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
              <td className="italic">Centro</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            {/* Linha 4: 50% */}
            <tr>
              <td>50%</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
              <td className="italic">Direita</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            {/* Linha 5: 25% + Título Luminância Ultravioleta */}
            <tr>
              <td>25%</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
              <th colSpan="4" className="font-bold text-[8.5px]">Luminância Ultravioleta [lux]</th>
            </tr>
            
            {/* Linha 6: Título Nível Sonoro */}
            <tr>
              <th colSpan="4" className="font-bold text-[8.5px]">Nível Sonoro [dB]</th>
              <td className="italic">Esquerda</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
            </tr>
            
            {/* Linha 7: Headers Nível Sonoro */}
            <tr>
              <th>Posição</th>
              <th>Máx.</th>
              <th>Mín.</th>
              <th>Méd.</th>
              <td className="italic">Centro</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
            </tr>
            
            {/* Linha 8: Exaustão Ligada */}
            <tr>
              <td className="text-left-cell italic text-[7.5px]">Exaustão Ligada</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
              <td className="italic">Direita</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
            </tr>
            
            {/* Linha 9: Exaustão Desligada */}
            <tr>
              <td className="text-left-cell italic text-[7.5px]">Exaustão Desligada</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
              <td colSpan="4" className="gray-area"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CONTAGEM ELETRÔNICA DE PARTÍCULAS */}
      <div className="mb-2">
        <table className="form-table">
          <tbody>
            {/* Linha 1: Título */}
            <tr>
              <th colSpan="4" className="font-bold text-[8.5px]">Contagem Eletrônica de Partículas</th>
              <th colSpan="4" className="gray-area"></th>
            </tr>
            
            {/* Linha 2: Esquerda */}
            <tr>
              <td className="text-left-cell italic w-20">Esquerda</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
              <td colSpan="4" className="gray-area"></td>
            </tr>
            
            {/* Linha 3: Centro */}
            <tr>
              <td className="text-left-cell italic">Centro</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
              <td colSpan="4" className="gray-area"></td>
            </tr>
            
            {/* Linha 4: Direita */}
            <tr>
              <td className="text-left-cell italic">Direita</td>
              <td className="h-7"></td>
              <td></td>
              <td></td>
              <td colSpan="4" className="gray-area"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MODO E MÉTODO DA CALIBRAÇÃO */}
      <div className="grid grid-cols-2 gap-2 mb-2 text-[8.5px]">
        <div className="border border-black p-2">
          <div className="font-bold mb-1">Modo da Calibração:</div>
          <div className="text-[7.5px]">
            <span className="checkbox"></span>
            <span>Qualificação</span>
          </div>
        </div>
        <div className="border border-black p-2">
          <div className="font-bold mb-1">Método de Calibração:</div>
          <div className="text-[7.5px]">Calibração conforme procedimento técnico.</div>
        </div>
      </div>

      {/* PADRÕES UTILIZADOS */}
      <div className="border border-black p-2 mb-2 text-[8.5px]">
        <div className="font-bold mb-1.5">Padrões Utilizados:</div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-0.5 text-[7.5px]">
              <span className="checkbox"></span>
              <span>IP 77 - Luxímetro Digital</span>
            </div>
            <div className="mb-0.5 text-[7.5px]">
              <span className="checkbox"></span>
              <span>IP 138 - Decibelímetro Digital</span>
            </div>
          </div>
          <div>
            <div className="mb-0.5 text-[7.5px]">
              <span className="checkbox"></span>
              <span>IP 166 - Contador de Partículas</span>
            </div>
            <div className="mb-0.5 text-[7.5px]">
              <span className="checkbox"></span>
              <span>IP 164 - Anemômetro Digital</span>
            </div>
          </div>
        </div>
      </div>

      {/* OBSERVAÇÕES */}
      <div className="border border-black p-2 mb-2">
        <div className="font-bold mb-1.5 text-[8.5px]">Observações:</div>
        <div className="border-b border-black mb-2" style={{height: '16px'}}></div>
        <div className="border-b border-black mb-2" style={{height: '16px'}}></div>
        <div className="border-b border-black" style={{height: '16px'}}></div>
      </div>
    </div>
  );
}