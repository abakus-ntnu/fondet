import {
  Progress75Icon,
  Progress50Icon,
  BlockContentIcon,
} from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

const PageSchema = defineType({
  name: 'page',
  type: 'document',
  title: 'Sider',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Navn',
    }),
    defineField({
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
    }),
    defineField({
      name: 'sections',
      title: 'Seksjoner',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'paragraph-section',
          title: 'Seksjon',
          type: 'object',
          icon: BlockContentIcon,
          fields: [
            defineField({
              name: 'title',
              title: 'Tittel',
              type: 'string',
            }),
            defineField({
              name: 'paragraphs',
              title: 'Innhold',
              type: 'array',
              of: [{ type: 'block' }, { type: 'image' }],
            }),
          ],
        }),
        defineArrayMember({
          name: 'piechart-section',
          title: 'Kakediagram',
          type: 'object',
          icon: Progress75Icon,
          fields: [
            defineField({
              name: 'title',
              title: 'Tittel',
              type: 'string',
            }),
            defineField({
              name: 'updatedAt',
              title: 'Dato for siste oppdatering av tallene',
              type: 'datetime',
            }),
            defineField({
              name: 'values',
              title: 'Verdier',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'value-object',
                  title: 'Verdi',
                  icon: Progress50Icon,
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Tekst',
                      type: 'string',
                    }),
                    defineField({
                      name: 'value',
                      title: 'Verdi (i prosent)',
                      type: 'number',
                    }),
                  ],
                  preview: {
                    select: {
                      label: 'label',
                      value: 'value',
                    },
                    prepare(selection) {
                      const { label, value } = selection;
                      return {
                        title: `${label} - ${value}%`,
                      };
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              updatedAt: 'updatedAt',
            },
            prepare(selection) {
              const { title, updatedAt } = selection;
              const updatedDate = new Date(updatedAt);
              return {
                title: `${title} (sist oppdatert ${updatedDate.toLocaleDateString('no-NB')})`,
              };
            },
          },
        }),
      ],
    }),
  ],
});

export default PageSchema;
