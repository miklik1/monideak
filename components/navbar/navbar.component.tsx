"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./navbar.styles.scss";

export default function Navbar() {
  const pathname = usePathname();
  const [isKontaktPage, setIsKontaktPage] = useState(false);

  useEffect(() => {
    setIsKontaktPage(pathname === "/kontakt");
  }, [pathname]);

  return (
    <div className="navbar">
      <div className="container navbarContent">
        <Link href="/">
          <Image
            className="relative pr-8"
            src="/logo.svg"
            alt="Monika Deakova Koucink a Mentoring Logo"
            width={229}
            height={49}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>
        <div className="flex flex-col sm:flex-row items-end">
          <Button href="/sluzby">
            Nabídka
          </Button>
          {!isKontaktPage && (
            <Button variant="variant-6" href="/kontakt">
              Kontakt
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
