import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";

export default function Ikigai() {
  return (
    <main className="ikigai-page flex justify-center">
      <div className="container p-4 flex flex-col lg:flex-row-reverse justify-between">
        <div className="flex justify-center xl:items-start py-4 xl:p-10">
          <Image
            className="relative"
            src="/ikigai-large.svg"
            alt="ikigai"
            width={438}
            height={421}
            priority
          />
        </div>
        <div className="textCont flex gap-8 flex-col px-2 py-4 xl:p-10">
          <p>
            <span className="highlight text-xl">IKIGAI</span> je moudrá
            filosofie pocházející z Japonska, jejíž podstatou je žít naplněný
            život, který vás baví a dává vám smysl. 
          </p>
          <p>
            Znát své IKIGAI znamená lépe porozumět sám sobě a svým potřebám. Žít
            své IKIGAI pak přináší do života více lehkosti, radosti, energie a
            zdraví.
          </p>
          <p>
            <span className="highlight text-xl">IKIGAI KOUČINK</span> je
            intenzivní sebepoznávací proces, který vás dovede na to správné
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
              <li>větší stabilitu a sebevědomí</li>
              <li>posun vpřed</li>
              <li>ucelený obraz toho kým opravdu jste</li>
              <li>kompas pro váš spokojený život</li>
              <li>bezpečný prostor pro váš nový nádech do života</li>
            </ul>
          </div>
          <p>IKIGAI KOUČINK je individuální 3 měsíční spolupráce.</p>
          <p>
            Čeká nás úvodní schůzka a 5 společných setkání ( cca 60 minut co 14
            dní), na kterých budeme postupně mapovat tématické okruhy, jež se
            dotýkají vašeho osobního i pracovního života.
          </p>
          <Card variant="variant-3">
            <div className="cardCont gap-2 m-4 p-2 text-left">
              <p>
                0. Úvodní schůzka - 30 minut{" "}
                <span className="highlight">ZDARMA</span>
                <br />
                Ladíme se na sebe navzájem a na vaše téma, přiblížím vám průběh
                celého procesu, zhodnotíme, zda nám vzájemná spolupráce dává
                smysl.
              </p>
              <p>Následuje 5 sezení:</p>
              <ol className="list-decimal pl-4">
                <li>Co milujete (co je vaší vášní a činí vám radost)</li>
                <li>V čem vynikáte (vaše silné stránky a strategie úspěchu)</li>
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
            <span className="highlight">IKIGAI BOOK</span> - vaší osobní knihu,
            kde budu zaznamenávat všechny podstatné “objevy” z vaší cesty. Kniha
            bude průběžně doplňována o sebekoučovací otázky pro váš hlubší ponor
            a ještě větší přínos z celého procesu. Sebekoučink je důležitou a
            nedílnou součástí této vaší cesty. 
          </p>
          <p>
            Na konci procesu si s mou podporou vytvoříte svůj{" "}
            <span className="highlight">IKIGAI DIAGRAM</span> a odnesete si svůj{" "}
            <span className="highlight">IKIGAI BOOK</span> s hodnotným obsahem.
            Jako BONUS ode mne obdržíte překvapení, které vás ještě více podpoří
            na vaší další cestě.
          </p>
          <p>Setkání probíhají online (ZOOM)</p>
          <div>
            <h2 className="text-xl md:text-2xl">
              Cena celého procesu je 14 000 Kč
            </h2>
            <p>(platba předem - možnost 2 splátek)</p>
          </div>
          <div>
            <Button href="/kontakt" variant="variant-3">
              Mám zájem o úvodní setkání zdarma
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
