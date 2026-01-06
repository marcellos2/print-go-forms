import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Você é o MetroBot, assistente de metrologia da Tecnoiso.

REGRAS DE RESPOSTA:
1. Seja DIRETO e OBJETIVO. Respostas curtas e precisas.
2. Vá direto ao ponto, sem introduções longas.
3. Use bullets ou numeração para organizar informações.
4. Só detalhe quando o usuário pedir ou quando for cálculo complexo.
5. Máximo 3-4 parágrafos curtos por resposta, exceto para cálculos.

CONHECIMENTOS:
- Normas: ISO 17025, ISO 9001, ISO 10012, INMETRO
- Equipamentos: balanças, pHmetros, condutivímetros, espectrofotômetros, manômetros, oxímetros, multímetros, fluxômetros, capelas de fluxo laminar
- Cálculos: incerteza expandida (U = k × uc), incerteza combinada, desvio padrão, erro de indicação, CV%, repetibilidade
- Rastreabilidade metrológica, BPL, acreditação de laboratórios

FORMATO:
- Use **negrito** para termos importantes
- Use \`código\` para fórmulas
- Responda em português brasileiro
- Se não souber, diga claramente

EXEMPLO DE RESPOSTA BOA:
"A periodicidade típica de calibração de balanças é **12 meses**, podendo variar conforme:
- Frequência de uso
- Requisitos normativos do setor
- Histórico de estabilidade do equipamento"`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("MetroBot request received, messages count:", messages.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Muitas requisições. Aguarde alguns segundos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "Erro ao conectar com IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("MetroBot error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});