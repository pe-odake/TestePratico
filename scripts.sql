create database teste_pratico;
use teste_pratico;

create table Usuario (
    id bigint not null auto_increment,
    nome varchar(50) not null,
    email varchar(200) not null unique,
    senha varchar(256) not null,
    
    primary key (id)
);

create table Produto (
    id bigint not null auto_increment,
    dataCadastro datetime not null,
    nome varchar(50) not null,
    descricao varchar(200) not null,
    quantidade integer not null default 0,
    valor decimal(10,2) not null default 0.00,
    ativo boolean not null default 1,
    usuario_id bigint not null,
    
    primary key (id),
    constraint fk_usuario_id_produto foreign key (usuario_id)
    references usuario(id)
);
