import React from 'react'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

const ExpensesCom = ({ data }) => {
    return (
        <div className="box">
            <h4>{data.durationWork}</h4>
            <h1>{data.work}</h1>
            <p>
                {data.peragraph}
            </p>
            {data.isTrue && <a href={data.link} target='_blank' className='linkTag'>{data.name} <LiaExternalLinkAltSolid /></a>}
        </div>
    )
}

export default ExpensesCom