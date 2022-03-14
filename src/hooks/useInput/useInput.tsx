import {useCallback, useMemo, useState} from "react";

export const useInput = () => {
    const [input, setinput] = useState('')

    const handleChange = useCallback((newVal: string) => setinput(newVal), [])

    return useMemo(() => ({handleChange, input}), [input, handleChange])
}