import React from 'react'

import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartBoxSkill = ({nameSkill}) => {
    const data = {
        labels: [nameSkill.name, 'Remaining'],
        datasets: [
            {
                label: 'Skill Proficiency',
                data: nameSkill.data,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Proficiency ${nameSkill.name}`,
            },
        },
    };

    return (
        <div className="chartRow">
            <div className="boxChartBox boxShadows">
                <p className="titleChartBox">
                    <span>
                        {nameSkill.icon}
                    </span>
                    {nameSkill.name}
                </p>
                <div className="mainChart">
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </div>
    )
}

export default ChartBoxSkill