import React from 'react';
import styled from 'styled-components';

const SectionHeaderWrapper = styled.div`

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