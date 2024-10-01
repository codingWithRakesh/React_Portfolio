import React from 'react'

const CertificateGot = ({ nameCertificate }) => {
    return (
        <div className="GotFrom">
            <p>
                {nameCertificate.gotDate}
            </p>
        </div>
    )
}

export default CertificateGot