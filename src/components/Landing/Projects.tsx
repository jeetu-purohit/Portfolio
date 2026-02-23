import Image from "next/image"
import Container from "../common/Container"
import Github from "../svg/Github"
import { Link } from 'next-view-transitions';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export const Projects = [
  {
    src: "/projects/website.png",
    title: "TypeScript URL Shortener",
    description: "A backend project leveraging TypeScript, Node.js, and MongoDB to provide a secure and efficient service for shortening and tracking URLs.",
    links: [
      {
        name: 'Github',
        href: 'https://x.com/jeetujpurohit',
        icon: <Github />,
      }
    ]
  },
  {
    src: "/projects/martingale.png",
    title: "Martingale trading bot",
    description: "A local, open-source alternative to automated trading platforms, designed for executing algorithmic strategies without external subscription dependencies.",
    links: [
      {
        name: 'Github',
        href: 'https://github.com/jeetu-purohit/martingale',
        icon: <Github />,
      }
    ]
  },
  {
    src: "/projects/website.png",
    title: "Personal Portfolio",
    description: "A custom-built personal website designed with core web technologies to highlight full-stack projects and technical competencies.",
    links: [
      {
        name: 'Github',
        href: 'https://x.com/jeetujpurohit',
        icon: <Github />,
      }
    ]
  },
  // {
  //   src: "/projects/website.png",
  //   title: "Chess",
  //   description: "jhadbvjhbdh",
  //   links: [
  //     {
  //       name: 'Github',
  //       href: 'https://github.com/jeetu-purohit/chess',
  //       icon: <Github />,
  //     }
  //   ]
  // },
  // {
  //   src: "/projects/blockchain.png",
  //   title: "My Blockchain",
  //   description: "jhadbvjhbdh",
  //   links: [
  //     {
  //       name: 'Github',
  //       href: 'https://github.com/jeetu-purohit/MY-BLOCKCHAIN',
  //       icon: <Github />,
  //     }
  //   ]
  // },
]

export default function ProjectCard() {
  return (
    <Container className="mx-auto max-w-5xl my-10">
      <div id="heading" className="font-light text-4xl">
        My Projects
      </div>
      {Projects.map((project) => (
        <div id="ProjectCard" className="h-auto w-auto rounded-2xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden mt-6" key={project.title}>
          <div id="imgDiscription" className="flex backdrop-blur-2xl p-4">
            <div id="img" className="w-4/12 relative">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            <div className="w-px h-auto mx-4 bg-black/20 dark:bg-white/20" />

            <div className="w-8/12 p-6 flex flex-col justify-center gap-3">
              <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h3>

              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              {project.links.map((link) => (
                <Tooltip key={link.name} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.name}
                      className="text-zinc-500 flex items-center gap-2 w-fit hover:scale-110 transition"
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

          </div>
        </div>
      ))}
    </Container>
  )
}