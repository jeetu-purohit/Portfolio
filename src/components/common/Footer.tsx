import React from 'react';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-32">
      <div className="flex flex-col items-center justify-center">
        <p className="text-zinc-400 dark:text-zinc-600 text-center text-sm">
          Design & Developed by <b>Jeetu Purohit</b> <br /> &copy;{' '}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Container>
  );
}
