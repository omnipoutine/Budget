import React from 'react';
import styled from 'styled-components';
import {GatsbyImage } from "gatsby-plugin-image";
const CardDiv = styled.div`
width:100%;
`


const Card = (props) => {
    return(
        <CardDiv>
            <div>
                <h2 id="cardHeader">{props.title}</h2>
                
                <h3 id="cardDescription">{props.description}</h3>
                <p></p>
            </div>
            <div>
                <GatsbyImage image={props.image} alt={props.alt}></GatsbyImage>
            </div>
            {/* <hr></hr> */}
        </CardDiv>
    )
}
export default Card