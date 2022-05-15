import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/card'
import SectionHeader from '../components/sectionHeader'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
const SiteWrapper = styled.div`
div{
  width:100$;
}

`
const IndexWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:start;
justify-content:center;
padding-left:1rem;

#headerDiv{
  height:60vh;
  display: flex;
  flex-direction:column-reverse;
  
  align-items:flex-start;
  justify-content:end;
  margin-bottom:2rem;
  padding-bottom:2rem;
  box-sizing: border-box;
}
h1{
  margin-bottom:1rem;
  margin-top:0;
  color:white;
  
}
#about{
  width:90%;
  #aboutParagraphContainer{
    width:100%;
    margin-bottom:10rem;
  }
  h3{
    
    margin-bottom:2rem;
  }
  hr{
    
    border-color:#696969;
    opacity:0%;
    margin-bottom:3rem;
    margin-left:0;
    padding-left:0;
    
  }
  h2{
    margin-top:5rem;
    margin-bottom:10rem;
    
  }
  p{
    
    
    margin-bottom:5rem;
  }
}
.sectionTitleDiv{
  margin-bottom:2rem;
}

#projects{
  width:90%;
  h3{
    margin-bottom:3rem;
  }
}
@media only screen and (min-width:819px){
  padding-left:2rem;
#about{
  
  width:95%;
  h2{
   margin-top:0; 
  }
  #aboutParagraphContainer{
    p{
      margin-bottom:10rem;
    }
    width:95%;
    margin-top:10rem;
    margin-bottom:20rem;
  }
}

}
#projects{
  width:95%;
}

@media only screen and (min-width:1200px){

    #aboutParagraphContainer{
      display:flex;
      flex-direction:row;
      justify-content:start;
      

      P{
        font-size:1.75rem;
        width:35%;
        margin-right:5rem;
      }
    }
    #headerDiv{
      margin-bottom:1rem;
    }
}
`

const Index = ({data}) => {
  

  return(
    <SiteWrapper>
      <Layout>
        <IndexWrapper>
          <div id="headerDiv">
          <h1>Niko</h1>
          </div>
          <section id="about">
            <div className="sectionTitleDiv">
            <SectionHeader title="About me - 01" id="aboutTitle"/>
            </div>
            <h2>Web Developer based in Ottawa, Ontario. Currently looking for Work</h2>
            <div id="aboutParagraphContainer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </section>
          <section id="projects">
            <div className="sectionTitleDiv">
              <SectionHeader title="Projects - 02"/>
            </div>
            {data.allMarkdownRemark.edges.map((item, i) => (item.node.frontmatter ? (<div><Card title={item.node.frontmatter.slug} description={item.node.frontmatter.title} image={getImage(item.node.frontmatter.imglink)} alt="image"></Card> </div>
            ):(<div></div>)))}
            
            
          </section>
        </IndexWrapper>
      </Layout>
    
    </SiteWrapper>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
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


