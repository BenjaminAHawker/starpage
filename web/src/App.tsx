import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./data/context";
import { Content, Head, Weather } from "./components";
import { DarkTheme, LiteTheme } from "./styles/themes";

// Styled Components
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
`;

interface props {}
const App: React.FC<props> = ({}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "Dark" ? DarkTheme : LiteTheme}>
      <Container>
        <Content>
          <Weather />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default App;
