
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

Podemos considerar inserir mais informações sobre os planos, como descrições detalhadas, especificações técnicas, benefícios.

### 2. Utilizar Camel Case nos Nomes de Campos

Use camel case nos nomes de campos para seguir as convenções de nomenclatura em JavaScript.

### 3. Centralizar Hierarquia de Localidades

Em vez de ter a hierarquia de localidades espalhada por diferentes planos, podemos centralizá-la e referenciá-la nos planos. Isso tornaria o arquivo JSON mais limpo e reduziria a repetição de informações

```json
{
   "Aparelho": {
      "name": "Samsung Galaxy S8"
   },
   "localidades": [
      {
         "nome": "BRASIL",
         "prioridade": 1
      },
      {
         "nome": "MINAS GERAIS",
         "prioridade": 2
      },
      {
         "nome": "BELO HORIZONTE",
         "prioridade": 3
      }
   ],
   "plans": [
      {
         "id": 1,
         "type": "pos",
         "name": "Família 50GB",
         "localidade": "BRASIL"
      },
      {
         "id": 2,
         "type": "pos",
         "name": "Família 50GB",
         "localidade": "MINAS GERAIS"
      }
   ]
}
```

### 4. Centralizar Informações Comuns

Informações comuns a vários planos (como nome, preço do telefone, etc.), podemos centralizá-las fora da matriz de planos para reduzir a repetição.