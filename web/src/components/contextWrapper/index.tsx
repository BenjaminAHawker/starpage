import React, { useState } from 'react';
import { ThemeContext, WorkSpaceContext } from '../../data/context';

interface props{};
const ContextWrapper:React.FC<props> = ({
    children
}) => {

    const [theme,setTheme] = useState<"Dark" | "Lite">("Dark");
    const themeValue = { theme,setTheme };

    const [space,setSpace] = useState<"Work" | "Home">("Work");
    const spaceValue = {space,setSpace};

    return(
        <ThemeContext.Provider value={themeValue}>
            <WorkSpaceContext.Provider value={spaceValue}>
               {children} 
            </WorkSpaceContext.Provider>
        </ThemeContext.Provider>
    )
};

export default ContextWrapper;