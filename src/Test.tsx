import {useGetMode, useGetModeChanger} from "./tools/DarkMode/DarkMode";

export const Test = () => {
    const mode = useGetMode()
    const setMode = useGetModeChanger()

    return <>
        <span>{mode}</span>
        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} >change</button>
    </>
}