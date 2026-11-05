import { useEffect, useMemo, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { personal, navLinks } from '../data/personalData.js'
import useActiveSection from '../hooks/useActiveSection.js'

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const ids = useMemo(() => navLinks.map((l) => l.id), [])
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'border-b border-fg/10 bg-bg/80 backdrop-blur-lg' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="font-display text-xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">{personal.initials}</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition ${active === l.id ? 'bg-accent/15 text-fg' : 'text-muted hover:text-fg'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle light and dark mode" className="grid h-10 w-10 place-items-center rounded-xl border border-fg/15 transition hover:border-accent/60 hover:bg-accent/10">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-xl border border-fg/15 lg:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="grid gap-1 px-5 pb-4 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-sm ${active === l.id ? 'bg-accent/15 text-fg' : 'text-muted'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
