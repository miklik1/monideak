import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import PostList from './components/PostList'

export const revalidate = 60 // Revalidate every 60 seconds

async function getNews() {
  const posts = await client.fetch(postsQuery)
  return posts
}

export default async function AktualityPage() {
  const posts = await getNews()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Aktuality</h1>
      <PostList posts={posts} />
    </div>
  )
} 