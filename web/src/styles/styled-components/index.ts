import styled from 'styled-components';
import backImg from '../../data/assets/img/fz7u6ljc1l361.png';


export const StyledHead = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    margin:.5em;
`;
export const StyledContent = styled.div`
    position: relative;
    width:60%;
    height:50%;
    margin:auto;
    border-radius:10px;
    background-color:${props => props.theme.frontground};

`;
export const StyledWeatherContainer = styled.div`
    
`;
export const StyledWeb = styled.div`
    position:absolute;
    border-radius:10px;
    z-index:10;
    height:60vh;
    top:-2.1em;
    left:1.5em;
    opacity:0.7;
    background-color:${props => props.theme.frontground};
`;

export const ArrowUp = styled.span`
    color: red;
`;

export const ArrowDown = styled.span`
    color: blue;
`;