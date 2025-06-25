export const generatePersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Prajualit Tickoo',
    alternateName: 'Prajualit',
    description: 'Full-stack Developer & Software Engineer specializing in MERN stack. Currently studying ECE at NIT Hamirpur.',
    url: 'https://prajualit.vercel.app',
    image: 'https://prajualit.vercel.app/images/Prajualit.png',
    sameAs: [
      'https://github.com/prajualit',
      'https://linkedin.com/in/prajualit',
      'https://twitter.com/prajualit',
    ],
    jobTitle: 'Full-stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'National Institute of Technology, Hamirpur',
      sameAs: 'https://nith.ac.in/',
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'PostgreSQL',
      'Web Development',
      'Software Engineering',
      'MERN Stack',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hamirpur',
      addressCountry: 'India',
    },
  };
};

export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Prajualit Tickoo Portfolio',
    url: 'https://prajualit.vercel.app',
    description: 'Full-stack Developer & Software Engineer specializing in MERN stack. Portfolio showcasing projects, skills, and experience.',
    author: {
      '@type': 'Person',
      name: 'Prajualit Tickoo',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://prajualit.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: 'Prajualit Tickoo',
      url: 'https://prajualit.vercel.app',
    },
    publisher: {
      '@type': 'Person',
      name: 'Prajualit Tickoo',
      url: 'https://prajualit.vercel.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://prajualit.vercel.app/images/Prajualit.png',
      },
    },
    image: article.image || 'https://prajualit.vercel.app/images/Prajualit.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
};

export const generateSoftwareApplicationSchema = (project: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    url: project.url,
    applicationCategory: project.applicationCategory,
    operatingSystem: project.operatingSystem || 'Web Browser',
    author: {
      '@type': 'Person',
      name: 'Prajualit Tickoo',
      url: 'https://prajualit.vercel.app',
    },
    creator: {
      '@type': 'Person',
      name: 'Prajualit Tickoo',
      url: 'https://prajualit.vercel.app',
    },
  };
};
