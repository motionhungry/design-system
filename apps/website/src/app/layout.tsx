import '../../node_modules/@motionhungry/ui-themes/dist/style.css';
import '../../node_modules/@motionhungry/ui/dist/style.css';

import { lightTheme } from '@motionhungry/ui-themes';
import localFont from 'next/font/local';

const gotham = localFont({
  src: [
    {
      path: '../../node_modules/@motionhungry/ui/dist/fonts/Gotham-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/@motionhungry/ui/dist/fonts/Gotham-Medium.otf',
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
    <html className={`${gotham.className} ${lightTheme}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
