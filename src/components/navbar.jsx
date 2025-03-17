import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import ModeTogle from './mode-toggle'

export default function Navbar() {
  const SocialMedia = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/danyrez/',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/dani218002',
      icon: FaTwitter,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/danyrez',
      icon: FaGithub,
    },
  ]
  return (
    <nav className="fixed w-full z-10 top-0 dark:bg-neutral-900 bg-neutral-50 shadow-md">
      <div className="container mx-auto py-4 md:px-80">
        <div className="flex justify-between items-center">
          <a href="/">
            <span className="font-bold">danyrez</span>
          </a>
          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {SocialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  title={social.name}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 w-9 opacity-80 transition-opacity duration-150 hover:opacity-100"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <ModeTogle />
          </div>
        </div>
      </div>
    </nav>
  )
}
