import { useContext, useEffect, useRef, useState } from 'react'
import '../App.css'
import { UserContext } from '../contexts/context'
import CertificateCom from '../component/CertificateCom'
import { useTopLoader } from '../contexts/topLoderContext'
import { details } from '../details/details.jsx'
import { useShowDetails } from '../contexts/showDetailsContext.jsx'

const Certificates = () => {
  const [[sidebar]] = useContext(UserContext)
  const [[, setProgress]] = useTopLoader()
  const [[, setTypeData]] = useShowDetails();
  const [visibleCertificates, setVisiblevisibleCertificates] = useState(10);
  const [activeTag, setActiveTag] = useState('Best');
  const skipNextLoadRef = useRef(false);

  useEffect(() => {
    setTypeData("")
  }, [setTypeData])
  
  useEffect(() => {
    setProgress(20)
    setTimeout(() => {
      setProgress(100)
    }, 10)
  }, [])

  useEffect(() => {
    setVisiblevisibleCertificates(10);
    const animationFrameId = window.requestAnimationFrame(() => {
      skipNextLoadRef.current = false;
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [activeTag]);

  const currentCertificates = activeTag === 'Best'
    ? details.certificates.filter((certificate) => certificate.type === 'best')
    : details.certificates;

  useEffect(() => {
    const handleScroll = () => {
      if (skipNextLoadRef.current) {
        return;
      }

      if (
        window.innerHeight + document.documentElement.scrollTop +200 >=
        document.documentElement.scrollHeight
      ) {
        setVisiblevisibleCertificates((prev) => Math.min(prev + 10, currentCertificates.length));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentCertificates.length]);

  const handleTagClick = (tag) => {
    skipNextLoadRef.current = true;
    setVisiblevisibleCertificates(10);
    setActiveTag(tag)
  }

  const visibleCertificatesShow = currentCertificates.slice(0, visibleCertificates);

  return (
    <div className={`mainContainer certificateShow ${sidebar ? "mainContainerSmall" : ""}`}>
      <div className="certificateTagComponent">
        <h1 className='titleSkill certiti'>Certificates</h1>
        <div className="certificateTags">
          <div className={`certificatetag boxShadows ${activeTag === 'Best' ? 'activeTags' : ''}`} onClick={() => handleTagClick('Best')}>
            Best Certificates
          </div>
          <div className={`certificatetag boxShadows ${activeTag === 'All' ? 'activeTags' : ''}`} onClick={() => handleTagClick('All')}>
            All Certificates
          </div>
        </div>
      </div>
      <div className="certificate">
        {visibleCertificatesShow.map((data, index) => (
          <CertificateCom key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Certificates
