import {
  pagesSchema,
  postsSchema,
  productsSchema,
  reviewsSchema,
  servicesSchema,
} from '@fulldevlabs/fullui'
import { defineCollection, z } from 'astro:content'

const data = defineCollection({
  type: 'data',
  schema: z.any(),
})

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: pagesSchema,
  }),
  posts: defineCollection({
    type: 'content',
    schema: postsSchema,
  }),
  products: defineCollection({
    type: 'content',
    schema: productsSchema,
  }),
  reviews: defineCollection({
    type: 'content',
    schema: reviewsSchema,
  }),
  services: defineCollection({
    type: 'content',
    schema: servicesSchema,
  }),
  // globals: data,
  // settings: data,
}
