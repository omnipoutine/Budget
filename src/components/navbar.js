import React, { useState } from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

export const flexColumnCenterCenter = `
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;

`


const MenuIcon = styled.button`


${flexColumnCenterCenter}
background: var(--main-bg);



 
cursor:url('https://i.imgur.com/ctO6mJX.png'), auto;

transition: background 150ms linear;


border:none;
z-index: 5;
 :hover{
    
 }
p{
    
    
    
    cursor:url('https://i.imgur.com/ctO6mJX.png'), auto;
    padding:var(--nav-padding);
}


`
const Container = styled.div`
    background: var(--main-bg);
    position: relative;

   #navHead{
       
    padding:var(--nav-padding);
       
       z-index:6;
   }
   #desktopMenu {
    display: none ;          
}

#mobileMenu {
    background: var(--main-bg);
    z-index:6;
    width:100%;
    top:0;
    position:fixed;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
}


@media only screen and (min-width:1200px){

    #desktopMenu{
        background:var(--main-bg);
        z-index:5;
        position:fixed;
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        padding-left:var(--nav-padding);
        padding-right:var(--nav-padding);
        ul{
            margin-right:var(--nav-padding);
            display:flex;
            flex-direction:row;
            justify-content:center;
            list-style:none;
        li{
               
                margin:var(--nav-padding);
        }

        a{
                padding: var(--nav-padding);
                transition: font-weight 50ms ease-in;
        }
        #headerLink:hover{
                cursor:url('https://i.imgur.com/ctO6mJX.png'), auto;  
                font-weight:500; }
        }
        a:hover{
                cursor:url('https://i.imgur.com/ctO6mJX.png'), auto;  
                font-weight:500;

        }
    }
          
    #mobileMenu{
        
            display:none;
        
    }
    
       
}   
`
const MenuLink = styled.nav`
background:var(--main-bg);

${flexColumnCenterCenter}
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
    margin-bottom:1rem;

a{
    text-decoration: none;
    color: white;
    font-size:2rem;
    
    margin-left:1rem;
    padding-bottom:1rem;
    font-weight:300;
    transition: font-weight 25ms ease-out;
}

hr{
    width:90%;
    opacity:0;
    margin-bottom:1rem;
    
}
}
li:hover{
    
  a{  
    
        color:white;
    
    cursor:url('https://i.imgur.com/ctO6mJX.png'), auto;    
}
  

}
@media only screen and (min-width:819px){
    padding-left:2rem;
    ul{
        li{
            a{
                

                
                font-size:5rem;
            }
        }
    }
    
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
            <div id="desktopMenu">
                <Link to='/' id="headerLink">NIKOLAI WHITTAKER</Link>
                <div>
                    <ul>
                        <li><Link to='/#projects'>WORK</Link></li>
                        <li><Link to='#footer'>CONTACT</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                    </ul>
                </div>
            </div>
            <div id="mobileMenu">
            <div id="navHead"><Link to="/">NIKOLAI WHITTAKER</Link></div>
            <MenuIcon nav={nav}
            onClick ={() => {showNav(!nav);}}>
                {menuButton}
                
            </MenuIcon>
            </div>
            <MenuLink nav={nav}>
            
                <ul>
                    <li><Link to="/" onClick ={() => {showNav(!nav);}}>Home</Link>
                    <hr/>
                    </li>
                    
                    <li><Link to="/#about" onClick ={() => {showNav(!nav);}}>About</Link>
                    <hr/>
                    </li>
                    
                    <li><Link to="/#projects" onClick ={() => {showNav(!nav);}}>Projects</Link>
                    <hr/>
                    </li>
                    
                    <li><Link to="#contact" onClick ={() => {showNav(!nav);}} >Contact</Link>
                    <hr/>

                    </li>
                    
                </ul>
            </MenuLink>
        </Container>
    )}

export default Navbar