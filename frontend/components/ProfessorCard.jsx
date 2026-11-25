import { estilosCard } from "./styles";

export default function ProfessorCard({ professor }) {
    return (
        <div style={estilosCard.container}>
            <div style={estilosCard.topo}>
                <h3 style={estilosCard.titulo}>{professor.nome}</h3>
                <span style={estilosCard.identificador}>#{professor.id}</span>
            </div>
            <p style={estilosCard.subtitulo}>{professor.area}</p>
        </div>
    );
}
