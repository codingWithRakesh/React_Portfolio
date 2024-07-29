import React from 'react'
import '../App.css'
import { FaHandshake } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { details } from '../details/details.jsx'

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
                        <div className="showDetails" key={index}>
                            <span>{value.icon}</span>
                            <a href={value.href} download={value.download}>{value.name}</a>
                        </div>
                    ))
                }
                <div className="showDetails">
                    <span>
                        <FaHandshake />
                    </span>
                    <Link onClick={() => setShowProfile(false)} to="/contact">Hire Me</Link>
                </div>
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

export default Profile
