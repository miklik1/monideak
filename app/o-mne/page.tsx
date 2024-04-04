import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";

export default function Home() {
  return (
    <main className="page page-background-side flex justify-center px-6 py-12">
      <div className="container content-wrapper">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="heading max-w-2xl">
            <h1 className="text-3xl  md:text-5xl mb-6">Ahoj, já jsem Monika</h1>
            <div className="max-w-[550px]">
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet consectetur. Blandit faucibus
                adipiscing id nam gravida pulvinar mus cras vulputate.Lorem
                ipsum dolor sit amet consectetur. Blandit faucibus adipiscing id
                nam gravida pulvinar mus cras vulputate.Lorem ipsum dolor sit
                amet consectetur.
              </p>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet consectetur. Blandit adipiscing id
                nam gravida pulvinar mus cras vulputate.Lorem ipsum dolor sit
                amet consectetur. Blandit faucibus adipiscing id nam gravida.
              </p>
            </div>
            <div className="">
              <Button href="sluzby" variant="variant-2">
                Jak vám můžu pomoci
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
