import React from 'react';
import styled from 'styled-components';
import SectionHeader from './sectionHeader';

const FooterContainer =styled.footer`
margin-top:5rem;
display:flex;
flex-direction:column;
padding:var(--index-padding);

ul{
    margin-bottom:2rem;
    list-style:none;
    
    padding-left:0;
    li{
        margin-bottom:1rem;

        a{
            font-size:1.2rem;
            font-weight:300;
            
        }
        a:hover{
            cursor:url('https://i.imgur.com/ctO6mJX.png'), auto;  
            font-weight:700;
        }
    }
}
p{
    text-transform:uppercase;
    font-size:0.75rem;
    margin-bottom:2rem;
}


@media only screen and (min-width:1200px){
    padding-left:5rem;
}
`
const Footer = () =>{
    return(
        <FooterContainer id="contact">
            <h1>Get in Contact.</h1>
            
            <ul>
                <li><a href='https://www.linkedin.com/in/nikolai-whittaker-6b210aba/'>Linkedin</a></li>
                <li><a href='https://github.com/omnipoutine'>Github</a></li>
                <li><a href='mailto:niko.whitt@gmail.com'>Email</a></li>
            </ul>
            <p>Designed and Coded by Nikolai Whittaker 2022</p>
        </FooterContainer>
    )
}

export default Footer