import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";
import ContactForm from "@/components/forms/form-contact";
import NewsletterForm from "@/components/forms/form-newsletter";

export default function Contact() {
  return (
    <main className="page page-background-bottom flex justify-start px-6 py-12">
      <div className="container content-wrapper flex !my-0 flex-col justify-between">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 lg:mb-12">
          <div className="flex flex-col items-center justify-center gap-12 lg:w-1/2 text-left">
            <div className="flex flex-col gap-12">
              <h1 className="text-4xl md:text-6xl">Kontakt</h1>
              <p className="text-xl font-bold ">info@monideak.cz</p>
              <div className="flex gap-x-8">
                <a
                  href="https://www.facebook.com/monika.deakova.16"
                  target="_blank"
                >
                  <Image
                    className="relative"
                    src="/icons/facebook.svg"
                    alt="facebook"
                    width={32}
                    height={32}
                    priority
                  />
                </a>
                <a href="https://www.instagram.com/moni_deak/" target="_blank">
                  <Image
                    className="relative"
                    src="/icons/instagram.svg"
                    alt="instagram"
                    width={32}
                    height={32}
                    priority
                  />
                </a>
              </div>
              <div>
                <Button
                  variant="variant-10"
                  href="https://calendly.com/monideak/meeting"
                >
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
          </div>
          <div className="image-section mb-10 lg:w-1/2">
            <Image
              src="/images/kontakt.png"
              alt="kontakt foto"
              width={408}
              height={427}
              priority
              quality={75}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center lg:items-start gap-12 lg:gap-20">
          <ContactForm />
          <NewsletterForm />
        </div>
      </div>
    </main>
  );
}
