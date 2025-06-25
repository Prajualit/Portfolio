const canonicalUrl = 'https://prajualit.vercel.app';
const metaImage = 'https://prajualit.vercel.app/images/Prajualit.png';
const metaDescription =
  'Full-stack Developer & Software Engineer specializing in MERN stack. Currently studying ECE at NIT Hamirpur. Building modern web applications with React, Next.js, Node.js, and more.';

const defaultSEOConfig = {
  defaultTitle: 'Prajualit Tickoo - Full-stack Developer & Software Engineer',
  description: metaDescription,
  canonical: canonicalUrl,
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'author',
      content: 'Prajualit Tickoo',
    },
    {
      name: 'keywords',
      content: 'Prajualit Tickoo, Full-stack Developer, Software Engineer, MERN Stack, React, Next.js, Node.js, JavaScript, Web Developer, NIT Hamirpur, Portfolio',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    {
      name: 'theme-color',
      content: '#121212',
    },
  ],
  openGraph: {
    url: canonicalUrl,
    title: 'Prajualit Tickoo - Full-stack Developer & Software Engineer',
    description: metaDescription,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: metaImage,
        alt: 'Prajualit Tickoo - Full-stack Developer Portfolio',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
      {
        url: metaImage,
        alt: 'Prajualit Tickoo - Full-stack Developer Portfolio',
        width: 800,
        height: 600,
        type: 'image/png',
      },
      {
        url: metaImage,
        alt: 'Prajualit Tickoo - Full-stack Developer Portfolio',
        width: 1600,
        height: 900,
        type: 'image/png',
      },
    ],
    site_name: 'Prajualit Tickoo Portfolio',
  },
  twitter: {
    handle: '@prajualit',
    site: '@prajualit',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
