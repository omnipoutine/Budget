import * as React from "react"
import Navbar from "./navbar"
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
    
}

`
const Content = styled.div`
height:200vh;
background:red;
`

const Layout = ({children}) => {
    return ( 
        <div>
            <Global/>
            <Navbar></Navbar>
            
            {children}
            
        </div>
    )}

export default Layout