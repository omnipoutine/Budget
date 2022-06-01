import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/card'
import SectionHeader from '../components/sectionHeader'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const flexColumnCenterCenter =`
display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`


const flexColumnEndCenter = `
display: flex;
  flex-direction:column;
  
  align-items:center;
  justify-content:end;
`



const SiteWrapper = styled.div`


`
const IndexWrapper = styled.div`

${flexColumnCenterCenter}
padding:var(--index-padding);


#headerDiv{
  height:60vh;
  ${flexColumnEndCenter}
  margin-bottom:var(--header-top);
  padding-bottom:var(--header-bottom);

  box-sizing: border-box;

  h1{
    text-align:center;
    line-height:110%;
  }
}

#projectsDiv{

  .cardDivider{
    ${flexColumnCenterCenter}
    margin-bottom:var(--header-top);
  }
}

#about{
  ${flexColumnCenterCenter}
  width:100%;
  #aboutParagraphContainer{
    width:100%;
    p{
      padding-left: var(--paragraph-padding);
      width: var(--paragraph-width);
    }
    

min-height:100vh;
border-radius: var(--border-sizing);
${flexColumnCenterCenter}
padding:1.5rem;
  }
  
  
  h1{
    width:100%;
    margin-bottom: var(--header-top);
  }
  
  p{
    width:100%;
    margin-bottom: calc(var(--header-top) * 0.5);
  }
}

@media only screen and (min-width:1200px){
  #projectsDiv{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
  }
}



`

const Index = ({data}) => {
  

  return(
  <div>
      <Layout>
        <IndexWrapper>
          <div id="headerDiv">
          <h1>Web Developer based in Ottawa. Currently looking for Work</h1>
          </div>
          <section id="projects">
            <div id="projectsDiv">
            {data.allMarkdownRemark.edges.map((item, i) => (item.node.frontmatter ? (<div className='cardDivider'><Card title={item.node.frontmatter.title} link={item.node.frontmatter.slug} image={getImage(item.node.frontmatter.imglink)} alt="image"></Card> </div>
            ):(<div></div>)))}
            </div>
            
          </section>
          <section id="about">
            <div className="sectionTitleDiv">
            
            </div>
            
            <div id="aboutParagraphContainer">
            <h1>About me.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </section>
          
        </IndexWrapper>
      </Layout>
      </div>
    
    
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
      edges {
        node {
          frontmatter {
            slug
            date
            title
            imglink {
              childImageSharp {
                gatsbyImageData(
                  width : 800
                  height: 800
                  placeholder : BLURRED
                  formats : [AUTO,WEBP,AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`

export default Index


