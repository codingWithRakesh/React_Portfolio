import React from 'react'
import ProjectCom from './ProjectCom'

const CertificateProjectShow = ({ matchingProject }) => {
    return (
        matchingProject && <div className="ifProject">
            {[matchingProject].map((data, index) => (
                <ProjectCom key={index} data={data} classProject="certiCladjhjh" />
            ))}
        </div>
    )
}

export default CertificateProjectShow