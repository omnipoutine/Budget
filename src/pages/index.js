import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/card'
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
padding-left:2rem;
h1{
  margin-top:15rem;
  margin-bottom:15rem;
  background: -webkit-linear-gradient(#F9F9F9, #7b7b7b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#about{
  width:90%;
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
    
    font-size:1.1rem;
    font-weight:300;
    letter-spacing:0.5px;
    margin-bottom:5rem;
  }
}
#projects{
  width:90%;
  h3{
    margin-bottom:3rem;
  }
}

`

const Index = () => {
  return(
    <SiteWrapper>
      <Layout>
        <IndexWrapper>
          
          <h1>Niko<br/>lai<br/>Whitt<br/>aker</h1>
          
          <section id="about">
            <h3>About Me - 01</h3>
            <hr></hr>
            <h2>Web Developer based in Ottawa, Ontario. Currently looking for Work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
          <section id="projects">
          <h3>Projects - 01</h3>
            <hr></hr>
            <Card title="MFMSPORTAL WEBSITE" description="An online learning platform for montessori school" img="./pexels-gradienta-6985048.jpgicon.png" ></Card>
          </section>
          <section>
            
          </section>
        </IndexWrapper>
      </Layout>

    </SiteWrapper>
  )
}

export default Index