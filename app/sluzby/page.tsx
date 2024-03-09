import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";

export default function Services() {
  return (
    <main className="service-page flex justify-center">
      <div className="container flex gap-8 flex-col xl:flex-row items-center justify-between p-8">
        <Card>
          <div className="cardCont gap-3 m-4 p-2">
            <Image
              className="relative"
              src="/ikigai.svg"
              alt="ikigai"
              width={104}
              height={100}
              priority
            />

            <h2 className="text-2xl my-1">Ikigai koučink</h2>
            <p>
              je intenzivní sebepoznávací proces, který vás dovede na to správné
              místo. Pojďte prozkoumat, kým opravdu jste, vaše dary, talenty a
              skutečná přání. Najděte hlubší smysl svého každodenního života a
              žijte jej v souladu se sebou i ostatními.
            </p>
            <div>
              <p>Na této objevné cestě získáte:</p>

              <ul className="list-disc pl-5">
                <li>nový podporující pohled na vás a váš život</li>
                <li>větší jasnost ve vašem dalším směřování a vizích</li>
                <li>odvahu činit rozhodnutí a kroky směřující za vašimi sny</li>
                <li>otevřené pole nových možností</li>
              </ul>
            </div>
            <div>
              <Button href="sluzby/ikigai-koucink" variant="variant-1">
                Zjistit více
              </Button>
            </div>
          </div>
        </Card>
        <Card variant="variant-2">
          <div className="cardCont gap-3 m-4 p-2">
            <Image
              className="relative"
              src="/oneonone.svg"
              alt="spoluprace 1 na 1"
              width={112}
              height={104}
              priority
            />

            <h2 className="text-2xl my-1">Spolupráce 1 na 1</h2>
            <p>
              je intenzivní sebepoznávací proces, který vás dovede na to správné
              místo. Pojďte prozkoumat, kým opravdu jste, vaše dary, talenty a
              skutečná přání. Najděte hlubší smysl svého každodenního života a
              žijte jej v souladu se sebou i ostatními.
            </p>
            <div>
              <p>Na této objevné cestě získáte:</p>

              <ul className="list-disc pl-5">
                <li>nový podporující pohled na vás a váš život</li>
                <li>větší jasnost ve vašem dalším směřování a vizích</li>
                <li>odvahu činit rozhodnutí a kroky směřující za vašimi sny</li>
                <li>otevřené pole nových možností</li>
              </ul>
            </div>
            <div>
              <Button href="sluzby/spoluprace-1-na-1" variant="variant-1">
                Zjistit více
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
