// src/features/internships/internship.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import InternshipCard from './internship'

type IntCardProps = React.ComponentProps<typeof InternshipCard>

const createProps = (overrides: Partial<IntCardProps> = {}): IntCardProps => ({
  title: 'Portfolio',
  description: 'My personal website',
  dates: 'January 2000 - September 2078',
  ...overrides,
})

describe('InternshipCard', () => {
  it('shows the card title and properties', () => {
    const props = createProps()

    render(<InternshipCard {...props} />)

    expect(screen.getByRole('heading', { name: 'Company : Portfolio' })).toBeInTheDocument()
  })
})
