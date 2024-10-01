import React from 'react'

const ShowCertificateName = ({nameCertificate}) => {
    return (
        <div className="boxCerHH boxShadows">
            <p className="titleCerNN">
                {nameCertificate.name}
            </p>
            <div className="showCerNNNNN">
                <img src={nameCertificate.image} />
            </div>
        </div>
    )
}

export default ShowCertificateName