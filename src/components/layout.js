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
#cardHeader{
    font-weight:700;
    font-size:3rem;
    letter-spacing:0px;
}
#cardDescription{
    font-size:1.5rem;
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