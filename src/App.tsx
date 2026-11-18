import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>My personal portfolio</h1>
          <p>
            Source code at https://github.com/PedroPVega/my-portfolio
          </p>
        </div>
      </section>
    </>
  )
}

export default App
