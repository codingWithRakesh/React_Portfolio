import React, { createContext, useContext, useEffect, useState } from 'react'
import '../App.css'

export const ModeContext = createContext()

const ModeContextProvider = ({ children }) => {
    const [allThemes, setAllThemes] = useState([
        {
            name: "Light Mode",
            attribute: "light",
            isTrue: true,
            backGrounds: ["LiteMe", "LiteLi"]
        },
        {
            name: "Dark Mode",
            attribute: "dark",
            isTrue: false,
            backGrounds: ["DarkLi", "DarkMe"]
        },
        {
            name: "Blue Mode",
            attribute: "blue",
            isTrue: false,
            backGrounds: ["BlueLi", "BlueMe"]
        },
        {
            name: "Light Dark",
            attribute: "lightDark",
            isTrue: false,
            backGrounds: ["LL2", "LL1"]
        },
        {
            name: "Medium Dark",
            attribute: "mediumDark",
            isTrue: false,
            backGrounds: ["LM2", "LM1"]
        },
        {
            name: "Hard Dark",
            attribute: "hardDark",
            isTrue: false,
            backGrounds: ["LH2", "LH1"]
        },
    ])

    const [getName, setGetName] = useState("light")

    useEffect(() => {
        setAllThemes(prevState =>
            prevState.map(obj =>
                obj.attribute === getName
                    ? { ...obj, isTrue: true }
                    : { ...obj, isTrue: false }
            )
        );

        document.documentElement.setAttribute("data-theme", getName);
    }, [getName]);

    return (
        <ModeContext.Provider value={[[allThemes, setGetName]]}>
            {children}
        </ModeContext.Provider>
    )
}
export default ModeContextProvider

export function useMode() {
    return useContext(ModeContext)
} 