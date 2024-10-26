import '../App.css'
import { useModal } from '../contexts/modalProvider'
import { useCroseFont } from '../contexts/croseFontContext'

const BlurBackground = ({ children }) => {
  const [[closeModal, setCloseModal]] = useModal()
  const [[, setCroseF]] = useCroseFont()

  return (
    <div className='blur' onClick={() => {
      setCloseModal(!closeModal)
      setCroseF(false)
    }}>
      {children}
    </div>
  )
}

export default BlurBackground
