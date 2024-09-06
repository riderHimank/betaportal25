import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alcheringa",
  description: "Beta Portal Alcheringa'2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
