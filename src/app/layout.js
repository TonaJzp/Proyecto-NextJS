import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Tona's Zoo • Proyecto-NextJS",
  description: "Sitio del zoológico con NextJS, Tailwind y daisyUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <ThemeProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>

          <Footer
            brand={{ name: "Tona's Zoo", tagline: "Conservación, ciencia y aventura", href: "/" }}
            columns={[
              {
                title: "Explorar",
                links: [
                  { label: "Calendario", href: "/calendario" },
                  { label: "Horario", href: "/horario" },
                  { label: "Hábitats", href: "/habitats" },
                ],
              },
              {
                title: "Planifica",
                links: [
                  { label: "Entradas, Tarifas y Promociones", href: "/tarifas" },
                  { label: "Contacto y FAQs", href: "/contacto" },
                ],
              },
              {
                title: "Redes",
                links: [
                  { label: "Instagram", href: "#" },
                  { label: "YouTube", href: "#" },
                  { label: "Twitter", href: "#" },
                ],
              },
            ]}
            centered
            className="mt-16"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
