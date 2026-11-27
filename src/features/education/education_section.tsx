// src/features/education/education_section.tsx
import EducationCard from './education_card'
import { education } from '../../data/education'

function EducationSection() {
  return (
    <div>
      <h2>Studies (Masters degree):</h2>
      {education.map((syllabus) => (
        <li key={syllabus.name}>
          <EducationCard
            name={syllabus.name}
            faculty={syllabus.faculty}
            degree={syllabus.degree}
            dates={syllabus.dates}
            city={syllabus.city}
          ></EducationCard>
        </li>
      ))}
    </div>
  )
}

export default EducationSection
