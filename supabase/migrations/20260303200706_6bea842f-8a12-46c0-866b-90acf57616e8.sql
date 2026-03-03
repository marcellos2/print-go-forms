
-- Companies table
CREATE TABLE public.companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read companies" ON public.companies FOR SELECT USING (true);
CREATE POLICY "Allow public insert companies" ON public.companies FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update companies" ON public.companies FOR UPDATE USING (true);
CREATE POLICY "Allow public delete companies" ON public.companies FOR DELETE USING (true);

-- Company instruments table
CREATE TABLE public.company_instruments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES public.companies(id) ON DELETE CASCADE NOT NULL,
  codigo text,
  instrumento text NOT NULL,
  modelo text,
  faixa text,
  resolucao text,
  erro_admissivel text,
  periodicidade text,
  local_utilizacao text,
  unidade text,
  status text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.company_instruments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read instruments" ON public.company_instruments FOR SELECT USING (true);
CREATE POLICY "Allow public insert instruments" ON public.company_instruments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update instruments" ON public.company_instruments FOR UPDATE USING (true);
CREATE POLICY "Allow public delete instruments" ON public.company_instruments FOR DELETE USING (true);
