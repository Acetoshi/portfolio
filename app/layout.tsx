import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David LE GALL - Portfolio",
  description:
    "Développeur web fort d'une expérience en ingénierie, design industriel et management, je suis prêt à apporter ma curiosité et mes compétences à des projets nouveaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
