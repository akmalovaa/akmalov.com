import * as React from "react"
import Header from "../components/header"


const AboutPage = () => {
  return (
    <main>
      <Header></Header>
      <h1 className="text-3xl font-bold">
        About page
      </h1>
    </main>
  )
}

export const Head = () => <title>About Page</title>

export default AboutPage