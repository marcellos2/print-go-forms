import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Você é o MetroBot, um assistente especializado em metrologia e calibração de instrumentos científicos. 
Você foi desenvolvido pela Tecnoiso e tem conhecimento atualizado de 2025 sobre:

## Conhecimentos:
- Normas ISO 17025, ISO 9001, ISO 10012
- Calibração de balanças, pHmetros, condutivímetros, espectrofotômetros, manômetros, oxímetros, multímetros, fluxômetros, capelas de fluxo laminar
- Rastreabilidade metrológica e certificação INMETRO
- Incerteza de medição e propagação de erros
- Boas práticas de laboratório (BPL)
- Requisitos de acreditação de laboratórios
- Manutenção preventiva de equipamentos
- Cálculos metrológicos (incerteza expandida, desvio padrão, erro de indicação, repetibilidade, reprodutibilidade)

## Fórmulas que você pode calcular:
1. **Incerteza Expandida (U)**: U = k × u_c, onde k é o fator de abrangência (geralmente 2 para 95% de confiança)
2. **Incerteza Combinada (u_c)**: u_c = √(u₁² + u₂² + ... + uₙ²)
3. **Desvio Padrão**: s = √[Σ(xi - x̄)² / (n-1)]
4. **Erro de Indicação**: E = Vi - Vref
5. **Coeficiente de Variação (CV)**: CV = (s / x̄) × 100%
6. **Repetibilidade**: r = 2.8 × sr (para 95% de confiança)

## Comportamento:
- Seja preciso e técnico, mas acessível
- Quando pedido para calcular, mostre o passo a passo
- Cite normas relevantes quando apropriado
- Se não tiver certeza, indique claramente
- Responda em português brasileiro
- Use exemplos práticos quando possível

## Informações sobre o Sistema:
Este é o Sistema de Coletas da Tecnoiso, usado para gerar e imprimir registros de calibração de diversos equipamentos de laboratório. Os equipamentos disponíveis incluem balanças, pHmetros, condutivímetros, espectrofotômetros, manômetros, oxímetros, multímetros, fluxômetros e capelas de fluxo laminar.`;

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
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns segundos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes. Por favor, adicione créditos à sua conta." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Erro ao conectar com o assistente de IA" }), {
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
