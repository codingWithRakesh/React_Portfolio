import React from 'react'
import {details} from "../details/details.jsx"
import Skill from './Skill.jsx';

const StacksHome = () => {
    const skillData = details.skills;
    const javaStack = skillData.slice(0, 4);
    const MERNStack = skillData.slice(4, 8);
    return (
        <div className='showSkillData'>
            <h2 className='titleofStack bigName boxShadows'>Tech Stack</h2>
            <div className='skillAllInHome'>
                <div className='insideSkillAllHome justifyRight'>
                    {javaStack.map((data, index) => (
                        <Skill data={data} key={index} />
                    ))}
                </div>
                <div className='insideSkillAllHome justifyLeft'>
                    {MERNStack.map((data, index) => (
                        <Skill data={data} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StacksHome