import type { Skill } from './skill'

export interface Internship {
  readonly company: string
  readonly team: string
  readonly short_description: string
  readonly long_description: string
  readonly dates: string
  readonly city: string
  readonly url?: string
  readonly skills: Skill[]
}
