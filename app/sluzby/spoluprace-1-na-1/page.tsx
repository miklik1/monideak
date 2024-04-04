import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";

export default function Spoluprace() {
  return (
    <main className="spoluprace-page page-background-bottom-small  flex justify-center">
      <div className="container p-4 flex flex-col lg:flex-row-reverse justify-between gap-4">
        <div className="flex justify-center md:items-start py-4 xl:p-10">
          <Image
            className="relative"
            src="/oneonone-large.svg"
            alt="oneonone"
            width={438}
            height={421}
            priority
          />
        </div>
        <div className="textCont flex gap-8 flex-col px-2 py-4 xl:p-10">
          <p>
            <span className="highlight text-2xl">SPOLUPRÁCE 1:1</span> v podobě
            osobních konzultací je pro vás, pokud vám dává smysl na sobě
            pracovat, jste připraveni udělat změnu a máte rádi originální a
            praktická řešení.
          </p>
          <p>
            Pomohu vám objevit vaše skryté možnosti a nové cesty, jak realizovat
            vaše vize a sny. Najdeme způsob pro vaše snadnější rozhodování a
            fungování. Naučím vás tvořit si pro sebe podporující prostředí a
            podmínky, díky kterým budete moci s odvahou kráčet za tím, co si
            skutečně přejete a kam vás srdce volá.
          </p>
          <p>
            <span className="highlight text-xl uppercase">
              Individuální konzultační provázení
            </span>{" "}
            mi dává možnost se vám plně věnovat a soustředit se na vaše
            konkrétní témata. Budeme pracovat intenzivně a do hloubky. Zaměříme
            se také na integraci, tolik potřebnou pro dlouhodobě udržitelnou
            změnu.
          </p>
          <Card>
            <div className="p-10">
              <p className="text-2xl text-mylightred font-bold">
                SPOLUPRACÍ SE MNOU ZÍSKÁTE:
              </p>
              <ul className="list-disc pl-5">
                <li>změnu mindsetu a pročištění mysli</li>
                <li>nový pohled na vaše téma a hlubší pochopení souvislostí</li>
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
            mou plnou pozornost i respekt k vašemu osobnímu příběhu. Místo, kde
            budete moci býti sami sebou, kde vás nikdo nehodnotí ani nesoudí.
            Prostor který je v danou chvíli určen jen VÁM.
          </p>
          <p>
            Je jedno na jakém místě v životě se teď momentálně nacházíte, z
            každého bodu se můžete posunout výš a dál. Vše je možné, stačí se
            pro to rozhodnout a vykročit. Má mise, je podpořit vás v tom, že to
            dokážete.Je jedno na jakém místě v životě se teď momentálně
            nacházíte, z každého bodu se můžete posunout výš a dál. Vše je
            možné, stačí se pro to rozhodnout a vykročit. Má mise, je podpořit
            vás v tom, že to dokážete. vás v tom, že to dokážete. vás v tom, že
            to dokážete.
          </p>
          <p>
            Preferuji dlouhodobější spolupráci s ohledem na vytvoření vzájemného
            důvěryhodného vztahu a na průběh transformace, která se odehrává v
            čase.
          </p>
          <div>
            <p className="highlight text-2xl">Jak to probíhá:</p>
            <p>
              <span className="highlight text-lg uppercase">Úvodní hovor</span>{" "}
              - 30 minut zdarma - ladíme se na sebe navzájem a otevíráme téma,
              které chcete řešit, zjistíme, zda vzájemná synergie v tuto chvíli
              dává smysl a hledáme ideální variantu spolupráce:
            </p>
          </div>
          <div>
            <p>
              <span className="highlight text-lg uppercase">
                Jednorázová konzultace
              </span>{" "}
              - pokud potřebujete nový impuls, popostrčit nebo jen získat nový
              pohled na vaše téma.
            </p>
            <p>
              <span className="highlight text-lg uppercase">
                Konzultační balíček
              </span>{" "}
              - 3 x 60 minut
            </p>
            <p>
              <span className="highlight text-lg uppercase">
                Dlouhodobá spolupráce
              </span>{" "}
              - 6 x 60 minut
            </p>
          </div>

          <div>
            <Button href="/kontakt" variant="variant-7">
              To chci
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
