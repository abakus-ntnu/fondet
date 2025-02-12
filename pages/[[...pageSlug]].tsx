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
 * Fetch page details from sanity
 */
export const getStaticProps = (async ({ params }) => {
  const pageSlug = params?.pageSlug ?? '/';
  const slug = Array.isArray(pageSlug) ? pageSlug.join('/') : pageSlug;

  const pages = await client.fetch(GET_PAGE, { slug });

  if (pages.length === 0)
    return {
      notFound: true,
    };

  return {
    props: {
      page: pages[0],
    },
  };
}) satisfies GetStaticProps<Props>;

/**
 * Fetch all the paths that are set in sanity
 */
export const getStaticPaths = async () => {
  const removeFirstAndLastSlash = (slug?: string) =>
    (slug ?? '').replace(/^\/|\/$/g, '');
  const pageSlugs = await client.fetch(GET_PAGES_SLUG);
  return {
    paths: pageSlugs.map(({ slug }) => ({
      params: { pageSlug: removeFirstAndLastSlash(slug?.current).split('/') },
    })),
    fallback: false,
  };
};
