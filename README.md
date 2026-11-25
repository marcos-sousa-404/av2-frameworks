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