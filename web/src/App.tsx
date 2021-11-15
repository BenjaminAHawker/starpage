import React, { useContext } from 'react';
import { DarkTheme, LiteTheme } from './styles/themes';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './data/context';

import { StyledApp } from './styles/styled-components';
import { Head } from './components';

interface props {}
const App:React.FC<props> = ({

}) => {
  
  const {theme} = useContext(ThemeContext)
 
  return (
    <ThemeProvider theme={theme === "Dark" ? DarkTheme : LiteTheme}>
      <StyledApp>
        <Head/>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
