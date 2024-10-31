import '../App.css'
import { FaHandshake } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { details } from '../details/details.jsx'
import PropTypes from 'prop-types';

const Profile = ({ setShowProfile }) => {
    const profileFun = (event) => {
        event.stopPropagation();
    }

    return (
        <div className='cardProfile' onClick={profileFun}>
            <div className="profileFirst">
                <div className="imageBoxProfile">
                    <img src={details.profile.home.image} alt="Tarapada Garai" />
                </div>
                <p className='nameBox'>{details.profile.home.name}</p>
                <p className='showNext'>{details.profile.home.job}</p>
            </div>
            <div className="profileSecond">
                {
                    details.profile.contacts.map((value, index) => (
                        <a href={value.href} download={value.download} className="showDetails" key={index} >
                            <span>{value.icon}</span>
                            <p>{value.name}</p>
                        </a>
                    ))
                }
                <Link onClick={() => setShowProfile(false)} to="/contact" className="showDetails">
                    <span>
                        <FaHandshake />
                    </span>
                    <p>Hire Me</p>
                </Link>
            </div>
            <div className="profileThird">
                {
                    details.profile.links.map((data, index) => (<a key={index} href={data.link} title={data.title} target='_blank'>{data.icon}</a>))
                }
            </div>
            <div className='namelastprofile'>
                <p>Copyright © {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

Profile.propTypes = {
    setShowProfile : PropTypes.func
}

export default Profile
