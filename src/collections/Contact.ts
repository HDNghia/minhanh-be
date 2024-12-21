import { CollectionConfig } from 'payload';
import { sendEmail } from '@/utilities/emailSender'

const Contact: CollectionConfig = {
  slug: 'contacts', // This is the API endpoint for the collection
  admin: {
    useAsTitle: 'name', // Field to display as the title in the admin panel
  },
  labels: {
    singular: 'Liên Hệ', // Singular label for a single contact
    plural: 'Liên Hệ', // Plural label for the collection
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true, // Ensure the field is mandatory
      label: 'Họ và Tên', // Add label for admin panel
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email', // Add label for admin panel
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Số Điện Thoại', // Add label for admin panel
    },
    {
      name: 'message',
      type: 'textarea', // Multiline text for longer descriptions
      label: 'Tin Nhắn', // Add label for admin panel
    },
  ],
  hooks:{
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          try {
            await sendEmail(doc.email, doc.name, doc.phone, doc.message, 'New customer order')
          } catch (error) {
            console.error('Error sending welcome email:', error)
          }
        }
        return doc
      },
    ],
  }
};

export default Contact;
