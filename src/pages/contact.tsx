import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import JsonLd from '@/common/components/elements/JsonLd';
import PageHeading from '@/common/components/elements/PageHeading';
import { generateBreadcrumbSchema } from '@/common/helpers/structured-data';
import Contact from '@/modules/contact';

const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  "Get in touch with Prajualit Tickoo for collaboration opportunities, freelance projects, or professional inquiries. Let's build something amazing together.";

const ContactPage: NextPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://prajualit.vercel.app' },
    { name: 'Contact', url: 'https://prajualit.vercel.app/contact' },
  ]);

  return (
    <>
      <NextSeo 
        title={`${PAGE_TITLE} - Prajualit Tickoo`}
        description={PAGE_DESCRIPTION}
        canonical='https://prajualit.vercel.app/contact'
        openGraph={{
          url: 'https://prajualit.vercel.app/contact',
          title: `${PAGE_TITLE} - Prajualit Tickoo`,
          description: PAGE_DESCRIPTION,
          images: [
            {
              url: 'https://prajualit.vercel.app/images/Prajualit.png',
              width: 1200,
              height: 630,
              alt: 'Contact Prajualit Tickoo - Full-stack Developer',
            },
          ],
          site_name: 'Prajualit Tickoo Portfolio',
        }}
      />
      <JsonLd data={breadcrumbSchema} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  );
};

export default ContactPage;
