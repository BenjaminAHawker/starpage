import styled from 'styled-components';

export const StyledDateTimeContainer = styled.div`
    display:flex;
    flex-direction:row;
    padding:.5em;
    margin:0 .5em 0 .5em  ;
    background-color:${props => props.theme.frontground};
    border-radius:${props=>props.theme.globalradius};
    font-family:'Indie Flower', cursive;
    align-items:baseline;
`;
export const StyledDateContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:baseline;
    margin:.2em;
`;
export const StyledMonth = styled.div`
    font-size:1.5em;
    font-weight:600;
`;
export const StyledDate = styled.div`

`;

export const StyledTimeContainer = styled.div`
    margin:.2em;
`;