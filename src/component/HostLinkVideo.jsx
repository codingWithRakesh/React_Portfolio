
import { FaGithub } from 'react-icons/fa'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { TbView360 } from 'react-icons/tb'

const HostLinkVideo = ({ nameProject }) => {
    return (
        <div className="buttons-shows">
            <button disabled className='button-60 back linkS' style={{cursor : "not-allowed"}} >
                <span>
                    <FaGithub />
                </span>
                GitHub
                <span>
                    <LiaExternalLinkAltSolid />
                </span>
            </button>
            <a className='button-60 back linkS' target='_blank' href={nameProject.link}>
                <span>
                    <TbView360 />
                </span>
                Visit Project
                <span>
                    <LiaExternalLinkAltSolid />
                </span>
            </a>
        </div>
    )
}

export default HostLinkVideo