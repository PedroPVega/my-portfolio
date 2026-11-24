import type { KeyboardEvent, ReactNode } from 'react'

interface ClickableCardProps {
  onSelect: () => void
  children: ReactNode // must be named children
}

export default function ClickableCard({ onSelect, children }: ClickableCardProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect()
    }
  }

  return (
    <section
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </section>
  )
}
