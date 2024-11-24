import { useContext } from 'react';
import '../App.css';
import { UserContext } from '../contexts/context';
import { details } from '../details/details.jsx';
import { useParams } from 'react-router-dom';
import Skill from '../component/Skill.jsx';
import { IoCaretBackOutline } from 'react-icons/io5';
import ChartBoxSkill from '../component/ChartBoxSkill.jsx';
import LearnFrom from '../component/LearnFrom.jsx';
import ShowSkillcertificate from '../component/ShowSkillcertificate.jsx';
import ShowProjectsInSkill from '../component/ShowProjectsInSkill.jsx';
import PropTypes from 'prop-types';

const SkillShowComponent = ({handleBackButtonClick}) => {
    const [[sidebar]] = useContext(UserContext);

    const Paramsdata = useParams();
    const [nameSkill] = details.skills.filter(data => data.name.toLowerCase().includes(Paramsdata.skill.toLowerCase()));
    const nameSkillcertificate = details.certificates.filter(data => 
        data.name.toLowerCase().includes(Paramsdata.skill.toLowerCase()) || 
        (data.title && data.title.some(title => title.toLowerCase().includes(Paramsdata.skill.toLowerCase())))
    );    
    const projectsWithJavaScript = details.projects.filter(project => project.skills.includes(Paramsdata.skill));
    return (
        <div className={`mainContainer showSkill ${sidebar ? "mainContainerSmall" : ""}`}>
            <div className="showmain">
                <div className="backRow">
                    <button className='button-60 back SB' onClick={handleBackButtonClick}>
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

SkillShowComponent.propTypes = {
    handleBackButtonClick: PropTypes.func
};

export default SkillShowComponent;
