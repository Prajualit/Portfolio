import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Analytics - Replace with your own analytics script */}
        {process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            src='https://analytics.aulianza.com/script.js'
            data-website-id='5a78190a-bdad-48a4-901a-c7400be41ca6'
          ></script>
        )}
        
        {/* Favicon and App Icons */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#121212'
        />
        
        {/* Theme and Meta */}
        <meta name='theme-color' content='#121212' />
        <meta name='msapplication-TileColor' content='#121212' />
        <meta name='application-name' content='Prajualit Tickoo Portfolio' />
        <meta name='apple-mobile-web-app-title' content='Prajualit Tickoo' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        
        {/* Preconnect to external domains for performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        
        {/* DNS Prefetch for better performance */}
        <link rel='dns-prefetch' href='//vercel.app' />
        <link rel='dns-prefetch' href='//github.com' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
