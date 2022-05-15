import React from 'react';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`
hr{
    opacity:0;
}
`
const SectionHeader = (props) => {
return(
    <SectionHeaderWrapper>
        <h3>{props.title}</h3>
        <hr></hr>
    </SectionHeaderWrapper>
)
}

export default SectionHeader