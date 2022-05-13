import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/card'
import SectionHeader from '../components/sectionHeader'
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
h1{
  margin-top:15rem;
  margin-bottom:15rem;
  background: -webkit-linear-gradient(#F9F9F9, #7b7b7b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#about{
  width:90%;
  #aboutParagraphContainer{
    width:100%;
    margin-bottom:10rem;
  }
  h3{
    
    margin-bottom:3rem;
  }
  hr{
    
    border-color:#696969;
    opacity:90%;
    margin-bottom:3rem;
    margin-left:0;
    padding-left:0;
    
  }
  h2{
    
    margin-bottom:5rem;
    
  }
  p{
    
    
    margin-bottom:5rem;
  }
}
.sectionTitleDiv{
  margin-bottom:10rem;
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
`

const Index = ({data}) => {

  return(
    <SiteWrapper>
      <Layout>
        <IndexWrapper>
          
          <h1>Niko<br/>lai<br/>Whitt<br/>aker</h1>
          
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
            {data.allMarkdownRemark.edges.map((item, i) => (item.node.frontmatter ? (<Card title={item.node.frontmatter.slug} description={item.node.frontmatter.title}></Card>):(<div></div>)))}
            <Card title="MFMSPORTAL WEBSITE" description="An online learning platform for montessori school" img="./pexels-gradienta-6985048.jpgicon.png" ></Card>
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
          }
        }
      }
    }
  }
`

export default Index


