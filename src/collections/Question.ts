import type { CollectionConfig } from 'payload';

export const Question: CollectionConfig = {
  slug: 'questions',
  admin: {
    useAsTitle: 'question', // Field to display as the title in the admin panel
  },
  labels: {
    singular: 'Câu Hỏi', // Singular label for a single question
    plural: 'Câu Hỏi', // Plural label for the collection
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true, // Ensure the field is mandatory
      label: 'Câu Hỏi', // Label for the admin panel
    },
    {
      name: 'answer',
      type: 'text',
      required: true, // Ensure the field is mandatory
      label: 'Câu Trả Lời', // Label for the admin panel
    },
  ],
};
