import React, { useState } from "react"
import styled from 'styled-components'
const MenuIcon = styled.button`
position:fixed;
top: 2rem;
right: 2rem;
display:flex;
justify-content: center;
align-items:center;
 width: 5rem;
 height: 5rem;
 border-radius:50px;

 background: #161616;
 border:none;
 cursor: pointer;
 z-index: 5;
p{
    position:absolute;
    color:white;
    font-size:1.5rem;
    
}

`
const Container = styled.div`
    background: #d4d4d4;
    postion:relative;
   
    
`
const MenuLink = styled.nav`
background: #2C2C2C;
opacity: 91%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: start;
text-align:left;
height:100vh;
width:100%;
position:fixed;
top:0;
right:0;
transform: ${({nav}) => nav ? "translateX(0)": "translateX(100%)"};
transition: transform 150ms linear;
ul{
    margin: 0;
    list-style: none;
    width:100%;
    padding:0;
}
li{
    margin-bottom:1rem;
}
a{
    text-decoration: none;
    color: white;
    font-size:3rem;
    text-transform: uppercase;
    margin-left:1rem;
    margin-bottom:1rem;
}
hr{
    width:90%;
    border-color:#696969;
    opacity:30%;
}
`

const NavLabel = styled.p`

`



const Navbar = () => {

    const[menuText, setMenuText] = useState(true);
    const[nav, showNav] = useState(false)
   
       
    let menuButton;   
    if(nav){
         menuButton = <p>EXIT</p>
    }else{
         menuButton = <p>MENU</p>
    }
    return ( 
        <Container>
            <MenuIcon onClick ={() => {showNav(!nav);}}>
                {menuButton}
                
            </MenuIcon>
            <MenuLink nav={nav}>
                <ul>
                    <li><a href="/">00 - Home</a></li>
                    <hr/>
                    <li><a href="/">01 - About</a></li>
                    <hr/>
                    <li><a href="/">02 - Projects</a></li>
                    <hr/>
                    <li><a href="/">03 - Contact</a></li>
                    <hr/>
                </ul>
            </MenuLink>
        </Container>
    )}

export default Navbar