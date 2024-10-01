import React, { useContext, useEffect } from 'react'
import '../App.css'
import { UserContext } from '../contexts/context'
import SwiperCom from '../component/SwiperCom'
import { useTopLoader } from '../contexts/topLoderContext'
import {details} from '../details/details.jsx'
import { useShowDetails } from '../contexts/showDetailsContext.jsx'

const Home = () => {
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
    },20)
  }, [])

  const InsideBox = ({ data }) => {
    return <div className="insideBox boxShadows">
      <span className='bigName'>{data.big ? data.big: details.projects.length - 1 + "+" }</span> {data.normal} <br /> {data.extra}
    </div>
  }

  return (
    <div className={`mainContainer home ${sidebar ? "mainContainerSmall" : ""}`}>
      <div className="boxes inside">
        {details.home.titlesHome.map((data, index) => (
          <InsideBox data={data} key={index} />
        ))}
      </div>
      <div className="boxes boxShadows summary">
        <h2>
          Summary 
        </h2>
        <p>
          {details.home.Summary}
        </p>
      </div>
      <div className="titleClient boxShadows">
        <h1>My Clients</h1>
      </div>
      <SwiperCom clients={details.home.MyClients} />
    </div>
  )
}

export default Home

