interface CardProps {
  title: string
  description: string
  repoUrl: string
}

function InternshipCard({ title, description, repoUrl }: CardProps) {
  return (
    <div>
      <h2 role="heading">Internship</h2>
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <a role="link" href={repoUrl}>
        /repository/i
      </a>
    </div>
  )
}

export default InternshipCard
