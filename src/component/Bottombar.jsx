import React, { useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaAward, FaCogs, FaFileCode, FaUserCircle } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdContacts } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { useModal } from '../contexts/modalProvider'
import { GoX } from 'react-icons/go'

const Bottombar = ({menuCheck, setMenuCheck}) => {
    const [[closeModal, setCloseModal]] = useModal()
    const sidebarFun = () => {
        setCloseModal(!closeModal)
    }

    useEffect(() => {
      window.addEventListener('click',() => {
        setMenuCheck(!menuCheck)
      })
    
      return () => {
        window.removeEventListener('click',() => {
            setMenuCheck(!menuCheck)
          })
      }
    }, [setMenuCheck])
    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setMenuCheck(!menuCheck)
    };

    return (
        <div className='bottomBar' onClick={(event) => event.stopPropagation()}>
            {
                [
                    {
                        href: '/',
                        src: <AiFillHome />,
                        name: "Home"
                    },
                    {
                        href: '/about',
                        src: <FaUserCircle />,
                        name: "About"
                    },
                    {
                        href: '/skills',
                        src: <FaCogs />,
                        name: "Skills"
                    },
                    {
                        href: '/projects',
                        src: <FaFileCode />,
                        name: "Projects"
                    },
                    {
                        href: '/certificates',
                        src: <FaAward />,
                        name: "Certificates"
                    },
                    {
                        href: '/contact',
                        src: <MdContacts />,
                        name: "Contact"
                    }
                ].map((value, index) => (<NavLink to={value.href}  onClick={scrollToTop} key={index} title={value.name} className={`bottomBox`}>
                    <span className='bottomF'>
                        {value.src}
                    </span>
                    {<span>{value.name}</span>}
                </NavLink>))
            }
            <div className="bottomBox" onClick={sidebarFun}>
                <span className='bottomF'>
                    <IoSettingsSharp />
                </span>
                <span>Setting</span>
            </div>
            <div className="croseBottom" onClick={() =>setMenuCheck(!menuCheck)}>
                <GoX />
            </div>
        </div>
    )
}

export default Bottombar