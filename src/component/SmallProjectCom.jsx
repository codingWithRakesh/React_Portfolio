import React from 'react'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { useTopLoader } from '../contexts/topLoderContext';

const SmallProjectCom = ({data}) => {
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
        <Link onClick={handleSkillClick} to={`/${data.name}`} className="side-box-project boxShadows ">
            {data.video ? (
                <video src={data.video} autoPlay muted loop></video>
            ) : (
                <img src={data.image} alt={data.name} />
            )}
            <div className='perProject'>
                <p>{data.name}</p>
                <span>
                    <LiaExternalLinkAltSolid />
                </span>
            </div>
        </Link>
    )
}

export default SmallProjectCom