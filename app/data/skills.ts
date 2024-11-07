import { GrMysql } from "react-icons/gr";
import {
  RiBootstrapFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiRemixRunFill,
  RiTailwindCssFill,
  RiUbuntuFill,
} from "react-icons/ri";
import {
  SiAdonisjs,
  SiAlpinedotjs,
  SiCaddy,
  SiCodeigniter,
  SiDocker,
  SiExpress,
  SiJavascript,
  SiJquery,
  SiLaravel,
  SiNginx,
  SiPhp,
  SiPm2,
  SiPostgresql,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SkillCardProps } from "~/components/skill_card";

export const skills: SkillCardProps[] = [
  {
    icon: RiReactjsFill,
    title: "ReactJS",
    subtitle: "Frontend Framework",
  },
  {
    icon: RiNextjsFill,
    title: "Next.js",
    subtitle: "Frontend Framework",
  },
  {
    icon: RiRemixRunFill,
    title: "Remix",
    subtitle: "Frontend Framework",
  },
  {
    icon: SiAlpinedotjs,
    title: "Alpine.js",
    subtitle: "Frontend Framework",
  },
  {
    icon: SiJquery,
    title: "jQuery",
    subtitle: "JavaScript Library",
  },
  {
    icon: SiVite,
    title: "Vite",
    subtitle: "Build Tool",
  },
  {
    icon: RiTailwindCssFill,
    title: "TailwindCSS",
    subtitle: "CSS Framework",
  },
  {
    icon: RiBootstrapFill,
    title: "Bootstrap",
    subtitle: "CSS Framework",
  },
  {
    icon: TbBrandReactNative,
    title: "React Native",
    subtitle: "Mobile Framework",
  },
  {
    icon: SiPhp,
    title: "PHP",
    subtitle: "Programming Language",
  },
  {
    icon: SiJavascript,
    title: "JavaScript",
    subtitle: "Programming Language",
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
    subtitle: "Programming Language",
  },
  {
    icon: RiNodejsFill,
    title: "Node.js",
    subtitle: "JavaScript Runtime",
  },
  {
    icon: SiAdonisjs,
    title: "AdonisJS",
    subtitle: "Node.js Framework",
  },
  {
    icon: SiExpress,
    title: "Express",
    subtitle: "Node.js Framework",
  },
  {
    icon: SiLaravel,
    title: "Laravel",
    subtitle: "PHP Framework",
  },
  {
    icon: SiCodeigniter,
    title: "Codeigniter",
    subtitle: "PHP Framework",
  },
  {
    icon: SiPostgresql,
    title: "PostgreSQL",
    subtitle: "Relational Database",
  },
  {
    icon: GrMysql,
    title: "MySQL",
    subtitle: "Relational Database",
  },
  {
    icon: SiCaddy,
    title: "Caddy",
    subtitle: "Web Server",
  },
  {
    icon: SiNginx,
    title: "Nginx",
    subtitle: "Web Server",
  },
  {
    icon: SiDocker,
    title: "Docker",
    subtitle: "Container Platform",
  },
  {
    icon: SiPm2,
    title: "PM2",
    subtitle: "Process Manager",
  },
  {
    icon: RiUbuntuFill,
    title: "Ubuntu Server",
    subtitle: "Operating System",
  },
];
