"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CursoCard from "@/components/CursoCard";
import { estilosPagina } from "../style";

export default function PaginaCursos() {
    const [cursos, setCursos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/cursos")
            .then((response) => response.json())
            .then((data) => setCursos(data))
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
                        <h1 style={estilosPagina.titulo}>Cursos</h1>
                        <p style={estilosPagina.subtitulo}>
                            Catálogo de cursos ofertados e suas respectivas durações.
                        </p>
                    </div>
                </div>
            </header>
            {carregando ? (
                <div style={estilosPagina.estadoVazio}>
                    Carregando cursos...
                </div>
            ) : cursos.length === 0 ? (
                <div style={estilosPagina.estadoVazio}>
                    Nenhum curso cadastrado no momento.
                </div>
            ) : (
                <div style={estilosPagina.grade}>
                    {cursos.map((curso) => (
                        <CursoCard key={curso.id} curso={curso} />
                    ))}
                </div>
            )}
        </main>
    );
}
