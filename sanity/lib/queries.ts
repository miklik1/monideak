import { groq } from 'next-sanity'

// Get all posts
export const postsQuery = groq`
  *[_type == "post"] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    "author": author->{name, image},
    "categories": categories[]->{title}
  } | order(publishedAt desc)
`

// Get a single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    "author": author->{name, image, bio},
    "categories": categories[]->{title}
  }
`

// Get all authors
export const authorsQuery = groq`
  *[_type == "author"] {
    _id,
    name,
    slug,
    image,
    bio
  }
`

// Get all categories
export const categoriesQuery = groq`
  *[_type == "category"] {
    _id,
    title,
    description
  }
` 