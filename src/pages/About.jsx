import React, { useContext, useEffect } from 'react'
import '../App.css'
import { UserContext } from '../contexts/context'
import ExpensesCom from '../component/ExpensesCom'
import { useTopLoader } from '../contexts/topLoderContext'
import AboutCom from '../component/AboutCom'
import { details } from '../details/details.jsx'
import { useShowDetails } from '../contexts/showDetailsContext.jsx'

const About = () => {
  const [[sidebar]] = useContext(UserContext)
  const [[progress, setProgress]] = useTopLoader()
  const [[typeData, setTypeData]] = useShowDetails();

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 20)
  }, [setProgress])

  useEffect(() => {
    setTypeData("")
  }, [])


  return (
    <div className={`mainContainer about ${sidebar ? "mainContainerSmall" : ""}`}>
      <AboutCom aboutBox={details.about.aboutBox} />

      <section className="col">
        <h1 className="titleAbout">Experience</h1>
        <div className="contents">
          {details.about.expenses.map((data, index) => (<ExpensesCom data={data} key={index} />))}
        </div>
      </section>

      <section className="col">
        <h1 className="titleAbout">Additional Participation</h1>
        <div className="contents">
          {details.about.hackathon.map((data, index) => (<ExpensesCom data={data} key={index} />))}
        </div>
      </section>

      <section className="col">
        <h1 className="titleAbout">Education</h1>
        <div className="contents">
          {details.about.education.map((data, index) => (<ExpensesCom data={data} key={index} />))}
        </div>
      </section>
    </div>
  )
}

export default About
