import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";

export default function Home() {
  return (
    <main className="page page-background-side flex justify-center px-6 py-12">
      <div className="container content-wrapper">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="heading">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-7">
              Pomáhám lidem,
              <br />
              kteří se chtějí rozvíjet
            </h1>
            <p className="text-1xl md:text-2xl">
              Objevte svou jedinečnost a žijte tak,
              <br />
              jak si skutečně přejete.
            </p>
            <div className="flex gap-2 sm:gap-6 flex-wrap my-8 md:mt-16">
              <Button href="o-mne" variant="variant-1">
                Kdo jsem
              </Button>
              <Button href="sluzby" variant="variant-2">
                Jak vám můžu pomoci
              </Button>
            </div>
          </div>
          <div className="image-section max-w-[70%] md:max-w-[50%] lg:max-w-[40%] mb-10">
            <Image
              src="/images/homepage.png"
              alt="Homepage Picture"
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
