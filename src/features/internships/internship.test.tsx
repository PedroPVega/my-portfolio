import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InternshipCard } from './internship'

describe('InternshipCard', () => {
  it('shows the card title and properties', () => {
    render(
      <InternshipCard
        title="Portfolio"
        description="My personal site"
        repoUrl="http://dummy-link"
      />,
    )

    expect(screen.getByRole('heading', { name: 'Internship' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /repository/i })).toHaveAttribute(
      'href',
      'http://dummy-link',
    )
  })
})