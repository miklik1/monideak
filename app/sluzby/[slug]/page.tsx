import { client } from '@/sanity/lib/client'
import { serviceBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { Button } from "@/components/ui/button"
import Card from "@/components/card/card.component"
import styles from "./page.module.scss"
import { Metadata } from 'next'

export const revalidate = 60

interface Service {
  title: string
  mainImage: any
  body: any
  price: number
  duration: string
}

async function getService(slug: string) {
  const service = await client.fetch(serviceBySlugQuery, { slug })
  return service
}

// This generates the paths at build time
export async function generateStaticParams() {
  const services = await client.fetch(`*[_type == "service"]{ slug }`)
  return services.map((service: { slug: { current: string } }) => ({
    slug: service.slug.current,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const service = await getService(params.slug)
  
  if (!service) {
    return {
      title: 'Služba nenalezena'
    }
  }

  return {
    title: service.title,
  }
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string }
}) {
  const service = await getService(params.slug)

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Služba nenalezena</h1>
      </div>
    )
  }

  return (
    <main className={`page page-background-bottom-small flex justify-center ${styles.servicePage}`}>
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row-reverse justify-between gap-8 mb-16">
          {service.mainImage && (
            <div className="flex justify-center md:items-start">
              <div className="relative w-[438px] h-[421px]">
                <Image
                  src={urlFor(service.mainImage).url()}
                  alt={service.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}
          
          <div className="textCont flex gap-8 flex-col text-justify">
            <h1 className="highlight text-2xl">{service.title}</h1>
            
            <div className="flex gap-4 text-mylightred font-bold">
              {service.duration && (
                <span className="flex items-center gap-1">
                  <span>⏱</span> {service.duration}
                </span>
              )}
              {service.price && (
                <span className="flex items-center gap-1">
                  <span>💰</span> {service.price} Kč
                </span>
              )}
            </div>

            <div className="prose prose-lg max-w-none">
              <PortableText 
                value={service.body} 
                components={{
                  types: {
                    image: ({value}) => (
                      <div className="relative w-full aspect-video my-8">
                        <Image
                          src={urlFor(value).url()}
                          alt={value.alt || ' '}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    ),
                  },
                  marks: {
                    highlight: ({children}) => (
                      <span className="highlight text-2xl">{children}</span>
                    ),
                  },
                }}
              />
            </div>

            <div className="mt-8">
              <Button href="/kontakt" variant="variant-9">
                Rezervovat termín
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 