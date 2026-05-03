import type { Metadata } from "next";
import "modern-normalize/modern-normalize.css";
import { Montserrat, Inter } from "next/font/google";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"], //  Medium, Bold
  variable: "--font-family",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["600"], // SemiBold
  variable: "--second-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RivneradaEconomy",
  description:
    "Департамент економічного розвитку Рівненської міської ради. Розвиваємо економіку Рівного для добробуту громади та успішного майбутнього",
  icons: {
    icon: "/rivne_logo_big.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <TanStackProvider>
          <Header />
          <main> {children}</main>
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </TanStackProvider>
      </body>
    </html>
  );
}
