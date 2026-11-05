import { CheckCircle2 } from 'lucide-react'
import { personal } from '../data/personalData.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading title="About Me" />
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="leading-relaxed text-muted">{personal.about}</p>
          <ul className="mt-6 grid gap-3">
            {personal.aboutPoints.map((p) => (
              <li key={p} className="flex items-center gap-3"><CheckCircle2 size={18} className="shrink-0 text-accent2" /> {p}</li>
            ))}
          </ul>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {personal.aboutCards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05} className={i === 0 ? 'sm:col-span-2' : ''}>
              <div className="glass glass-hover flex h-full items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent2"><Icon name={c.icon} /></span>
                <div>
                  <p className="text-sm text-muted">{c.label}</p>
                  <p className="font-semibold">{c.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
