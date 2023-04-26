import * as React from "react"
// import { Link } from 'gatsby'
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-screen-xl">
        <div className="ml-7 mt-6 justify-between">
          <h1>Welcome to my Gatsby site!</h1>
          <p>I'm making this by following the Gatsby Tutorial.</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}


export const Head = () => <title>Home Page</title>

export default IndexPage