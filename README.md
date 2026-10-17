# Refund V2 - Sistema de Reembolso de Despesas

## Visão Geral

Refund V2 é uma aplicação web moderna construída com React, TypeScript e Vite. Este projeto representa uma evolução de um sistema anterior, focando na gestão de reembolsos de despesas de funcionários com recursos aprimorados e arquitetura melhorada.

## Preview

![Preview](./.github/preview.png)

## Principais Recursos

- **Autenticação baseada em papéis**: Sistema de login seguro com diferentes níveis de acesso para funcionários e gerentes
- **Gestão de Despesas**: Sistema completo para submissão, acompanhamento e aprovação de reembolsos de despesas
- **Design Responsivo**: Interface amigável para dispositivos móveis usando Tailwind CSS
- **Validação de Formulários**: Validação robusta com Zod
- **Integração com API**: Comunicação fluida com serviços de backend

## Stack Tecnológico

### Frontend

- React 19.2.4
- TypeScript 5.9.3
- Vite 8.0.1
- Tailwind CSS 4.2.2

### Bibliotecas

- Axios 1.15.0 (cliente HTTP)
- React Router 7.14.0 (roteamento)
- Zod 4.3.6 (validação)

## Estrutura do Projeto

```
.
├── .git/
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── public/
├── README.md
├── src/
│ ├── App.tsx
│ ├── components/
│ ├── contexts/
│ │ └── AuthContext.tsx
│ ├── hooks/
│ │ └── useAuth.tsx
│ ├── main.tsx
│ ├── pages/
│ ├── routes/
│ │ ├── auth-routes.tsx
│ │ ├── employee-routes.tsx
│ │ ├── index.tsx
│ │ └── manager-routes.tsx
│ ├── services/
│ │ └── api.ts
│ └── types/
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Primeiros Passos

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone [repository-url]
```

2. Navegue até o diretório do projeto:

```bash
cd refund-v2
```

3. Instale as dependências:

```bash
npm install
```

### Executando a Aplicação

- Servidor de desenvolvimento:

```bash
npm run dev
```

- Build de produção:

```bash
npm run build
```

- Pré-visualizar build de produção:

```bash
npm run preview

```

### Sistema de Autenticação

A aplicação possui um sistema de autenticação robusto com:

1. AuthContext: Gerencia sessões de usuários e estado de autenticação

2. Hook useAuth: Facilita o acesso ao estado e funções de autenticação

3. Rotas baseadas em papéis: Diferentes rotas para funcionários e gerentes

### Integração com API

A aplicação conecta-se a um backend API com a seguinte configuração:

```typescript
// src/services/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});
```

### Práticas de Desenvolvimento

- Segurança de Tipos: Uso abrangente de TypeScript em toda a aplicação

- Qualidade de Código: Integração com ESLint para manter a qualidade do código

- Arquitetura Modular: Componentes e serviços bem organizados

### Contribuindo

Contribuições são bem-vindas. Siga estes passos:

1. Faça um fork do repositório

2. Crie uma branch de feature (git checkout -b feature/AmazingFeature)

3. Faça commit das suas alterações (git commit -m 'Add some AmazingFeature')

4. Faça push para a branch (git push origin feature/AmazingFeature)

5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [Parece que o resultado não era seguro para exibição. Vamos mudar as coisas e tentar outra opção!] para mais detalhes.

---

## Contato

Entre em contato ou acompanhe meu trabalho:

- **Nome:** Francisco Rosendo
- **E-mail:** [rosendc30@gmail.com](mailto:rosendc30@gmail.com)
- **GitHub:** [github.com/rosendo2015](https://github.com/rosendo2015)
- **LinkedIn:** [linkedin.com/in/francisco-rosendo-coelho](https://www.linkedin.com/in/francisco-rosendo-coelho/)
