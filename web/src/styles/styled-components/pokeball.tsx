import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../data/context';

const StyledPokeball = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 2px solid $black;
  transform-origin: center bottom;
  :hover{
    cursor:pointer;
  }
`;
const StyledUpperHalf = styled.div`
    position: absolute;
    background: ${props => props.theme.pokeball};
    height: 42%;
    width: 100%;
`;
const StyledLowerHalf = styled.div`
    bottom: 0;
    position: absolute;
    background: white;
    height: 42%;
    width: 100%;
`;
const StyledBase = styled.div`
    background: #333;
    height: 80%;
    width: 80%;
    padding: 10%;
`;
const StyledInnerCircle = styled.div`
    border-radius: 50%;
    height: 20%;
    width: 20%;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid #333;
    transform: translate(-50%, -50%);
`;

interface props{};

const Pokeball:React.FC<props> = ({

}) => {

    const {theme,setTheme} = useContext(ThemeContext)

    const changeTheme = () => {
      if(theme === 'Dark'){
        setTheme('Lite')
      }else{
        setTheme("Dark")
      }
    }

    return(
        <StyledPokeball onClick={changeTheme}>
          <StyledUpperHalf/>
          <StyledLowerHalf/>
          <StyledBase/>
          <StyledInnerCircle/>
        </StyledPokeball>
    )
};

export default Pokeball;