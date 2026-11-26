// src/features/hero/hero.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './hero'
import { hero } from '../../data/hero'

describe('Hero', () => {
  it('renders the name', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.name)
  })

  it('renders the role', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(hero.role)
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(hero.description)).toBeInTheDocument()
  })

  it('renders the portrait image with alt text', () => {
    render(<Hero />)
    expect(screen.getByAltText('personal picture')).toBeInTheDocument()
  })
})
