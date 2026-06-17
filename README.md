# httpClaude

Aplicação Angular que consome a [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) para exibir uma lista de usuários, com tratamento de estados de carregamento e erro via RxJS.

Repositório: [github.com/Paulo-Borges/httpClaude](https://github.com/Paulo-Borges/httpClaude)

## Funcionalidades

- Listagem de usuários obtidos via `HttpClient`
- Estados de tela (`loading`, `data`, `error`) gerenciados de forma declarativa com RxJS
- Layout com componentes de cabeçalho e rodapé
- Estilização com Tailwind CSS

## Stack

| Tecnologia | Versão |
|------------|--------|
| Angular | 21.x |
| TypeScript | 5.9 |
| RxJS | 7.8 |
| Tailwind CSS | 4.x |
| Vitest | 4.x |

## Pré-requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado)
- npm 10+

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Paulo-Borges/httpClaude.git
cd httpClaude
npm install
```

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Sobe o servidor de desenvolvimento em `http://localhost:4200` |
| `npm run build` | Gera o build de produção em `dist/` |
| `npm run watch` | Build contínuo em modo development |
| `npm test` | Executa os testes unitários com Vitest |

## Estrutura do projeto

```
src/app/
├── components/
│   ├── header/          # Navegação superior
│   └── footer/          # Rodapé
├── user-list/           # Componente principal da listagem
├── user-service.ts      # Serviço HTTP para buscar usuários
├── user-state.interface.ts  # Interface de estado da tela
├── app.ts               # Componente raiz
└── app.config.ts        # Configuração da aplicação
```

## API utilizada

O serviço `UserService` consome o endpoint:

```
GET https://jsonplaceholder.typicode.com/users
```

Cada usuário exibe nome, e-mail, username, website e empresa.

## Autor

**Paulo Borges** — [LinkedIn](https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/)

## Licença

Este projeto é de uso privado (`private: true` no `package.json`).
