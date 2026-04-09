import type { Metadata } from "next";
import { Anton, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "BESTIA | INGENIERÍA DE RESISTENCIA",
  description: "E-commerce industrial de alta gama. Crudo, pesado, indestructible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${anton.variable} ${robotoMono.variable}`}>
      <body className="antialiased font-mono bg-background text-foreground selection:bg-industrial-yellow selection:text-foreground">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
