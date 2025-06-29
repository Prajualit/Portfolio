const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Sample project data
  const projects = [
    {
      title: "Portfolio Website",
      slug: "portfolio-website",
      description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
      image: "/images/projects/portfolio.png",
      link_demo: "https://prajualit.vercel.app",
      link_github: "https://github.com/prajualit/portfolio",
      stacks: "Next.js,TypeScript,Tailwind CSS,Prisma,Supabase",
      is_show: true,
      is_featured: true,
      content: "# Portfolio Website\n\nA comprehensive portfolio showcasing my work and skills."
    },
    {
      title: "SnapEats",
      slug: "snapeats",
      description: "A food delivery application with real-time tracking and seamless user experience.",
      image: "/images/projects/SnapEats.png",
      link_demo: "https://snapeats-demo.vercel.app",
      link_github: "https://github.com/prajualit/snapeats",
      stacks: "React,Node.js,MongoDB,Express.js,Socket.io",
      is_show: true,
      is_featured: true,
      content: "# SnapEats\n\nFood delivery app with modern features."
    },
    {
      title: "RealmRook",
      slug: "realmrook",
      description: "A strategic board game application with multiplayer functionality.",
      image: "/images/projects/realmRook.png",
      link_demo: "https://realmrook-demo.vercel.app",
      link_github: "https://github.com/prajualit/realmrook",
      stacks: "React,TypeScript,WebSocket,Node.js",
      is_show: true,
      is_featured: false,
      content: "# RealmRook\n\nMultiplayer strategy game."
    },
    {
      title: "Closer",
      slug: "closer",
      description: "A social networking platform for connecting people with similar interests.",
      image: "/images/projects/closer.png",
      link_demo: "https://closer-demo.vercel.app",
      link_github: "https://github.com/prajualit/closer",
      stacks: "Next.js,PostgreSQL,Auth0,Tailwind CSS",
      is_show: true,
      is_featured: false,
      content: "# Closer\n\nSocial networking platform."
    },
    {
      title: "Hlo Chat",
      slug: "hlo-chat",
      description: "Real-time chat application with modern UI and multiple chat rooms.",
      image: "/images/projects/Hlo.png",
      link_demo: "https://hlo-chat-demo.vercel.app",
      link_github: "https://github.com/prajualit/hlo-chat",
      stacks: "React,Firebase,Material-UI,Socket.io",
      is_show: true,
      is_featured: false,
      content: "# Hlo Chat\n\nReal-time messaging application."
    }
  ];

  console.log('Start seeding...');
  
  for (const project of projects) {
    const result = await prisma.projects.upsert({
      where: { slug: project.slug },
      update: {},
      create: project,
    });
    console.log(`Created/Updated project: ${result.title}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
