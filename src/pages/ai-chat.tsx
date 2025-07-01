import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Layout from '@/common/components/layouts';

import AIChat from '@/modules/chat/components/AIChat';

interface AIChatPageProps {}

const AIChatPage: NextPage<AIChatPageProps> = () => {
  const PAGE_TITLE = 'AI Assistant';
  const PAGE_DESCRIPTION = 'Chat with Prajualit\'s AI assistant to learn about his skills, projects, and experience in web development.';
  const canonicalUrl = 'https://prajualit.vercel.app/ai-chat';

  return (
    <Layout>
      <NextSeo
        title={`${PAGE_TITLE} - Prajualit Tickoo`}
        description={PAGE_DESCRIPTION}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: `${PAGE_TITLE} - Prajualit Tickoo`,
          description: PAGE_DESCRIPTION,
          siteName: 'Prajualit Tickoo',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden" style={{ height: '600px' }}>
            <AIChat isWidget={false} />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default AIChatPage;
