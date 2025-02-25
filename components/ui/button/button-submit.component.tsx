import Link from "next/link";
import { Inter } from "next/font/google";
import "./button.styles.scss";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

export type TButtonProps = {
  href?: string;
  bgColor?: string;
  variant?: string; // New prop for the button variant
  children: ReactNode;
};

export default function ButtonSubmit({
  href,
  bgColor,
  variant,
  children,
}: TButtonProps) {
  const backgroundUrl = `/buttons/${variant}.svg`;

  const buttonStyle = {
    background: `no-repeat center/100% url("${backgroundUrl}")`,
  };

  return (
    <button>
      <div
        className={`${inter.className} ${!variant && "md:mr-8 black"} ${
          (variant === "variant-6" || variant === "variant-contact") && "black"
        } button`}
        style={buttonStyle}
      >
        {children}
      </div>
    </button>
  );
}
