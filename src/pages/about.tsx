import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import JsonLd from '@/common/components/elements/JsonLd';
import PageHeading from '@/common/components/elements/PageHeading';
import { generateBreadcrumbSchema, generatePersonSchema } from '@/common/helpers/structured-data';
import About from '@/modules/about';

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION =
  'Learn more about Prajualit Tickoo - Full-stack Developer & Software Engineer. Discover my journey, skills, education at NIT Hamirpur, and professional experience.';

const AboutPage: NextPage = () => {
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://prajualit.vercel.app' },
    { name: 'About', url: 'https://prajualit.vercel.app/about' },
  ]);

  return (
    <>
      <NextSeo 
        title={`${PAGE_TITLE} - Prajualit Tickoo`}
        description={PAGE_DESCRIPTION}
        canonical='https://prajualit.vercel.app/about'
        openGraph={{
          url: 'https://prajualit.vercel.app/about',
          title: `${PAGE_TITLE} - Prajualit Tickoo`,
          description: PAGE_DESCRIPTION,
          images: [
            {
              url: 'https://prajualit.vercel.app/images/Prajualit.png',
              width: 1200,
              height: 630,
              alt: 'About Prajualit Tickoo - Full-stack Developer',
            },
          ],
          site_name: 'Prajualit Tickoo Portfolio',
        }}
      />
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
};

export default AboutPage;
