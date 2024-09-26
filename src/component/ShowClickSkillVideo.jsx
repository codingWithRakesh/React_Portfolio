import React from 'react'
import Skill from './Skill'

const ShowClickSkillVideo = ({ relevantSkills }) => {
    return (
        <div className="this-skills">
            <p>
                Popular Skills Used
            </p>
            <div className="show-skills-chart">
                {relevantSkills.map((data, index) => (
                    <Skill data={data} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ShowClickSkillVideo