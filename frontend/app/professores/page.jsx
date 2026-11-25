"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProfessorCard from "@/components/ProfessorCard";
import { estilosPagina } from "../style";

export default function PaginaProfessores() {
    const [professores, setProfessores] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/professores")
            .then((response) => response.json())
            .then((data) => setProfessores(data))
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
                        <h1 style={estilosPagina.titulo}>Professores</h1>
                        <p style={estilosPagina.subtitulo}>
                            Corpo docente cadastrado e suas áreas de especialidade.
                        </p>
                    </div>
                </div>
            </header>
            {carregando ? (
                <div style={estilosPagina.estadoVazio}>
                    Carregando professores...
                </div>
            ) : professores.length === 0 ? (
                <div style={estilosPagina.estadoVazio}>
                    Nenhum professor cadastrado no momento.
                </div>
            ) : (
                <div style={estilosPagina.grade}>
                    {professores.map((professor) => (
                        <ProfessorCard key={professor.id} professor={professor} />
                    ))}
                </div>
            )}
        </main>
    );
}
