import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/context';
import { details } from '../details/details';
import { IoCaretBackOutline } from 'react-icons/io5';
import CertificateCom from './CertificateCom';
import ShowCertificateName from './ShowCertificateName';
import CertificateGot from './CertificateGot';
import CertificateOperButton from './CertificateOperButton';
import CertificateSummaryShow from './CertificateSummaryShow';
import CertificateChartSkill from './CertificateChartSkill';
import CertificateProjectShow from './CertificateProjectShow';

const CertificatesShowComponent = ({ handleBackButtonClick }) => {
    const [[sidebar]] = useContext(UserContext);
    const Paramsdata = useParams();
    const [nameCertificate] = details.certificates.filter(data => data.name.toLowerCase().includes(Paramsdata.skill.toLowerCase()));
    const matchingSkill = details.skills.find(skill => skill.name.toLowerCase() === nameCertificate?.title?.toLowerCase());
    const matchingProject = details.projects.find(project => project.checkCertificket && project.checkCertificket === nameCertificate?.checkProject);

    return (
        <div className={`mainContainer showCertificate ${sidebar ? "mainContainerSmall" : ""}`}>
            <div className="certifi-col1">
                <div className="backRow dsjdh">
                    <button className='button-60 back' onClick={handleBackButtonClick}>
                        <span>
                            <IoCaretBackOutline />
                        </span>
                        Back
                    </button>
                </div>

                <ShowCertificateName nameCertificate={nameCertificate}/>

                <CertificateGot nameCertificate={nameCertificate}/>

                <CertificateOperButton nameCertificate={nameCertificate} />

                <CertificateSummaryShow nameCertificate={nameCertificate} />

                <CertificateChartSkill matchingSkill={matchingSkill} />

                <CertificateProjectShow matchingProject={matchingProject} />
            </div>
            <div className="certifi-col2">
                <h1 className="showTitleCer">
                    Certificates
                </h1>
                <div className="showAnother">
                    {details.certificates.map((data, index) => (<CertificateCom font1_1="font1_1" key={index} data={data} />))}
                </div>
            </div>
        </div>
    )
}

export default CertificatesShowComponent