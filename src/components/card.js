import React from 'react';
import styled from 'styled-components';
import {GatsbyImage,  } from "gatsby-plugin-image";
import{ Link} from 'gatsby';
const CardDiv = styled.div`
a{
    transition: cursor 200ms ease-in;
}
a:hover{
    cursor:url('https://i.imgur.com/Eb6kWAA.png'), auto; 
}
img{
    border-radius:30px;
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