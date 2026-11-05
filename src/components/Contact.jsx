import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Phone, Mail, MapPin, Github, Linkedin, Code2, Send, Loader2, CheckCircle2, AlertCircle, Settings } from 'lucide-react'
import { personal } from '../data/personalData.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    setErrors((er) => ({ ...er, [e.target.name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length || !configured) return
    setStatus('loading')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: values.name, email: values.email, from_name: values.name, from_email: values.email, reply_to: values.email, subject: values.subject, message: values.message },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('success')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  const details = [
    { Icon: Phone, label: 'Phone', value: personal.phone, href: `tel:+91${personal.phone}` },
    { Icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { Icon: MapPin, label: 'Location', value: personal.location },
  ]
  const socials = [
    { Icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
    { Icon: Github, label: 'GitHub', href: personal.github },
    { Icon: Code2, label: 'LeetCode', href: personal.leetcode },
  ]

  return (
    <section id="contact" className="section">
      <SectionHeading title="Let's Work Together" subtitle="I'm always interested in connecting with developers, exploring opportunities, collaborating on exciting projects, and learning new technologies." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="grid gap-4">
            {details.map(({ Icon, label, value, href }) => (
              <div key={label} className="glass flex items-center gap-4 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent2"><Icon size={20} /></span>
                <div className="min-w-0">
                  <p className="text-sm text-muted">{label}</p>
                  {href ? <a href={href} className="break-words font-medium hover:text-accent2">{value}</a> : <p className="font-medium">{value}</p>}
                </div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              {socials.map(({ Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="btn-ghost flex-1 !px-3"><Icon size={18} /> {label}</a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="glass grid gap-4 p-6 sm:p-8">
            {!configured && (
              <div className="flex gap-3 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 text-sm" role="note">
                <Settings size={18} className="mt-0.5 shrink-0 text-amber-400" />
                <p>
                  The contact form isn't connected yet. Copy <code className="font-mono">.env.example</code> to <code className="font-mono">.env</code>, add your EmailJS Service ID, Template ID and Public Key, then restart the dev server. Until then you can reach me at{' '}
                  <a className="underline" href={`mailto:${personal.email}`}>{personal.email}</a>.
                </p>
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                <input id="name" name="name" value={values.name} onChange={onChange} className="field" placeholder="Your name" autoComplete="name" />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" value={values.email} onChange={onChange} className="field" placeholder="you@example.com" autoComplete="email" />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label>
              <input id="subject" name="subject" value={values.subject} onChange={onChange} className="field" placeholder="What is this about?" />
              {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange} className="field resize-y" placeholder="Write your message" />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>
            <button type="submit" disabled={status === 'loading' || !configured} className="btn-primary">
              {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : <><Send size={18} /> Send Message</>}
            </button>
            <div aria-live="polite">
              {status === 'success' && <p className="flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 size={18} /> Message sent. I'll reply as soon as I can.</p>}
              {status === 'error' && <p className="flex items-center gap-2 text-sm text-red-400"><AlertCircle size={18} /> The message couldn't be sent. Check your EmailJS settings or email me directly.</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
