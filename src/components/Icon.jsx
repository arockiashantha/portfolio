import {
  GraduationCap, Building2, Award, CalendarDays, MapPin, Code2, Globe, Database, Layers, Wrench,
  Puzzle, Network, Bug, RefreshCw, Users, MessageSquare, Landmark, BookOpen, Brain, ShieldCheck, Circle,
} from 'lucide-react'

const icons = {
  GraduationCap, Building2, Award, CalendarDays, MapPin, Code2, Globe, Database, Layers, Wrench,
  Puzzle, Network, Bug, RefreshCw, Users, MessageSquare, Landmark, BookOpen, Brain, ShieldCheck,
}

export default function Icon({ name, size = 20, className = '' }) {
  const Cmp = icons[name] || Circle
  return <Cmp size={size} className={className} aria-hidden="true" />
}
