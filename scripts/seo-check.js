#!/usr/bin/env node

/**
 * SEO Health Check Script
 * Run with: node scripts/seo-check.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Running SEO Health Check...\n');

// Check for essential SEO files
const seoFiles = [
  'next-seo.config.js',
  'next-sitemap.config.js',
  'public/robots.txt',
  'public/favicon/site.webmanifest'
];

console.log('📁 Checking essential SEO files:');
seoFiles.forEach(file => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  console.log(`${exists ? '✅' : '❌'} ${file}`);
});

// Check for meta tags in pages
const pagesDir = path.join(process.cwd(), 'src/pages');
const pageFiles = [];

function getAllPages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllPages(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

getAllPages(pagesDir, pageFiles);

console.log('\n📄 Checking pages for SEO optimization:');
pageFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hasNextSeo = content.includes('NextSeo');
  const hasTitle = content.includes('title=') || content.includes('defaultTitle');
  const hasDescription = content.includes('description=');
  
  const fileName = path.relative(process.cwd(), file);
  console.log(`${hasNextSeo && hasTitle && hasDescription ? '✅' : '⚠️'} ${fileName}`);
  
  if (!hasNextSeo) console.log(`   - Missing NextSeo component`);
  if (!hasTitle) console.log(`   - Missing title`);
  if (!hasDescription) console.log(`   - Missing description`);
});

// Check for structured data
console.log('\n🏗️ Checking for structured data implementation:');
const structuredDataExists = fs.existsSync(path.join(process.cwd(), 'src/common/helpers/structured-data.ts'));
console.log(`${structuredDataExists ? '✅' : '❌'} Structured data helper`);

const jsonLdExists = fs.existsSync(path.join(process.cwd(), 'src/common/components/elements/JsonLd.tsx'));
console.log(`${jsonLdExists ? '✅' : '❌'} JsonLd component`);

// Check robots.txt content
console.log('\n🤖 Robots.txt analysis:');
const robotsPath = path.join(process.cwd(), 'public/robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  console.log(`✅ Robots.txt exists`);
  console.log(`${robotsContent.includes('Sitemap:') ? '✅' : '❌'} Contains sitemap reference`);
  console.log(`${robotsContent.includes('Allow: /') ? '✅' : '❌'} Allows crawling`);
} else {
  console.log(`❌ Robots.txt missing`);
}

// Performance recommendations
console.log('\n🚀 Performance recommendations:');
console.log('✅ Consider implementing:');
console.log('   - Image optimization with next/image');
console.log('   - Lazy loading for non-critical content');
console.log('   - Web font optimization');
console.log('   - Bundle analysis with BUNDLE_ANALYZER=true');

// SEO Tools recommendations
console.log('\n🛠️ Recommended SEO tools:');
console.log('📊 Google Search Console - Monitor search performance');
console.log('📈 Google Analytics - Track user behavior');
console.log('⚡ PageSpeed Insights - Monitor Core Web Vitals');
console.log('🔍 Lighthouse - Overall site audit');

console.log('\n✨ SEO Health Check Complete!\n');

// Generate a simple SEO report
const reportData = {
  timestamp: new Date().toISOString(),
  seoFiles: seoFiles.map(file => ({
    file,
    exists: fs.existsSync(path.join(process.cwd(), file))
  })),
  pagesChecked: pageFiles.length,
  structuredDataImplemented: structuredDataExists && jsonLdExists
};

fs.writeFileSync(
  path.join(process.cwd(), 'seo-report.json'),
  JSON.stringify(reportData, null, 2)
);

console.log('📋 SEO report saved to seo-report.json');
