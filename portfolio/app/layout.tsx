import type { Metadata } from "next";
import { Geist, Geist_Mono, Stalinist_One, Lacquer } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stalinistOne = Stalinist_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-stalinist",
});

const lacquer = Lacquer({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lacquer",
});

export const metadata: Metadata = {
  title: "Alen Sony | Full-Stack Developer",
  description: "Portfolio of Alen Sony, Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${stalinistOne.variable} ${lacquer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className="flex-1 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
