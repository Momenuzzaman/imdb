import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "favicon.ico",
  },
  title: "IMDb Clone",
  description: "This is IMDb Clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* header */}
        <Header />
        {children}
      </body>
    </html>
  );
}
