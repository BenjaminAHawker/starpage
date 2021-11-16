import React, { useContext } from 'react';
import { ThemeContext, WorkSpaceContext } from '../../data/context';
import { StyledHead } from '../../styles/styled-components';
import Pokeball from '../../styles/styled-components/pokeball';

interface props{};
const Head:React.FC<props> = ({

}) => {

    const { theme,setTheme } = useContext(ThemeContext);
    const { space,setSpace } = useContext(WorkSpaceContext);

    const changeTheme = () => {
        if(theme === "Dark"){
            setTheme("Lite")
        }else{
            setTheme("Dark")
        }
    };

    const changeSpace = () => {
        if(space === "Work"){
            setSpace("Home")
        }else{
            setSpace("Work")
        }
    };


    

    return (
        <StyledHead>
            <Pokeball/>
        </StyledHead>
    )

};

export default Head;