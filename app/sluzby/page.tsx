import { client } from '@/sanity/lib/client'
import { servicesQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import "./page.styles.scss";
import { Button } from "@/components/ui/button";
import Card from "@/components/card/card.component";

export const revalidate = 60

interface Service {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage: any
  excerpt: string
  price: number
  duration: string
}

async function getServices() {
  const services = await client.fetch(servicesQuery)
  return services
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <main className="page page-background-bottom flex justify-center px-1 md:px-6 py-6">
      <div className="container content-wrapper">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl mb-8 mt-8 lg:mb-16 lg:mt-0">
          Jak vám můžu pomoci
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service) => (
            <Link 
              key={service._id}
              href={`/sluzby/${service.slug.current}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
                {service.mainImage && (
                  <div className="relative aspect-video">
                    <Image
                      src={urlFor(service.mainImage).url()}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                  {service.excerpt && (
                    <p className="text-gray-600 mb-4">{service.excerpt}</p>
                  )}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    {service.duration && (
                      <span>⏱ {service.duration}</span>
                    )}
                    {service.price && (
                      <span>💰 {service.price} Kč</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
