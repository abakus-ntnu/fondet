const PageSchema = {
  name: 'page',
  type: 'document',
  title: 'Sider',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Navn',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      readOnly: false,
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 96),
      },
    },
    {
      name: 'sections',
      title: 'Seksjoner',
      type: 'array',
      of: [
        {
          name: 'paragraph-section',
          title: 'Seksjon',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Tittel',
              type: 'string',
            },
            {
              name: 'paragraphs',
              title: 'Innhold',
              type: 'array',
              of: [{ type: 'block' }, { type: 'image' }],
            },
          ],
        },
      ],
    },
  ],
};

export default PageSchema;
