import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Objevte životní filosofii IKIGAI a nechte se provést intenzivním procesem IKIGAI KOUČINK. Získejte jasnost, odvahu a stabilní směřování pro váš naplněný život.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
