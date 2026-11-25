import { estilosCard } from "./styles";

export default function CursoCard({ curso }) {
    return (
        <div style={estilosCard.container}>
            <div style={estilosCard.topo}>
                <h3 style={estilosCard.titulo}>{curso.nome}</h3>
                <span style={estilosCard.identificador}>#{curso.id}</span>
            </div>
            <p style={estilosCard.subtitulo}>Duração: {curso.duracao}</p>
        </div>
    );
}
