import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Kontaktujte mě prostřednictvím e-mailu monikadeak@gmail.com nebo mě najděte na sociálních sítích. Můžete si také rezervovat úvodní hovor pomocí tlačítka níže. Získejte možnost osobního setkání nebo si vyplňte kontaktní formulář pro další informace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
