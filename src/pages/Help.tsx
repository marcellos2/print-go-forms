import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, Bot, Loader2, Sparkles, RotateCcw, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface HelpProps {
  onBack: () => void;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/metrobot`;

const SUGGESTIONS = [
  "Como calcular incerteza?",
  "O que é ISO 17025?",
  "Periodicidade de calibração",
  "Rastreabilidade metrológica",
];

export default function Help({ onBack }: HelpProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    let assistantContent = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!resp.ok || !resp.body) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || "Erro ao conectar com o MetroBot");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages((prev) => {
                const updated = [...prev];
                if (updated[updated.length - 1]?.role === "assistant") {
                  updated[updated.length - 1].content = assistantContent;
                }
                return updated;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("MetroBot error:", error);
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Erro ao conectar",
        variant: "destructive",
      });
      setMessages((prev) => prev.filter((m) => m.content !== ""));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const clearChat = () => {
    setMessages([]);
    inputRef.current?.focus();
  };

  const formatMessage = (content: string) => {
    // Simple markdown-like formatting
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-neutral-200 dark:bg-neutral-700 px-1 rounded text-sm">$1</code>');
  };

  return (
    <div className="h-screen flex flex-col bg-[#212121]">
      {/* Minimal Header */}
      <div className="h-12 flex items-center justify-between px-4 border-b border-neutral-800">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Voltar</span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-sm font-medium text-white">MetroBot</span>
        </div>

        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors text-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Nova conversa
          </button>
        )}
        {messages.length === 0 && <div className="w-24" />}
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto py-6 px-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-semibold text-white mb-2">
                  Como posso ajudar?
                </h1>
                <p className="text-neutral-400 mb-8 text-center max-w-md">
                  Pergunte sobre metrologia, calibração, normas ISO ou cálculos de incerteza.
                </p>

                <div className="grid grid-cols-2 gap-2 w-full max-w-lg">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => sendMessage(suggestion)}
                      className="px-4 py-3 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600 rounded-xl text-sm text-neutral-300 hover:text-white transition-all text-left flex items-start gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div key={index} className="group">
                    {message.role === "user" ? (
                      <div className="flex justify-end">
                        <div className="max-w-[85%] bg-neutral-700 text-white rounded-2xl rounded-tr-md px-4 py-3">
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div 
                            className="text-sm text-neutral-200 leading-relaxed prose prose-invert prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
                          />
                          {message.content && !isLoading && (
                            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => copyToClipboard(message.content, index)}
                                className="flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                              >
                                {copiedIndex === index ? (
                                  <>
                                    <Check className="w-3 h-3" />
                                    Copiado
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    Copiar
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && messages[messages.length - 1]?.content === "" && (
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center gap-1 py-2">
                      <div className="w-2 h-2 bg-neutral-500 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-neutral-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-neutral-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {/* Input Area - ChatGPT Style */}
        <div className="p-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="relative bg-neutral-800 rounded-2xl border border-neutral-700 focus-within:border-neutral-600 transition-colors">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Pergunte algo sobre metrologia..."
                className="w-full bg-transparent text-white placeholder-neutral-500 resize-none px-4 py-3 pr-12 text-sm focus:outline-none min-h-[48px] max-h-32"
                rows={1}
                disabled={isLoading}
                style={{
                  height: 'auto',
                  minHeight: '48px',
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = Math.min(target.scrollHeight, 128) + 'px';
                }}
              />
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                size="icon"
                className="absolute right-2 bottom-2 w-8 h-8 bg-orange-500 hover:bg-orange-600 disabled:bg-neutral-600 disabled:opacity-50 rounded-lg"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-neutral-600 mt-2 text-center">
              MetroBot pode cometer erros. Verifique informações importantes.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}