import { NextSeo, NextSeoProps } from 'next-seo';

import JsonLd from './JsonLd';

interface SEOOptimizedProps extends NextSeoProps {
  structuredData?: Record<string, unknown>[];
}

const SEOOptimized = ({ structuredData, ...props }: SEOOptimizedProps) => {
  return (
    <>
      <NextSeo {...props} />
      {structuredData?.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}
    </>
  );
};

export default SEOOptimized;
