import { useEffect, useState } from 'react'

const STORAGE_KEY = 'abtalks-theme'

function getStoredTheme() {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) return saved === 'light' ? 'light' : 'dark'
  return 'dark'
}

function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (e) {
      console.warn('Failed to save theme in localStorage:', e)
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}

export default useTheme
