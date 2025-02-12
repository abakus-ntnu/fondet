import React from 'react';
import { Header, Footer } from '../components';
import { client } from '../utils/sanityHelper';
import { Page } from '../utils/types';
import Sections from '../components/sections';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';

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
        <Sections sections={page.sections} />
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

  const pages = await client.fetch(
    `*[_type == "page" && slug.current == $slug]`,
    { slug }
  );

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
  const pageSlugs: { slug: { current?: string } }[] = await client.fetch(
    `*[_type == "page"] {slug}`
  );
  return {
    paths: pageSlugs.map(({ slug }) => ({
      params: { pageSlug: removeFirstAndLastSlash(slug.current).split('/') },
    })),
    fallback: false,
  };
};
