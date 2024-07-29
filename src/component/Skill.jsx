import React from 'react'

const Skill = ({ data }) => {
    return (
        <div className="skillBox boxShadows">
            <span>
                {data.icon}
            </span>
            <p>{data.name}</p>
        </div>
    )
}

export default Skill
