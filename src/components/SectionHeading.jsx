import Reveal from './Reveal.jsx'

export default function SectionHeading({ title, subtitle }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent2" />
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </Reveal>
  )
}
