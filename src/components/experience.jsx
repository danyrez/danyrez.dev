import React from 'react'
import { FaCodeBranch } from 'react-icons/fa'

export default function experience() {
  const timelineExperience = [
    {
      id: 1,
      date: '2023',
      title: 'Web Developer',
      project: 'Landing page of the supplier company',
      description: 'Designed and developed a modern, responsive landing page to enhance the online presence of a supplier company, focusing on user experience and accessibility.',
      icon: <FaCodeBranch />,
    },
  ]
  return (
    <div className="min-zz py-12 px-4 sm:px-6 lg:px-8 cursor-default">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-neutral-700"></div>
          <div className="space-y-12">
            {timelineExperience.map((item, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-6 -translate-x-1/2 bg-white dark:bg-neutral-900 rounded-full border-4 border-blue-500 p-2">
                  {item.icon}
                </div>
                <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6 border border-neutral-800">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {item.date}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <h4 className="mt-1 text-md font-medium text-gray-600 dark:text-zinc-400">
                    {item.project}
                  </h4>
                  <p className="mt-3 text-gray-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
