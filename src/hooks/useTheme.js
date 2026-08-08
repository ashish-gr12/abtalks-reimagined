import { useEffect, useState } from 'react'

const STORAGE_KEY = 'abtalks-theme'

function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
}

function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}

export default useTheme
