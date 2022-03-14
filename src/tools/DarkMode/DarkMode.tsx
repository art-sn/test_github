import React, {useContext, useState} from "react";


const modes = {
    light: 'light',
    dark: 'dark'
}

type Modes = keyof typeof modes

interface ContextType {
    mode: Modes
    changeMode: (mode: Modes) => void
}

const ThemeContext = React.createContext<ContextType>({} as ContextType)

function getMode() {
    const mode = localStorage.getItem('mode')
    console.log('called')
    return (mode || modes.light) as Modes
}

export const DarkThemeProvider: React.FC = ({children}) => {
    const [mode, setMode] = useState(getMode)

    function changeMode(mode: Modes) {
        localStorage.setItem('mode', mode)
        setMode(mode)
    }

    return <ThemeContext.Provider value={{mode, changeMode}}>
        {children}
    </ThemeContext.Provider>
}

export function useGetMode() {
    return useContext(ThemeContext).mode
}

export function useGetModeChanger() {
    return useContext(ThemeContext).changeMode
}