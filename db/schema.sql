
-- Minimal schema for initial deploy (expand later in Supabase)
create table if not exists tarifas_operadores (
  id text primary key,
  operador text check (operador in ('masmovil','pepephone','simyo','jazztel')),
  plan text,
  precio numeric,
  velocidad_down int,
  velocidad_up int,
  datos int,
  minutos int,
  tv boolean default false,
  permanencia_meses int default 0,
  tags text[]
);
