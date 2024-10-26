
const CertificateSummaryShow = ({ nameCertificate }) => {
    return (
        nameCertificate.summary && <div className="summaryCer">
            <p>
                Summary
            </p>
            {nameCertificate.summary}
        </div>
    )
}

export default CertificateSummaryShow