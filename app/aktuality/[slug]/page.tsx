import { client } from '@/sanity/lib/client'
import { postBySlugQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'

export const revalidate = 60

interface Category {
  title: string
}

async function getPost(slug: string) {
  const post = await client.fetch(postBySlugQuery, { slug })
  return post
}

// This generates the paths at build time
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{ slug }`)
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post nenalezen'
    }
  }

  return {
    title: post.title,
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Post nenalezen</h1>
      </div>
    )
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-4 mb-6">
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.image && (
                <div className="relative h-10 w-10">
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-medium">{post.author.name}</p>
                <time className="text-sm text-gray-500">
                  {formatDate(post.publishedAt)}
                </time>
              </div>
            </div>
          )}
          
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2">
              {post.categories.map((category: Category) => (
                <span
                  key={category.title}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.mainImage && (
          <div className="relative aspect-video w-full mb-8">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  )
} 