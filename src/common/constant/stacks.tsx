import { FaDocker, FaGitAlt, FaJava, FaKey, FaLock } from 'react-icons/fa';
import { MdEmail, MdOutlineWeb } from 'react-icons/md';
import { PiCirclesFourFill } from 'react-icons/pi';
import {
  SiCss3,
  SiExpress,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiSpringboot,
  SiSwiper,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  // Frontend
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  ReactJS: <SiReact size={iconSize} className='text-sky-500' />,
  ReduxJS: <SiRedux size={iconSize} className='text-purple-500' />,
  NextJS: <SiNextdotjs size={iconSize} />,
  HTML5: <MdOutlineWeb size={iconSize} className='text-orange-500' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  GSAP: <SiCss3 size={iconSize} className='text-green-400' />, // Placeholder for GSAP
  'Tailwind CSS': <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  'Framer Motion': (
    <TbBrandFramerMotion size={iconSize} className='text-pink-500' />
  ),

  // Backend
  NodeJS: <SiNodedotjs size={iconSize} className='text-green-600' />,
  ExpressJS: <SiExpress size={iconSize} />,
  NestJS: <SiNestjs size={iconSize} className='text-[#EA2845]' />,
  REST: <SiPostman size={iconSize} className='text-orange-400' />,
  'Web Sockets': <SiSocketdotio size={iconSize} />,
  Java: <FaJava size={iconSize} className='text-orange-500' />,
  SpringBoot: <SiSpringboot size={iconSize} className='text-green-600' />,

  // Databases
  PostgreSQL: <SiPostgresql size={iconSize} className='text-blue-500' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
  'Prisma ORM': <SiPrisma size={iconSize} className='text-emerald-500' />,
  Mongoose: <SiMongoose size={iconSize} className='text-green-700' />,

  // Cloud / DevOps
  Docker: <FaDocker size={iconSize} className='text-blue-400' />,
  'CI/CD': <PiCirclesFourFill size={iconSize} className='text-gray-500' />,
  'Github Actions': (
    <SiGithubactions size={iconSize} className='text-gray-400' />
  ),

  // Tools
  Git: <FaGitAlt size={iconSize} className='text-red-500' />,
  JWT: <FaKey size={iconSize} className='text-yellow-500' />,
  OAuth: <FaLock size={iconSize} className='text-gray-700' />,
  Postman: <SiPostman size={iconSize} className='text-orange-400' />,
  NPM: <SiNpm size={iconSize} className='text-red-600' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  EmailJS: <MdEmail size={iconSize} className='text-pink-500' />,
  SwiperJS: <SiSwiper size={iconSize} className='text-blue-400' />,
};
