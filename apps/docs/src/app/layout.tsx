import '@veer-ui/themes/reset.css';
import { darkTheme } from '@veer-ui/themes/default.css';
import localFont from 'next/font/local';

const gotham = localFont({
  src: [
    {
      path: '../../node_modules/@veer-ui/themes/fonts/Gotham-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../node_modules/@veer-ui/themes/fonts/Gotham-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${gotham.className} ${darkTheme}`}>{children}</body>
    </html>
  );
}
