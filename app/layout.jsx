import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alcheringa",
  description: "Beta Portal Alcheringa'2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"/>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
