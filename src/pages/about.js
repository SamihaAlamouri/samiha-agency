// Stap 1: Importeer React
import * as React from 'react'
import { Link } from "gatsby"

// Step 2: Definieer je component
const AboutPage = () => {
  return (
    <main>
      <title>About Us</title>
      <h1>About Us</h1>
      <p>Artist Agency was founded in 1977 by founder, John Doe. AA continues to be at the forefront of art by establishing the careers of our talents on a holistic level -- and setting trends within the industry. </p>
      <Link to="/">Back to Home</Link>
    </main>
  )
}

// Stap 3: Exporteer je component
export default AboutPage