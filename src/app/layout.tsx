import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Alquileres Turisticos Entre Ríos",
  description: "Alquileres turísticos en Entre Ríos",
  icons: {
    icon: "/images/logo-actualizado.png",
    apple: "/images/logo-actualizado.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta name="theme-color" content="#5E8CAB" />
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
