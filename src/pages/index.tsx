import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import JsonLd from '@/common/components/elements/JsonLd';
import { generatePersonSchema, generateWebsiteSchema } from '@/common/helpers/structured-data';
import Home from '@/modules/home';

const HomePage: NextPage = () => {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <NextSeo 
        title='Prajualit Tickoo - Full-stack Developer & Software Engineer'
        description='Full-stack Developer & Software Engineer specializing in MERN stack. Currently studying ECE at NIT Hamirpur. Building modern web applications with React, Next.js, Node.js, and more.'
        canonical='https://prajualit.vercel.app'
        openGraph={{
          url: 'https://prajualit.vercel.app',
          title: 'Prajualit Tickoo - Full-stack Developer & Software Engineer',
          description: 'Full-stack Developer & Software Engineer specializing in MERN stack. Currently studying ECE at NIT Hamirpur. Building modern web applications with React, Next.js, Node.js, and more.',
          images: [
            {
              url: 'https://prajualit.vercel.app/images/Prajualit.png',
              width: 1200,
              height: 630,
              alt: 'Prajualit Tickoo - Full-stack Developer Portfolio',
            },
          ],
          site_name: 'Prajualit Tickoo Portfolio',
        }}
      />
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <Container data-aos='fade-up'>
        <Home />
      </Container>
    </>
  );
};

export default HomePage;
