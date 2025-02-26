import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import { formatDate } from '@/lib/utils'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: { asset: { _ref: string } }
  publishedAt: string
  excerpt?: string
  author?: {
    name: string
    image?: { asset: { _ref: string } }
  }
  categories?: { title: string }[]
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article
          key={post._id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {post.mainImage && (
            <div className="relative h-48 w-full">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              {post.author?.image && (
                <div className="relative h-8 w-8">
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                {post.author?.name && (
                  <p className="text-sm text-gray-600">{post.author.name}</p>
                )}
                <time className="text-xs text-gray-500">
                  {formatDate(post.publishedAt)}
                </time>
              </div>
            </div>
            
            <Link href={`/aktuality/${post.slug.current}`}>
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            
            {post.excerpt && (
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            )}

            {post.categories && post.categories.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {post.categories.map((category) => (
                  <span
                    key={category.title}
                    className="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
} 