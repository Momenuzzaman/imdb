import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

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
        <Providers>
          {/* header */}
          <Header />
          {/* navbar */}
          <Navbar />
          {/* search bar */}
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
