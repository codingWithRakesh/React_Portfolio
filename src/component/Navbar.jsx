import { useCallback, useContext, useEffect, useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import '../App.css'
import MyImage from "../assets/images/TARAPADA.jpeg"
import Profile from './Profile';
import { UserContext } from '../contexts/context';
import SearchBar from './SearchBar';
import { useBorder } from '../contexts/borderContext';
import TopLoadingBar from './TopLoadingBar';
import { useTopLoader } from '../contexts/topLoderContext';
import { FaCode } from 'react-icons/fa';
import SearchIcon from './SearchIcon';

const Navbar = () => {
  const [[progress, setProgress]] = useTopLoader()

  const [showProfile, setShowProfile] = useState(false)
  const changeProfile = (event) => {
    event.stopPropagation();
    setShowProfile(!showProfile)
  }

  useEffect(() => {
    const preventScroll = (event) => {
      event.preventDefault();
      event.stopPropagation();
      return false;
    };
  
    if (showProfile) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });
    } else {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('scroll', preventScroll);
    }
    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('scroll', preventScroll);
    };
  }, [showProfile]);
  
  


  window.addEventListener("click", () => {
    setShowProfile(false)
  })

  const [[sidebar, setsidebar]] = useContext(UserContext)
  const liteNav = useCallback(() => {
    setsidebar(screen.width > 1050 ? (!sidebar) : true)
  })
  const [[navBorder, setNavBorder]] = useBorder()


  window.addEventListener('scroll', changeBorderNav)
  function changeBorderNav() {
    if (window.scrollY >= 20) {
      setNavBorder(true)
    } else {
      setNavBorder(false)
    }
  }

  const [setshowInput, setSetshowInput] = useState(false)

  return (
    <>
      <TopLoadingBar progress={progress} setProgress={setProgress} />
      <nav className={navBorder ? 'nav navShadow' : 'nav'}>
        {screen.width >= 500 && <div className='navigaror' onClick={liteNav}>
          {screen.width < 1050 ? <FaCode /> : <IoMenuOutline />}
        </div>}
        {(screen.width >= 500 ? true : setshowInput) ? <SearchBar setshowInput={setshowInput} setSetshowInput={setSetshowInput} /> : <SearchIcon setshowInput={setshowInput} setSetshowInput={setSetshowInput} />}
        {!setshowInput && <div className='uesrNav' onClick={changeProfile}>
          <img src={MyImage} alt="tarapada garai" />
        </div>}
        {showProfile && <Profile setShowProfile={setShowProfile} />}
      </nav>
    </>
  )
}

export default Navbar
