import { useEffect, useState } from 'react'

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140
      let current = ids[0]
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}
