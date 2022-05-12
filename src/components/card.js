import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`

`


const Card = (props) => {
    return(
        <CardDiv>
            <div>
                <h2 id="cardHeader">{props.title}</h2>
                <h3 id="cardDescription">{props.description}</h3>
            </div>
            <div>
                <img src={props.img} alt={props.alt}></img>
            </div>
            <hr></hr>
        </CardDiv>
    )
}
export default Card