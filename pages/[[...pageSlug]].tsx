import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Header, Footer, Sections } from '@/components';
import { client, GET_PAGE, GET_PAGES_SLUG } from '@/utils/sanityHelper';
import { Page } from '@/utils/types.sanity';

/**
 * Render the page
 */
type Props = {
  page: Page;
};

const Index: NextPage<Props> = ({ page }) => {
  return (
    <>
      <Head>
        <title>Abakus' fond</title>
        <link rel="icon" href="/fond.png" />
      </Head>
      <Header />
      <div className="container">
        {page.sections && <Sections sections={page.sections} />}
        <Footer />
      </div>
    </>
  );
};

export default Index;

/**
 * How often (in seconds) a page is regenerated, so that content changes in
 * sanity are published without having to rebuild the site
 */
const REVALIDATE_SECONDS = 60;

/**
 * Fetch page details from sanity
 */
export const getStaticProps = (async ({ params }) => {
  const pageSlug = params?.pageSlug ?? '/';
  const slug = Array.isArray(pageSlug) ? pageSlug.join('/') : pageSlug;

  const pages = await client.fetch(GET_PAGE, { slug });

  if (pages.length === 0)
    return {
      notFound: true,
      revalidate: REVALIDATE_SECONDS,
    };

  return {
    props: {
      page: pages[0],
    },
    revalidate: REVALIDATE_SECONDS,
  };
}) satisfies GetStaticProps<Props>;

/**
 * Fetch all the paths that are set in sanity. Paths added after the build are
 * rendered on their first request.
 */
export const getStaticPaths = async () => {
  const removeFirstAndLastSlash = (slug?: string) =>
    (slug ?? '').replace(/^\/|\/$/g, '');
  const pageSlugs = await client.fetch(GET_PAGES_SLUG);
  if (pageSlugs.length === 0) {
    const { projectId, dataset } = client.config();
    throw new Error(
      `Found no pages in sanity project "${projectId}", dataset "${dataset}". ` +
        'Check NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.'
    );
  }
  return {
    paths: pageSlugs.map(({ slug }) => ({
      params: { pageSlug: removeFirstAndLastSlash(slug?.current).split('/') },
    })),
    fallback: 'blocking',
  };
};
