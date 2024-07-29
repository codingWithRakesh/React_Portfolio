import { Outlet } from 'react-router-dom'
import './App.css'
import './media.css'
import BlurBackground from './component/BlurBackground'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Modal from './component/Modal'
import { useModal } from './contexts/modalProvider'
import { Suspense, useState } from 'react'
import BackToTop from './component/BackToTop'
import Bottombar from './component/Bottombar'
import Menu from './component/Menu'

function App() {
  const [[closeModal]] = useModal()
  const [menuCheck, setMenuCheck] = useState(false)

  return (
    <>
      <Navbar />
      <Sidebar />
      {menuCheck && <Bottombar menuCheck={menuCheck} setMenuCheck={setMenuCheck}/>}
      {closeModal && <BlurBackground >
        <Modal />
      </BlurBackground>}
      <Suspense>
        <Outlet />
      </Suspense>
      <BackToTop />
      <Menu menuCheck={menuCheck} setMenuCheck={setMenuCheck}/>
     </>
  )
}

export default App
