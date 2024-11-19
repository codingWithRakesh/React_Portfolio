import { useEffect, useState } from 'react';
import ProjectCom from './ProjectCom'
import PropTypes from 'prop-types';

const ShowProjectsInSkill = ({ projectsWithJavaScript, nameSkill }) => {
    const [visibleProjects, setVisibleProjects] = useState(2);
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop + 200 >=
                document.documentElement.scrollHeight
            ) {
                setVisibleProjects((prev) => Math.min(prev + 2, projectsWithJavaScript.length));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [projectsWithJavaScript.length]);
    return (

        projectsWithJavaScript.length ? <div className="showSkillWithProject">
            <p>
                I have made the following projects using {nameSkill.name}
            </p>
            <div className="mainshowproject">
                {projectsWithJavaScript
                    .slice(0, visibleProjects)
                    .map((data, index) => (
                        <ProjectCom key={index} data={data} classProject="showSkillClassSk" />
                    ))}
            </div>
        </div> : ""

    )
}

ShowProjectsInSkill.propTypes = {
    projectsWithJavaScript: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
        })
    ).isRequired,
    nameSkill: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default ShowProjectsInSkill