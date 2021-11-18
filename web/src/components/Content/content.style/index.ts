import styled from 'styled-components';

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    border: solid .1em ${props => props.theme.frontground};
    width:80%;
    border-radius:5px;
    margin:auto;
    padding:.5em;
`;