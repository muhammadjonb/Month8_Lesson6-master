import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries",
  description: "Some countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div
            style={{ transition: "0.5s" }}
            className="light:bg-slate-100 dark:bg-slate-800 transition"
          >
            <Header />
            <main className="min-h-screen">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
