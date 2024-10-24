// @ts-nocheck
import { useContext, useEffect, useMemo } from 'react';
import '../App.css';
import { UserContext } from '../contexts/context';
import { useTopLoader } from '../contexts/topLoderContext';
import ProjectCom from '../component/ProjectCom';
import { details } from '../details/details.jsx';
import { useSearch } from '../contexts/searchContext.jsx';
import { useSearchParams } from 'react-router-dom';
import { useShowDetails } from '../contexts/showDetailsContext.jsx';
import Skill from '../component/Skill.jsx';
import CertificateCom from '../component/CertificateCom.jsx';

const SearchResult = () => {
    const [[sidebar]] = useContext(UserContext);
    const [[, setProgress]] = useTopLoader();
    const [[searchQu, setsearchQu]] = useSearch();
    const [searchP] = useSearchParams();
    const q = searchP.get("q") || "";
    const [[, setTypeData]] = useShowDetails();

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
        if (q) {
            setsearchQu(q.toLowerCase());
        }
    }, [q, setsearchQu]);

    const filteredSkills = useMemo(() => {
        const results = details.skills.filter((skill) =>
            skill.name.toLowerCase().includes(searchQu)
        );
        return results.length > 0 ? results : [];
    }, [searchQu]);

    const filteredProjects = useMemo(() => {
        const results = details.projects.filter((project) =>
            project.name.toLowerCase().includes(searchQu)
        );
        return results.length > 0 ? results : [];
    }, [searchQu]);

    const filteredCertificates = useMemo(() => {
        const results = details.certificates.filter((certificate) =>
            certificate.name.toLowerCase().includes(searchQu)
        );
        return results.length > 0 ? results : [];
    }, [searchQu]);

    const totalResults = filteredSkills.length + filteredProjects.length + filteredCertificates.length;

    const onlySkills = filteredSkills.length > 0 && filteredProjects.length === 0 && filteredCertificates.length === 0;
    const onlyProjects = filteredProjects.length > 0 && filteredSkills.length === 0 && filteredCertificates.length === 0;
    const onlyCertificates = filteredCertificates.length > 0 && filteredSkills.length === 0 && filteredProjects.length === 0;

    return (
        <div className={`mainContainer searchResult ${sidebar ? "mainContainerSmall" : ""}`}>
            <div className="titleSearch">
                {onlySkills
                    ? `Skills Results (${filteredSkills.length})`
                    : onlyProjects
                        ? `Project Results (${filteredProjects.length})`
                        : onlyCertificates
                            ? `Certificate Results (${filteredCertificates.length})`
                            : `All Results (${totalResults})`}
            </div>
            <div className={`showSearchResult ${filteredSkills.length === 1 && totalResults === 1 ? "colum1" : ""}`}>
                {filteredSkills.length > 0 && <div className="forSkill">
                    {filteredSkills.map((data, index) => (
                        <Skill data={data} key={index} />
                    ))}
                </div>}
                {filteredProjects.length > 0 && (
                    <>
                        {filteredProjects.map((data, index) => (
                            <ProjectCom key={index} data={data} classProject="width100" />
                        ))}
                    </>
                )}
                {filteredCertificates.length > 0 && (
                    <>
                        {filteredCertificates.map((data, index) => (
                            <CertificateCom key={index} data={data} />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchResult;
