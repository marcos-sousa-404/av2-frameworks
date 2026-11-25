import { estilosCard } from "./styles";

export default function AlunoCard({ aluno }) {
    return (
        <div style={estilosCard.container}>
            <div style={estilosCard.topo}>
                <h3 style={estilosCard.titulo}>{aluno.nome}</h3>
                <span style={estilosCard.identificador}>#{aluno.id}</span>
            </div>
            <p style={estilosCard.subtitulo}>{aluno.curso}</p>
        </div>
    );
}
