import React, { createContext, useContext, useEffect, useState } from 'react'
import '../App.css'

export const FontContext = createContext()

const FontContextProvider = ({ children }) => {
    const [fonts, setFonts] = useState([
        { value: 'RobotSanSserif', label: 'Roboto sans-serif', className: "RobotoSans", isTrue : false},
        { value: 'PlaywriteUSTradCursive', label: 'Playwrite US Trad cursive', className: "PlaywriteUS", isTrue : true },
        { value: 'PlaywritePLcursive', label: 'Playwrite PL cursive', className: "PlaywritePL", isTrue : false },
        { value: 'RobotoSlabSerif', label: 'Roboto Slab serif', className: "RobotoSlab", isTrue : false},
    ])
    const [allFonts, setAllFonts] = useState("RobotSanSserif")

    useEffect(() => {
        setFonts(prevState =>
            prevState.map(obj =>
                obj.value === allFonts
                    ? { ...obj, isTrue: true }
                    : { ...obj, isTrue: false }
            )
        );
        document.documentElement.setAttribute("data-font", allFonts);
    }, [allFonts]);

    return (
        <FontContext.Provider value={[[fonts, setAllFonts]]}>
            {children}
        </FontContext.Provider>
    )
}
export default FontContextProvider

export function useFonts() {
    return useContext(FontContext)
} 