import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access:{
    read: () => true
  },
  labels: {
    singular: 'Quản trị viên', // Singular label for a single question
    plural: 'Quản trị viên', // Plural label for the collection
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
