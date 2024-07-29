import React from 'react'
import { Link } from 'react-router-dom'

const AboutCom = ({aboutBox}) => {
    return (
        <div className='AboutComAA boxShadows'>
            <div className='firstAb'>
                <div className="imgClassAb">
                    <img src={aboutBox[0].image} alt="Tarapada Garai" />
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

export default AboutCom