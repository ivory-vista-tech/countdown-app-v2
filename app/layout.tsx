import { ThemeProvider } from "@/providers/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import DataProvider from "@/providers/DataProvider";
import Navbar from "@/components/nav/Navbar";
import Sidebar from "@/components/nav/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aeon Timer",
  description:
    "This is Aeon Timer Application for effective event time management",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DataProvider>
              <main className="max-w-screen w-screen h-screen max-h-screen">
                <Navbar />

                <div className="flex w-screen">
                  <Sidebar />

                  <div className="flex-1">{children}</div>
                </div>
              </main>
            </DataProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
