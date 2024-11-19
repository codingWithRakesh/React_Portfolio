import { useContext, useEffect, useState } from 'react';
import '../App.css';
import { UserContext } from '../contexts/context';
import { useTopLoader } from '../contexts/topLoderContext';
import ProjectCom from '../component/ProjectCom';
import { details } from '../details/details.jsx';
import { useShowDetails } from '../contexts/showDetailsContext.jsx';

const Projects = () => {
  const [[sidebar]] = useContext(UserContext);
  const [[, setProgress]] = useTopLoader();
  const [[, setTypeData]] = useShowDetails();

  const [visibleProjects, setVisibleProjects] = useState(10);

  useEffect(() => {
    setTypeData("");
  }, [setTypeData]);

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 200);
  }, [setProgress]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop +200 >=
        document.documentElement.scrollHeight
      ) {
        setVisibleProjects((prev) => Math.min(prev + 5, details.projects.length));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`mainContainer projects ${sidebar ? "mainContainerSmall" : ""}`}>
      <h1 className="titleSkill">Projects</h1>
      <div className="projectShowAll">
        {details.projects.slice(0, visibleProjects).map((data, index) => (
          <ProjectCom key={index} data={data} classProject="marginBottom" />
        ))}
      </div>
    </div>
  );
};

export default Projects;
