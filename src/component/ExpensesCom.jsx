
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { useImageShow } from '../contexts/imageContext';

const ExpensesCom = ({ data }) => {
    const [imageShow, setImageShow] = useImageShow();
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="box">
            {data.clientImage ? <div className='clientInfoAbout'>
                <div className='imageClinetBox'>
                    <img onClick={()=>setImageShow({ ...imageShow, isOn: true, image: data.clientImage })}  src={data.clientImage} alt={data.work} />
                </div>
                <div className='inforMationAboutWork'>
                    <h4>{data.durationWork}</h4>
                    <h2>{data.work}</h2>
                </div>
            </div> 
                :
            <div>
                <h4>{data.durationWork}</h4>
                <h2>{data.work}</h2>
            </div>}
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
