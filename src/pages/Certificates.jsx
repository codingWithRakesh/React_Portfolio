import React, { useContext, useEffect } from 'react'
import '../App.css'
import { UserContext } from '../contexts/context'
import CertificateCom from '../component/CertificateCom'
import { useTopLoader } from '../contexts/topLoderContext'
import { details } from '../details/details.jsx'
import { useShowDetails } from '../contexts/showDetailsContext.jsx'

const Certificates = () => {
  const [[sidebar]] = useContext(UserContext)
  const [[progress, setProgress]] = useTopLoader()
  const [[typeData, setTypeData]] = useShowDetails();
  useEffect(() => {
    setTypeData("")
  }, [])
  
  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [])

  return (
    <div className={`mainContainer certificateShow ${sidebar ? "mainContainerSmall" : ""}`}>
      <h1 className="titleSkill certiti">
        Certificates
      </h1>
      <div className="certificate">
        {details.certificates.map((data, index) => (<CertificateCom key={index} data={data} />))}
      </div>
    </div>
  )
}

export default Certificates
