import React from "react";
import { themeOptions,placeOptions } from "types";

const ThemeContext = React.createContext({
    theme:'dark',
    setTheme: (i:themeOptions) => {}
});



const Context = {
    ThemeContext:ThemeContext
};


export default Context;