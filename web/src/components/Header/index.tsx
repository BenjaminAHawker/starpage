import React, { useContext } from 'react';
import { ThemeContext, WorkSpaceContext } from '../../data/context';
import { StyledHead } from '../../styles/styled-components';
import Pokeball from '../../styles/styled-components/pokeball';

interface props{};
const Head:React.FC<props> = ({

}) => {


    return (
        <StyledHead>
            <Pokeball/>
        </StyledHead>
    )

};

export default Head;