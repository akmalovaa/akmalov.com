import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
            image
            keywords
            githubUrl
            linkedInUrl
          }
        }
      }
    `
  )
  return site.siteMetadata
}
