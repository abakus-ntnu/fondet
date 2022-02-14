import React from 'react';
import Image from 'next/image';

const Footer = () => (
  <div
    style={{
      textAlign: 'center',
      width: '100%',
      fontSize: '15px',
      marginTop: '50px',
    }}
  >
    Med{' '}
    <span role="emoji" alt="coffee">
      ☕
    </span>{' '}
    av Webkom | for <strong>Abakus</strong>
    <a
      href="https://vercel.com/?utm_source=team_XD0ckB9pO5pVMJVVqyDd9zDp&utm_campaign=oss"
      target="blank"
    >
      <br />
      <Image src="/powered-by-vercel.svg" alt="me" width="150" height="50" />
    </a>
  </div>
);

export default Footer;
