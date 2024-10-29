import { useEffect, useState } from 'react'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { useTopLoader } from '../contexts/topLoderContext';
import { FaAward } from 'react-icons/fa';

const SmallProjectCom = ({data}) => {
    const [[progress, setProgress]] = useTopLoader();
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
        <Link onClick={handleSkillClick} to={`/${data.name}`} className="side-box-project boxShadows ">
            <div className="iconGooSmall">
                {isInRange && <div className="forthisNewSmall">
                    New
                </div>}
                {data.isGood && <span className="forCertiSmall">
                    <FaAward />
                </span>}
            </div>
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