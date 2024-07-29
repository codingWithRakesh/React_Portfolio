import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [sidebar, setsidebar] = useState(screen.width < 1050)
    return (
        <UserContext.Provider value={[[sidebar, setsidebar]]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider