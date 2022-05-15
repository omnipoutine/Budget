import React from 'react';
import styled from 'styled-components';
import SectionHeader from './sectionHeader';

const FooterContainer =styled.div`
margin-top:5rem;
hr{
    width:90%;
    margin-left:0;
    margin-bottom:4rem;
}
padding-left:1rem;
ul{
    margin-bottom:4rem;
    list-style:none;
    text-transform:uppercase;
    padding-left:0;
    li{
        margin-bottom:1rem;

        a{
            font-size:1.5rem;
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
    font-size:1rem;
    margin-bottom:2rem;
}

@media only screen and (min-width:768px){
    hr{
        width:95%;
    }
}
`
const Footer = () =>{
    return(
        <FooterContainer id="contact">
            <SectionHeader title="contact - 03" />
            
            <ul>
                <li><a href='linkedin.com'>Linkedin</a></li>
                <li><a href='github.com'>Github</a></li>
                <li><a href='github.com'>Email</a></li>
            </ul>
            <p>Designed and Coded by Nikolai Whittaker 2022</p>
        </FooterContainer>
    )
}

export default Footer