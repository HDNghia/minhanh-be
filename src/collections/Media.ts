import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'filename', // Field to display as the title in the admin panel
  },
  labels: {
    singular: 'Tệp Tin', // Singular label for a single media file
    plural: 'Tệp Tin', // Plural label for the collection
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Mô Tả Ảnh', // Add label for the field
    },
  ],
  upload: true,
};
