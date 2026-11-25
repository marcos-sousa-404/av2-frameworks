import express from "express";
import cors from "cors";

const app = express();
const porta = 3001;

app.use(cors());
app.use(express.json());

const alunos = [
    { id: 1, nome: "Ana", curso: "Sistemas de Informação" },
    { id: 2, nome: "Carlos", curso: "ADS" }
];

const cursos = [
    { id: 1, nome: "Sistemas de Informação", duracao: "4 anos" },
    { id: 2, nome: "ADS", duracao: "2,5 anos" }
];

const professores = [
    { id: 1, nome: "Marcos", area: "Desenvolvimento Web" },
    { id: 2, nome: "Juliana", area: "Banco de Dados" }
];

let proximoAlunoId = 2;
let proximoCursoId = 2;
let proximoProfessorId = 2;

function textoValido(valor) {
    return typeof valor === "string" && valor.trim() !== "";
}

function validarCampos(corpo, campos) {
    if (!corpo || typeof corpo !== "object") {
        return false;
    }

    return campos.every((campo) => textoValido(corpo[campo]));
}

app.get("/alunos", (req, res) => {
    return res.json(alunos);
});

app.get("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);
    const aluno = alunos.find((item) => item.id === id);

    if (!aluno) {
        return res.status(404).json({ erro: "Aluno não encontrado" });
    }

    return res.json(aluno);
});

app.post("/alunos", (req, res) => {
    if (!validarCampos(req.body, ["nome", "curso"])) {
        return res.status(400).json({ erro: "Nome e curso são obrigatórios" });
    }

    const { nome, curso } = req.body;
    proximoAlunoId += 1;

    const novoAluno = {
        id: proximoAlunoId,
        nome: nome.trim(),
        curso: curso.trim()
    };

    alunos.push(novoAluno);
    return res.status(201).json(novoAluno);
});

app.put("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);
    const aluno = alunos.find((item) => item.id === id);

    if (aluno === undefined) {
        return res.status(404).json({ erro: "Aluno não encontrado" });
    }

    if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ erro: "Dados inválidos para atualização" });
    }

    const { nome, curso } = req.body;

    if (nome === undefined && curso === undefined) {
        return res.status(400).json({ erro: "Informe nome ou curso para atualizar" });
    }

    if (nome !== undefined && !textoValido(nome)) {
        return res.status(400).json({ erro: "Nome inválido" });
    }

    if (curso !== undefined && !textoValido(curso)) {
        return res.status(400).json({ erro: "Curso inválido" });
    }

    if (nome !== undefined) aluno.nome = nome.trim();
    if (curso !== undefined) aluno.curso = curso.trim();

    return res.json(aluno);
});

app.delete("/alunos/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = alunos.findIndex((item) => item.id === id);

    if (indice === -1) {
        return res.status(404).json({ erro: "Aluno não encontrado" });
    }

    alunos.splice(indice, 1);
    return res.json({ mensagem: "Aluno removido com sucesso" });
});

app.get("/cursos", (req, res) => {
    return res.json(cursos);
});

app.get("/cursos/:id", (req, res) => {
    const id = Number(req.params.id);
    const curso = cursos.find((item) => item.id === id);

    if (!curso) {
        return res.status(404).json({ erro: "Curso não encontrado" });
    }

    return res.json(curso);
});

app.post("/cursos", (req, res) => {
    if (!validarCampos(req.body, ["nome", "duracao"])) {
        return res.status(400).json({ erro: "Nome e duração são obrigatórios" });
    }

    const { nome, duracao } = req.body;
    proximoCursoId += 1;

    const novoCurso = {
        id: proximoCursoId,
        nome: nome.trim(),
        duracao: duracao.trim()
    };

    cursos.push(novoCurso);
    return res.status(201).json(novoCurso);
});

app.get("/professores", (req, res) => {
    return res.json(professores);
});

app.get("/professores/:id", (req, res) => {
    const id = Number(req.params.id);
    const professor = professores.find((item) => item.id === id);

    if (professor === undefined) {
        return res.status(404).json({ erro: "Professor não encontrado" });
    }

    return res.json(professor);
});

app.post("/professores", (req, res) => {
    if (!validarCampos(req.body, ["nome", "area"])) {
        return res.status(400).json({ erro: "Nome e área são obrigatórios" });
    }

    const { nome, area } = req.body;
    proximoProfessorId += 1;

    const novoProfessor = {
        id: proximoProfessorId,
        nome: nome.trim(),
        area: area.trim()
    };

    professores.push(novoProfessor);
    return res.status(201).json(novoProfessor);
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
