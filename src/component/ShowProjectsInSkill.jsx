import React from 'react'
import ProjectCom from './ProjectCom'

const ShowProjectsInSkill = ({projectsWithJavaScript,nameSkill}) => {
    return (

        projectsWithJavaScript.length ? <div className="showSkillWithProject">
            <p>
                I have made the following projects using {nameSkill.name}
            </p>
            <div className="mainshowproject">
                {projectsWithJavaScript.map((data, index) => (
                    <ProjectCom key={index} data={data} classProject="showSkillClassSk" />
                ))}
            </div>
        </div> : ""

    )
}

export default ShowProjectsInSkill