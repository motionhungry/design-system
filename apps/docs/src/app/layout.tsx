import '@motionhungry/ui/dist/style.css';
import '@motionhungry/ui-themes/dist/style.css';

import { lightTheme } from '@motionhungry/ui-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={lightTheme}>{children}</body>
    </html>
  );
}
