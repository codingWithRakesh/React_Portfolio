import React, { createContext, useContext, useState } from 'react'

export const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {
    const [closeModal, setCloseModal] = useState(false)
    return (
        <ModalContext.Provider value={[[closeModal, setCloseModal]]}>
            {children}
        </ModalContext.Provider>
    )
}
export default ModalContextProvider

export function useModal() {
    return useContext(ModalContext)
} 