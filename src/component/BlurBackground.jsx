import '../App.css'
import { useModal } from '../contexts/modalProvider'
import { useCroseFont } from '../contexts/croseFontContext'
import { useImageShow } from '../contexts/imageContext'

const BlurBackground = ({ children }) => {
  const [[closeModal, setCloseModal]] = useModal()
  const [[, setCroseF]] = useCroseFont()
  const [imageShow, setImageShow] = useImageShow();

  return (
    <div className='blur' onClick={() => {
      setCloseModal(false)
      setCroseF(false)
      setImageShow({ ...imageShow, isOn: false })
    }}>
      {children}
    </div>
  )
}

export default BlurBackground
