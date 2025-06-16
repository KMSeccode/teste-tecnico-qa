# Sobre
Projeto de automação de testes web utilizando Cypress.
Implementação de padrões Page Object e BDD.

## 📝 Descrição
Projeto de automação de testes QA, implementando:
- Testes de login com credenciais válidas e inválidas
- Testes de upload de arquivos
- Padrão Page Object
- Metodologia BDD

## Pré-requisitos
- Node.js (versão 16 ou superior)
- npm (vem com o Node.js)
- Git (para controle de versão)

## 🛠️ Tecnologias
- Cypress 14.4.1
- JavaScript

## ⚙️ Instalação
1. Clone o repositório
git clone [URL_DO_REPOSITÓRIO]

2. Instale as dependências
npm install

## 🚀 Como Executar
1. Executar todos os testes:
npm test

2. Abrir o Cypress no modo interativo:
npm run cy:open

## 🔍 Casos de Teste Implementados
- Login
✔️ Login com credenciais válidas
✔️ Mensagem de erro para username inválido
✔️ Mensagem de erro para password inválido
✔️ Mensagem ao acessar área logada sem autenticação
✔️ Verificação das credenciais do PDF

- Upload de Arquivos
✔️ Upload pelo botão de seleção
✔️ Upload por drag and drop

## 📌 Observações
- As credenciais mencionadas no PDF fornecido (practice/SuperSecretPassword!) são intencionalmente inválidas no sistema real;
- O teste de verificação de mensagem de validez é intencionalmente feito para retornar falha;
- O teste "should reject credentials mentioned in PDF" verifica esse comportamento esperado;

## 📧 Contato
Kauan Miyagui Secco - kauanmiyaguisecco@gmail.com