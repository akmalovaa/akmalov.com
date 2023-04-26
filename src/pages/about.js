import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"


const AboutPage = () => {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-screen-xl">
        <div className="ml-7 mt-6 justify-between">
          <h1>About page</h1>
          <p>Info about me</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export const Head = () => <title>About Page</title>

export default AboutPage