import DarkLightSwitch from "@/components/DarkLightSwitcher";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import UiContext from "@/components/UiContext";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiContext>
          <NavBar />
          <DarkLightSwitch />
          <main> {children}</main>
          <Footer />
        </UiContext>
      </body>
    </html>
  );
}
