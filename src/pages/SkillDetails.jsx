import React, { useContext, useEffect } from 'react';
import '../App.css';
import { UserContext } from '../contexts/context';
import { details } from '../details/details.jsx';
import { useTopLoader } from '../contexts/topLoderContext';
import { useParams, useNavigate } from 'react-router-dom';
import Skill from '../component/Skill.jsx';
import { IoCaretBackOutline } from 'react-icons/io5';
import ChartBoxSkill from '../component/ChartBoxSkill.jsx';
import LearnFrom from '../component/LearnFrom.jsx';
import ShowSkillcertificate from '../component/ShowSkillcertificate.jsx';
import ShowProjectsInSkill from '../component/ShowProjectsInSkill.jsx';

const SkillDetails = () => {
    const [[sidebar]] = useContext(UserContext);
    const [[progress, setProgress]] = useTopLoader();
    const navigate = useNavigate();

    const Paramsdata = useParams();
    const [nameSkill] = details.skills.filter(data => data.name.toLowerCase().includes(Paramsdata.skill.toLowerCase()));
    const nameSkillcertificate = details.certificates.filter(data => data.name.toLowerCase().includes(Paramsdata.skill.toLowerCase()));
    const projectsWithJavaScript = details.projects.filter(project => project.skills.includes(Paramsdata.skill));

    useEffect(() => {
        setProgress(20);
        setTimeout(() => {
            setProgress(100);
        }, 20);
    }, [setProgress]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleBackButtonClick = () => {
        setProgress(20);
        scrollToTop(); 
        setTimeout(() => {
            setProgress(100); 
            navigate(-1);
        }, 20);
    };

    return (
        <div className={`mainContainer showSkill ${sidebar ? "mainContainerSmall" : ""}`}>
            <div className="showmain">
                <div className="backRow">
                    <button className='button-60 back' onClick={handleBackButtonClick}>
                        <span>
                            <IoCaretBackOutline />
                        </span>
                        Back
                    </button>
                </div>

                <ChartBoxSkill nameSkill={nameSkill} />

                <LearnFrom nameSkill={nameSkill} />

                <ShowSkillcertificate nameSkill={nameSkill} nameSkillcertificate={nameSkillcertificate} />

                <ShowProjectsInSkill nameSkill={nameSkill} projectsWithJavaScript={projectsWithJavaScript} />
            </div>
            <div className="showsuggason">
                <h1>Skills</h1>
                {details.skills.map((data, index) => (
                    <Skill data={data} key={index} />
                ))}
            </div>
        </div>
    );
}

export default SkillDetails;
