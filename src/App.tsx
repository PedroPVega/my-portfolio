import Hero from './features/hero/hero'
import EducationSection from './features/education/education_section'
import InternshipSection from './features/internships/internship_section'

function App() {
  return (
    <>
      <section id="center">
        <div>
          <Hero></Hero>
          <EducationSection></EducationSection>
          <InternshipSection></InternshipSection>
        </div>
      </section>
    </>
  )
}

export default App
