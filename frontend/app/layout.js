import "./globals.css";

export const metadata = {
  title: "Sistema Acadêmico",
  description: "Sistema Acadêmico Simplificado",
};

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
