import React from 'react'
import ChartBoxSkill from './ChartBoxSkill'
import Skill from './Skill'

const CertificateChartSkill = ({ matchingSkill }) => {
    return (
        matchingSkill && <div className="ifSkill">
            <div className="showProCerhdj">
                <ChartBoxSkill nameSkill={matchingSkill} />
                {[matchingSkill].map((data, index) => (
                    <Skill data={data} key={index} />
                ))}
            </div>
        </div>
    )
}

export default CertificateChartSkill