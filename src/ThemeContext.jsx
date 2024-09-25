import { createContext, useState } from "react";

export const Context = createContext()

export const ThemeContext = ({ children}) => {
    const [theme, setTheme] = useState('dark')
    return(
        <Context.Provider value={{ theme, setTheme}}>{children}</Context.Provider>
    )
}