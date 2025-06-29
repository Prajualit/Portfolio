import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

import Container from '@/common/components/elements/Container';
import JsonLd from '@/common/components/elements/JsonLd';
import PageHeading from '@/common/components/elements/PageHeading';
import { generateBreadcrumbSchema } from '@/common/helpers/structured-data';
import prisma from '@/common/libs/prisma';
import { ProjectItemProps } from '@/common/types/projects';
import Projects from '@/modules/projects';

interface ProjectsPageProps {
  projects: ProjectItemProps[];
}

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Explore my portfolio of full-stack development projects. Featuring web applications built with React, Next.js, Node.js, MongoDB, and modern web technologies.';

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Ensure projects is always an array
  const safeProjects = Array.isArray(projects) ? projects : [];

  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < safeProjects.length;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://prajualit.vercel.app' },
    { name: 'Projects', url: 'https://prajualit.vercel.app/projects' },
  ]);

  return (
    <>
      <NextSeo 
        title={`${PAGE_TITLE} - Prajualit Tickoo`}
        description={PAGE_DESCRIPTION}
        canonical='https://prajualit.vercel.app/projects'
        openGraph={{
          url: 'https://prajualit.vercel.app/projects',
          title: `${PAGE_TITLE} - Prajualit Tickoo`,
          description: PAGE_DESCRIPTION,
          images: [
            {
              url: 'https://prajualit.vercel.app/images/Prajualit.png',
              width: 1200,
              height: 630,
              alt: 'Prajualit Tickoo - Development Projects Portfolio',
            },
          ],
          site_name: 'Prajualit Tickoo Portfolio',
        }}
      />
      <JsonLd data={breadcrumbSchema} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={safeProjects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await prisma.projects.findMany({
      orderBy: [
        {
          is_featured: 'desc',
        },
        {
          updated_at: 'desc',
        },
      ],
    });

    return {
      props: {
        projects: JSON.parse(JSON.stringify(response)),
      },
      // Regenerate the page at most once every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Database connection error in projects page:', error);
    
    // Return fallback data when database is not available
    // Provide a complete empty array structure that matches ProjectItemProps[]
    return {
      props: {
        projects: [] as ProjectItemProps[],
      },
      // Try again in 60 seconds when there's an error
      revalidate: 60,
    };
  }
};
