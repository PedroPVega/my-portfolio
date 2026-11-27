import type { Education } from '../types/education'

export const education: readonly Education[] = [
  {
    name: "Freiburg's Albert-Ludwigs University",
    faculty: 'Engineering faculty, Computer Science',
    description:
      'Exchange semester in Freiburg University in Germany. The courses I followed consisted on the foundations of Artificial Intelligence and the foundations of Neuroscience.',
    courses: [
      'Foundations of Deep Learning',
      'Machine Learning',
      'Machine Learning in Life Sciences',
      'Reinforcement Learning',
      'Foundations of Neuroscience',
      'Methods & Statistics in Neuroscience',
    ],
    dates: '(2025 - 2026)',
    city: 'Freiburg, Germany',
    degree: 'Master 2',
  },
  {
    name: 'Ecole Nationale Superieure de Cognitique',
    faculty: 'Cognitive sciences in engineering',
    description:
      "Engineering university (école d'ingenieur) in France. The syllabus consisted in general engineering, software engineering, user-centered design and human factors.",
    courses: [
      'Object-Oriented Programming',
      'Web developpment',
      'Foundations of Artificial Intelligence',
      'Signal processing',
      'Probabilites & Statistics',
      'Human-Machine Interfaces',
      'Human Factors',
    ],
    dates: '(2023 - 2026)',
    city: 'Bordeaux, France',
    degree: 'BAC+5',
  },
]
