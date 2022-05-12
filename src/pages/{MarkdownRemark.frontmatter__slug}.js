import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"
const ProjectContainer = styled.div`

`

const Project = ({data}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return(
        <div>
            {frontmatter.title}
        </div>
    )
}

export default Project

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`