import { skillGroups } from '../data/skillsData.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section pb-8">
      <SectionHeading title="Technical Skills" subtitle="Languages, frameworks and tools I work with." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <div className="glass glass-hover h-full p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent2/30 text-accent2"><Icon name={g.icon} /></span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => <span key={s} className="tag transition hover:bg-accent/25">{s}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
