import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Schultz & Partner | Unternehmens- & Personalberatung – White & Light Edition",
  description:
    "Unternehmensberatung und Personalberatung für den Mittelstand. Hanseatische Klarheit und strategische Exzellenz auf Spitzenebene.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-sans text-brand-slate antialiased selection:bg-brand-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
