import React, { useContext } from 'react';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';
import { useTopLoader } from '../contexts/topLoderContext';

const Skill = ({ data }) => {
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
        data.iconOut ? (
            <Link onClick={handleSkillClick} to={`/${data.name}`} className="skillBox boxShadows">
                {data.iconOut && (
                    <span className='goOutSide'>
                        <LiaExternalLinkAltSolid />
                    </span>
                )}
                <span>{data.icon}</span>
                <p>{data.name}</p>
            </Link>
        ) : (
            <div className="skillBox boxShadows">
                {data.iconOut && (
                    <span className='goOutSide'>
                        <LiaExternalLinkAltSolid />
                    </span>
                )}
                <span>{data.icon}</span>
                <p>{data.name}</p>
            </div>
        )
    );
}

export default Skill;
