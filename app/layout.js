import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akeshya",
  description: "Akeshya website clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/logo.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
