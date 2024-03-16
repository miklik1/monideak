import Link from "next/link";
import { Inter } from "next/font/google";
import "./button.styles.scss";
const inter = Inter({ subsets: ["latin"] });

export type TButtonProps = {
  href: string;
  bgColor?: string;
  variant?: string; // New prop for the button variant
  children: string;
};

export default function Button({
  href,
  bgColor,
  variant = "variant-1",
  children,
}: TButtonProps) {
  const backgroundUrl = `/buttons/${variant}.svg`;

  const buttonStyle = {
    background: `no-repeat center/100% url("${backgroundUrl}")`,
  };

  return (
    <Link href={href}>
      <div className={`${inter.className} button`} style={buttonStyle}>
        {children}
      </div>
    </Link>
  );
}
