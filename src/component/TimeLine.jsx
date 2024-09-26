import React from 'react'

const TimeLine = ({nameProject}) => {
    return (
        <div className="peragraph-video ">
            <p>
                <b> Timeframe : </b> {nameProject.Timeframe}
            </p>
        </div>
    )
}

export default TimeLine