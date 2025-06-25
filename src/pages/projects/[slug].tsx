import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import JsonLd from '@/common/components/elements/JsonLd';
import PageHeading from '@/common/components/elements/PageHeading';
import { generateBreadcrumbSchema, generateSoftwareApplicationSchema } from '@/common/helpers/structured-data';
import prisma from '@/common/libs/prisma';
import { ProjectItemProps } from '@/common/types/projects';
import ProjectDetail from '@/modules/projects/components/ProjectDetail';

interface ProjectsDetailPageProps {
  project: ProjectItemProps;
}

const ProjectsDetailPage: NextPage<ProjectsDetailPageProps> = ({ project }) => {
  const PAGE_TITLE = project?.title;
  const PAGE_DESCRIPTION = project?.description;

  const canonicalUrl = `https://prajualit.vercel.app/projects/${project?.slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://prajualit.vercel.app' },
    { name: 'Projects', url: 'https://prajualit.vercel.app/projects' },
    { name: project?.title, url: canonicalUrl },
  ]);

  const softwareSchema = generateSoftwareApplicationSchema({
    name: project?.title,
    description: project?.description,
    url: project?.link_demo || canonicalUrl,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web Browser',
  });

  return (
    <>
      <NextSeo
        title={`${project?.title} - Project by Prajualit Tickoo`}
        description={project?.description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: project?.updated_at.toString(),
            modifiedTime: project?.updated_at.toString(),
            authors: ['Prajualit Tickoo'],
            section: 'Technology',
            tags: project?.stacks ? JSON.parse(project.stacks) : [],
          },
          url: canonicalUrl,
          title: `${project?.title} - Project by Prajualit Tickoo`,
          description: project?.description,
          images: [
            {
              url: project?.image,
              width: 1200,
              height: 630,
              alt: `${project?.title} - Project Screenshot`,
            },
          ],
          siteName: 'Prajualit Tickoo Portfolio',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: `${project?.title}, Prajualit Tickoo, ${project?.stacks ? JSON.parse(project.stacks).join(', ') : ''}, Web Development, Project`,
          },
        ]}
      />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />
      <Container data-aos='fade-up'>
        <BackButton url='/projects' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ProjectDetail {...project} />
      </Container>
    </>
  );
};

export default ProjectsDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await prisma.projects.findUnique({
    where: {
      slug: String(params?.slug),
    },
  });

  if (response === null) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      project: JSON.parse(JSON.stringify(response)),
    },
  };
};

// RY: moved from SSG to SSR since data updated frequently from DB
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const response = await prisma.projects.findUnique({
//     where: {
//       slug: String(params?.slug),
//     },
//   });

//   return {
//     props: {
//       project: JSON.parse(JSON.stringify(response)),
//     },
//     revalidate: 10,
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await prisma.projects.findMany();
//   const paths = response.map((project) => ({
//     params: { slug: project.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
