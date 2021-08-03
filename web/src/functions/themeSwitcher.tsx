import React,{ useContext } from "react";
import {Context} from '@utilities';
import {themeOptions} from '../types';

const ThemeSwitcher = () => {
    const {theme,setTheme} = useContext(Context.ThemeContext);
    const toggle:themeOptions = theme === "dark" ? "lite" : "dark"
    return(
        <button onClick={()=> setTheme(toggle)}>
            Switch Theme (Current:{theme})
        </button>
    );
};

export default ThemeSwitcher;