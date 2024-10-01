import React from 'react'
import ReactCertificate from '../assets/certificate/React.jpg'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { useTopLoader } from '../contexts/topLoderContext'

const CertificateCom = ({data,font1_1}) => {
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
    };
  return (
    <Link to={`/${data.name}`} onClick={handleSkillClick} className='CertificateComClass boxShadows'>
        <div className="imageCerti">
            <img src={data.image} alt={ReactCertificate} />
        </div>
        <div className={`linkCerti ${font1_1 ? font1_1 : ""}`}>
            {data.name} <LiaExternalLinkAltSolid />
        </div>
    </Link>
  )
}

export default CertificateCom