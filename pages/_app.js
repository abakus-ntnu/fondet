import './styles.css';
import React from 'react';
import Index from './index';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ pageProps }) {
  // eslint-disable-next-line
  return <Index {...pageProps} />;
}
