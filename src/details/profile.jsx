import {  FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import MyImage from '../assets/images/TARAPADA.png'
import CV from '../assets/CV/Tarapada Garai (CV).pdf'
import { BiLogoGmail } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaSquareThreads, FaXTwitter } from "react-icons/fa6";

export const profile = {
    home: {
        image: MyImage,
        name: "Tarapada Garai",
        job: "Full Stack Developer"
    },
    contacts: [
        {
            href: "mailto:tarapadagarai898@gmail.com",
            icon: <BiLogoGmail />,
            name: "tarapadagarai898@gmail.com"
        },
        {
            href: "tel:6294522656",
            icon: <MdLocalPhone />,
            name: "6294522656"
        },
        {
            href: CV,
            icon: <IoMdDownload />,
            name: "Download CV",
            download: "Tarapada(CV)"
        },
    ],
    links: [
        {
            link: "https://github.com/codingWithRakesh",
            icon: <FaGithub />,
            title: "Github"
        },
        {
            link: "https://www.linkedin.com/in/tarapada-garai-1a9a5a257/",
            icon: <FaLinkedin />,
            title: "Linkedin"
        },
        {
            link: "https://www.instagram.com/tarapada_9679/",
            icon: <FaInstagram />,
            title: "Instagram"
        },
        {
            link: "https://www.facebook.com/tarapada.garai.35",
            icon: <FaFacebook />,
            title: "Facebook"
        },
        {
            link: "https://www.threads.net/@tarapada_9679",
            icon: <FaSquareThreads />,
            title: "Threads"
        },
        {
            link: "https://x.com/RakeshGarai100",
            icon: <FaXTwitter />,
            title: "X"
        }
    ]
}