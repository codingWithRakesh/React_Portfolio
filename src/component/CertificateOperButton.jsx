import React from 'react'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { TbView360 } from 'react-icons/tb'

const CertificateOperButton = ({ nameCertificate }) => {
    return (
        <div className="showButtonCer">
            <a href={nameCertificate.link} target='_blank' className='button-60 back linkS'>
                <span>
                    <TbView360 />
                </span>
                Visit Certificate
                <span>
                    <LiaExternalLinkAltSolid />
                </span>
            </a>
        </div>
    )
}

export default CertificateOperButton