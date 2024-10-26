import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectChart = ({nameProject}) => {
    const data = {
        labels: nameProject.labels,
        datasets: [
            {
                label: 'Skill Proficiency',
                data: nameProject.data,
                backgroundColor: nameProject.backgroundColor,
                borderColor: nameProject.borderColor,
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
                text: `Proficiency `,
            },
        },
    };
    return (
        <div className="chart-for-allSkill">
            <p>
                Skill Chart
            </p>
            <div className="skillUseChart boxShadows">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}

export default ProjectChart