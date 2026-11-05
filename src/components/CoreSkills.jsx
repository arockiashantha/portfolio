import { coreSkills } from '../data/skillsData.js'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

export default function CoreSkills() {
  return (
    <section id="core-skills" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <Reveal>
        <h3 className="mb-6 font-display text-2xl font-bold">Core Skills</h3>
        <div className="flex flex-wrap gap-3">
          {coreSkills.map((s) => (
            <span key={s.name} className="glass glass-hover inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium">
              <Icon name={s.icon} size={16} className="text-accent2" /> {s.name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
