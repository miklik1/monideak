import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";
import ContactForm from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <main className="page page-background-bottom flex justify-start px-6 py-12">
      <div className="container content-wrapper !my-0">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-start justify-center gap-12">
            <h1 className="text-4xl md:text-6xl">Kontakt</h1>
            <p className="text-xl font-bold ">monideak75@gmail.com</p>
            <div className="flex gap-x-8">
              <Image
                className="relative"
                src="/icons/facebook.svg"
                alt="facebook"
                width={32}
                height={32}
                priority
              />
              <Image
                className="relative"
                src="/icons/instagram.svg"
                alt="instagram"
                width={32}
                height={32}
                priority
              />
            </div>
            <div>
              <Button variant="variant-4" href="https://www.reservio.com/">
                <div className="flex">
                  Rezervujte si úvodní hovor
                  <Image
                    className="relative ml-2"
                    src="/icons/external-link.svg"
                    alt="link"
                    width={24}
                    height={24}
                    priority
                  />
                </div>
              </Button>
            </div>
          </div>
          <div className="image-section mb-10">
            <Image
              src="/images/contact.png"
              alt="kontakt foto"
              width={408}
              height={427}
              priority
              quality={75}
            />
          </div>
        </div>
        {/* <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <ContactForm />
          <ContactForm />
        </div> */}
      </div>
    </main>
  );
}
