# CRUD de Produtos — Teste Técnico 

## Tecnologias utilizadas

### Back-End
- Node.js Express e sequelize ORM

### Front-End
- React.js

### Banco de Dados
- MySQL

### O por que?

Usei javascript como linguagem no backend por conta de ser a única entre as pedidas que eu conheço e ja tive contato, no front prefiri usar React.js pois na minha visão seria mais organizado, para banco de dados estava pensando em PostgreSQL, mas como já tinha utilizado MySQL algumas vezes e era preferencial escolhi usá-lo. 


---

## Funcionalidades implementadas

Entreguei de funcionalidade obrigatórias, o CRUD completo, cadastrar produto, listar todos os produtos, ver produto por ID, editar produto por ID, deletar produto por ID de forma Soft sem realmente deletar banco e delete Hard onde de fato deleta do banco.
De funcionalidade a mais eu realizei, a tela de Login e Register com JWT e identificação automática de data e usuário logado no cadastro.

---


## Script do Banco de dados

O script de criação das tabelas está disponível em `scripts.sql`

```sql
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

```

---

## Para rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/pe-odake/TestePratico.git
```

### 2. Banco de dados

Rode o script do banco de dados para criar o banco e as tabelas.

### 3. Configurar variáveis de ambiente
Backend
```
MYSQL_BD_NOME=nome do bando de dados
MYSQL_BD_USER=nome do usuario do banco
MYSQL_BD_PASSWORD=senha do banco
MYSQL_BD_HOST=localhost 
MYSQL_BD_PORT=3306
PORT=3000
JWT_SECRET=codigo para o jwt 
```
Fronted
```
VITE_URL_BACKEND=link do seu backend onde ele está 
```

### 4. Instalar dependências

Backend
```bash
cd backend
npm install
```

Frontend
```bash
cd frontend
npm install
```

### 5. Executar o projeto

Backend
```bash
npm run dev
```

Frontend
```bash
npm run dev
```

O Frontend estará disponível em: `http://localhost:5173`  
O Backend estará disponível em: `http://localhost:3000`

---

## Uso de Inteligência Artificial

Meus usos com IA foram Stitch.ai para gerar um design inicial de referência para o frontend que eu segui, usei também o gemini tirar dúvidas sobre sintaxe e dependências que eu tive ao desenvolver o backend por conta de fazer tempo que não faço backend com javascript e sobre o ORM sequelize.