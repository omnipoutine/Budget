import * as React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import styled,{createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`

body,html{
    margin:0;
    padding:0;
    font-family: 'Satoshi', sans-serif;
    overflow-x: hidden;
    color:white;
    max-width:100%;
    background:#161616;
    cursor: url('https://i.imgur.com/p0ArFfo.png'), auto;
}
h1{
    text-transform:uppercase;
    line-height:110%;
    font-size:6rem;
    
  }
h3{
    text-transform:uppercase;
    font-weight:300;
    font-size:1rem;
    letter-spacing:1px;
}
h2{
    text-transform:uppercase;
    font-weight:300;
    font-size: 1.5rem;
    letter-spacing:1px;
}
p{
    font-size:1.1rem;
    font-weight:300;
    letter-spacing:0.5px;
}
ul{
    list-styling:none;
    a{
        color:white;
        text-decoration:none;
    }
}
#cardHeader{
    font-weight:700;
    font-size:3rem;
    letter-spacing:0px;
}
#cardDescription{
    font-size:1.5rem;
}

@media only screen and (min-width:819px){
    h1{
        font-size:10rem;
    }
    h2{
        font-size:3rem;
    }
    
    p{
        font-size:2.25rem;
    }
    #cardHeader{
        
        font-size:4rem;
        
    }
    #cardDescription{
        font-size:2rem;
    }
}
`


const Layout = ({children}) => {
    return ( 
        <div>
            <Global/>
            <Navbar></Navbar>
            
            {children}
            <Footer></Footer>
        </div>
    )}

export default Layout