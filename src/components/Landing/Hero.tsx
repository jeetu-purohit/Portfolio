import Image from "next/image";
import Container from "../common/Container";
import { Link } from 'next-view-transitions';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import LinkedIn from "../svg/Linkedin";
import X from "../svg/X";
import Github from "../svg/Github";
import Mail from "../svg/Mail";
import Rust from "@/public/skillssvg/Rust";
import Cpp from "@/public/skillssvg/Cpp";
import Typescript from "@/public/skillssvg/Typescript";
import Javascript from "@/public/skillssvg/Javascript";
import Node from "@/public/skillssvg/Node";
import Bun from "@/public/skillssvg/Bun";
import Python from "@/public/skillssvg/Python";
import NextJS from "@/public/skillssvg/Next";
import Prisma from "@/public/skillssvg/Prisma";
import Postgresql from "@/public/skillssvg/Postgresql";
import ReactJS from "@/public/skillssvg/React";

export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/jeetujpurohit',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeetu-rajpurohit-184441267/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/jeetu-purohit',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:jeetujpurohit@gmail.com',
    icon: <Mail />,
  },
];

// export const skills = [
//   {
//     name: 'Typescript',
//     src: '/skills/typescript.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'Javascript',
//     src: '/skills/javascript.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'Rust',
//     src: '/skills/rust.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'Python',
//     src: '/skills/python.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'C++',
//     src: '/skills/cpp.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'NextJS',
//     src: '/skills/nextjs.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'React',
//     src: '/skills/react.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'Node',
//     src: '/skills/node.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'Bun',
//     src: '/skills/bun.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'MongoDB',
//     src: '/skills/mongodb.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'Prisma',
//     src: '/skills/prisma.png',
//     width: 100,
//     height: 100
//   },
//   {
//     name: 'PostgreSQL',
//     src: '/skills/postgresql.png',
//     width: 100,
//     height: 100
//   },
// ]

export const skills = [
  {
    name: 'Rust',
    icon: <Rust />,
  },
  {
    name: 'C++',
    icon: <Cpp />,
  },
  {
    name: 'TypeScript',
    icon: <Typescript />,
  },
  {
    name: 'JavaScript',
    icon: <Javascript />,
  },
  {
    name: 'Node',
    icon: <Node />,
  },
  {
    name: 'Bun',
    icon: <Bun />,
  },
  {
    name: 'Python',
    icon: <Python />,
  },
  {
    name: 'NextJS',
    icon: <NextJS />,
  },
  {
    name: 'React',
    icon: <ReactJS />,
  },
  {
    name: 'Prisma',
    icon: <Prisma />,
  },
  {
    name: 'PostgreSQL',
    icon: <Postgresql />,
  },
]

export default function Hero() {
  return (
    <Container className="mx-auto max-w-5xl">
      <Image
        src={"/assets/ME.jpg"}
        alt="hero"
        width={100}
        height={100}
        className="size-32 rounded-3xl"
      />

      {/*text area*/}
      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl">
          Hi, I&apos;m Jeetu Purohit
        </h1>
        <div className="text-zinc-500 flex flex-col gap-2">
          <span>20, Chennai | Full Stack Engineer</span>
          <span>
            I'm a Full Stack Blockchain Developer crafting cutting-edge dApps and DeFi solutions.<br></br>From writing secure smart contracts to building intuitive Web3 interfaces, I turn complex blockchain concepts into user-friendly experiences.
          </span>
        </div>
      </div>
      {/*social links*/}
      <div>
        <div className="mt-6 flex gap-2 items-center">
          <span className="text-lg">
            My Socials :
          </span>
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.name}
                  className="text-zinc-500 flex items-center gap-2"
                >
                  <span className="size-6">{link.icon}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        <div className="mt-6 flex gap-2 items-center">
          <span className="text-lg">
            Tech Stack :
          </span>
          {skills.map((skill) => (
            <Tooltip key={skill.name} >
              <TooltipTrigger asChild>
                <div className="rounded-md overflow-hidden bg-zinc-200 dark:bg-zinc-800 p-0.5 hover:scale-105 transition-transform duration-300">
                  <span
                    className="text-zinc-500 flex items-center gap-2"
                  >
                    <span className="size-10">{skill.icon}</span>
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        {/* <div className="mt-6 flex gap-2 items-center">
          <span className="text-lg">
            Tech Stack :
          </span>
          {skills.map((skill) => (
            <Tooltip key={skill.name} >
              <TooltipTrigger asChild>
                <div className="rounded-md overflow-hidden bg-zinc-200 dark:bg-zinc-800 p-0.5 hover:scale-105 transition-transform duration-300">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                    className="object-cover size-10 "
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div> */}
      </div>
    </Container>
  )
}