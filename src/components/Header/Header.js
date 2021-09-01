import { createTheme, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './Header.css';

const Header = ({ word, setWord, LightMode }) => {
    
    const darkTheme = createTheme({
        palette: {
            primary: {
                main:LightMode ? '#2A0944' : '#fff'
            },
            type:LightMode ? 'light' : 'dark',
        },
      });

    return (
        <div className="header">
            <span className="title">{word ? word : "Shabdzzz"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                                className="search"
                                id="standard-basic" 
                                label="Your Word" 
                                value= {word}
                                onChange={(e) => setWord(e.target.value)}
                                />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
