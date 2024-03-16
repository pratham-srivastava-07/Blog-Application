import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { ThemeContextProvider } from "../context/ThemeContext";
import ThemeProvider from "../context/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ThemeContextProvider>
        <ThemeProvider>
        <Navbar/>
        <main>
          {children}
          </main>
          <Footer/>
        </ThemeProvider>
       </ThemeContextProvider>
      </body>
    </html>
  );
}
