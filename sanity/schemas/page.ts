import {
  Progress75Icon,
  Progress50Icon,
  BlockContentIcon,
} from '@sanity/icons';

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
          icon: BlockContentIcon,
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
        {
          name: 'piechart-section',
          title: 'Kakediagram',
          type: 'object',
          icon: Progress75Icon,
          fields: [
            {
              name: 'title',
              title: 'Tittel',
              type: 'string',
            },
            {
              name: 'updatedAt',
              title: 'Dato for siste oppdatering av tallene',
              type: 'datetime',
            },
            {
              name: 'values',
              title: 'Verdier',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'value-object',
                  title: 'Verdi',
                  icon: Progress50Icon,
                  fields: [
                    { name: 'label', title: 'Tekst', type: 'string' },
                    {
                      name: 'value',
                      title: 'Verdi (i prosent)',
                      type: 'number',
                    },
                  ],
                  preview: {
                    select: {
                      label: 'label',
                      value: 'value',
                    },
                    prepare(selection: { label: string; value: number }) {
                      const { label, value } = selection;
                      return {
                        title: `${label} - ${value}%`,
                      };
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              updatedAt: 'updatedAt',
            },
            prepare(selection: { title: string; updatedAt: string }) {
              const { title, updatedAt } = selection;
              const updatedDate = new Date(updatedAt);
              return {
                title: `${title} (sist oppdatert ${updatedDate.toLocaleDateString('no-NB')})`,
              };
            },
          },
        },
      ],
    },
  ],
};

export default PageSchema;
