import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";

export default function Services() {
  return (
    <main className="page page-background-bottom flex justify-center px-1 md:px-6 py-6">
      <div className="container content-wrapper">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl mb-8 mt-8 lg:mb-16 lg:mt-0">
          Jak vám můžu pomoci
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-10">
          <Card>
            <div className="cardCont gap-3">
              <Image
                className="relative"
                src="/ikigai.svg"
                alt="ikigai"
                width={104}
                height={100}
                priority
              />

              <h2 className="text-2xl mb-1 mt-2 text-mybrown font-bold">
                Ikigai koučink
              </h2>
              <p className="text-myred">
                Cesta sebepoznání, na které lépe porozumíte tomu, kým opravdu
                jste a budete se tak moci v životě posunout tam, kde si přejete
                být. Najděte a žijte svůj vlastní styl života, který vás bude
                bavit a který si zamilujete.
              </p>
              <div>
                <Button href="sluzby/ikigai-koucink" variant="variant-1">
                  Zjistit více
                </Button>
              </div>
            </div>
          </Card>
          <Card variant="variant-2">
            <div className="cardCont gap-3">
              <Image
                className="relative"
                src="/oneonone.svg"
                alt="spoluprace 1 na 1"
                width={112}
                height={104}
                priority
              />

              <h2 className="text-2xl mb-1 mt-2 text-mybrown font-bold">
                Spolupráce 1 na 1
              </h2>
              <p className="text-myred">
                Individuální konzultační provázení a podpora pro váš další
                rozvoj a pro změnu vašeho osobního i pracovního života k
                lepšímu. Objevte pro sebe nové možnosti a s větší jasností a
                novou energií pokračujte na vaší jedinečné cestě životem.
              </p>
              <div>
                <Button href="sluzby/spoluprace-1-na-1" variant="variant-1">
                  Zjistit více
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
