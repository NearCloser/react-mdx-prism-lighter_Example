import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      slug
      id

      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
      }
      body
      tableOfContents
      timeToRead
    }
  }
`

const ArtcilePage = ({ data: { mdx }, pageContext }) => {
  return (
    <div className="ArticleContentWidth mx-auto md:px-0  px-8">
      <div className="mt-20">
        <h1 className="text-3xl font-medium text-primary tracking-wide">
          {mdx.frontmatter.title}
        </h1>
        <time className="text-sm text-opacity-60 text-gray-900 ml-0.5">
          posted on {mdx.frontmatter.date} - {mdx.timeToRead} minutes read
        </time>
        <div className="mt-10 pb-24 text-black">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </div>
    </div>
  )
}

export default ArtcilePage
