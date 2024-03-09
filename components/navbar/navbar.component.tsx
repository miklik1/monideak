import Image from "next/image";
import Button from "../button/button.component";
import "./navbar.styles.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarContent">
        <Link href="/">
          <Image
            className="relative pr-8 sm:pr-0"
            src="/logo.svg"
            alt="Monika Deakova Ko ucink a Mentoring Logo"
            width={229}
            height={49}
            priority
          />
        </Link>
        <Button href="kontakt">Kontakt</Button>
      </div>
    </div>
  );
}
