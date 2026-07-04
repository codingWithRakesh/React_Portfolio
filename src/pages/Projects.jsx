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
  const [activeTag, setActiveTag] = useState('Best');

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

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const visibleProjectShow = (activeTag === 'Best'
    ? details.projects.filter((project) => project.type === 'best')
    : details.projects
  ).slice(0, visibleProjects);

  return (
    <div className={`mainContainer projects ${sidebar ? "mainContainerSmall" : ""}`}>
      <div className="tagComponent">
        <h1 className='titleSkill'>Projects</h1>
        <div className="projectTags">
          <div className={`projectTag boxShadows ${activeTag === 'Best' ? 'activeTags' : ''}`} onClick={() => handleTagClick('Best')}>
            Best Projects
          </div>
          <div className={`projectTag boxShadows ${activeTag === 'All' ? 'activeTags' : ''}`} onClick={() => handleTagClick('All')}>
            All Projects
          </div>
        </div>
      </div>
      <div className="projectShowAll">
        {visibleProjectShow.map((data, index) => (
          <ProjectCom key={index} data={data} classProject="marginBottom" />
        ))}
      </div>
    </div>
  );
};

export default Projects;
