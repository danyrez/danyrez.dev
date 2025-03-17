import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useEffect } from 'react'

export default function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button
      onClick={toggleMode}
      className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 w-9 opacity-80 transition-opacity duration-150 hover:opacity-100"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}
