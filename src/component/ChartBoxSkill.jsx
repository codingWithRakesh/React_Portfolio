
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import PropTypes from 'prop-types';

const ChartBoxSkill = ({nameSkill,classCer}) => {
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
            <div className={`boxChartBox boxShadows ${classCer ? classCer : ""}`}>
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

ChartBoxSkill.propTypes = {
    nameSkill : PropTypes.shape({
        name: PropTypes.string,
        data : PropTypes.array,
        icon : PropTypes.object
    }),
    classCer : PropTypes.string
}

export default ChartBoxSkill