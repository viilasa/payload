import { CollectionConfig } from 'payload/types'

export const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: ['Design', 'Development', 'Business', 'Technology'],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
    },
  ],
}

export default Blog
