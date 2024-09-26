import React, { memo } from 'react'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { useTopLoader } from '../contexts/topLoderContext';

const ProjectCom = ({ data , classProject }) => {
    const [[progress, setProgress]] = useTopLoader();
    const navigate = useNavigate();

    const handleSkillClick = (e) => {
        setProgress(20);
        setTimeout(() => {
            setProgress(100);
        }, 20);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        e.preventDefault();
        navigate(`/${data.name}`);
    }
    return (
        <Link onClick={handleSkillClick} to={`/${data.name}`} className={`project boxShadows ${classProject ? classProject : ""}`}>
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
            <div target='_blank' rel='noopener noreferrer' href={data.link} className="linkShow">
                <h2>{data.name} </h2> <span><LiaExternalLinkAltSolid /></span>
            </div>
        </Link>
    )
}

export default memo(ProjectCom)