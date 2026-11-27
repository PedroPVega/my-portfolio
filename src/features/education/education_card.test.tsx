import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import EducationCard from './education_card'

const props = {
  name: 'University of Example',
  faculty: 'Engineering',
  degree: 'BSc Computer Science',
  dates: '2018-2022',
  city: 'Springfield',
}

describe('EducationCard', () => {
  it('renders the dates and name in the heading', () => {
    render(<EducationCard {...props} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      '2018-2022: University of Example',
    )
  })

  it('renders the faculty, degree and city', () => {
    render(<EducationCard {...props} />)
    expect(screen.getByText('Engineering, BSc Computer Science, Springfield')).toBeInTheDocument()
  })
})
