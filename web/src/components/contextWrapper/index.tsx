import React, { useState } from 'react';
import { ThemeContext } from '../../data/context';

interface props{};
const ContextWrapper:React.FC<props> = ({
    children
}) => {

    const [theme,setTheme] = useState<"Dark" | "Lite">("Dark");
    const themeValue = { theme,setTheme };

    return(
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ContextWrapper;