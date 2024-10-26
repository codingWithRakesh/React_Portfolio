import { useContext } from 'react'
import { UserContext } from '../contexts/context';
import { IoCaretBackOutline } from 'react-icons/io5';
import { details } from '../details/details.jsx';
import { useParams } from 'react-router-dom';
import SmallProjectCom from './SmallProjectCom.jsx';
import VideoPlay from './VideoPlay.jsx';
import ProjectChart from './ProjectChart.jsx';
import TimeLine from './TimeLine.jsx';
import HostLinkVideo from './HostLinkVideo.jsx';
import ShowSkillProjectVideo from './ShowSkillProjectVideo.jsx';
import ShowClickSkillVideo from './ShowClickSkillVideo.jsx';
import ShowCertificketProject from './ShowCertificketProject.jsx';

const ProjectShowComponent = ({ handleBackButtonClick }) => {
    const [[sidebar]] = useContext(UserContext);
    const Paramsdata = useParams();
    const [nameProject] = details.projects.filter(data => data.name.toLowerCase().includes(Paramsdata.skill.toLowerCase()));
    const projectSkills = nameProject.skills;
    const relevantSkills = details.skills.filter(skill => projectSkills.includes(skill.name));
    const filteredCertificates = nameProject.checkCertificket ? details.certificates.filter(certificate => certificate.checkProject === nameProject.checkCertificket) : [];

    return (
        <div className={`mainContainer showProject ${sidebar ? "mainContainerSmall" : ""}`}>
            <div className="col-first-project">
                <div className="backRow">
                    <button className='button-60 back' onClick={handleBackButtonClick}>
                        <span>
                            <IoCaretBackOutline />
                        </span>
                        Back
                    </button>
                </div>

                <VideoPlay nameProject={nameProject} />

                <TimeLine nameProject={nameProject} />

                <HostLinkVideo nameProject={nameProject} />

                <ShowSkillProjectVideo nameProject={nameProject} />

                <ProjectChart nameProject={nameProject} />

                <ShowClickSkillVideo relevantSkills={relevantSkills} />

                <ShowCertificketProject filteredCertificates={filteredCertificates} />

            </div>
            <div className="col-second-project">
                <h1>Projects</h1>
                <div className="containAllProject">
                    {details.projects.map((data, index) => (
                        <SmallProjectCom data={data} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectShowComponent