import React from 'react';
import styled from 'styled-components';

const FooterContainer =styled.div`
ul{
    list-style:none;
    text-transform:uppercase;
}
`
const Footer = () =>{
    return(
        <FooterContainer>
            <hr></hr>
            <h2 id="cardHeader">Get In Contact</h2>
            <ul>
                <li>Linkedin</li>
                <li>Github</li>
                <li>Email</li>
            </ul>
            <p>Designed and Coded by Nikolai Whittaker 2022</p>
        </FooterContainer>
    )
}

export default Footer