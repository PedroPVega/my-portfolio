import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import EducationSection from './education_section'
import { education } from '../../data/education'

describe('EducationSection', () => {
  it('renders the section title', () => {
    render(<EducationSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Studies (Masters degree):')
  })

  it('renders one card per education entry', () => {
    render(<EducationSection />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(education.length)
  })

  it('renders the dates and name of every entry', () => {
    render(<EducationSection />)
    education.forEach((syllabus) => {
      expect(screen.getByText(`${syllabus.dates}: ${syllabus.name}`)).toBeInTheDocument()
    })
  })
})
