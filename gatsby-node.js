const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ArticleListTemplate = path.resolve("./src/templates/index.js")

  return await graphql(`
    query AllNodeType {
      allPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          previous {
            slug
          }
          next {
            slug
          }
          node {
            slug
          }
        }
      }
    }
  `).then((res) => {
    paginate({
      createPage,
      items: res.data.allPosts.edges,
      component: ArticleListTemplate,
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/articleList"),
      itemsPerPage: 5,
    })
  })
}
