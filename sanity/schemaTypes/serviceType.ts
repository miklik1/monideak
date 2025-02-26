import { defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Služby',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Název',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Hlavní obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Krátký popis',
      type: 'text',
      rows: 4,
    },
    {
      name: 'body',
      title: 'Obsah',
      type: 'blockContent',
    },
    {
      name: 'price',
      title: 'Cena',
      type: 'number',
    },
    {
      name: 'duration',
      title: 'Délka trvání',
      type: 'string',
      description: 'Např. "60 minut" nebo "3 měsíce"'
    },
    {
      name: 'order',
      title: 'Pořadí zobrazení',
      type: 'number',
      description: 'Nižší číslo = zobrazí se výše'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}) 