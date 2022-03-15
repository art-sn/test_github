import React, {useState} from 'react';
import './App.css';
import {DarkThemeProvider} from "./tools/DarkMode/DarkMode";
import {Test} from "./Test";
import {useInput} from "hooks/useInput";

function App() {
    console.log('new')
    const [count, setCount] = useState(0)
    return (
        <DarkThemeProvider>
            <Test/>
        </DarkThemeProvider>
    );
}


export default App;
