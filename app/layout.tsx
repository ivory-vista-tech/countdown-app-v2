import { ThemeProvider } from "@/providers/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import DataProvider from "@/providers/DataProvider";
import { Toaster } from "@/components/ui/toaster";

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
              {children}

              <Toaster />
            </DataProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
