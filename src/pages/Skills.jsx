import React, { useContext, useEffect } from 'react'
import '../App.css'
import { UserContext } from '../contexts/context'
import Skill from '../component/Skill'
import {details} from '../details/details.jsx'
import { useTopLoader } from '../contexts/topLoderContext';

const Skills = () => {
  const [[sidebar]] = useContext(UserContext)
  const [[progress, setProgress]] = useTopLoader()
  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [])

  return (
    <div className={`mainContainer skills ${sidebar ? "mainContainerSmall" : ""}`}>
      <h1 className="titleSkill">
        Skills
      </h1>
      {details.skills.map((data, index) => (
        <Skill data={data} key={index} />
      ))}
    </div>
  )
}

export default Skills
