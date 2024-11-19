import { useContext, useEffect, useState } from 'react'
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
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop +200 >=
        document.documentElement.scrollHeight
      ) {
        setVisiblevisibleCertificates((prev) => Math.min(prev + 5, details.certificates.length));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`mainContainer certificateShow ${sidebar ? "mainContainerSmall" : ""}`}>
      <h1 className="titleSkill certiti">
        Certificates
      </h1>
      <div className="certificate">
        {details.certificates.slice(0, visibleCertificates).map((data, index) => (
          <CertificateCom key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Certificates
