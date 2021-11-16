import styled from 'styled-components';

export const WeatherContainer = styled.div`
    display:flex;
    flex-direction:column;
`
export const TempWrapper = styled.div`
    color:${props => props.color};
`;