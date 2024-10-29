import { memo, useEffect, useState } from 'react'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { useTopLoader } from '../contexts/topLoderContext';
import { FaAward } from 'react-icons/fa';

const ProjectCom = ({ data, classProject }) => {
    const [[, setProgress]] = useTopLoader();
    const navigate = useNavigate();
    const dateRangeString = data.isNew;
    const [isInRange, setIsInRange] = useState(false);

    useEffect(() => {
        const checkDateInRange = () => {
            if (!dateRangeString) {
                setIsInRange(false);
                return;
            }

            const [startStr, endStr] = dateRangeString.split(' to ');
            const [startDay, startMonth, startYear] = startStr.split('/').map(Number);
            const [endDay, endMonth, endYear] = endStr.split('/').map(Number);

            const startDate = new Date(startYear, startMonth - 1, startDay);
            const endDate = new Date(endYear, endMonth - 1, endDay);

            const currentDate = new Date();

            setIsInRange(currentDate >= startDate && currentDate <= endDate);
        };

        checkDateInRange();
    }, []);

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
            <div className="iconGoo">
                {isInRange && <div className="forthisNew">
                    New
                </div>}
                {data.isGood && <span className="forCerti">
                    <FaAward />
                </span>}
            </div>
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
            <div className="linkShow">
                <h2>{data.name} </h2> <span><LiaExternalLinkAltSolid /></span>
            </div>
        </Link>
    )
}

export default memo(ProjectCom)