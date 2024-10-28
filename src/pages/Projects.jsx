import { useContext, useEffect } from 'react';
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
  useEffect(() => {
    setTypeData("")
  }, [setTypeData])

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 200);
  }, [setProgress]);

  return (
    <div className={`mainContainer projects ${sidebar ? "mainContainerSmall" : ""}`}>
      <h1 className="titleSkill">
        Projects
      </h1>
      <div className="projectShowAll">
        {details.projects.map((data, index) => (
          <ProjectCom key={index} data={data} classProject="marginBottom" />
        ))}
      </div>
    </div>
  );
};

export default Projects;
