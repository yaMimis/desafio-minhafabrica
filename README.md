# API Minha Fabrica - Backend

Esta é a API desenvolvida para o Desafio Técnico da Minha Fabrica. Ela fornece a base de dados e as regras de negócio para um painel administrativo, incluindo autenticação e CRUDs protegidos.

## Tecnologias Utilizadas

* **Node.js** com **Express**
* **MongoDB** (Mongoose)
* **JWT (JSON Web Token)** para autenticação e proteção de rotas
* **mongodb-memory-server** (Banco de dados em memória para contornar bloqueios de rede local)

## Arquitetura

O projeto foi construído seguindo o padrão exigido: **Controller > Service > Repository > Model**[cite: 35], garantindo a separação de responsabilidades e facilitando a manutenção.

## ⚙️ Como rodar o projeto localmente

### 1. Instale as dependências
Abra o terminal na pasta do projeto e rode:
```bash
npm install
