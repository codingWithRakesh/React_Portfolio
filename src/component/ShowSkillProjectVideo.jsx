import React from 'react'

const ShowSkillProjectVideo = ({nameProject}) => {
    return (
        <div className="current-skills">
            <p>
                Skills used in the Project
            </p>
            <div className="show-project-skill">
                {nameProject.skills.map((skill, index) => (
                    <div className='skillShowPro' key={index}>{skill}</div>
                ))}
            </div>
        </div>
    )
}

export default ShowSkillProjectVideo