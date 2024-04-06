import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page page-background-side-desktop-only flex justify-center px-6 py-16">
      <div className="container content-wrapper">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-mylightred">
              Monika Deáková
            </h1>
            <p className="text-lg max-w-[540px] text-mylightred">
              Certifikovaná IKIGAI koučka a life-balance mentorka s více než 20
              letou zkušeností v oblasti podnikání a práce s lidmi. Manželka,
              maminka dvou dospělých dětí a vášnivá tvůrkyně domova.
            </p>
            <p className="text-lg max-w-[540px]">
              Mým záměrem je ukázat vám nové možnosti, jak zvládat životní výzvy
              s větší lehkostí, posílit váš laskavý a respektující přístup k
              sobě a změnám a pomoci vám nalézt více síly a energie pro vaše
              každodenní kroky.
            </p>
            <p className="text-lg max-w-[540px]">
              Díky své intuici a schopnosti vidět pod povrch, dokážu
              identifikovat potenciál a hlubší smysl, propojovat myšlenky do
              souvislostí, za slovy vidět jejich skutečný obsah a nalézat nová a
              netradiční řešení.
            </p>
            <p className="text-lg max-w-[540px]">
              Jsem žena s akční energií, která dává procesy do pohybu, přináší
              nové impulsy a probouzí k životu. Ráda dělám věci s přesahem a
              jsou mi vlastní jasnost, jednoduchost, praktičnost a autenticita.
            </p>
            <p className="text-lg max-w-[540px]">
              Jsem přesvědčena, že vše se vším souvisí a každý to má /právo mít/
              jinak. Sama jdu celý život svou vlastní cestou. Už od dětství mě
              baví pozorovat, zkoumat a dávat do souvislostí vše, co se děje
              kolem i uvnitř mě a na základě toho si tvořit svůj život. Miluji
              výzvy, jinakost, přírodu a cestování, dobré jídlo a inspirativní
              lidi. Obdivuji vše krásné tvořené srdcem a lidskou rukou a místa,
              která mají “duši”.
            </p>
            <p className="text-lg max-w-[540px]">
              Mými životními tématy jsou laskavé vztahy a prostředí a skrze to,
              co sama žiji, chci inspirovat a motivovat ostatní k jejich tvorbě.
            </p>
            <p className="text-lg max-w-[540px]">
              U svých klientů oceňuji a vítám aktivní a pozitivní přístup, touhu
              posouvat se vpřed a ochotu zkoumat a zkoušet nové.
            </p>
            <div className="flex flex-row items-end">
              <p className="text-lg">Pokud máte zájem o mé&nbsp;</p>
              <Link
                href="sluzby"
                className="text-lg max-w-[540px] text-mylightred font-bold uppercase"
              >
                služby
              </Link>
            </div>

            <div>
              <Button href="sluzby" variant="variant-8">
                Kontaktujte mě
              </Button>
            </div>
          </div>

          <div className="image-section max-w-[70%] md:max-w-[50%] lg:max-w-[40%] mb-10">
            <Image
              className="relative"
              src="/images/about.png"
              alt="o mně fotka"
              width={473}
              height={704}
              style={{ width: "auto", height: "auto" }}
              priority
              quality={75}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
