create table clientes (
  id serial primary key,
  nome text not null,
  telefone text,
  observacao text
);


create table produtos (
	id serial primary key,
  descricao text,
  marca text,
  estoque integer,
  preco numeric 
 
);

create table itens_orcamento (
  id serial primary key,
  id_produto integer references produtos(id)
  on delete cascade,
  id_orcamento integer references orcamentos(id)
  on delete cascade,
  quantidade integer
);

create table orcamentos (
  id serial primary key,
  id_cliente integer references clientes(id)
  on delete cascade,
  data_emissao date default now()
);






alter table orcamentos alter column data_emissao set default CURRENT_DATE;



select pg_get_serial_sequence('orcametnos','id');

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

