import React from 'react'
import ReactCertificate from '../assets/certificate/React.jpg'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

const CertificateCom = ({data}) => {
  return (
    <div className='CertificateComClass boxShadows'>
        <div className="imageCerti">
            <img src={data.image} alt={ReactCertificate} />
        </div>
        <a href={data.link} target='_blank' className="linkCerti">
            {data.name} <LiaExternalLinkAltSolid />
        </a>
    </div>
  )
}

export default CertificateCom