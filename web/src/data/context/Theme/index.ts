import React from 'react';

interface themeContext {
    theme: "Dark"| "Lite";
    setTheme: (theme:"Dark"| "Lite") => void;
};

const defaultTheme:themeContext = {
    theme: 'Dark',
    setTheme: (theme:"Dark"| "Lite") => { }
};

const ThemeContext = React.createContext(defaultTheme)

export default ThemeContext;