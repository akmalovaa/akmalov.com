import * as React from "react"
import Header from "../components/header"


const BlogPage = () => {
  return (
    <main>
      <Header></Header>
      <h1 className="text-3xl font-bold">
        Blog page
      </h1>
    </main>
  )
}

export const Head = () => <title>Blog Page</title>

export default BlogPage