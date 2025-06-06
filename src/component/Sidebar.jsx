import { useContext } from 'react'
import MyImage from '../assets/images/TARAPADA.jpeg'
import { IoSettingsSharp } from "react-icons/io5";
import '../App.css'
import { UserContext } from '../contexts/context'
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useModal } from '../contexts/modalProvider';
import { useBorder } from '../contexts/borderContext';
import { useShowDetails } from '../contexts/showDetailsContext';
import { useSearch } from '../contexts/searchContext';
import { useImageShow } from '../contexts/imageContext';

const Sidebar = () => {
    const [[sidebar]] = useContext(UserContext)
    const [[closeModal, setCloseModal]] = useModal()
    const [[navBorder]] = useBorder()
    const [[typeData, setTypeData]] = useShowDetails()
    const [[, setsearchQu]] = useSearch();
    const [imageShow, setImageShow] = useImageShow();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTypeData("")
        setsearchQu("")
    };

    const sidebarFun = () => {
        setCloseModal(!closeModal)
    }

    return (
        <div className={`sideNav ${navBorder ? "sideNavBorderRight" : ""} ${sidebar ? "sideNavSmall" : ""}`}>
            <div className={`sideTopjdd ${sidebar ? "sideTopjddSmall" : ""}`}>
                <div className={`sideProfile ${sidebar ? "sideProfileSmall" : ""}`}>
                    <div className={`profileImage ${sidebar ? "profileImageSmall" : ""}`}>
                        <img onClick={() => setImageShow({ ...imageShow, isOn: true, image: MyImage })} src={MyImage} alt="tarapada garai" />
                    </div>
                    {!sidebar && <p className='nameSide'>Tarapada Garai</p>}
                    {!sidebar && <p className='nameJob'>Full Stack Developer</p>}
                </div>
                <div className={`sidebuttons ${sidebar ? "sidebuttonsSmall" : ""}`}>
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
                                name: "Contact Me"
                            }
                        ].map((value, index) => (<NavLink onClick={scrollToTop} to={value.href} key={index} title={value.name} className={`navigator settingnavigator ${sidebar ? "navigatorSmall" : ""} ${typeData === value.name ? "currentPageSidebar" : ""}`}>
                            <span className='settingClass '>
                                {value.src}
                            </span>
                            {!sidebar && <span>{value.name}</span>}
                        </NavLink>))
                    }
                </div>
            </div>
            <div className={`setting ${sidebar ? "settingSmall" : ""}`}>
                <div className={`navigator settingnavigator ${sidebar ? "settingnavigatorSmall" : ""}`} onClick={sidebarFun}>
                    <span className='settingClass'>
                        <IoSettingsSharp />
                    </span>
                    {!sidebar && <span>Settings</span>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
