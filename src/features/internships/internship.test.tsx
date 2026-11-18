import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import InternshipCard from './internship'

type IntCardProps = React.ComponentProps<typeof InternshipCard>

const createProps = (overrides: Partial<IntCardProps> = {}): IntCardProps => ({
  title: 'Portfolio',
  description: 'My personal website',
  repoUrl: 'http://dummy-link',
  ...overrides,
})

describe('InternshipCard', () => {
  it('shows the card title and properties', () => {
    const props = createProps()

    render(<InternshipCard {...props} />)

    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /repository/i })).toHaveAttribute(
      'href',
      'http://dummy-link',
    )
  })
})
