import type { Metadata } from "next";
import "../styles/globals.css";


export const metadata: Metadata = {
  title: "Alquileres Concepcion del Uruguay",
  description: "Alquileres Concepcion del Uruguay",
  icons: {
    icon: "/FitTrack.png",
    apple: "/FitTrack.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <link
          rel="icon"
          href={
            typeof metadata.icons === "string"
              ? metadata.icons
              : Array.isArray(metadata.icons)
                ? metadata.icons[0]?.toString() || "/default-icon.png"
                : metadata.icons && typeof metadata.icons === "object" && "icon" in metadata.icons
                  ? String(metadata.icons.icon)
                  : "/default-icon.png"
          }
          className="bg-red-600"
        />

      </head>
      <body>
        {children}
      </body>
    </html>
  );
}