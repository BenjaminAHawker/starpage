import React, { useContext } from 'react';
import { ThemeContext } from '../../data/context';
import { StyledHead } from '../../styles/styled-components';

interface props{};
const Head:React.FC<props> = ({

}) => {

    const { theme,setTheme } = useContext(ThemeContext)

    const changeTheme = () => {
        if(theme === "Dark"){
            setTheme("Lite")
        }else{
            setTheme("Dark")
        }
    };

    return (
        <StyledHead>
            <button onClick={changeTheme}>Click</button>
        </StyledHead>
    )

};

export default Head;