import { Github, Linkedin, Code2, ArrowUp } from 'lucide-react'
import { personal, navLinks } from '../data/personalData.js'

export default function Footer() {
  const socials = [
    { Icon: Github, label: 'GitHub', href: personal.github },
    { Icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
    { Icon: Code2, label: 'LeetCode', href: personal.leetcode },
  ]
  return (
    <footer className="border-t border-fg/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">{personal.name}.</p>
          <p className="mt-1 text-sm text-muted">Full Stack Developer</p>
          <div className="mt-4 flex gap-2">
            {socials.map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-xl border border-fg/15 transition hover:border-accent2 hover:text-accent2"><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer" className="md:col-span-1">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted">
            {navLinks.map((l) => <li key={l.id}><a href={`#${l.id}`} className="hover:text-fg">{l.label}</a></li>)}
          </ul>
        </nav>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <a href="#home" className="btn-ghost"><ArrowUp size={16} /> Back to top</a>
          <p className="text-sm text-muted">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
