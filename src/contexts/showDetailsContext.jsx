import React, { createContext, useContext, useState } from 'react'

export const ShowDetailsContext = createContext()

const ShowDetailsContextProvider = ({ children }) => {
    const [typeData, setTypeData] = useState("")
    return (
        <ShowDetailsContext.Provider value={[[typeData, setTypeData]]}>
            {children}
        </ShowDetailsContext.Provider>
    )
}
export default ShowDetailsContextProvider

export function useShowDetails() {
    return useContext(ShowDetailsContext)
} 