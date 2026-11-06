import Script from 'next/script';
import Fonts from '@/components/Head';

export default function HomeLayout({ children }) {
  return (
    <html lang="en" data-root="/">
      <head>
        <Fonts />
        <link rel="stylesheet" href="/assets/home.css" />
        <link rel="stylesheet" href="/assets/motion.css" />
      </head>
      <body>
        {children}
        <Script src="/assets/home.bundle.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
