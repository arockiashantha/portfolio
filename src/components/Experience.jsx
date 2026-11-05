import { Briefcase, MapPin, CalendarDays } from 'lucide-react'
import { experience as e } from '../data/personalData.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading title="Internship Experience" />
      <div className="relative ml-4 border-l-2 border-accent/30 pl-8 sm:ml-6">
        <span className="absolute -left-[13px] top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-white"><Briefcase size={12} /></span>
        <Reveal>
          <div className="glass p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold">{e.position}</h3>
            <p className="mt-1 font-semibold text-accent2">{e.company}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {e.location}</span>
              <span className="inline-flex items-center gap-1.5"><CalendarDays size={14} /> {e.duration}</span>
            </div>
            <p className="mt-5 leading-relaxed text-muted">{e.description}</p>
            <ul className="mt-5 grid list-disc gap-2 pl-5 text-sm leading-relaxed">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
