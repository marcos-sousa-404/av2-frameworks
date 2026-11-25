const headerBase = {
    marginBottom: "32px",
    paddingBottom: "20px",
};

const tituloBase = {
    margin: "0 0 8px 0",
    fontSize: "2rem",
    fontWeight: "700",
    letterSpacing: "-0.02em",
    color: "#0f172a"
};

const subtituloBase = {
    margin: 0,
    fontSize: "1rem",
    color: "#475569"
};

export const estilosInicio = {
    principal: {
        padding: "48px 24px",
        maxWidth: "1040px",
        margin: "0 auto"
    },
    header: headerBase,
    titulo: tituloBase,
    subtitulo: subtituloBase,
    grade: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px"
    },
    card: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid #e2e8f0",
        borderRadius: "14px",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        boxShadow: "2px 2px 12px 2px rgba(0, 0, 0, 0.01)"
    },
    corpoCard: {
        padding: "20px 24px 16px 24px",
        flex: 1,
        textAlign: "left"
    },
    tituloCard: {
        margin: "0 0 8px 0",
        fontSize: "1.25rem",
        fontWeight: "700",
        color: "#0f172a"
    },
    descricaoCard: {
        margin: 0,
        fontSize: "0.95rem",
        color: "#475569",
        lineHeight: "1.5"
    },
    rodapeCard: {
        padding: "12px 24px 22px 24px",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "auto"
    },
    link: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "9px 18px",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        textDecoration: "none",
        borderRadius: "8px",
        fontSize: "0.9rem",
        fontWeight: "600"
    }
};

export const estilosPagina = {
    principal: {
        padding: "48px 24px",
        maxWidth: "1040px",
        margin: "0 auto"
    },
    header: headerBase,
    linhaTitulo: {
        position: "relative"
    },
    titulo: tituloBase,
    subtitulo: subtituloBase,
    botaoVoltar: {
        position: "absolute",
        left: "-40px",
        top: "6px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        borderRadius: "6px",
        color: "#0f172a",
        textDecoration: "none",
        fontSize: "1.2rem",
        fontWeight: "600"
    },
    grade: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "20px"
    },
    estadoVazio: {
        padding: "48px 24px",
        textAlign: "center",
        color: "#64748b",
        fontSize: "1rem"
    }
};
