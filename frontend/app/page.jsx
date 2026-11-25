import Link from "next/link";
import {estilosInicio} from "./style";

const secoes = [{
    titulo: "Alunos", descricao: "Consulte os estudantes matriculados e seus respectivos cursos.", path: "/alunos"
}, {
    titulo: "Cursos", descricao: "Veja a relação de cursos disponíveis e a duração de cada formação.", path: "/cursos"},
    {
        titulo: "Professores",
        descricao: "Conheça os docentes cadastrados e suas áreas de atuação.",
        path: "/professores"
    }];

export default function PaginaInicial() {
    return (<main style={estilosInicio.principal}>
        <header style={estilosInicio.header}>
            <h1 style={estilosInicio.titulo}>Sistema Acadêmico</h1>
            <p style={estilosInicio.subtitulo}>
                Visualize alunos, cursos e professores integrados à API.
            </p>
        </header>
        <div style={estilosInicio.grade}>
            {secoes.map((secao) => (<article key={secao.path} style={estilosInicio.card}>
                <div style={estilosInicio.corpoCard}>
                    <h2 style={estilosInicio.tituloCard}>{secao.titulo}</h2>
                    <p style={estilosInicio.descricaoCard}>{secao.descricao}</p>
                </div>
                <div style={estilosInicio.rodapeCard}>
                    <Link href={secao.path} className="botao-acessar" style={estilosInicio.link}>
                        Acessar →
                    </Link>
                </div>
            </article>))}
        </div>
    </main>);
}
