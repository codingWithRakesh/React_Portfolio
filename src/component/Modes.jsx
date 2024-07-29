import React, { useState } from 'react'
import '../App.css'
import { useMode } from '../contexts/modeChangeContext'

const Modes = ({ data }) => {
  const [[,setGetName]] = useMode("")
  // const 
  return (
    <div onClick={() => setGetName(data.attribute)} className={`modesClass ${data.isTrue ? "borderBlue" : ""}`}> {/* for only one */}
      <div className={`allmods ${data.backGrounds[1]}`}>
        <div className={`navLite  ${data.backGrounds[0]}`}></div>
        <div className="sidebarLite whiteLite">
          <div className={`circle ${data.backGrounds[0]}`}></div>
          <div className={`bocks ${data.backGrounds[0]}`}></div>
          <div className={`bocks ${data.backGrounds[0]}`}></div>
          <div className={`bocks ${data.backGrounds[0]}`}></div>
          <div className={`bocks ${data.backGrounds[0]}`}></div>
        </div>
        <div className="containerLite whiteLite">
          <div className={`boxLite ${data.backGrounds[0]}`}></div>
          <div className={`boxLite ${data.backGrounds[0]}`}></div>
          <div className={`boxLite ${data.backGrounds[0]}`}></div>
          <div className={`boxLite ${data.backGrounds[0]}`}></div>
        </div>
      </div>
      <h2 className="nameShow">{data.name}</h2>
    </div>
  )
}

export default Modes
