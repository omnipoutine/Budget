import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import { flexColumnCenterCenter } from '../components/navbar'
const ProjectContainer = styled.div`

padding:var(--index-padding);
padding-top:10rem;
#backLink{
  text-transform:uppercase;
  font-weight:300;
  
  letter-spacing:1px;
  padding:var(--index-padding);
  padding-left:0;
}
.project-content{
  a{
    text-decoration: underline;
    margin-right:var(--index-padding);
  }
  h1{
    margin-bottom: var(--project-margin);
  }
  
  h2{
    margin-bottom: var(--project-margin);
  }
  
  p{
    margin-bottom: var(--project-margin);
    
  }
  
  @media only screen and (min-width:768px){
    
    h2{
      
      
      
    }
    p{
      margin-bottom:10rem;
    }
  }
}
@media only screen and (min-width:768px){

  
  .project-content p:nth-child(3), p:nth-child(4){

    
    width:70%;
    
  }
}
}
@media only screen and (min-width:1200px){
  #backLink{
    padding-left:20%;
  }
  padding-top: 30vh;
  width:100%;
  .project-content{
    
    ${flexColumnCenterCenter}
    width:100%;
  }
      
  .project-content p:nth-child(3), p:nth-child(4){

    
    width: var(--paragraph-width);
    
  }
  p ,h1,h2{
    width: var(--paragraph-width);
  }
}`

const Project = ({data}) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return(
        <div>
          <Layout>
            
            <ProjectContainer>
            <Link to="/#projects" id='backLink'>&larr; Projects</Link>
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