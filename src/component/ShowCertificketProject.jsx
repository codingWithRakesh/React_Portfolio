import React from 'react'
import CertificateCom from './CertificateCom'

const ShowCertificketProject = ({filteredCertificates}) => {
    return (
        filteredCertificates.length ? (<div className="certifickteRowProject">
            <p>
                I have the following certificates
            </p>
            <div className="mainShowCertificketsProject">
                {filteredCertificates.map((data, index) => (<CertificateCom key={index} data={data} />))}
            </div>
        </div>) : ""
    )
}

export default ShowCertificketProject