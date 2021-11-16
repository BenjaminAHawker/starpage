import React, { useContext } from 'react';
import { DarkTheme, LiteTheme } from './styles/themes';
import { ThemeProvider } from 'styled-components';
import { ThemeContext, WorkSpaceContext } from './data/context';

import { StyledApp } from './styles/styled-components';
import { Head } from './components';

interface props {}
const App:React.FC<props> = ({

}) => {
  
  const {theme} = useContext(ThemeContext)
  const {space} = useContext(WorkSpaceContext)
 
  console.log(space)

  return (
    <ThemeProvider theme={theme === "Dark" ? DarkTheme : LiteTheme}>
      <StyledApp>
        <Head/>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
