import { useContext, useEffect, useState } from 'react'
import '../App.css'
import { UserContext } from '../contexts/context'
import ExpensesCom from '../component/ExpensesCom'
import { useTopLoader } from '../contexts/topLoderContext'
import AboutCom from '../component/AboutCom'
import { details } from '../details/details.jsx'
import { useShowDetails } from '../contexts/showDetailsContext.jsx'
import { FaUserGraduate, FaUserTie } from 'react-icons/fa'
import { HiMiniUserGroup } from 'react-icons/hi2'

const About = () => {
  const [[sidebar]] = useContext(UserContext)
  const [[, setProgress]] = useTopLoader()
  const [[, setTypeData]] = useShowDetails();
  const [isShow, setIsShow] = useState("client") //client, hackathon, education

  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 20)
  }, [setProgress])

  useEffect(() => {
    setTypeData("")
  }, [setTypeData])


  return (
    <div className={`mainContainer about ${sidebar ? "mainContainerSmall" : ""}`}>
      <AboutCom aboutBox={details.about.aboutBox} />

      <div className="aboutButtons boxShadows">
        <button className={`aboutSectionButton ${isShow === "client" ? "activeTags" : ""}`} onClick={() => setIsShow("client")}>
          <span className="aboutSectionButtonIcon">
            <FaUserTie />
          </span>
          Clients
        </button>

        <button className={`aboutSectionButton ${isShow === "hackathon" ? "activeTags" : ""}`} onClick={() => setIsShow("hackathon")}>
          <span className="aboutSectionButtonIcon">
            <HiMiniUserGroup />
          </span>
          Hackathons
          </button>

        <button className={`aboutSectionButton ${isShow === "education" ? "activeTags" : ""}`} onClick={() => setIsShow("education")}>
          <span className="aboutSectionButtonIcon">
            <FaUserGraduate />
          </span>
          Education
        </button>
      </div>

      {isShow === "client" && (
        <section className="col">
          <h1 className="titleAbout">Experiences and Client Projects</h1>
          <div className="contents">
            {details.about.expenses.map((data, index) => (<ExpensesCom data={data} key={index} />))}
          </div>
        </section>
      )}

      {isShow === "hackathon" && (
        <section className="col">
          <h1 className="titleAbout">Additional Participation</h1>
          <div className="contents">
            {[...details.about.hackathon]
              .reverse()
              .map((data, index) => (
                <ExpensesCom data={data} key={index} />
              ))}
          </div>
        </section>
      )}

      {isShow === "education" && (
        <section className="col">
          <h1 className="titleAbout">Education</h1>
          <div className="contents">
            {details.about.education.map((data, index) => (<ExpensesCom data={data} key={index} />))}
          </div>
        </section>
      )}
    </div>
  )
}

export default About
