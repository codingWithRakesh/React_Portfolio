import React, { createContext, useContext, useState } from 'react'

export const CroseFontContext = createContext()

const CroseFontContextProvider = ({ children }) => {
    const [croseF, setCroseF] = useState(false)
    return (
        <CroseFontContext.Provider value={[[croseF, setCroseF]]}>
            {children}
        </CroseFontContext.Provider>
    )
}
export default CroseFontContextProvider

export function useCroseFont() {
    return useContext(CroseFontContext)
} 