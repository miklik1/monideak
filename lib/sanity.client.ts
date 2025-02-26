import { createClient } from 'next-sanity'
import { cache } from 'react'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // We'll set this to true for production
})

// Wrap the createClient with React's cache to enable data caching
export const clientFetch = cache(client.fetch.bind(client)) 