import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
const ProjectContainer = styled.div`
margin-top:10rem;
padding-left:2rem;
a{
  text-transform:uppercase;
  font-weight:300;
  font-size:0.75rem;
  letter-spacing:1px;
  padding:1rem;
  padding-left:0;
}
.project-content{
  
  width:90%;
  h1{
    font-size:5rem;
  }
  h2{
    margin-bottom:5rem;
  }
  p{
    margin-bottom:5rem;
  }
  
  @media only screen and (min-width:768px){
    h1{
      font-size:8rem;

    }
    h2{
      font-size:4rem;
      margin-bottom:10rem;
      
    }
    p{
      margin-bottom:10rem;
    }
  }
}
@media only screen and (min-width:768px){

  padding-left:5rem;
  p{
    font-size:1.5rem;
    width:70%;
  }
}
@media only screen and (min-width:1200px){
p{
  width:30%;
  font-size:1.25rem;
}
}`

const Project = ({data}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return(
        <div>
          <Layout>
            
            <ProjectContainer>
            <Link to="/#projects">&larr; Projects</Link>
            <div className="project-content"
          dangerouslySetInnerHTML={{ __html: html }} ></div>
            </ProjectContainer>

          </Layout>
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
        description
      }
    }
  }
`