create table cliente (
  id serial primary key,
  nome text not null,
  telefone text,
  observacao text
);


create table produto (
	id serial primary key,
  descricao text,
  marca text,
  preco numeric 
 
);

create table itens_orcamento (
  id serial primary key,
  id_produto integer references produto(id),
  id_orcamento integer references orcamento(id),
  quantidade integer, 
);

create table orcamento (
  id serial primary key,
  id_cliente integer references cliente(id),
  data_emissao date default now(),
);


alter table orcamento alter column data_emissao set default CURRENT_DATE;

select * from cliente;

delete from cliente;

select pg_get_serial_sequence('cliente','id');

alter sequence public.cliente_id_seq restart with 1001;

select 
	cliente.nome, 
    cliente.telefone, 
    orcamento.id as numero_orcamento, 
    orcamento.total 
   from cliente 
   join orcamento on (orcamento.id_cliente = cliente.id)
   WHERE cliente.id = 1;
   
   
   select
   produto.id as codigo,
   produto.descricao,
   itens_orcamento.quantidade,
   produto.preco,
   itens_orcamento.total
   from produto
   join itens_orcamento on (itens_orcamento.id_produto = produto.id);

   select
itens_orcamento.quantidade,
produto.preco,
itens_orcamento.quantidade *
produto.preco as total
from produto
join itens_orcamento on (itens_orcamento.id_produto = produto.id)
where itens_orcamento.id_orcamento = 1001;

select
   produto.id as codigo,
   produto.descricao,
   itens_orcamento.quantidade,
   produto.preco,
   (itens_orcamento.quantidade * produto.preco) as total
   from produto
   join itens_orcamento on (itens_orcamento.id_produto = produto.id);


   select orcamento.id,
	c.nome,
    c.telefone,
	sum(itens_orcamento.quantidade * produto.preco) from itens_orcamento
    join orcamento on (orcamento.id = itens_orcamento.id_orcamento)
    join produto on (produto.id = itens_orcamento.id_produto)
    left join
    	(select orcamento.id, cliente.nome
         ,cliente.telefone from orcamento
        join cliente on (orcamento.id_cliente = cliente.id)) c
     on (c.id = itens_orcamento.id_orcamento)
     where orcamento.id = 1001
    group by orcamento.id, c.nome, c.telefone
  ;

