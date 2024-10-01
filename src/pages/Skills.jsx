import React, { useContext, useEffect } from 'react'
import '../App.css'
import { UserContext } from '../contexts/context'
import Skill from '../component/Skill'
import {details} from '../details/details.jsx'
import { useTopLoader } from '../contexts/topLoderContext';
import { useShowDetails } from '../contexts/showDetailsContext.jsx'

const Skills = () => {
  const [[sidebar]] = useContext(UserContext)
  const [[progress, setProgress]] = useTopLoader()
  const [[typeData, setTypeData]] = useShowDetails();
  useEffect(() => {
    setTypeData("")
  }, [])
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
