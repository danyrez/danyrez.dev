import React from 'react'
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa'
import { SiPrisma, SiExpress } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

export default function Projects() {
  const techIcons = {
    React: <FaReact className="text-cyan-400" />,
    'Node.js': <FaNodeJs className="text-green-400" />,
    PostgreSQL: <BiLogoPostgresql className="text-blue-500" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    Css: <FaCss3Alt className="text-blue-400" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    Prisma: <SiPrisma className="text-blue-500" />,
    Express: <SiExpress className="text-green-400" />,
  }

  const Projects = [
    {
      id: 1,
      icon: '📦',
      title: 'VaulTify',
      description:
        'Effortlessly manage your inventory with this intuitive and powerful tool.',
      url: 'https://github.com/danyrez/vaultify',
      tech: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 2,
      icon: '🔗',
      title: 'Linky',
      description:
        'Transform long URLs into concise, shareable links with this open-source solution.',
      url: 'https://github.com/danyrez/linky',
      tech: ['React', 'Express', 'Prisma', 'PostgreSQL'],
    },
    {
      id: 3,
      icon: '🎥',
      title: 'Best-Movies',
      description:
        'Explore a stunning movie landing page designed for an immersive experience.',
      url: 'https://github.com/danyrez/best-movie',
      tech: ['HTML', 'Css', 'JavaScript'],
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {Projects.map((project) => (
        <div
          className="bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
          key={project.id}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-sky-500/35 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-500 text-xl">
                    {project.icon}
                  </span>
                </div>
                <h2 className="text-neutral-900 dark:text-zinc-100 font-semibold">
                  {project.title}
                </h2>
              </div>
              <div className="flex gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <FaGithub className="w-5 h-5 text-neutral-700 dark:text-zinc-400 hover:text-neutral-900 dark:hover:text-zinc-100" />
                </a>
              </div>
            </div>

            <p className="text-neutral-700 dark:text-zinc-400 text-sm mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1 px-3 py-1 bg-neutral-200 dark:bg-zinc-800 text-neutral-900 dark:text-zinc-200 rounded-full text-xs font-medium cursor-default"
                >
                  {techIcons[tech] || '❓'} {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
