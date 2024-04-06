import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Spolupráce 1:1 s Monikou Deákovou vám přináší změnu mindsetu, hlubší pochopení a praktická řešení pro váš spokojený život. Vyberte si individuální konzultační provázení pro vaši transformaci.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
