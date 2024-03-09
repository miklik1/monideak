import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";

export default function Home() {
  return (
    <main className="home-page flex justify-center">
      <div className="background" />
      <div className="container flex gap-8 flex-col xl:flex-row items-center justify-between p-8">
        <div className="heading flex gap-8 max-w-2xl">
          <h1 className="text-3xl md:text-6xl">Ahoj, já jsem Monika</h1>
          <p className="text-2xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Blandit faucibus adipiscing
            id nam gravida pulvinar mus cras vulputate.Lorem ipsum dolor sit
            amet consectetur. Blandit faucibus adipiscing id nam gravida
            pulvinar mus cras vulputate.Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="text-2xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Blandit adipiscing id nam
            gravida pulvinar mus cras vulputate.Lorem ipsum dolor sit amet
            consectetur. Blandit faucibus adipiscing id nam gravida.
          </p>
          <div className="">
            <Button href="sluzby" variant="variant-2">
              Jak vám můžu pomoci
            </Button>
          </div>
        </div>
        <div className="image-section p-4">
          <Image
            className="relative"
            src="/images/about.png"
            alt="o mně fotka"
            width={473}
            height={704}
            priority
          />
        </div>
      </div>
    </main>
  );
}
