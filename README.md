# Sistema Acadêmico Simplificado

Entrega referente à **AV2** das disciplinas de **Front-end Frameworks** e **Back-end Frameworks**. O projeto consiste em uma aplicação full-stack integrada composta por uma API REST em Node.js + Express e uma interface web em React + Next.js, comunicando-se via HTTP/JSON com dados armazenados em memória.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, CORS
- **Frontend:** React, Next.js (App Router)

## Estrutura do Projeto

```text
projeto-avaliacao/
├── backend/
│   ├── index.js
│   └── package.json
└── frontend/
    ├── app/
    │   ├── alunos/
    │   ├── cursos/
    │   ├── professores/
    │   └── page.jsx
    ├── components/
    │   ├── AlunoCard.jsx
    │   ├── CursoCard.jsx
    │   └── ProfessorCard.jsx
    └── package.json
```

## Pré-requisitos

- Node.js e npm instalados.
- Portas **3000** e **3001** disponíveis.

## Como Executar

Abra dois terminais na pasta raiz do projeto. Os dois servidores devem permanecer em execução ao mesmo tempo.

### Terminal 1 — Backend

```bash
cd backend
npm install
npm run dev
```

A API estará disponível em [http://localhost:3001/alunos](http://localhost:3001/alunos). Também é possível consultar `/cursos` e `/professores` nessa mesma porta.

### Terminal 2 — Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador. Na página inicial, use os botões **Acessar** para visualizar alunos, cursos e professores. Os dados exibidos nos cards são buscados na API Express.

Para encerrar os servidores, pressione `Ctrl+C` em cada terminal.

## Armazenamento dos Dados

Os dados são armazenados apenas em arrays de objetos na memória do backend, sem banco de dados. Cadastros, alterações e exclusões permanecem disponíveis enquanto esse processo estiver em execução. Ao reiniciar o backend, os arrays voltam aos registros iniciais definidos em `backend/index.js`.
