import { GlobalConfig } from 'payload';

export const ProductRecommend: GlobalConfig = {
  slug: 'product-recommend',
  label: 'Giới thiệu sản phẩm',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'product_1',
      type: 'relationship',
      relationTo: 'products',
      label: 'Sản phẩm 1'
    },
    {
      name: 'image_1',
      type: 'upload',
      relationTo: 'media', 
    },
    {
      name: 'product_2',
      type: 'relationship',
      relationTo: 'products',
      label: 'Sản phẩm 2'
    },
    {
      name: 'image_2',
      type: 'upload',
      relationTo: 'media', 
    },
    {
      name: 'product_3',
      type: 'relationship',
      relationTo: 'products',
      label: 'Sản phẩm 3'
    },
    {
      name: 'image_3',
      type: 'upload',
      relationTo: 'media', 
    }
  ],
};

export default ProductRecommend;
