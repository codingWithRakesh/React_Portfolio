
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const ExpensesCom = ({ data }) => {

    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="box">
            <h4>{data.durationWork}</h4>
            <h1>{data.work}</h1>
            <p>
                {data.peragraph}
            </p>
            {data.isTrue && (
                <Link to={`/${data.link}`} className='linkTag' onClick={handleLinkClick}>
                    {data.name} <LiaExternalLinkAltSolid />
                </Link>
            )}
        </div>
    );
};

export default ExpensesCom;
