import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corte Clássico",
  description: "Corte Clássico - GP3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
