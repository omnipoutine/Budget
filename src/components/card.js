import React from 'react';
import styled from 'styled-components';
import {GatsbyImage,  } from "gatsby-plugin-image";
import{ Link} from 'gatsby';
const CardDiv = styled.div`
width:100%;
a:hover{
    cursor:url('https://i.imgur.com/ctO6mJX.png'), auto; 
}
`


const Card = (props) => {
    return(
        <CardDiv>
            <Link to={props.title}>
            <div>
                <h2 id="cardHeader">{props.title}</h2>
                
                <h3 id="cardDescription">{props.description}</h3>
                <p></p>
            </div>
            <div>
                <GatsbyImage image={props.image} alt={props.alt}></GatsbyImage>
            </div>
            {/* <hr></hr> */}
            </Link>
        </CardDiv>
    )
}
export default Card