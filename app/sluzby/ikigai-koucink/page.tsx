import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";

export default function Ikigai() {
  return (
    <main className="page ikigai-page page-background-bottom-small flex justify-center">
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row-reverse justify-between gap-8 mb-16">
          <div className="flex justify-center md:items-start">
            <Image
              className="relative"
              src="/ikigai-large.svg"
              alt="ikigai"
              width={438}
              height={421}
              priority
            />
          </div>
          <div className="textCont flex gap-8 flex-col text-justify">
            <p>
              <span className="highlight text-2xl">IKIGAI</span> je životní
              filosofie pocházející z Japonska, jejíž podstatou je žít naplněný
              život, který vás baví a dává vám smysl.
            </p>
            <p>
              Znát své IKIGAI znamená lépe porozumět sám sobě a svým potřebám.
              Žít své IKIGAI pak přináší do života více lehkosti, radosti,
              energie a zdraví.
            </p>
            <p>
              <span className="highlight text-2xl">IKIGAI KOUČINK</span> je
              intenzivní sebepoznávací proces, který vás dovede na to správné
              místo. Pojďte prozkoumat, kým opravdu jste, vaše dary, talenty a
              skutečná přání. Najděte hlubší smysl svého každodenního života a
              žijte jej v souladu se sebou i ostatními.
            </p>
            <div>
              <p className="text-lg text-mylightred font-bold">
                NA TÉTO OBJEVNÉ CESTĚ ZÍSKÁTE:
              </p>
              <ul className="list-disc pl-5 decoration-1">
                <li className="decoration-1">
                  nový podporující pohled na vás a váš život
                </li>
                <li>větší jasnost ve vašem dalším směřování a vizích</li>
                <li>odvahu činit rozhodnutí a kroky směřující za vašimi sny</li>
                <li>otevřené pole nových možností</li>
                <li>větší stabilitu a sebevědomí</li>
                <li>posun vpřed</li>
                <li>ucelený obraz toho kým opravdu jste</li>
                <li>kompas pro váš spokojený život</li>
                <li>bezpečný prostor pro váš nový nádech do života</li>
              </ul>
            </div>
            <p>
              IKIGAI KOUČINK je individuální 3 měsíční spolupráce, během které
              nás čeká úvodní schůzka a 5 společných setkání (cca 60 minut co 14
              dní), na kterých budeme postupně mapovat tématické okruhy, jež se
              dotýkají vašeho osobního i pracovního života.
            </p>
            <Card variant="variant-3">
              <div className=" gap-2 m-4 p-4 lg:p-6 text-left">
                <p className="highlight text-xl self-start">PRŮBĚH</p>
                <p>
                  0. Úvodní schůzka - 30 minut{" "}
                  <span className="text-mylightred font-bold">ZDARMA</span>
                  <br />
                  Ladíme se na sebe navzájem a na vaše téma, přiblížím vám
                  průběh celého procesu, zhodnotíme, zda nám vzájemná spolupráce
                  dává smysl.
                </p>
                <p className="text-mylightred font-bold mt-2">
                  NÁSLEDUJE 5 SEZENÍ:
                </p>
                <ol className="list-decimal pl-4">
                  <li>Co milujete (co je vaší vášní a činí vám radost)</li>
                  <li>
                    V čem vynikáte (vaše silné stránky a strategie úspěchu)
                  </li>
                  <li>
                    Co nesete světu (vaše dary, talenty a hodnoty, na kterých
                    můžete stavět)
                  </li>
                  <li>
                    Za co dostanete zaplaceno/energie nazpět (vaše vize, vědomí
                    sebehodnoty a hojnost ve vašem životě)
                  </li>
                  <li>
                    Závěrečné dotvoření uceleného obrazu, kým opravdu jste (vaše
                    IKIGAI)
                  </li>
                </ol>
              </div>
            </Card>
            <p>
              Během procesu budeme tvořit váš{" "}
              <span className="text-mylightred font-bold">IKIGAI BOOK</span> -
              vaší osobní knihu, kde budu zaznamenávat všechny podstatné
              “objevy” z vaší cesty. Kniha bude průběžně doplňována o
              sebekoučovací otázky pro váš hlubší ponor a ještě větší přínos z
              celého procesu. Sebekoučink je důležitou a nedílnou součástí této
              vaší cesty. 
            </p>
            <p>
              Na konci procesu si s mou podporou vytvoříte svůj{" "}
              <span className="text-mylightred font-bold">IKIGAI DIAGRAM</span>{" "}
              a odnesete si svůj{" "}
              <span className="text-mylightred font-bold">IKIGAI BOOK</span> s
              hodnotným obsahem. Jako BONUS ode mne obdržíte překvapení, které
              vás ještě více podpoří na vaší další cestě.
            </p>
            <p>Setkání probíhají online.</p>
            <div>
              <h2 className="text-xl md:text-2xl">
                Cena celého procesu je 14 000 Kč
              </h2>
              <p>(platba předem - možnost 2 splátek)</p>
            </div>
            <div>
              <Button href="/kontakt" variant="variant-9">
                Rezervovat termín
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-4">
          <div className="w-100 lg:w-1/2">
            <Card>
              <div className="p-8 lg:p-10 flex flex-col items-center gap-5">
                <Image
                  className="relative"
                  src="/images/review-val.png"
                  alt="recenze"
                  width={120}
                  height={120}
                  priority
                  quality={100}
                />
                <p className="text-justify">
                  „Počas našich sedení ste ma neustále prekvapovala svojím
                  vedením a schopnosťou analyzovať moje slová. S Vami som
                  postupovala hlboko do podstaty mojich problémov a postupne sa
                  mi podarilo vyriešiť mnohé z nich. Problémy sa vlastne
                  rozplynuli a ja som začala vnímať príležitosti. Každé sedenie
                  mi otváralo nové obzory a pomáhalo mi objavovať nové stránky
                  vlastnej osobnosti. Najväčší úžitok som získala v procese
                  hľadania odpovedí na otázky ohľadom mojej práce a harmonizácie
                  s každodennou rutinou. Vďaka Vám som objavila vnútorný pokoj a
                  naučila som sa žiť s väčšou ľahkosťou. Vaše pozitívne
                  naladenie a silná vnútorná energia ma vždy motivujú a na každé
                  naše stretnutie som sa tešila. Obdivujem Vašu schopnosť
                  nachádzať najlepšie riešenia a správne interpretovať moje
                  myšlienky a pocity. Vaša podpora ma viedla k tomu, aby som
                  mohla lepšie chápať seba samú a svoje možnosti v živote.“
                </p>
                <p className="self-start font-bold uppercase">
                  Valeriya Truskavetska
                </p>
              </div>
            </Card>
          </div>
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
                  „Překvapilo mě, jak hluboko a intenzivně tento proces zasáhl
                  do mých niterných rovin. Byla to nejen cesta k objevení
                  rovnováhy a nového smyslu v životě, ale také hluboký pohled do
                  mého nitra, který mi umožnil nahlédnout na věci z jiné
                  perspektivy a také mi umožnil lépe pochopit samu sebe. Byla to
                  pro mě zkušenost, která mi otevřela nové možnosti a přinesla
                  konkrétní výsledky. Jedním z nejdůležitějších přínosů bylo
                  obnovení víry v sebe sama a vlastní schopnosti.
                  Prostřednictvím koučinku jsem si uvědomila, že můžu dosáhnout
                  mnohem víc, než jsem si kdy představovala.“
                </p>
                <p className="self-start font-bold uppercase">
                  Pavlína Kukrlová
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
