import { useEffect, useState } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') === 'light' ? 'light' : 'dark' } catch { return 'dark' }
  })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])
  return { theme, toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }
}
