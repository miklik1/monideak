import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";

export default function Home() {
  return (
    <main className="page">
      <div className="cont px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="heading">
            <h1 className="text-3xl md:text-6xl mb-7">
              Pomáhám lidem,
              <br />
              kteří se chtějí rozvíjet
            </h1>
            <p className="text-2xl md:text-3xl">
              Objevte svou jedinečnost a žijte tak,
              <br />
              jak si skutečně přejete.
            </p>
            <div className="flex gap-2 sm:gap-6 flex-wrap my-8 md:mt-16">
              <Button href="o-mne">Kdo jsem</Button>
              <Button href="sluzby" variant="variant-2">
                Jak vám můžu pomoci
              </Button>
            </div>
          </div>
          <div className="image-section p-4">
            <Image
              className="relative"
              src="/images/homepage.png"
              alt="Homepage Picture"
              width={473}
              height={704}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
