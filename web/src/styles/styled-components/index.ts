import styled from 'styled-components';

export const StyledApp = styled.div`
    height:100vh;
    width:100vw;
    background-color:${props => props.theme.background};
    display:flex;
    flex-direction:column;
`;

export const StyledHead = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin:1em;
`;