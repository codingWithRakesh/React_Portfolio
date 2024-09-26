import React from 'react'

const VideoPlay = ({nameProject}) => {
    return (
        <div className="video-project-box boxShadows">
            <div className="title-video">
                <p>
                    {nameProject.name}
                </p>
            </div>
            <div className="video-box">
                {nameProject.video ? (
                    <video src={nameProject.video} controls muted loop></video>
                ) : (
                    <img src={nameProject.image} alt={nameProject.name} />
                )}
            </div>
        </div>
    )
}

export default VideoPlay