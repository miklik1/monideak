import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Objevte moje služby a zjistěte, jak vám mohu pomoci na cestě k lepšímu životu. Ikigai koučink a individuální konzultační provázení pro vaše osobní a pracovní rozvoje. Získejte novou energii a jasnost pro vaši jedinečnou životní cestu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
