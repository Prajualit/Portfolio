module.exports = {
  siteUrl: process.env.SITE_URL || 'https://prajualit.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard', '/_next/', '/static/'],
      },
    ],
    additionalSitemaps: [
      'https://prajualit.vercel.app/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/dashboard', '/_document', '/_app', '/404'],
  priority: {
    '/': 1.0,
    '/about': 0.9,
    '/projects': 0.9,
    '/learn': 0.8,
    '/contact': 0.7,
    '/playground': 0.6,
  },
  changefreq: {
    '/': 'daily',
    '/about': 'weekly',
    '/projects': 'weekly',
    '/learn': 'weekly',
    '/contact': 'monthly',
    '/playground': 'monthly',
  },
};
