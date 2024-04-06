import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";
import Navbar from "@/components/navbar/navbar.component";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const arima = localFont({
  src: [
    {
      path: "../public/fonts/ArimaMadurai-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-arima",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monika Deáková - Koučink a Mentoring",
  description:
    "Monika Deáková - Certifikovaná IKIGAI koučka a life-balance mentorka vám pomáhá nalézt lehkost a sílu pro každodenní životní výzvy. Objevte nové možnosti a žijte s laskavým přístupem k sobě.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={arima.className}>
        <Navbar />
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
