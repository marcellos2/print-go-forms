-- Create calibration_history table for tracking all calibrations
CREATE TABLE public.calibration_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  equipment_type TEXT NOT NULL,
  equipment_name TEXT NOT NULL,
  certificate_number TEXT,
  calibration_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  technician_name TEXT,
  status TEXT DEFAULT 'completed',
  observations TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat_messages table for MetroBot conversations
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  session_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create settings table for app configuration
CREATE TABLE public.app_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT NOT NULL UNIQUE,
  setting_value TEXT,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default settings
INSERT INTO public.app_settings (setting_key, setting_value, description) VALUES
  ('company_name', 'Tecnoiso', 'Nome da empresa'),
  ('default_technician', '', 'Técnico padrão'),
  ('certificate_prefix', 'CERT-', 'Prefixo do número de certificado'),
  ('auto_save', 'true', 'Salvar automaticamente no histórico'),
  ('theme', 'light', 'Tema da interface');

-- Enable RLS
ALTER TABLE public.calibration_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since we don't have auth yet)
CREATE POLICY "Allow public read access to calibration_history" 
ON public.calibration_history FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to calibration_history" 
ON public.calibration_history FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access to calibration_history" 
ON public.calibration_history FOR UPDATE USING (true);

CREATE POLICY "Allow public delete access to calibration_history" 
ON public.calibration_history FOR DELETE USING (true);

CREATE POLICY "Allow public read access to chat_messages" 
ON public.chat_messages FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to chat_messages" 
ON public.chat_messages FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read access to app_settings" 
ON public.app_settings FOR SELECT USING (true);

CREATE POLICY "Allow public update access to app_settings" 
ON public.app_settings FOR UPDATE USING (true);