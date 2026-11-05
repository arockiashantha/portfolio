import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '../data/personalData.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading title="Education" />
      <div className="relative ml-4 grid gap-8 border-l-2 border-accent/30 pl-8 sm:ml-6">
        {education.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.06}>
            <div className="relative">
              <span className="absolute -left-[45px] top-5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-white"><GraduationCap size={12} /></span>
              <div className="glass glass-hover p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{ed.degree}</h3>
                  <span className="tag">{ed.duration}</span>
                </div>
                <p className="mt-1 font-medium text-accent2">{ed.institution}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                  <span className="font-semibold text-fg">{ed.score}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {ed.location}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
