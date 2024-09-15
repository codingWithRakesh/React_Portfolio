import React from 'react'
import CertificateCom from './CertificateCom'

const ShowSkillcertificate = ({ nameSkillcertificate, nameSkill }) => {
    return (

        nameSkillcertificate.length ? (<div className="certifickteRow">
            <p>
                I have the following {nameSkill.name} certificates
            </p>
            <div className="mainShowCertifickets">
                {nameSkillcertificate.map((data, index) => (<CertificateCom key={index} data={data} />))}
            </div>
        </div>) : ""

    )
}

export default ShowSkillcertificate