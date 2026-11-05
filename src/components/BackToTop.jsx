import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-white shadow-lg shadow-accent/30 transition hover:-translate-y-1">
      <ArrowUp size={20} />
    </button>
  )
}
