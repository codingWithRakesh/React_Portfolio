import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useImageShow } from '../contexts/imageContext';

const AboutCom = ({aboutBox}) => {
    const [imageShow, setImageShow] = useImageShow();
    return (
        <div className='AboutComAA boxShadows'>
            <div className='firstAb'>
                <div className="imgClassAb">
                    <img onClick={() => setImageShow({ ...imageShow, isOn: true, image: aboutBox[0].image })} src={aboutBox[0].image} alt="Tarapada Garai" />
                </div>
                <div className="buttonClassAb">
                <a href={aboutBox[0].CV} download="Tarapada(CV)" className="button-60" role="button">Download CV</a>
                <Link to="/contact" className="button-60" role="button">Hire Me</Link>
                </div>
            </div>
            <div className='peraAB'>
                {aboutBox[1].about.map((data,index) => (<p key={index} className='peragraph8'>{data}</p>))}
                <div className="hobbies boxAbout">
                    <h2>Hobbies</h2>
                    {aboutBox[1].hobbies.map((data,index) => (<p key={index}>{data}</p>))}
                </div>
                <div className="languages boxAbout">
                    <h2>Languages</h2>
                    {aboutBox[1].languages.map((data,index) => (<p key={index}>{data}</p>))}
                </div>
            </div>
        </div>
    )
}

AboutCom.propTypes = {
    aboutBox: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            CV: PropTypes.string,
            about: PropTypes.arrayOf(PropTypes.string),
            hobbies: PropTypes.arrayOf(PropTypes.string),
            languages: PropTypes.arrayOf(PropTypes.string),
        })
    ).isRequired,
};

export default AboutCom