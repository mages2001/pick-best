import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SearchBar from "@/components/search-bar";


export const metadata: Metadata = {
  title: "Get Best Products",
  description: "get best products from all ecommerce sites in single click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full flex flex-col bg-[#dfd3bb]">
        <header>
          <SearchBar />
        </header>
        <section className="w-full h-full">
          {children}
        </section>
        <footer>

        </footer>
      </body>
    </html>
  );
}
