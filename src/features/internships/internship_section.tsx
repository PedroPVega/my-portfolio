// src/features/internships/internship_section.tsx
import InternshipCard from './internship'
import ClickableCard from '../../components/clickable_card'
import { internship_list } from '../../data/internships'

function InternshipSection() {
  const handleSelectInternship = () => {
    console.log('Card clicked')
  }

  return (
    <div>
      <h2>Work Experiences</h2>
      {internship_list.map((internship) => (
        <li key={internship.company}>
          <ClickableCard onSelect={handleSelectInternship}>
            <InternshipCard
              title={internship.company}
              description={internship.short_description}
              dates={internship.dates}
            ></InternshipCard>
          </ClickableCard>
        </li>
      ))}
    </div>
  )
}

export default InternshipSection
