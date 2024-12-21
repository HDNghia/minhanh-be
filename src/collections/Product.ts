import { CollectionConfig } from 'payload';

const Product: CollectionConfig = {
  slug: 'products', // This is the API endpoint for the collection
  admin: {
    useAsTitle: 'title', // Field to display as the title in the admin panel
  },
  labels: {
    singular: 'Sản Phẩm', // Singular label for a single product
    plural: 'Sản Phẩm', // Plural label for the collection
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true, // Ensure the field is mandatory
      label: 'Tên Sản Phẩm', // Label for admin panel
    },
    {
      name: 'image',
      type: 'upload', // For uploading images
      relationTo: 'media', // Relation to the media collection (you need to define a media collection)
      label: 'Hình Ảnh', // Label for admin panel
    },
    {
      name: 'description',
      type: 'textarea', // Multiline text for longer descriptions
      label: 'Mô Tả', // Label for admin panel
    },
    {
      name: 'price',
      type: 'number', // Numeric field for price
      required: true,
      label: 'Giá Sản Phẩm', // Label for admin panel
    },
  ],
};

export default Product;
