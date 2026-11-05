import { certifications } from '../data/certificationsData.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading title="Certifications" subtitle="Courses completed, grouped by platform." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.platform} delay={i * 0.05} className={c.items.length > 5 ? 'lg:col-span-2' : ''}>
            <div className="glass glass-hover h-full p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent2"><Icon name={c.icon} /></span>
                <h3 className="font-display text-lg font-semibold">{c.platform}</h3>
              </div>
              <ul className="mt-4 grid gap-2 text-sm">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" /> {it}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
