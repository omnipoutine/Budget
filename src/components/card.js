import React from 'react';
import styled from 'styled-components';
import {GatsbyImage,  } from "gatsby-plugin-image";
import{ Link} from 'gatsby';
const CardDiv = styled.div`
@keyframes textAppear{
    from{opacity:0%;}
    to{opacity:100%;}
}
h2{
    
    transition: opacity 200ms ease-in;
}
a{
    transition: cursor 100ms ease-in;
}
a:hover{
    cursor:url('https://i.imgur.com/Eb6kWAA.png'), auto; 
    
}
img{
    border-radius:30px;
}
@media only screen and (min-width:1200px){
    h2{
        opacity:0%;
    }
    a:hover{
        h2{
            opacity:100%;
        }
    }
}
`


const Card = (props) => {
    return(
        <CardDiv>
            <Link to={props.link}>
            
            <div>
                <GatsbyImage image={props.image} alt={props.alt}></GatsbyImage>
            </div>
            <div>
                <h2 id="cardHeader">{props.title}</h2>
                
                
            </div>
            {/* <hr></hr> */}
            </Link>
        </CardDiv>
    )
}
export default Card