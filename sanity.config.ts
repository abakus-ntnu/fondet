import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { schemaTypes } from './sanity/schemas';
import { structureTool } from 'sanity/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'fondet.abakus.no',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
