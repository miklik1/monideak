import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";

export default function Spoluprace() {
  return (
    <main className="spoluprace-page page-background-bottom-small  flex justify-center">
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row-reverse justify-between gap-8 mb-16">
          <div className="flex justify-center md:items-start">
            <Image
              className="relative"
              src="/oneonone-large.svg"
              alt="oneonone"
              width={438}
              height={421}
              priority
            />
          </div>
          <div className="textCont flex gap-8 flex-col text-justify">
            <p>
              <span className="highlight text-2xl">SPOLUPRÁCE 1:1</span> v
              podobě osobních konzultací je pro vás, pokud vám dává smysl na
              sobě pracovat, jste připraveni udělat změnu a máte rádi originální
              a praktická řešení.
            </p>
            <p>
              Pomohu vám objevit vaše skryté možnosti a nové cesty, jak
              realizovat vaše vize a sny. Najdeme způsob pro vaše snadnější
              rozhodování a fungování. Naučím vás tvořit si pro sebe podporující
              prostředí a podmínky, díky kterým budete moci s odvahou kráčet za
              tím, co si skutečně přejete a kam vás srdce volá.
            </p>
            <p>
              <span className="text-mylightred font-bold text-xl uppercase text-left">
                Individuální konzultační provázení
              </span>{" "}
              mi dává možnost se vám plně věnovat a soustředit se na vaše
              konkrétní témata. Budeme pracovat intenzivně a do hloubky.
              Zaměříme se také na integraci, tolik potřebnou pro dlouhodobě
              udržitelnou změnu.
            </p>
            <Card>
              <div className="p-8 md:p-10 text-left">
                <p className="text-2xl highlight font-bold">
                  SPOLUPRACÍ SE MNOU ZÍSKÁTE:
                </p>
                <ul className="list-disc pl-5">
                  <li>změnu mindsetu a pročištění mysli</li>
                  <li>
                    nový pohled na vaše téma a hlubší pochopení souvislostí
                  </li>
                  <li>praktická a efektivní řešení</li>
                  <li>svou originální strategii pro váš spokojený život</li>
                  <li>více jasnosti, lehkosti a radosti</li>
                  <li>propojení se svými dary a schopnostmi</li>
                  <li>posílení sebehodnoty, stability a rovnováhy</li>
                  <li>pozitivní energii a novou jiskru</li>
                  <li>mě, jako velkého fanouška vašeho posunu</li>
                </ul>
              </div>
            </Card>
            <p>
              Tvořím pro vás bezpečný a vyživující prostor, ve kterém budete mít
              mou plnou pozornost i respekt k vašemu osobnímu příběhu. Místo,
              kde budete moci býti sami sebou, kde vás nikdo nehodnotí ani
              nesoudí. Prostor který je určen jen VÁM.
            </p>
            <p>
              Je jedno na jakém místě v životě se teď momentálně nacházíte, z
              každého bodu se můžete posunout dál. Vše je možné, stačí se pro to
              rozhodnout a vykročit. Má mise, je podpořit vás v tom, že to
              dokážete.
            </p>
            <p>Setkání probíhají online (ZOOM)</p>
            <Card>
              <div className="text-left p-8 md:p-10 ">
                <p className="text-2xl highlight font-bold pb-6">
                  Možné varianty:
                </p>
                <div className="flex flex-row justify-between font-bold uppercase">
                  <p>Jednorázová konzultace</p>
                  <p>2 500 Kč</p>
                </div>
                <p className="mb-5">
                  80 minut - pokud potřebujete nový impuls, popostrčit nebo jen
                  získat nový pohled na vaše téma.
                </p>
                <div className="flex flex-row justify-between font-bold uppercase">
                  <p>Konzultační balíček</p>
                  <p>6 600 Kč</p>
                </div>
                <p className="mb-5">3 x 80 minut 1-2x měsíčně</p>
                <div className="flex flex-row justify-between font-bold uppercase">
                  <p>Dlouhodobá spolupráce</p>
                  <p>11 000 Kč</p>
                </div>
                <p>6 x 80 minut 1-2x měsíčně</p>
              </div>
            </Card>
            <p>
              Máte možnost využít{" "}
              <span className="uppercase font-bold">
                20 minutovou konzultaci{" "}
                <span className="text-mylightred">ZDARMA</span>
              </span>
              , na které se společně seznámíme a otevřeme téma, které chcete
              řešit. Zjistíme, zda vzájemná synergie v tuto chvíli dává smysl a
              budeme hledat ideální variantu případné spolupráce.
            </p>

            <div>
              <Button href="/kontakt" variant="variant-9">
                Rezervovat termín
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-between gap-8 mb-4">
          <div className="w-100 lg:w-1/2">
            <Card>
              <div className="p-8 lg:p-10 flex flex-col items-center gap-5">
                <Image
                  className="relative"
                  src="/images/review-pav.png"
                  alt="recenze"
                  width={120}
                  height={120}
                  priority
                  quality={100}
                />
                <p className="text-justify">
                  „Poskytovala jste mi důvěru a pocit bezpečí, které mi umožnily
                  otevřeně sdílet své myšlenky, obavy a cíle. Vaše empatie a
                  schopnost porozumění mi pomohly lépe si uvědomit svůj vlastní
                  potenciál a možnosti. Skrze své otázky a směrování jste mě
                  neustále motivovala k hlubšímu zamyšlení a hledání nových
                  pohledů na věci. Vaše schopnost naslouchat a vnímat nejen
                  slova, ale i jejich podtext, byla pro mě klíčová při
                  objevování sama sebe. Celkově jste mi nejen pomohla
                  identifikovat nové cesty a možnosti, ale také mi poskytla
                  odvahu a sebejistotu, abych se na tyto cesty vydala.“
                </p>
                <p className="self-start font-bold uppercase">
                  Pavlína Kukrlová
                </p>
              </div>
            </Card>
          </div>
          <div className="w-100 lg:w-1/2">
            <Card>
              <div className="p-8 lg:p-10 flex flex-col items-center gap-5">
                <Image
                  className="relative"
                  src="/images/review-mon.png"
                  alt="recenze"
                  width={120}
                  height={120}
                  priority
                  quality={100}
                />
                <div>
                  <p className="text-justify mb-5">
                    „Moni, je pro mou osobu bezpečný přístav, kde mohu nejen
                    zakotvit, ale také plně vyložit všechen nepořádek získaný na
                    dlouhé zaoceánské cestě životem. V tomto přístavu dostanu
                    péči a také možnost nahlédnout kam moje další cesta může
                    směřovat. Moni, je poslem odvahy, lásky a bezpečí, ve kterém
                    se nebojíte rozkvést.“
                  </p>
                  <p className="self-start font-bold uppercase">
                    Monika Urban Samasery
                  </p>
                  <a
                    className="self-start underline"
                    href="https://www.monikaur.cz"
                    target="_blank"
                  >
                    www.monikaur.cz
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
