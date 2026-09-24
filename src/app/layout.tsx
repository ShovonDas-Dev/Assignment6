import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export default function RootLayout({ children }:LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}  ` }>
         <ToastContainer/>
        <Navbar/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}