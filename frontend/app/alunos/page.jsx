"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AlunoCard from "@/components/AlunoCard";
import { estilosPagina } from "../style";

export default function PaginaAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/alunos")
            .then((response) => response.json())
            .then((data) => setAlunos(data))
            .finally(() => setCarregando(false));
    }, []);

    return (
        <main style={estilosPagina.principal}>
            <header style={estilosPagina.header}>
                <div style={estilosPagina.linhaTitulo}>
                    <Link
                        href="/"
                        style={estilosPagina.botaoVoltar}
                    >
                        ←
                    </Link>
                    <div>
                        <h1 style={estilosPagina.titulo}>Alunos</h1>
                        <p style={estilosPagina.subtitulo}>
                            Lista de estudantes cadastrados e seus cursos vinculados.
                        </p>
                    </div>
                </div>
            </header>
            {carregando ? (
                <div style={estilosPagina.estadoVazio}>
                    Carregando alunos...
                </div>
            ) : alunos.length === 0 ? (
                <div style={estilosPagina.estadoVazio}>
                    Nenhum aluno cadastrado no momento.
                </div>
            ) : (
                <div style={estilosPagina.grade}>
                    {alunos.map((aluno) => (
                        <AlunoCard key={aluno.id} aluno={aluno} />
                    ))}
                </div>
            )}
        </main>
    );
}
