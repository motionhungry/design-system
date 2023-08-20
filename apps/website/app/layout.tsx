'use client';

import { lightThemeClass } from '@motionhungry/ui';
import localFont from 'next/font/local';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const gotham = localFont({
  src: [
    {
      path: '../fonts/Gotham-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Gotham-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${gotham.className} ${lightThemeClass}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
