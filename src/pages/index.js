import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/card'
import SectionHeader from '../components/sectionHeader'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import Meta from '../components/helmet'

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
  h1{
    padding-left:var(--paragraph-padding);
  }
  #aboutParagraphContainer{
    width: var(--paragraph-width);
    
    p{
      padding-left: var(--paragraph-padding);
      
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
  #about{
    flex-direction:row;
    justify-content:space-evenly;
    
    
    
    
  }
}



`

const Index = ({data}) => {
  

  return(
  <div>
    <Meta title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} link={data.site.siteMetadata.siteUrl}></Meta>
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
            
            
            <div id="aboutParagraphContainer">
            <h1>About me.</h1>
            <p>My name is Nikolai Whittaker and I am a web developer based in Ottawa, originally from Barbados. I am equally as comfortable designing and implementing beautiful user interfaces and working with databases and servers.</p>
            <p>In my free time you can usually find me at a rock climbing gym or reading and sipping an overly expensive espresso in a coffee shop.</p>
            </div>
            <StaticImage src='../images/icon.png' id="aboutImg" alt='image' style={{ borderRadius : '20px'}}></StaticImage>
            
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
    site {
      siteMetadata {
        description
        siteUrl
        title
        titleTemplate
      }
    }
  }
`

export default Index


