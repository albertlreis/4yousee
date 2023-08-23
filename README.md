
# API de Filtragem e Priorização de Planos

Esta é uma API Node.js que lê um arquivo JSON de planos e oferece endpoints para filtrar e priorizar esses planos com base em critérios específicos.

>This is a challenge by Coodesh

## Funcionalidades

- Filtra os planos com base em datas de início válidas.
- Prioriza planos de acordo com a hierarquia de localidades e datas de início.

## Requisitos

- Node.js (versão >= 14.0.0)
- npm (Node Package Manager)

## Instalação

1. Clone este repositório para o seu sistema local.
2. Navegue para a pasta do projeto:
   ```bash
   cd nome-do-seu-projeto
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Usar

1. Coloque os dados dos planos no arquivo `data.json` na raiz do projeto.
2. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse a API no seu navegador ou usando ferramentas como o Postman:
    - Endpoint: `http://localhost:5000/plans`
    - Método: GET

## Estrutura do Projeto

```
- nome-do-seu-projeto
  - data.json
  - src
    - controllers
      - planController.js
    - services
      - planService.js
    - utils
      - filterUtils.js
    - index.js
  - package.json
```
## Melhorias no Arquivo data.json

O arquivo `data.json` contém os dados dos aparelhos e planos disponíveis na API. Algumas melhorias na estrutura facilitariam a organização, compreensão e manuntenção dos dados.

### 1. Maiores Informações

Podemos considerar inserir mais informações sobre os planos, como descrições detalhadas, especificações técnicas, benefícios, etc.

### 2. Padronizar o Formato de Datas

Podemos utilizar o padrão ISO 8601 para garantir melhores consistência e legibilidade.

### 3. Utilizar Camel Case nos Nomes de Campos

Use camel case nos nomes de campos para seguir as convenções de nomenclatura em JavaScript.