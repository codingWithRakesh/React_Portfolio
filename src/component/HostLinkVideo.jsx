
import { FaGithub } from 'react-icons/fa'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'
import { TbView360 } from 'react-icons/tb'

const HostLinkVideo = ({ nameProject }) => {
    return (
        <div className="buttons-shows">
            <a className='button-60 back linkS' target='_blank' href={nameProject.gitHub}>
                <span>
                    <FaGithub />
                </span>
                GitHub
                <span>
                    <LiaExternalLinkAltSolid />
                </span>
            </a>
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