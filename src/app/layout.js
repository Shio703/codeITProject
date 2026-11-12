import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeIT",
  description: "This is our first next.js project",
};

const linksArray = [
  {
    title: "Main",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Test page",
    path: "/test-page",
  },
  {
    title: "Todo App",
    path: "/todo",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header navigationData={linksArray} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
