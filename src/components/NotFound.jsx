import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold">This page doesn't exist</h1>
        <p className="mt-2 text-muted">The link may be broken or the page may have moved.</p>
        <Link to="/" className="btn-primary mt-8">Back to portfolio</Link>
      </div>
    </div>
  )
}
