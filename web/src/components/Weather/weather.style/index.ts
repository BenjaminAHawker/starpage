import styled from 'styled-components';

export const WeatherContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:.5em;
    background-color:${props => props.theme.frontground};
    border-radius:${props=>props.theme.globalradius};
    
`
export const TempGroup = styled.div`
    display:flex;
`;
export const TempContainer = styled.div`
    display:flex;
`;
export const Temp = styled.div`
    color:${props => props.color};
    font-family:'Indie Flower', cursive;
    font-size:1.5em;
`;

export const Arrow = styled.div`
    font-family:'Indie Flower', cursive;
    font-size:1em;
`;

export const WeatherDescriptionGroup = styled.div`
    display:flex;

`;

export const City = styled.div`
    font-family:'Indie Flower', cursive;
    color:white;
`;