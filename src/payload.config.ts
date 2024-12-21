// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Product from './collections/Product'
import { ProductRecommend } from './global-configs/productRecommend'
import { BestProduct } from './global-configs/bestProduct'
import PostRecommend from './global-configs/postRecommend'
import { Question } from './collections/Question'
import Contact from './collections/Contact'
import { Posts } from './collections/Posts'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { seoPlugin } from '@payloadcms/plugin-seo'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      openGraph: {
        description: 'The best admin panel in the world',
        images: [
          {
            url: 'https://i.postimg.cc/rwwD0GtN/logo-duynam.jpg',
            width: 800,
            height: 600,
          },
        ],
        siteName: 'Payload',
        title: 'My Admin Panel',
      },
      titleSuffix: '- Wealth Farming',
      icons: [
        {
          url: 'https://i.postimg.cc/rwwD0GtN/logo-duynam.jpg',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
    },
    components: {
      graphics: {
        Icon: './graphics/Icon#Icon',
        Logo: './graphics/Logo#Logo', // Correct the path and use default export
      },
    },
  },
  collections: [Users, Media, Posts, Product, Question, Contact],
  globals: [ProductRecommend, BestProduct, PostRecommend],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  email: nodemailerAdapter({
    defaultFromAddress: 'huynhdangnghia68@gmail.com',
    defaultFromName: 'Huynh Dang Nghia',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ['posts'],
      generateURL: ({ doc, collectionSlug }) => process.env.BASE_URL + `/#/blogs/${doc.slug}`, // recommend env
    }),
  ],
  cors: '*' 
})
