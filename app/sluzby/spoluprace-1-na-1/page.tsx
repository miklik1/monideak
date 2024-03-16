import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";
import Link from "next/link";

export default function Spoluprace() {
  return (
    <main className="spoluprace-page flex justify-center">
      <div className="container p-4 flex flex-col lg:flex-row justify-between">
        <div className="textCont flex gap-8 flex-col px-2 py-4 xl:p-10">
          <Link href="/sluzby">{"<- Zpět"}</Link>
          <h1 className="my-4 text-4xl md:text-6xl">Spolupráce 1 na 1</h1>
          <div>
            <p>Podpora na vaší cestě k životní spokojenosti a svobodě.</p>
            <ul className="list-disc pl-5">
              <li>Kdo jsem a kam jdu</li>
              <li>Rozvoj potenciálu</li>
              <li>Objevení smyslu a poslání</li>
              <li>Posílení sebehodnoty</li>
            </ul>
          </div>
          <h3 className="text-2xl font-bold">Na čem můžeme spolupracovat</h3>
          <p>
            Intenzivní sebepoznávací proces, který vás dovede na to správné
            místo. Pojďme prozkoumat kým opravdu jste, vaše talenty, dary a
            skutečná přání.
          </p>
          <h3 className="text-2xl font-bold">Jak mentoring probíhá</h3>
          <p>
            Intenzivní sebepoznávací proces, který vás dovede na to správné
            místo. Pojďme prozkoumat kým opravdu jste, vaše talenty, dary a
            skutečná přání. Intenzivní sebepoznávací proces, který vás dovede na
            to správné místo. Pojďme prozkoumat kým opravdu jste, vaše talenty,
            dary a skutečná přání.
          </p>
          <div>
            <Button href="/kontakt" variant="variant-4">
              Rezervovat si termín
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
