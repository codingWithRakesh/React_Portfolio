import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { colors } from '../constands/constand.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectChart = ({ nameProject }) => {
    const [chartData, setChartData] = useState(null);

    // Extract owner and repo from the GitHub URL
    const extractOwnerRepo = (url) => {
        try {
            const parts = url.split('github.com/')[1].split('/');
            return { owner: parts[0], repo: parts[1] };
        } catch {
            return { owner: '', repo: '' };
        }
    };

    useEffect(() => {
        const { owner, repo } = extractOwnerRepo(nameProject.gitHub);

        if (!owner || !repo) {
            console.error('Invalid GitHub URL');
            return;
        }

        const fetchLanguages = async () => {
            try {
                const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
                const data = await res.json();

                const total = Object.values(data).reduce((sum, bytes) => sum + bytes, 0);
                const percentages = Object.entries(data).map(([lang, bytes]) => ({
                    language: lang,
                    percentage: parseFloat(((bytes / total) * 100).toFixed(2))
                }));

                // Match colors by language label order
                const finalLabels = percentages.map(p => p.language);
                const finalData = percentages.map(p => p.percentage);

                // const backgroundColor = finalLabels.map((label) => {
                //     const index = nameProject.labels.indexOf(label);
                //     return index !== -1 ? nameProject.backgroundColor[index] : 'rgba(200,200,200,0.2)';
                // });

                // const borderColor = finalLabels.map((label) => {
                //     const index = nameProject.labels.indexOf(label);
                //     return index !== -1 ? nameProject.borderColor[index] : 'rgba(200,200,200,1)';
                // });

                setChartData({
                    labels: finalLabels,
                    datasets: [{
                        data: finalData,
                        backgroundColor: nameProject.backgroundColor,
                        borderColor: nameProject.borderColor,
                        borderWidth: 1
                    }]
                });
            } catch (error) {
                console.error("Failed to fetch repo languages:", error);
                setChartData(null); // fallback happens in render
            }
        };

        fetchLanguages();
    }, [nameProject.gitHub]);

    // If GitHub fails, use default project data
    const data = chartData || {
        labels: nameProject.labels,
        datasets: [{
            label: 'Skill Proficiency',
            data: nameProject.data,
            backgroundColor: colors.backgroundColor,
            borderColor: colors.borderColor,
            borderWidth: 1,
        }],
    };

    console.log([colors.backgroundColor, colors.borderColor, nameProject, chartData, data]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Language Proficiency for "${nameProject.name}"`,
                font: {
                    size: 16,
                },
            },
        },
    };

    return (
        <div className="chart-for-allSkill">
            <p>Skill Chart</p>
            <div className="skillUseChart boxShadows">
                <Doughnut data={data} options={options} />
                <div className='githubIconBox'>
                    <FaGithub />
                </div>
            </div>
        </div>
    );
};

export default ProjectChart;
