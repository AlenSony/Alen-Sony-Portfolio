import type { Metadata } from "next";
import { Geist, Geist_Mono, Bitcount_Prop_Single } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import AmbientBackground from "@/components/ui/AmbientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bitcount = Bitcount_Prop_Single({
  subsets: ["latin"],
  variable: "--font-bitcount",
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
      className={`${geistSans.variable} ${geistMono.variable} ${bitcount.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground">
        <AmbientBackground />
        <NavBar />
        <main className="relative z-10 flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
