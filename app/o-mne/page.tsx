import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";

export default function Home() {
  return (
    <main className="page page-background-side flex justify-center px-6 py-12">
      <div className="container content-wrapper">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="heading max-w-2xl">
            <h1 className="text-3xl  md:text-6xl mb-6">Ahoj, já jsem Monika</h1>
            <p className="text-lg md:text-xl mb-6">
              Lorem ipsum dolor sit amet consectetur. Blandit faucibus
              adipiscing id nam gravida pulvinar mus cras vulputate.Lorem ipsum
              dolor sit amet consectetur. Blandit faucibus adipiscing id nam
              gravida pulvinar mus cras vulputate.Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <p className="text-lg md:text-xl mb-6">
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
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
