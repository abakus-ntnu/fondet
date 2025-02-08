import { createClient, defineQuery } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-23',
  useCdn: false,
});

export const GET_PAGES_SLUG = defineQuery(`*[_type == "page"] {slug}`);

export const GET_PAGE = defineQuery(
  `*[_type == "page" && slug.current == $slug]`
);
