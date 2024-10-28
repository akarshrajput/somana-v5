import { CacheProvider } from "@chakra-ui/next-js";
import Header from "./_components/main/Header";
import { ThemeProvider } from "./_components/providers/ThemeProvider";
import "./globals.css";
import { Rubik } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const lato = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Somana - Home",
  description: "Somana services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} dark:bg-neutral-800 antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CacheProvider>
            <ChakraProvider>
              <div>
                <div className="fixed w-full z-10">
                  <Header />
                </div>
                <p className="h-12"></p>
                {children}
              </div>
            </ChakraProvider>
          </CacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
