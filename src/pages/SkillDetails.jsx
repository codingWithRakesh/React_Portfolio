import React, { useContext, useEffect } from 'react';
import '../App.css';
import { details } from '../details/details.jsx';
import { useTopLoader } from '../contexts/topLoderContext';
import { useParams, useNavigate } from 'react-router-dom';
import ErrorPage from './ErrorPage.jsx';
import SkillShowComponent from '../component/SkillShowComponent.jsx';
import ProjectShowComponent from '../component/ProjectShowComponent.jsx';
import { useShowDetails } from '../contexts/showDetailsContext.jsx';

const SkillDetails = () => {
    const [[typeData, setTypeData]] = useShowDetails();
    const [[progress, setProgress]] = useTopLoader();
    const navigate = useNavigate();

    const Paramsdata = useParams();
    const [nameSkill] = details.skills.filter(data => data.name.toLowerCase().includes(Paramsdata.skill.toLowerCase()));
    const [nameProject] = details.projects.filter(data => data.name.toLowerCase().includes(Paramsdata.skill.toLowerCase()));

    useEffect(() => {
        setProgress(20);
        setTimeout(() => {
            setProgress(100);
        }, 20);
    }, [setProgress]);

    useEffect(() => {
        if (nameSkill?.title === "skills") {
            setTypeData('Skills');
        } else if (nameProject?.title === "projects") {
            setTypeData('Projects');
        }
    }, [nameSkill, nameProject, setTypeData]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleBackButtonClick = () => {
        setProgress(20);
        scrollToTop(); 
        setTimeout(() => {
            setProgress(100); 
            navigate(-1);
        }, 20);
    };

    if ((!nameSkill) && (!nameProject)) {
        return <ErrorPage />;
    }

    if (nameSkill?.title === "skills") {
        return <SkillShowComponent handleBackButtonClick={handleBackButtonClick} />;
    }

    if (nameProject?.title === "projects") {
        return <ProjectShowComponent handleBackButtonClick={handleBackButtonClick} />;
    }
};

export default SkillDetails;
