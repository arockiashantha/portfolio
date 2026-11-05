import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Download, Mail, FolderGit2 } from 'lucide-react'
import { personal } from '../data/personalData.js'
import useTyping from '../hooks/useTyping.js'

const socials = [
  { label: 'GitHub', href: personal.github, Icon: Github },
  { label: 'LinkedIn', href: personal.linkedin, Icon: Linkedin },
  { label: 'LeetCode', href: personal.leetcode, Icon: Code2 },
]

export default function Hero() {
  const typed = useTyping(personal.roles)
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-lg text-muted">Hello, I'm</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">{personal.name}</h1>
        <p className="mt-4 text-sm text-muted sm:text-base">{personal.title}</p>
        <p className="mt-5 h-9 font-display text-xl font-semibold text-accent2 sm:text-2xl" aria-live="off">
          {typed}
          <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-accent2 align-middle" style={{ height: '1em' }} />
        </p>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">{personal.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary"><FolderGit2 size={18} /> View My Projects</a>
          <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
  <Download size={18} /> Download Resume
</a>
          {/* <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost"></a> */}
          {/* <a href={personal.resumeUrl} download="Resumee.pdf" className="btn-ghost"><Download size={18} /> Download Resume</a> */}
          <a href="#contact" className="btn-ghost"><Mail size={18} /> Contact Me</a>
        </div>
        <div className="mt-8 flex gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-xl border border-fg/15 bg-surface/50 transition hover:-translate-y-1 hover:border-accent2 hover:text-accent2">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 to-accent2/30 blur-2xl" aria-hidden="true" />
        <div className="glass relative overflow-hidden p-3">
          <img src={personal.profileImage} alt="Profile placeholder of Arockia Shantha A" className="aspect-square w-full rounded-xl object-cover" />
          <div className="mt-3 rounded-xl bg-bg/70 p-4 font-mono text-xs leading-relaxed">
            <p><span className="text-accent">const</span> developer = {'{'}</p>
            <p className="pl-4">name: <span className="text-accent2">'Arockia Shantha A'</span>,</p>
            <p className="pl-4">stack: <span className="text-accent2">['React', 'Java', 'Spring Boot']</span>,</p>
            <p className="pl-4">graduating: <span className="text-accent2">2027</span></p>
            <p>{'}'}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
