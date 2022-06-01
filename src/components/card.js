import React from 'react';
import styled from 'styled-components';
import {GatsbyImage,  } from "gatsby-plugin-image";
import{ Link} from 'gatsby';
import { flexColumnCenterCenter } from './navbar';
const CardDiv = styled.div`
height:100%;
max-height: var(--card-height);

overflow:hidden;
display:flex;
flex-direction:column;
align-items:start;

background: var(--card-secondary);
border-radius:var(--border-sizing);



@keyframes textAppear{
    from{opacity:0%;}
    to{opacity:100%;}
}

h2{
    text-align:center;
    transition: opacity 200ms ease-in;
    text-transform:uppercase;
    
    margin:0;
    
     
    
}
a{
    height:100%;
    transition: cursor 100ms ease-in;
}
a:hover{
    cursor:url('https://i.imgur.com/Eb6kWAA.png'), auto; 
    
}
#textDiv{
    height: calc(var(--card-height) * 0.20);
    ${flexColumnCenterCenter};
}
div:nth-child(1) {
    margin:0; 
    padding:0;
    border-radius: var(--border-sizing) var(--border-sizing) 0px 0px;
    height: calc(var(--card-height) *0.80);
    img{
        height: 100%; width: 100%;
        
    }
}

@media only screen and (min-width:1200px){
    transition: transform 100ms ease-out;
:hover{
    transition: transform 100ms ease-out;
    transform: scale(1.05);
}
}
`


const Card = (props) => {
    return(
        <CardDiv>
            <Link to={props.link}>
            
            <div>
                <GatsbyImage id='image' image={props.image} alt={props.alt}></GatsbyImage>
            </div>
            <div id='textDiv'>
                <h2>{props.title}</h2>
                
                
            </div>
            {/* <hr></hr> */}
            </Link>
        </CardDiv>
    )
}
export default Card