import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>{node.frontmatter.title}</h3>
        <small>
          Posted by {node.frontmatter.author} on {node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={node.frontmatter.path}>Read More </Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
