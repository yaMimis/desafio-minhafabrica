# [cite_start]API Minha Fabrica - Backend [cite: 3]

[cite_start]Esta é a API desenvolvida para o Desafio Técnico da Minha Fabrica[cite: 1, 3]. Ela fornece a base de dados e as regras de negócio para um painel administrativo, incluindo autenticação e CRUDs protegidos.

## Tecnologias Utilizadas

* [cite_start]**Node.js** com **Express** [cite: 34]
* [cite_start]**MongoDB** (Mongoose) [cite: 35]
* [cite_start]**JWT (JSON Web Token)** para autenticação e proteção de rotas [cite: 35]
* **mongodb-memory-server** (Banco de dados em memória para contornar bloqueios de rede local)

## Arquitetura

[cite_start]O projeto foi construído seguindo o padrão exigido: **Controller > Service > Repository > Model**[cite: 35], garantindo a separação de responsabilidades e facilitando a manutenção.

## ⚙️ Como rodar o projeto localmente

### 1. Instale as dependências
Abra o terminal na pasta do projeto e rode:
```bash
npm install
