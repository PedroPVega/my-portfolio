// src/features/internships/internship.tsx
interface CardProps {
  title: string
  description: string
  dates: string
}

function InternshipCard({ title, description, dates }: CardProps) {
  return (
    <div>
      <section>
        <h3>{'Company : ' + title}</h3>
        <h4>{dates}</h4>
      </section>
      <p>{description}</p>
    </div>
  )
}

export default InternshipCard
