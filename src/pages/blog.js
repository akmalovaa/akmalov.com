import * as React from "react"
import { graphql } from 'gatsby'
import Header from "../components/header"
import Footer from "../components/footer"
import Card from '../components/card'


const BlogPage = ({ data }) => {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-screen-xl">
        <div className="ml-7 mt-7 justify-between">
          <h1>Blog page</h1>
          <p>I'm making this by following the Gatsby Tutorial.</p>
        </div>

        <div>
          <h2 className="ml-7 mt-7 mb-6 text-4xl">Blog</h2>
          <ul
            className="ml-7 mb-4"
            style={{
              listStyleType: 'none',
              padding: 0,
              display: 'grid',
              gap: '2rem',
            }}
          >
            {data.allMdx.nodes.map(
              ({
                id,
                excerpt,
                frontmatter: { title, featuredImage, date },
                // fields: { slug },
              }) => (
                <li key={id}>
                  <Card
                    link={`/blog`}
                    title={title}
                    thumbnail={featuredImage?.path?.childImageSharp}
                    date={date}
                    excerpt={excerpt}
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export const Head = () => <title>Blog Page</title>

export default BlogPage

export const query = graphql`
 query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            path {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  }
`