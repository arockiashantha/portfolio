import { useState } from 'react'
import { Github, ExternalLink, ChevronDown, Clock } from 'lucide-react'
import { projects } from '../data/projectsData.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function LinkButton({ href, label, Icon, primary }) {
  if (!href) {
    return (
      <span className="btn cursor-not-allowed border border-fg/10 text-muted opacity-70" aria-disabled="true" title="Link will be added soon">
        <Clock size={16} /> {label} · Coming Soon
      </span>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={primary ? 'btn-primary' : 'btn-ghost'}>
      <Icon size={16} /> {label}
    </a>
  )
}

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass glass-hover flex h-full flex-col overflow-hidden">
      <img src={p.image} alt={`${p.title} illustration`} className="aspect-[5/3] w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium text-accent2">{p.category}</span>
        <h3 className="mt-1 font-display text-xl font-bold">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
        <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="mt-5 flex items-center gap-1 self-start text-sm font-semibold text-accent2">
          Key features <ChevronDown size={16} className={`transition ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-sm text-muted">
            {p.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <LinkButton href={p.github} label="GitHub" Icon={Github} />
          <LinkButton href={p.demo} label="Live Demo" Icon={ExternalLink} primary />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading title="Projects" subtitle="Applications I have built across the frontend, backend and database layers." />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}><ProjectCard p={p} /></Reveal>
        ))}
      </div>
    </section>
  )
}
