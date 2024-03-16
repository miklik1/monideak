import Image from "next/image";
import "./page.styles.scss";
import Button from "@/components/button/button.component";
import Card from "@/components/card/card.component";
import ContactForm from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <main className="page page-background-bottom flex flex-col justify-center items-center px-6 py-6">
        <div className="container content-wrapper flex gap-8 flex-col md:flex-row items-center justify-between">
          <div className="heading max-w-2xl">
            <h1 className="text-4xl md:text-6xl mb-4 md:mb-10">Kontakt</h1>
            <p className="text-xl font-bold mb-4 md:mb-10">
              monikadeak@gmail.com
            </p>
            <div className="flex gap-x-8 mb-4 md:mb-10">
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
              <Image
                className="relative"
                src="/icons/linkedin.svg"
                alt="linkedin"
                width={32}
                height={32}
                priority
              />
            </div>
            <div>
              <Button variant="variant-4" href="https://www.reservio.com/">
                Rezervujte si úvodní hovor
              </Button>
            </div>
          </div>
          <div className="image-section p-4">
            <Image
              className="relative"
              src="/images/contact.png"
              alt="kontakt foto"
              width={408}
              height={427}
              priority
            />
          </div>
        </div>
        <div className="container flex gap-8 md:gap-16 flex-col md:flex-row items-center justify-between">
          <ContactForm />
          <ContactForm />
        </div>
    </main>
  );
}
