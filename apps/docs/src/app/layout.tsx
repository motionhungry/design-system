import '@veer-ui/themes/reset.css';
import { lightTheme } from '@veer-ui/themes/imajineer.css';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

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
      <body className={`${montserrat.className} ${lightTheme}`}>
        {children}
      </body>
    </html>
  );
}
