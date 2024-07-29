import React, { createContext, useContext, useState } from 'react'

export const BorderContext = createContext()

const BorderContextProvider = ({ children }) => {
    const [navBorder, setNavBorder] = useState(false)
    return (
        <BorderContext.Provider value={[[navBorder, setNavBorder]]}>
            {children}
        </BorderContext.Provider>
    )
}
export default BorderContextProvider

export function useBorder() {
    return useContext(BorderContext)
} 