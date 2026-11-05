export default function Loader() {
  return (
    <div className="grid min-h-screen place-items-center bg-bg" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-5">
        <div className="relative grid h-20 w-20 place-items-center">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-accent/20 border-t-accent2" />
          <span className="font-display text-xl font-bold text-fg">AS</span>
        </div>
        <p className="text-sm text-muted">Loading portfolio…</p>
      </div>
    </div>
  )
}
