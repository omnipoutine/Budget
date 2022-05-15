import React, { useState } from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
const MenuIcon = styled.button`
position:fixed;
padding:0;
top: 2rem;
right: 2rem;
display:flex;
justify-content: center;
align-items:center;
 width: 6rem;
 height: 6rem;
 border-radius:70px;
 
 cursor:url('https://i.imgur.com/ctO6mJX.png'), auto;
transition: background 150ms linear;
 background: ${({nav}) => nav ? "rgba(0,0,0,0)": "#161616"};
 border:none;

 z-index: 5;
 :hover{
    
 }
p{
    position:absolute;
    color:white;
    font-size:1rem;
    cursor:url('https://i.imgur.com/ctO6mJX.png'), auto;
    padding:1rem;
}
p:hover{

    

}

`
const Container = styled.div`
    background: #d4d4d4;
    postion:relative;
   
    
`
const MenuLink = styled.nav`
background:rgba(22,22,22,0.98);
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
z-index: 4;

transform: ${({nav}) => nav ? "translateX(0)": "translateX(100%)"};
transition: transform 150ms linear;
ul{
    margin: 0;
    list-style: none;
    width:100%;
    padding:0;
}
li{
    margin-bottom:2rem;

a{
    text-decoration: none;
    color: white;
    font-size:3rem;
    text-transform: uppercase;
    margin-left:1rem;
    padding-bottom:1rem;
    font-weight:300;
    transition: font-weight 25ms ease-out;
}

hr{
    width:90%;
    
    margin-bottom:1rem;
    
}
}
li:hover{
    
  a{  font-weight:700;
    cursor:url('https://i.imgur.com/ctO6mJX.png'), auto;    
}
  hr{opacity:70%;
}
}
@media only screen and (min-width:819px){
    padding-left:2rem;
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
            <MenuIcon nav={nav}
            onClick ={() => {showNav(!nav);}}>
                {menuButton}
                
            </MenuIcon>
            <MenuLink nav={nav}>
            
                <ul>
                    <li><Link to="/" onClick ={() => {showNav(!nav);}}>00 - Home</Link>
                    <hr/>
                    </li>
                    
                    <li><Link to="/#about" onClick ={() => {showNav(!nav);}}>01 - About</Link>
                    <hr/>
                    </li>
                    
                    <li><Link to="/#projects" onClick ={() => {showNav(!nav);}}>02 - Projects</Link>
                    <hr/>
                    </li>
                    
                    <li><Link to="#contact" onClick ={() => {showNav(!nav);}} >03 - Contact</Link>
                    <hr/>

                    </li>
                    
                </ul>
            </MenuLink>
        </Container>
    )}

export default Navbar