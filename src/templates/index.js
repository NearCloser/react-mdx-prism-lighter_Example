import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Helmet from "react-helmet"

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allPosts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
          }
          id
          slug
        }
      }
    }
  }
`

const ArticleParts = ({ data, pageContext }) => {
  const Articles = data.allPosts.edges

  return (
    <div className="rounded-lg px-8 py-8 max-w-screen-md mx-auto mt-16 mb-8">
      <Helmet>
        <title>react-mdx-prism-lighter</title>
        <meta name="description" content="react-mdx-prism-lighter" />
        <html lang="ja" />
      </Helmet>
      <ul className="divide-y divide-coolgray-200">
        {Articles &&
          Articles.map(({ node }) => {
            return (
              <li key={node.slug} className="py-6 mb-6">
                <Link to={`/article/${node.id}`}>
                  <article className="cursor-pointer hover:opacity-80 transition-opacity group">
                    <div className="px-8">
                      <span className="text-sm text-opacity-70 tracking-wide text-coolgray-800 select-none">
                        {node.frontmatter.date}
                        {node.timeToRead > 0 &&
                          ` - ${node.timeToRead} minutes read`}
                      </span>

                      <h3 className="text-primary text-xl text-opacity-80 group-hover:text-opacity-75">
                        {node.frontmatter.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default ArticleParts
