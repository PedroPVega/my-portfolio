type kind = 'language' | 'framework' | 'database' | 'observability' | 'infrastructure' | 'tool'

export type { kind }
export interface Skill {
  readonly name: string
  readonly kind: kind
}
