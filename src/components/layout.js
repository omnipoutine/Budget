import * as React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import styled,{createGlobalStyle} from 'styled-components'
import { useRef } from "react"
const Global = createGlobalStyle`
:root{

//Text Sizes
--header-text  : 2.5rem;
--about-header : 3rem;
--secondary-text : 1rem;
--paragraph-text : 0.9rem;

//colours
--transparent-color : rgba(0,0,0,0);
--main-bg : #161616;
--card-secondary: #222222;

//Spacing
--nav-padding: 1rem;
--card-padding: 2rem;
--index-padding: 1rem;
--header-top: 8rem;
--header-bottom: 2rem;
--paragraph-padding : 0 rem;
--project-margin: 5rem;

--paragraph-width : 100%;
--card-height: 450px;
--border-sizing: 20px;

@media only screen and (min-width: 768px){
    //Text Sizes
    --header-text  : 5rem;
    --secondary-text : 1.5rem;
    --paragraph-text : 1rem;

    //SPacing
    --index-padding:2rem;
    --paragraph-padding: 5%;

    --card-max:49%;
    --paragraph-width: 80%;
    --card-height:700px;
}

@media only screen and (min-width: 1200px){
    //Text Sizes
    --header-text  : 3rem;
    --secondary-text : 1.3rem;
    --paragraph-text : 1.2rem;

    --paragraph-width:600px;
    
    --card-height:600px;
}


}
body,html{
    
    width:100%;
    margin:0;
    padding:0;
    font-family: 'Satoshi',Arial, sans-serif;
    overflow-x: hidden;
    color:white;
    
    background:#161616;
    cursor: url('https://i.imgur.com/p0ArFfo.png'), auto;
}

a{
    text-decoration:none;
    color:white;
}
h1{
    
    line-height:110%;
    font-size:var(--header-text);
    font-weight:300;
    
  }

h2{
    
    font-weight:400;
    font-size: var(--secondary-text);
    letter-spacing:1px;
   
}
p{
    font-size:var(--paragraph-text);
    font-weight:300;
    letter-spacing:0.5px;
    color:white;
    line-height:150%;
}
ul{
    list-styling:none;
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