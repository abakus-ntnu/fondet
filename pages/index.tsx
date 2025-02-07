import React from 'react';
import { Header, Footer } from '../components';
import { client } from '../utils/sanityHelper';
import { Page } from '../utils/types';
import Sections from '../components/sections';
import Head from 'next/head';

type Props = {
  page: Page;
};

const Index = ({ page }: Props) => {
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

export async function getStaticProps() {
  const page = await client.fetch(`*[_type == "page" && slug.current == '/']`);
  return {
    props: {
      page: page[0],
    },
  };
}
