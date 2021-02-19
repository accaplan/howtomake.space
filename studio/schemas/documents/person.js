import ConditionalField from '../../plugins/ConditionalField'

export default {
  type: 'document',
  title: 'Person',
  name: 'person',
  fields: [
    {
      title: 'Full Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['Faculty', 'Students', 'Former Members', 'Stewards'],
      },
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) =>
          category === 'Faculty' || category === 'Stewards',
      },
    },
    {
      title: 'Sequence',
      name: 'seq',
      type: 'number',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) => category === 'Faculty',
      },
    },
    {
      title: 'Is lab alum?',
      name: 'isAlum',
      type: 'boolean',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) =>
          category === 'Stewards' || category === 'Faculty',
      },
    },
    {
      title: 'Headshot',
      name: 'headshot',
      type: 'image',
      inputComponent: ConditionalField,
      options: {
        condition: ({ category }) =>
          category === 'Student' || category === 'Former Members',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
}
