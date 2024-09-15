import React, { memo } from 'react'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

const ProjectCom = ({ data , classProject }) => {
    return (
        <div className={`project boxShadows ${classProject ? classProject : ""}`}>
            <div className="videoShow">
                {data.video ? (
                    <video src={data.video} autoPlay muted loop></video>
                ) : (
                    <img src={data.image} alt={data.name} />
                )}
            </div>
            <div className="skillsShow">
                {data.skills.map((skill, index) => (
                    <div className='skillShowP' key={index}>{skill}</div>
                ))}
            </div>
            <a target='_blank' rel='noopener noreferrer' href={data.link} className="linkShow">
                <h2>{data.name} </h2> <span><LiaExternalLinkAltSolid /></span>
            </a>
        </div>
    )
}

export default memo(ProjectCom)