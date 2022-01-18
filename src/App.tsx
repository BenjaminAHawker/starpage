import config_yml from "../assets/config.yml";
import { configuration, THEME } from "./d.ts/main";
import styled, { ThemeProvider } from "styled-components";
import { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { ServiceContainer } from "./components";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.bg};
  display: flex;
`;

const App: FC<any> = ({}) => {
  const options: configuration = config_yml;

  const [style, setStyle] = useState<THEME | undefined>(undefined);

  useEffect(() => {
    fetch(`/assets/themes/${options.theme || "default"}.json`).then(
      async (res) => {
        setStyle(await res.json());
      }
    );
  }, [options]);

  console.log(style);

  return (
    <ThemeProvider theme={style || {}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{options.title || "Default"}</title>
      </Helmet>
      <AppContainer>
        <ServiceContainer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
