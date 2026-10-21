// Znak Kvarta: tanier rozdelený na štyri časti (kvarta = štvrtina), jedna z nich je červená.
// Farby sú pre tmavé pozadie (žltá + jasnejšia červená). Na svetlom pozadí použi public/logo-on-light.svg.
export default function Mark({ className }: { className?: string }) {
  return (
    <svg className={className ? `mark ${className}` : 'mark'} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path fill="#e5502f" d="M33.60 30.40L61.96 30.40A30 30 0 0 0 33.60 2.04Z" />
      <path fill="#f3c846" d="M33.60 33.60L61.96 33.60A30 30 0 0 1 33.60 61.96Z" />
      <path fill="#f3c846" d="M30.40 33.60L2.04 33.60A30 30 0 0 0 30.40 61.96Z" />
      <path fill="#f3c846" d="M30.40 30.40L2.04 30.40A30 30 0 0 1 30.40 2.04Z" />
    </svg>
  )
}