-- Add unique constraint on setting_key for proper upsert
ALTER TABLE public.app_settings ADD CONSTRAINT app_settings_setting_key_unique UNIQUE (setting_key);

-- Add INSERT policy for app_settings (currently missing)
CREATE POLICY "Allow public insert on app_settings"
ON public.app_settings
FOR INSERT
WITH CHECK (true);

-- Insert default settings if they don't exist
INSERT INTO public.app_settings (setting_key, setting_value, description)
VALUES 
  ('theme', 'light', 'Tema do sistema'),
  ('default_view', 'list', 'Visualização padrão dos equipamentos'),
  ('sidebar_collapsed', 'false', 'Barra lateral recolhida por padrão'),
  ('notifications_enabled', 'true', 'Notificações do sistema habilitadas'),
  ('auto_print_preview', 'true', 'Mostrar pré-visualização antes de imprimir'),
  ('date_format', 'DD/MM/YYYY', 'Formato de data padrão'),
  ('company_name', 'Tecnoiso', 'Nome da empresa'),
  ('default_technician', '', 'Técnico padrão para calibrações'),
  ('certificate_prefix', 'CERT', 'Prefixo para números de certificado')
ON CONFLICT (setting_key) DO NOTHING;