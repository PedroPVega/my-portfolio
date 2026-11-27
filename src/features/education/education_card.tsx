// src/features/education/education.tsx
interface CardProps {
  name: string
  faculty: string
  degree: string
  dates: string
  city: string
}

function EducationCard({ name, faculty, degree, dates, city }: CardProps) {
  return (
    <div>
      <h3>{dates + ': ' + name}</h3>
      <p>{faculty + ', ' + degree + ', ' + city}</p>
    </div>
  )
}

export default EducationCard
