import type { Skill } from '../types/skill'

// TODO : add rest of skills
export const skill_list: readonly Skill[] = [
  {
    name: 'Docker',
    kind: 'infrastructure',
  },
  {
    name: 'FastAPI',
    kind: 'framework',
  },
  {
    name: 'Argo workflows',
    kind: 'tool',
  },
  {
    name: 'MLFlow',
    kind: 'observability',
  },
  {
    name: 'Milvus',
    kind: 'database',
  },
] as const satisfies readonly Skill[]
