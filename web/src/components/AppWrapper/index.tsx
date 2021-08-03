import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {Theme} from '@styles';
import {Context} from '@utilities';

interface AppWrapperProps {}

const Wrapper = styled.div`
    background-color:${props => props.theme.bg};
    height:100vh;
    width:100%;
`

const AppWrapper:React.FC<AppWrapperProps> = ({
    children
}) => {

    const {theme} = useContext(Context.ThemeContext)


    return(
        <ThemeProvider theme={Theme[theme as keyof typeof Theme]}>
            <Wrapper>
                {children}
            </Wrapper>
        </ThemeProvider>
    )
};

export default AppWrapper;