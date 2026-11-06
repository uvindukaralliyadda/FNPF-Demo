import Script from 'next/script';
import Fonts from '@/components/Head';

export default function SiteLayout({ children }) {
  return (
    <html lang="en" data-root="/">
      <head>
        <Fonts />
        <link rel="stylesheet" href="/assets/site.css" />
        <link rel="stylesheet" href="/assets/motion.css" />
      </head>
      <body className="inner">
        {children}
        <Script src="/assets/inner.bundle.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
