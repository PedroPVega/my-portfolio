// src/features/hero/hero.tsx
import { hero } from '../../data/hero'
import portrait from '../../assets/Image.jpeg'

function Hero() {
  return (
    <div>
      <section>
        <div>
          <h1>{hero.name}</h1>
          <h2>{hero.role}</h2>
        </div>
        <img src={portrait} alt="personal picture"></img>
      </section>
      <p>{hero.description}</p>
    </div>
  )
}

export default Hero
