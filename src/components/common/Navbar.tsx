import { navbarConfig } from '@/src/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="fixed bottom-6 left-1/2 -translate-x-1/2 w-auto z-50 rounded-2xl py-4 bg-zinc-100 dark:bg-zinc-900">
      <div className="flex items-center justify-between px-4 gap-2">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              className="h-10 w-10 rounded-md border border-gray-200 transition-all duration-300 ease-in-out hover:scale-90"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
          <div className="flex items-center justify-center gap-6">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="transition-all duration-200 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[1px] h-6 bg-black/40 dark:bg-white/20 mx-1" />

        <div className="flex items-center gap-4">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
