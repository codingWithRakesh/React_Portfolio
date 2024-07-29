import React from 'react'
import {details} from '../details/details'

const ClientsCard = ({data}) => {
    // console.log(details.map((data) => console.log(data.projects[0].skills[0])))
    return (
        <div className="clientBox boxShadows">
            <div className="clientImg">
                <img src={data.image} alt="Tarapada Garai" />
            </div>
            <div className="clientWrite">
                <p>
                    {data.saying}
                </p>
                <h2>{data.name}</h2>
                <h5>{data.founder}</h5>
            </div>
        </div>
    )
}

export default ClientsCard
