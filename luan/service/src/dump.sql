create table cliente (
  id serial primary key,
  nome text not null,
  telefone text,
  data_emissao date default now(),
  observacao text
);


create table produto (
	id serial primary key,
  	descricao text,
  	marca text,
  	quantidade integer,
  	valor numeric not null
 
);

create table vendas (
  produto_id integer references produto(id),
  quantidade integer,
  total numeric 
);



alter table cliente alter column data_emissao set default CURRENT_DATE;

select * from cliente;

delete from cliente;

select pg_get_serial_sequence('cliente','id');

alter sequence public.cliente_id_seq restart with 1001;