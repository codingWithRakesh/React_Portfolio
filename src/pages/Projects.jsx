import React, { useContext, useEffect, useMemo } from 'react';
import '../App.css';
import { UserContext } from '../contexts/context';
import { useTopLoader } from '../contexts/topLoderContext';
import ProjectCom from '../component/ProjectCom';
import { details } from '../details/details.jsx';
import { useSearch } from '../contexts/searchContext.jsx';
import { useSearchParams } from 'react-router-dom';
import { useShowDetails } from '../contexts/showDetailsContext.jsx';

const Projects = () => {
  const [[sidebar]] = useContext(UserContext);
  const [[progress, setProgress]] = useTopLoader();
  const [[searchQu, setsearchQu]] = useSearch();
  const [searchP] = useSearchParams();
  const q = searchP.get("q") || "";
  const [[typeData, setTypeData]] = useShowDetails();
  useEffect(() => {
    setTypeData("")
  }, [])

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 200);
  }, [setProgress]);

  useEffect(() => {
    if (q) {
      setsearchQu(q.toLowerCase());
    }
  }, [q, setsearchQu]);

  const filteredProjects = useMemo(() => {
    const results = details.projects.filter((project) =>
      project.name.toLowerCase().includes(searchQu)
    );
    return results.length > 0 ? results : details.projects;
  }, [searchQu]);

  return (
    <div className={`mainContainer projects ${sidebar ? "mainContainerSmall" : ""}`}>
      <h1 className="titleSkill">
        Projects
      </h1>
      {filteredProjects.map((data, index) => (
        <ProjectCom key={index} data={data} />
      ))}
    </div>
  );
};

export default Projects;
