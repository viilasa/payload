// collections/Blogs.ts

import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'
import { defaultLexical } from '@/fields/defaultLexical'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'publishedAt', 'content'],
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
      editor: defaultLexical,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: ['categories'],
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: ['tags'],
      hasMany: true,
    },
    ...slugField(),
  ],
  versions: {
    drafts: true,
  },
}
