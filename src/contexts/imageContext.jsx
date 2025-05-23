import React, { createContext, useContext, useState } from 'react'

export const ImageShowContext = createContext()

const ImageShowContextProvider = ({ children }) => {
    const [imageShow, setImageShow] = useState({
        isOn : true,
        image : "",
    })
    return (
        <ImageShowContext.Provider value={[imageShow, setImageShow]}>
            {children}
        </ImageShowContext.Provider>
    )
}
export default ImageShowContextProvider

export function useImageShow() {
    return useContext(ImageShowContext)
} 