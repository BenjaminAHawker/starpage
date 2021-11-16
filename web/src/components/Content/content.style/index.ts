import styled from 'styled-components';

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    border: solid .1em ${props => props.theme.frontground};
    width:80%;
    padding:1em;
    border-radius:5px;
    margin:auto;
`;